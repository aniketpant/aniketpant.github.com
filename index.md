---
layout: page
title: Home
slug: home
---
<section class="grid__item one-whole text-cols--2 portable-text-cols--1 landmark" markdown="1">
I'm **Aniket**. I love to code, listen to music and I even write free-verses at times. A majority of my work involves _writing syntax for design_.

Three of my tools are Codeigniter, Laravel and WordPress. But there is another power that I have which allows me to think of great application architectural designs. Other than that I _love to speak_ at events and blabber about music.

If you wish to consult me for any project, or if you want me to [speak](/speaking) at an event, say <a href="mailto:me@aniketpant.com">hello</a>.

{% for post in site.posts limit:1 %}
**Read my latest {% if post.category == "notes" %}note{% elsif post.category == "essays" %}essay{% elsif post.category == "poetry" %}poem{% elsif post.category == "talk" %}talk{% endif %} &mdash; <a href="{{ post.url }}">{{ post.title }}</a>{% endfor %}**
</section><!--
--><section class="grid__item one-half portable-one-whole">
<h3>Wish to teleport somewhere?</h3>
<ul class="block-list">
	<li><a href="/archive" class="block-list__link">The Old Archives</a></li>
  <li><a href="http://markmyword.in" class="block-list__link">Mark My Word Conference</a></li>
</ul>
</section><!--
--><section class="grid__item one-half portable-one-whole">
<h3>Read something I wrote</h3>
<ul>
	{% for post in site.posts limit:5 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
</ul>
</section>