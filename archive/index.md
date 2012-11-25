---
layout: page
title: Archive
slug: archive
---

<div class="g one-whole cf">

{% for post in site.posts %}
{% unless post.next %}
<h3>{{ post.date | date: '%Y' }}</h3>
<dl class="split">
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
</dl>
<h3>{{ post.date | date: '%Y' }}</h3>
<dl class="split">
{% endif %}
{% endunless %}
<dt class="split__title"><a href="{{ post.url }}">{{ post.title }}</a></dt>
<dd><em>{{ post.date | date:"%d %b" }}</em></dd>
{% endfor %}
</dl>

</div>