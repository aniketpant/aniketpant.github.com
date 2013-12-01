---
layout: page
title: The preserved archives
slug: archive
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-11-30T08:55:30+05:30
---

<h3>Essays</h3>
<ul class="block-list">
{% for post in site.posts %}
{% if post.category == 'essay' %}
<li>
  <a class="block-list__link" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h3>Notes</h3>
<ul class="block-list">
{% for post in site.posts %}
{% if post.category == 'note' %}
<li>
  <a class="block-list__link" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h3>Poetry</h3>
<ul class="block-list">
{% for post in site.posts %}
{% if post.category == 'poetry' %}
<li>
  <a class="block-list__link" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h3>Weblog</h3>
<ul class="block-list">
{% for post in site.posts %}
{% if post.category == 'weblog' %}
<li>
  <a class="block-list__link" href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>