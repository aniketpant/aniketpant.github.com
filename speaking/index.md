---
layout: page
title: Speaking
slug: speaking
---
<dl>
{% for post in site.posts %}
	{% if post.category == 'talk' %}
		<dt><a href="{{ post.url }}">{{ post.title }}</a></dt>
		<dd>{{ post.date | date_to_long_string }}</dd>
	{% endif %}
{% endfor %}
</dl>