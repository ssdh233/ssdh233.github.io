---
layout: post
title:  "Front-end Job Interview Questions"
date:   2017-07-13
category: blog
tags: [Programming]
description: ""
---
# Front-end Job Interview Questions

This file contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

**Note:** Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would.

## Table of Contents

  1. [General Questions](#general-questions)
  1. [HTML Questions](#html-questions)
  1. [CSS Questions](#css-questions)
  1. [JS Questions](#js-questions)
  1. [Testing Questions](#testing-questions)
  1. [Performance Questions](#performance-questions)
  1. [Network Questions](#network-questions)
  1. [Coding Questions](#coding-questions)
  1. [Fun Questions](#fun-questions)

## Getting Involved

  1. [Contributors](#contributors)
  1. [How to Contribute](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
  1. [License](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### General Questions:

* What did you learn yesterday/this week?
  * <font color="red">Read many document about fundamental javascript. Such as closure, prototype, hoisting... It's my first time to try to learn javascript comprehensively.</font>
* What excites or interests you about coding?
  * <font color="red">Progressive web application. But I'm not sure about its current status. For example, I don't know if service worker is avaiable on Chrome iOS or not. I try to transfer one of my own app to pwa but haven't achieved yet.</font>
* What is a recent technical challenge you experienced and how did you solve it?
  * <font color="red">Challenge? I'm not sure if it can be considered as a challenge. I don't know how to center element in html yesterday, so I just did a Google search and found many solutions. To figure out which situation is better, I read some articles and tried on my browser.</font>
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
  * ...
    * <font color="red">UI: The simpler, the better.</font>
    * <font color="red">Security: No idea. I just know something like that SHA-1 is deprecated so we shouldn't use it.</font>
    * <font color="red">Performance: No idea.</font>
    * <font color="red">SEO: No idea.</font>
    * <font color="red">Maintainability: Keep refactoring.</font>
    * <font color="red">Technology: No idea.</font>
* Talk about your preferred development environment.
  * <font color="red">Sublime + Chrome</font>
* Which version control systems are you familiar with?
  * <font color="red">Git</font>
* Can you describe your workflow when you create a web page?
  * <font color="red">Write specifications briefly -> write source code(without unit tests) -> test locally -> deploy</font>
* If you have 5 different stylesheets, how would you best integrate them into the site?
  * <font color="red">No idea. But using 5 <link> tags seems terrible. Maybe I can use one "include.css" to include all CSSs. I think there is a better solution but it depends on the reason why we have 5 different stylesheets.</font>
* Can you describe the difference between progressive enhancement and graceful degradation?
  * <font color="red">Never heard of these two terms.</font>
* How would you optimize a website's assets/resources?
  * <font color="red">No idea exception for putting them on proper folders.</font>
* How many resources will a browser download from a given domain at a time? What are the exceptions?
  * <font color="red">Cannot understand this question.</font>
* Name 3 ways to decrease page load (perceived or actual load time).
  * <font color="red">reduce file size(compress large files);merge images/icons into a big file; Let me have a look at Google's PageSpeed Insights...Ah, cache files </font>
* If you jumped on a project and they used tabs and you used spaces, what would you do?
  * <font color="red">Change sublime settings if they don't change to use spaces.</font>
* Describe how you would create a simple slideshow page.
  * <font color="red">Collect materials -> </font>
* If you could master one technology this year, what would it be?
  * <font color="red">fundamental javascript</font>
* Explain the importance of standards and standards bodies.
  * <font color="red">If there is no standard Chinese, north people can hardly communicate with south people even they are both speaking Chinese.</font>
* What is Flash of Unstyled Content? How do you avoid FOUC?
  * <font color="red">No idea. I have never used flash.</font>
* Explain what ARIA and screenreaders are, and how to make a website accessible.
  * <font color="red">No idea.</font>
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
  * <font color="red">No idea.</font>
* What does CORS stand for and what issue does it address?
  * <font color="red">Cross-site scripting? Maybe. Most browsers prevent a website from doing AJAX requests to other sites. CROS can make it possible.</font>

#### HTML Questions:

* What does a `doctype` do?
  * <font color="red">Tell browser which html we are using and which mode should it use. I have never changed it.</font>
* What's the difference between full standards mode, almost standards mode and quirks mode?
  * <font color="red">No idea.</font>
* What's the difference between HTML and XHTML?
  * <font color="red">I heard that XHTML is something that uses XML to rewrite? or reform? the original HTML. I have never used it.</font>
* Are there any problems with serving pages as `application/xhtml+xml`?
  * <font color="red">No idea.</font>
* How do you serve a page with content in multiple languages?
  * <font color="red">Using some i18n frameworks. I thinks they usually set languaga setting as a variable, and save all text into one Object. Some uses AJAX to fetch texts, but in this way the page will show nothing before the Ajax request finishes.</font>
* What kind of things must you be wary of when design or developing for multilingual sites?
  * <font color="red">Make sure the extranal links serve contents in same language. If not, add some warnings. Set proper fonts for different language. Get the user's perferred language from somewhere (User-agent? Browser setting? Not sure.) and initially set the language.</font>
* What are `data-` attributes good for?
  * <font color="red">No idea.</font>
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
  * <font color="red">building blocks...(google search)...No idea.</font>
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
  * <font color="red">I just know cookie's capacity is smaller than localStorage.</font>
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
  * <font color="red">No idea.</font>
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
  * <font color="red">No idea.</font>
* What is progressive rendering?
  * <font color="red">No idea.</font>
* Have you used different HTML templating languages before?
  * <font color="red">jade(pug?), haml</font>

#### CSS Questions:

* What is the difference between classes and IDs in CSS?
  * <font color="red">ID should be identical. I don't know what will happen if two elements own same ID.(check later)</font>
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  * <font color="red">Never heard of them.</font>
* Describe Floats and how they work.
  * <font color="red">No idea.</font>
* Describe z-index and how stacking context is formed.
  * <font color="red">The elements with a higher z-index will be displayed in front of elements with a lower z-index. How?...not sure</font>
* Describe BFC(Block Formatting Context) and how it works.
  * <font color="red">Never heard of it.</font>
* What are the various clearing techniques and which is appropriate for what context?
  * <font color="red">Clearing techniques?</font>
* Explain CSS sprites, and how you would implement them on a page or site.
  * <font color="red">CSS sprites?</font>
* What are your favourite image replacement techniques and which do you use when?
  * <font color="red">image replacement techniques?</font>
* How would you approach fixing browser-specific styling issues?
  * <font color="red">Force the user to use Chrome.</font>
* How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
  * <font color="red">feature-constrained browsers?</font>
* What are the different ways to visually hide content (and make it available only for screen readers)?
  * <font color="red">```display: none```. Not clear about other solutions.</font>
* Have you ever used a grid system, and if so, what do you prefer?
  * <font color="red">Never.</font>
* Have you used or implemented media queries or mobile specific layouts/CSS?
  * <font color="red">No.</font>
* Are you familiar with styling SVG?
  * <font color="red">No.</font>
* How do you optimize your webpages for print?
  * <font color="red">Never.</font>
* What are some of the "gotchas" for writing efficient CSS?
  * <font color="red">CSS...efficient...This is the first time I heard these two words combined.</font>
* What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.
  * <font color="red">Like sass? I think the advantage is that we can write more structured? CSS. The CSS code's readability and maintainability can be improved. No idea about the disadvantage. I have never used.</font>
* How would you implement a web design comp that uses non-standard fonts?
  * <font color="red">Comp? Anyway, no idea.</font>
* Explain how a browser determines what elements match a CSS selector.
  * <font color="red">I'm not sure how does it work now. But it seems not so hard to implement a CSS selector.</font>
* Describe pseudo-elements and discuss what they are used for.
  * <font color="red">Never heard.</font>
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
  * <font color="red">No idea.</font>
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
  * <font color="red">No idea.</font>
* List as many values for the display property that you can remember.
  * <font color="red">block, inline, inline-block, inherit, none... there should be more</font>
* What's the difference between inline and inline-block?
  * <font color="red">No idea. I have read some articles related to it before but forgot.</font>
* What's the difference between a relative, fixed, absolute and statically positioned element?
  * <font color="red">...</font>
    * <font color="red">relative: default position + offset(top/bottom/left/right)</font>
    * <font color="red">fixed: this element will be removed from stack(?) and its position will be determined by the current window(viewpoint?) and offset </font>
    * <font color="red">absolute: this element will be removed from stack(?) and its position will be determined by nearest? parent element and offset.</font>
    * <font color="red">statically: Never heard.</font>
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?
  * <font color="red">Inline > CSS in style tab > imported CSS? We can define a global font on imported CSS and change it in some speical part by changing inline CSS.</font>
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
  * <font color="red">Never.</font>
* Have you played around with the new CSS Flexbox or Grid specs?
  * <font color="red">Never.</font>
* How is responsive design different from adaptive design?
  * <font color="red">No idea.</font>
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
  * <font color="red">Never.</font>
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
  * <font color="red">No idea.</font>

#### JS Questions:

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* Explain `Function.prototype.bind`.
* When would you use `document.write()`?
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document DOMContentLoaded event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

#### Testing Questions:

* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?

#### Performance Questions:

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.

#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

#### Fun Questions:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Who inspires you in the front-end community?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?