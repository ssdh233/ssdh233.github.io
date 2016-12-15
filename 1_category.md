---
layout: page
title: Category
permalink: /category/
---
  
<div class="category">
  {% for category in site.categorys %}
    <div class="category-list-item">
      <a class="category-link" href="/{{ category.suburl }}">
        <div class="category-title">{{ category.title }}</div>
        <div class="category-desc">{{ category.description }}</div>
      </a>
    </div>
  {% endfor %}
</div>