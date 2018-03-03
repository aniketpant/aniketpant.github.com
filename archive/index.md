---
layout: page
title: The preserved archives
slug: archive
---

<div class="margin--bottom">
  <ul class="archive-list">
  {% for post in site.posts %}
  {% if post.category == 'note' %}
    <li class="archive-list-item">
      <a class="archive-list-item__link" href="{{ post.url }}">
        <div class="o-layout o-layout--center">
          <div class="o-layout__item u-1/2@desktop u-1@mobile">
            <div class="archive-list-item__title">
              {{ post.title }}
            </div>
          </div>
          <div class="o-layout__item u-1/2@desktop u-1@mobile">
            <div class="archive-list-item__date">
              {{ post.date | date_to_long_string }}
            </div>
          </div>
        </div>
      </a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>
