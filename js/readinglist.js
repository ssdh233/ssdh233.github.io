const SOURCE = "https://cdn.jsdelivr.net/gh/matsumatsu233/MyNote/notes/english-reading.md";

fetch(SOURCE)
  .then(res => res.text())
  .then(text => {
    const html = new showdown.Converter({
      disableForced4SpacesIndentedSublists: true
    }).makeHtml(text);
    const nodeList = htmlToElements(html);
    const result = getReadingList(nodeList);
    document.getElementById("readinglist").innerHTML = renderHTML(result);
  });

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
function htmlToElements(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

function extractTags(tagText) {
  const tags = tagText.match(/\[.*?\]/g);
  return tags && tags.map(text => text.slice(1, -1));
}

function getReadingList(nodeList) {
  let result = {};
  let date;
  nodeList.forEach(node => {
    if (node.nodeName === "H4") {
      date = node.textContent;
    } else if (node.nodeName === "UL") {
      const tempList = Array.from(node.childNodes)
        .filter(node => node.nodeName === "LI" && node.childNodes[1])
        .map(node => {
          const tags = extractTags(node.firstChild.textContent);

          if (node.lastChild.nodeName === "UL") {
            let parentNode = node;

            return Array.from(node.lastChild.childNodes)
              .filter(node => node.nodeName === "LI")
              .map(node => {
                return {
                  tags,
                  value: {
                    link: node.lastChild.getAttribute("href"),
                    title: parentNode.childNodes[1].innerText + " -- " + node.lastChild.innerText,
                    date
                  }
                };
              });
            // return [];
          }

          return [
            {
              tags,
              value: {
                link: node.childNodes[1].getAttribute("href"),
                title: node.childNodes[1].innerText,
                date
              }
            }
          ];
        })
        .reduce((acc, cur) => acc.concat(cur), []);

      tempList.forEach(item => {
        item.tags &&
          item.tags.forEach(tag => {
            if (!result[tag]) result[tag] = [];
            result[tag].push({ ...item.value });
          });
      });
    }
  });

  return result;
}

function renderHTML(result) {
  let html = "";
  html += `
    <ul class="tag-lists">
      ${Object.keys(result).map(prop => `
        <li class="tag-index">
          <a href="#${prop}">
            <span>${prop}</span>
            <span class="count">${result[prop].length}</span>
          </a>
        </li>
      `).join("")}
    </ul>
  `;
  for (let prop in result) {
    html += `
      <article>
        <div class="tag-title" id="${prop}">${prop}</div>
        <ul>
          ${result[prop].map(item => `
            <li class="tag-post">
              <a href="${item.link}">
                <span class="tag-post-title">${item.title}</span>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `;
  }
  return html;
}