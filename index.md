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
<img src="http://www.gravatar.com/avatar/b6500b41998cd1ed4aa28464ec0118bb?s=150" class="media__img img  img--left  img--round"  alt="That's Aniket" />
<p class="lead">My name is <strong>Aniket Pant</strong> and  I love to <em>read</em>, <em>write</em> and <em>code</em>.</p>
</div>

<ul class="list--posts">
  {% for post in site.posts limit:5 %}
  <li>
    <p class="muted  flush--bottom  date"><date>{{ post.date | date_to_long_string }}</date></p>
    <h3 class="title  push--half-bottom"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    {{ post.excerpt }}
  </li>
  {% endfor %}
  {% for post in site.posts limit:5 offset:5 %}
  <li>
    <p class="muted  flush--bottom  date"><date>{{ post.date | date_to_long_string }}</date></p>
    <h3 class="title flush--bottom"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  </li>
  {% endfor %}
</ul>