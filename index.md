---
layout: page
title: Aniket Pant
slug: home
---

<p class="lead font-serif">
  Hello!<br>
  I'm <a class="text-brand no-underline" href="/about" rel="nofollow">Aniket</a> and I love to <em>read</em>, <em>write</em> and <em>code</em>.
</p>

<ul class="list-none px-0 prose-li:px-0 prose-li:my-8 prose-a:no-underline prose-h3:mt-0 prose-h3:text-2xl">
  {% for post in site.posts limit:5 %}
  <li>
    <span class="date prose-sm"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
      <p class="font-light text-zinc-300">{{ post.excerpt | strip_html }}</p>
    </a>
  </li>
  {% endfor %}
  {% for post in site.posts limit:5 offset:5 %}
  <li>
    <span class="date prose-sm"><date>{{ post.date | date_to_xmlschema }}</date></span>
    <a href="{{ post.url }}">
      <h3>{{ post.title }}</h3>
    </a>
  </li>
  {% endfor %}
</ul>
