---
layout: page
title: Aniket's speaking engagements
slug: speaking
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-05-18T10:04:30+05:30
---
<div class="grid__item one-whole">
You can take a look at my slides at <a href="https://speakerdeck.com/aniketpant">my Speaker Deck profile</a>. Also, you can <a href="https://github.com/aniketpant/presentations">fork my slides</a> here.

<ul class="block-list text--center block-list--crystal">
{% for post in site.posts %}
	{% if post.category == 'talk' %}
	<li>
		<a href="{{ post.url }}" class="block-list__link">
			<span class="gamma">{{ post.title }}</span><br/>
			<span class="topic beta highlight">{{ post.topic }}</span><br/>
			<span class="muted"><date class="date">{{ post.date | date_to_long_string }}</date> / {{ post.place }}</span>
		</a>
	</li>
	{% endif %}
{% endfor %}
</ul>
</div>