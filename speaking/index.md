---
layout: page
title: Speaking
slug: speaking
---
<dl>
{% for post in site.posts %}
	{% if post.category == 'talk' %}
		<dt>{{ post.title }}</dt>
		<dd>{{ page.date }}</dd>
	{% endif %}
{% endfor %}
</dl>