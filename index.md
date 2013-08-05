---
layout: page
title: Rawrrr!
slug: home
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-05-18T10:04:30+05:30
---
<section class="grid__item one-whole landmark lead" markdown="1">
I'm **Aniket**. I love to code, listen to music and I even write free-verses at times. A majority of my work involves _writing syntax for design_.

Three of my tools are Codeigniter, Laravel and WordPress. But there is another power that I have which allows me to think of great application architectural designs. Other than that I _love to speak_ at events and blabber about music.

If you wish to consult me for any project, or if you want me to [speak](/speaking) at an event, say <a href="me@aniketpant.com?subject=Hey">hello</a>.
</section>
<section class="grid__item one-whole" markdown="1">
### Recent writings

<ul class="block-list recent-posts">
{% for post in site.posts limit:5 %}
<li>
{% if forloop.index == 1 %}
<a href="{{ post.url }}" class="highlight--block block-list__link">
<span class="gamma">{{ post.title }}</span><br/>
<span class="zeta">Written on <date class="date">{{ post.date | date:"%d %B" }}</date></span><br/>
<span class="zeta">This is my latest {% if post.category == "notes" %}note{% elsif post.category == "essays" %}essay{% elsif post.category == "poetry" %}poem{% elsif post.category == "talk" %}talk{% endif %}</span>
</a>
{% else %}
<a href="{{ post.url }}" class="block-list__link">
  <span class="highlight gamma">{{ post.title }}</span><br/>
  <span class="zeta">Written on <date class="date">{{ post.date | date:"%d %B" }}</date></span><br/>
  <span>{{ post.category }}</span>
</a>
{% endif %}
</li>
{% endfor %}
</ul>
</section>
