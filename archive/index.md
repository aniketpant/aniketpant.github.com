---
layout: page
title: Archive
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
<dl class="split">
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
</dl>
<hr class="rule rule--dashed" />
<h3>{{ post.date | date: '%Y' }}</h3>
<dl class="split">
{% endif %}
{% endunless %}
<dt class="split__title"><a href="{{ post.url }}">{{ post.title }}</a></dt>
<dd class="split__detail"><em>{{ post.date | date:"%d %b" }}</em></dd>
{% endfor %}
</dl>
</div>