---
layout: page
title: Projects
permalink: /project/
---
  
<div class="project">
  {% for project in site.projects %}
    <div class="project-list-item">
      <div class="project-title">
        {{ project.title }}
        <span><a href="{{ project.url }}"><i class="fa fa-link"></i></a></span>
        <span><a href="{{ project.github }}"><i class="fa fa-github"></i></a></span>
      </div>
      <div class="project-desc">{{ project.description }}</div>
    </div>
  {% endfor %}
</div>