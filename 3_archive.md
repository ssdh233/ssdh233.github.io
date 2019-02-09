---
layout: page
title: Archive
permalink: /archive/
---

<ul class="archive">
  {% for post in site.posts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li>
      {% if post.link %}
      <a href="{{ post.link }}">
      {% else %}
      <a href="{{ site.baseurl }}{{ post.url }}">
      {% endif %}
        {{ post.title }}
      </a>
      <time>{{ post.date | date: "%Y-%m-%d" }}</time>
    </li>
  {% endfor %}
</ul>