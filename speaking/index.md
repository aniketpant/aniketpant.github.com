---
layout: page
title: Speaking Engagements
slug: speaking
sitemap:
  priority: 0.7
  changefreq: weekly
  lastmod: 2013-11-30T08:55:30+05:30
---

<table class="table-auto">
	<thead>
		<tr>
			<th>Talk Name</th>
			<th>Presented On</th>
		</tr>
	</thead>
	<tbody>
	{% for post in site.posts %}
		{% if post.category == 'talk' %}
		<tr>
			<td>
				<a href="{{ post.url }}">{{ post.title }}</a>
			</td>
			<td>
				{{ post.date | date_to_long_string }}
			</td>
		</tr>
		{% endif %}
	{% endfor %}
	</tbody>
</table>

Take a look at the [slides](https://speakerdeck.com/aniketpant) or see the [code](https://github.com/aniketpant/presentations).
