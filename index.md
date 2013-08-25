---
layout: page
title: Rawrrr!
slug: home
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-05-18T10:04:30+05:30
---
<section class="grid__item one-whole landmark" markdown="1">
<p class="lead" markdown="1">I'm **Aniket**. I love to code, listen to music and I even write free-verses at times. Nowadays, I spend my time tinkering with Ruby and writing a tiny handbook for web developers.
</section>
<section class="grid__item one-whole" markdown="1">
### Recent writings

<ul class="block-list recent-posts">
{% for post in site.posts limit:6 %}
<li>
{% if forloop.index == 1 %}
<a href="{{ post.url }}" class="highlight--block block-list__link">
<span class="gamma">{{ post.title }}</span><br/>
<span class="zeta">Written on <date class="date">{{ post.date | date:"%d %B" }}</date></span><br/>
<span class="zeta">This is my latest {{ post.category }}</span>
</a>
{% else %}
<a href="{{ post.url }}" class="block-list__link">
  <span class="highlight gamma">{{ post.title }}</span><br/>
</a>
{% endif %}
</li>
{% endfor %}
</ul>
</section>
