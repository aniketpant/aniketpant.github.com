---
layout: page
title: The preserved archives
slug: archive
---

<div class="margin--bottom">
  <h3>Essays</h3>
  <ul class="list list--small">
  {% for post in site.posts %}
  {% if post.category == 'essay' %}
    <li>
      <a class="list__link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>

<div class="margin--bottom">
  <h3>Notes</h3>
  <ul class="list list--small">
  {% for post in site.posts %}
  {% if post.category == 'note' %}
    <li>
      <a class="list__link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>

<div class="margin--bottom">
  <h3>Poetry</h3>
  <ul class="list list--small">
  {% for post in site.posts %}
  {% if post.category == 'poetry' %}
    <li>
      <a class="list__link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>

<div class="margin--bottom">
  <h3>Weblog</h3>
  <ul class="list list--small">
  {% for post in site.posts %}
  {% if post.category == 'weblog' %}
    <li>
      <a class="list__link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
  {% endfor %}
  </ul>
</div>
