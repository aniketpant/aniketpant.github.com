---
layout: page
title: Home
slug: home
---
<p class="island lead" markdown="1">I'm Aniket Pant. I love to code, listen to music and I even write free-verses at times. A majority of my work goes into _writing syntax for design_.</p>

<section class="g one-whole info-on-me text-cols--2 landmark" markdown="1">
Three of my tools are Codeigniter, Laravel and WordPress. But there is another power that I have which allows me to think of great application architectural designs. Other than that I _love to speak_ at events and occasionally _write poetry_.

If you wish to consult me for any project, or if you want me to [speak](/speaking) at an event, say <a href="mailto:me@aniketpant.com">hello</a>.

Read my latest post: {% for post in site.posts limit:1 %}<a href="{{ post.url }}">_{{ post.title }}_</a>{% endfor %}
</section>

<section class="g one-half links">
	<h3>Where would you like to teleport to?</h3>
	<ul class="block-list">
		<li><a href="/archive" class="block-list__link">The Old Archives</a></li>
		<li><a href="http://markmyword.in" class="block-list__link">Mark My Word Conference</a></li>
	</ul>
</section>

<section class="g one-half">
	<h3>What am I doing nowadays?</h3>
	<p>Nowadays I am working full time as the Curator of <a href="http://markmyword.in">Mark My Word</a> which is India's First Content and Design Conference scheduled to happen on Feb 2, 2013..</p>
</section>

<section class="g one-whole recent-posts">
	<h3>Take a look at my last few posts</h3>
	<dl class="split">
		{% for post in site.posts limit:5 %}
			<dt class="split__title"><a href="{{ post.url }}">{{ post.title }}</a></dt>
			<dd class="split__detail"><em>{{ post.date | date:"%d %b" }}</em></dd>
		{% endfor %}
	</dl>
</section>