---
layout: page
title: Aniket Pant
slug: home
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-05-18T10:04:30+05:30
---

<div class="media">
<p class="lead">My name is <a href="/about" rel="nofollow">Aniket Pant</a> and  I love to <em>read</em>, <em>write</em> and <em>code</em>.</p>
</div>

<ul class="list">
  {% for post in site.posts limit:5 %}
  <li>
    <p class="list__date  muted"><date>{{ post.date | date_to_long_string }}</date></p>
    <h3 class="list__title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <div class="list__content">{{ post.excerpt }}</div>
  </li>
  {% endfor %}
  {% for post in site.posts limit:5 offset:5 %}
  <li>
    <p class="list__date muted"><date>{{ post.date | date_to_long_string }}</date></p>
    <h3 class="list__title flush--bottom"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  </li>
  {% endfor %}
</ul>
