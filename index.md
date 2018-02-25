---
layout: page
title: Aniket Pant
slug: home
---

<p class="lede">My name is <a href="/about" rel="nofollow">Aniket Pant</a> and  I love to <em>read</em>, <em>write</em> and <em>code</em>.</p>

<ul class="list">
  {% for post in site.posts limit:5 %}
  <li class="list-item">
    <span class="list-item__date  muted"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a class="list-item__link" href="{{ post.url }}">
      <h3 class="list-item__title">{{ post.title }}</h3>
      <div class="list-item__content">{{ post.excerpt | strip_html }}</div>
    </a>
  </li>
  {% endfor %}
  {% for post in site.posts limit:5 offset:5 %}
  <li class="list-item">
    <span class="list-item__date  muted"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a class="list-item__link" href="{{ post.url }}">
      <h3 class="list-item__title">{{ post.title }}</h3>
    </a>
  </li>
  {% endfor %}
</ul>
