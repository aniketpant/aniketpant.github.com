---
layout: page
title: Speaking
slug: speaking
---

<div class="g one-whole cf" markdown="1">

<p class="lead">You can take a look at my slides at <a href="https://speakerdeck.com/aniketpant">my Speaker Deck profile</a>. Also, you can <a href="https://github.com/aniketpant/presentations">fork my slides</a> here.</p>

<dl>
{% for post in site.posts %}
	{% if post.category == 'talk' %}
		<dt><a href="{{ post.url }}" class="complex-link">{{ post.title }}</a></dt>
		<dd><date class="date">{{ post.date | date_to_long_string }}</date>, <span class="place">{{ post.place }}</span></dd>
	{% endif %}
{% endfor %}
</dl>

</div>