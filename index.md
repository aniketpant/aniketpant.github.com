---
layout: page
title: Home
slug: home
---
<p class="island lead">I'm Aniket Pant. I love to code, write and occassionally I even write some free-verses.</p>

<section class="g one-whole info-on-me text-cols--2 landmark" markdown="1">
Three of my tools are Codeigniter, Laravel and WordPress. But there is another power that I have which allows me to think of great application architectural designs. Other than that I love to speak at events and occasionally write poetry.

Over here, you will find me writing about web building, new technologies and anything new I find.

If you wish to consult me for any project, or if you want me to [speak](/speaking) at an event, say hello.
</section>

<section class="g one-half links">
	<p class="lead"><strong>Where would you like to teleport to?</strong></p>
	<ul class="block-list">
		<li><a href="/archive" class="block-list__link">The Old Archives</a></li>
		<li><a href="http://markmyword.in" class="block-list__link">Mark My Word Conference</a></li>
	</ul>
</section>

<section class="g one-half cf">
	<p class="lead"><strong>What am I doing nowadays?</strong></p>
	<p markdown="1">At the moment I am working full time as the **Curator of [Mark My Word](http://markmyword.in)** which is India's First Content and Design Conference.</p>
</section>

<section class="g one-whole recent-posts">
	<p class="lead"><strong>Take a look at my last few posts</strong></p>
	<dl class="split">
		{% for post in site.posts limit:5 %}
			<dt class="split__title"><a href="{{ post.url }}">{{ post.title }}</a></dt>
			<dd>{{ post.date | date:"%b" }}</dd>
		{% endfor %}
	</dl>
</section>