---
layout: page
title: Speaking
slug: speaking
---

<div class="g one-whole cf" markdown="1">

<dl>
{% for post in site.posts %}
	{% if post.category == 'talk' %}
		<dt><a href="{{ post.url }}" class="complex-link">{{ post.title }} <span class="complex-link__target">Whoa!</span></a></dt>
		<dd>{{ post.date | date_to_long_string }}</dd>
	{% endif %}
{% endfor %}
</dl>

</div>