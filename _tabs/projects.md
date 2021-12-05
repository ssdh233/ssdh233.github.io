---
layout: page
title: Projects
icon: fas fa-project-diagram
order: 2
---
  
<div class="project">
  {% for project in site.projects %}
    <div class="project-list-item">
      <h2 class="project-title">
        {{ project.title }}
        <span><a href="{{ project.url }}"><i class="fa fa-link"></i></a></span>
        <span><a href="{{ project.github }}"><i class="fab fa-github"></i></a></span>
      </h2>
      <p class="project-desc">{{ project.description }}</p>
    </div>
  {% endfor %}
</div>