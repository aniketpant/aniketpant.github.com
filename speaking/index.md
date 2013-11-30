---
layout: page
title: Aniket's speaking engagements
slug: speaking
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-11-30T08:55:30+05:30
---

You can take a look at my slides at <a href="https://speakerdeck.com/aniketpant">my Speaker Deck profile</a>. Also, you can <a href="https://github.com/aniketpant/presentations">fork my slides</a> here.

<ul class="list--talks">
{% for post in site.posts %}
	{% if post.category == 'talk' %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endif %}
{% endfor %}
</ul>