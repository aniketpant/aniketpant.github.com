---
layout: page
title: Aniket Pant
slug: home
sitemap:
    priority: 0.7
    changefreq: weekly
    lastmod: 2013-05-18T10:04:30+05:30
---

<div class="grid">

  <div class="grid__item one-whole">
    <p class="lead text--center">
      Hey, I am Aniket<br/>
      and I love to
    </p>
  </div>

  <div class="grid__item one-whole">
    <h2 class="gamma text--center">Write</h2>

    <ul class="block-list">
      {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url }}" class="block-list__link link">
          <span class="title">{{ post.title }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div><!--

  --><div class="grid__item one-whole">
    <h2 class="gamma text--center">Code</h2>
  </div><!--

  --><div class="grid__item one-whole">
    <h2 class="gamma text--center">Read</h2>

    <p>In the last few months I have read the following books:</p>
    <ul>
      <li><span class="title--book">Inferno</span> by <span class="author">Dan Brown</span></li>
      <li><span class="title--book">The Shiva Trilogy</span> by <span class="author">Amish Patel</span></li>
      <li><span class="title--book">The Ghost</span> by <span class="author">Robert Harris</span></li>
    </ul>
  </div>

</div>