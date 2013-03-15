---
layout: page
title: Speaking
slug: speaking
---
<div class="grid__unit one-whole" markdown="1">
You can take a look at my slides at [my Speaker Deck profile](https://speakerdeck.com/aniketpant). Also, you can [fork my slides](https://github.com/aniketpant/presentations) here.
<ul class="block-list text--center">
{% for post in site.posts %}
	{% if post.category == 'talk' %}
	<li>
		<a href="{{ post.url }}" class="link-complex">
			<span class="gamma">{{ post.title }}</span><br/>
			<span class="topic beta highlight link-complex__target">{{ post.topic }}</span><br/>
			<date class="date">{{ post.date | date_to_long_string }}</date> // <span class="place">{{ post.place }}</span>
		</a>
	</li>
	{% endif %}
{% endfor %}
</ul>
</div>