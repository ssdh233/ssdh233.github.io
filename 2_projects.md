---
layout: page
title: Projects
permalink: /project/
---
  
<div class="project">
  {% for project in site.projects %}
    <div class="project-list-item">
      <a class="project-link" href="/{{ project.suburl }}" target="_blank">
        <div class="project-title">{{ project.title }}</div>
        <div class="project-desc">{{ project.description }}</div>
      </a>
    </div>
  {% endfor %}
</div>