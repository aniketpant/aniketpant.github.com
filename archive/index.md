---
layout: page
title: The preserved archives
slug: archive
---

<div class="margin--bottom">
  <ul class="list list--small">
  {% for post in site.posts %}
  {% if post.category != 'talk' %}
    <li>
      <a class="list__link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>
