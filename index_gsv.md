---
layout: default
permalink: /gsv/
---
<div class="home">
  <div class="category-header">
    <div class="gsv-title">
      <a href="/gsv">
        Gitadora Skill Viewer
      </a>
    </div>
    <div>
      <a href="http://gitadora-skill-viewer.herokuapp.com">http://gitadora-skill-viewer.herokuapp.com</a>
    </div>
  </div>
  
  <div class="post-list-fixed">
    {% for post in site.posts %}
      {% if post.category == "gsv" and post.fixed == "true" %}
        <div class="post-list-item">
          <a href="{{ post.url | prepend: site.baseurl }}">
            <div>
              <div class="post-link-title" >
                <i class="fa fa-thumb-tack fixed-icon" aria-hidden="true" style="font-size:70%"></i>
                {{ post.title }}
              </div>
            </div>

            {% if post.description %}
              <div class="list-post-desc">
                {{ post.description }}
              </div>
            {% endif %}

            <div class="post-meta">
              <span class="post-meta-date">{{ post.date | date: "%Y.%m.%d" }}</span>
              <a class="post-meta-comment" href="{{ post.url | prepend: site.baseurl }}#disqus_thread"></a>
              <span>
                {% for tag in post.tags %}
                  <a href="/tags#{{ tag }}" class="tags">{{ tag }}</a>
                {% endfor %}
              </span>
            </div>

          </a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  <div class="post-list">
    {% for post in site.posts %}
      {% if post.category == "gsv" and post.fixed != "true" %}
        <div class="post-list-item">
          <a href="{{ post.url | prepend: site.baseurl }}">
            <div>
              <div class="post-link-title" >
                {{ post.title }}
              </div>
            </div>

            {% if post.description %}
              <div class="list-post-desc">
                {{ post.description }}
              </div>
            {% endif %}

            <div class="post-meta">
              <span class="post-meta-date">{{ post.date | date: "%Y.%m.%d" }}</span>
              <a class="post-meta-comment" href="{{ post.url | prepend: site.baseurl }}#disqus_thread"></a>
              <span>
                {% for tag in post.tags %}
                  <a href="/tags#{{ tag }}" class="tags">{{ tag }}</a>
                {% endfor %}
              </span>
            </div>

          </a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<script id="dsq-count-scr" src="//matsumatsu.disqus.com/count.js" async></script>