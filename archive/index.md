---
layout: page
title: The preserved archives
slug: archive
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-06-10T10:18:30+05:30
---
<div class="grid__item one-whole">
{% for post in site.posts %}
{% unless post.next %}
<h3>{{ post.date | date: '%Y' }}</h3>
<ul class="block-list block-list--crystal">
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
</ul>
<h3>{{ post.date | date: '%Y' }}</h3>
<ul class="block-list block-list--crystal">
{% endif %}
{% endunless %}
<li>
  <a class="block-list__link link-complex" href="{{ post.url }}">
    <span class="link-complex__target">{{ post.title }}</span> <span class="muted">on {{ post.date | date:"%d %b" }}</span>
  </a>
</li>
{% endfor %}
</ul>
</div>