---
layout: page
title: Archive
slug: archive
---
{% for post in site.posts %}
{% unless post.next %}
<h3>{{ post.date | date: '%Y' }}</h3>
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
<hr/>
<h3>{{ post.date | date: '%Y' }}</h3>
{% endif %}
{% endunless %}
<dl class="split">
	<dt class="split__title"><a href="{{ post.url }}">{{ post.title }}</a></dt>
	<dd><em>{{ post.date | date:"%d %b" }}</em></dd>
</dl>
{% endfor %}