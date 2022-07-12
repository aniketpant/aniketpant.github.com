---
layout: page
title: Aniket Pant
slug: home
---

<p class="prose-lead font-light">My name is <a href="/about" rel="nofollow">Aniket Pant</a> and  I love to <em>read</em>, <em>write</em> and <em>code</em>.</p>

<ul class="prose-ul list-none px-0">
  {% for post in site.posts limit:5 %}
  <li class="prose-li px-0">
    <span class="date prose-stone prose-sm"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a class="prose-a no-underline" href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p class="prose-slate">{{ post.excerpt | strip_html }}</p>
    </a>
  </li>
  {% endfor %}
  {% for post in site.posts limit:5 offset:5 %}
  <li class="prose-li px-0">
    <span class="date prose-stone prose-sm"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a class="prose-a no-underline" href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
    </a>
  </li>
  {% endfor %}
</ul>
