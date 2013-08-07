---
layout: custom
title: Resume
slug: resume
sitemap:
    priority: 0.7
    changefreq: monthly
    lastmod: 2013-06-11T12:07:30+05:30
---
<div class="zen-space full-width"></div>

<div class="grid wrapper">

<div class="push--top" role="main" markdown="1">

<header class="grid__item one-whole text--center">
  <h1 class="beta">Aniket Pant</h1>
  <nav class="navbar">
    <ul class="nav nav--block palm-nav--stacked">
      <li><a href="mailto:me@aniketpant.com">me@aniketpant.com</a></li><!--
      --><li><a href="http://aniketpant.com">aniketpant.com</a></li><!--
      --><li><a href="https://twitter.com/aniket_pant">@aniket_pant</a></li><!--
      --><li><a href="https://github.com/aniketpant">GitHub</a></li>
    </ul>
  </nav>
</header>

<section class="grid__item one-whole landmark">
<p class="lead" markdown="1">I am a self-taught full stack developer with expertise in front-end, passionate about making the **front-end semantic and understandable**. I love to build new applications and fiddling with any new technology out there. Currently, I am working with Ruby and experimenting with Rails.</p>
</section>

<section class="grid__item one-whole landmark" markdown="1">
## Experience

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="gamma">[Mark My Word](http://markmyword.in)</span><br/>
<span class="delta">Curator</span><br/>
<span class="epsilon">Feb, 2012 &ndash; Present</span>
</div>
</div>

Founded Mark My Word which is India's First Content &amp; Design Conference featuring speakers around India and gathering a crowd of over 500 people.
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="gamma">[Web Mutiny](http://webmutiny.in)</span><br/>
<span class="delta">Lead Front-end Developer</span><br/>
<span class="epsilon">Nov, 2012 &ndash; May, 2013</span>
</div>
</div>

The major concentration of my work was building websites which have a strong foundation making them easier to scale. During my term at Web Mutiny, I worked on two projects &ndash; Instamojo and Current News.

<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">[Instamojo](http://instamojo.com)</span><br/>
<span class="epsilon">With Web Mutiny</span>
</div>
</div>

Created a static website design using Jekyll. inuit.css was used as the CSS framework as it provides a strong foundation for designing. All page templates and basic page designs were created by me.

<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">Current News</span><br/>
<span class="epsilon">With Web Mutiny</span>
</div>
</div>

Built a new child theme for Thesis. The theme had support for a new custom post type which was further associated with taxonomies of it's own. The features needed for creating the new site required the creation of a number of custom loops. We created a Custom Loop API of our own which made the creation of pages simpler. The theme also had a number of custom hooks created by us. Metabox support for custom post types was built using [Custom Metaboxes and Fields for WordPress](https://github.com/jaredatch/Custom-Metaboxes-and-Fields-for-WordPress).
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="gamma">[TEDxBITSGoa 2012](http://tedxbitsgoa.com/2012)</span><br/>
<span class="delta">Webmaster</span><br/>
<span class="epsilon">Nov, 2011 &ndash; Feb, 2012</span>
</div>
</div>

The entire design and development of the TEDxBITSGoa 2012 website was handled by me. The website was developed over WordPress and I created a new theme that used a custom post types for listing the speakers. The theme used Bones as the WordPress theme framework. The curator of TEDxBITSGoa 2012 was looking for a fresh design for the event and he did not want to go for the usual designs followed by other TEDx events happening around. CSS animations were new around the scene that time and I created some interactive elements for the website.
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="gamma">[National Institute of Hydrology, Roorkee](http://nih.ernet.in)</span><br/>
<span class="delta">Intern</span><br/>
<span class="epsilon">May, 2012 &ndash; July, 2012</span>
</div>
</div>

Worked in Remote Sensing &amp; GIS Laboratory and spent my time learning different GIS software. The completion of the internship also involved a project titled "Web GIS and its Applications in Water Resource Systems". The project required me to create a web application using Open GIS.
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="gamma">[LogicSoft International Private Limited](http://lsipl.com)</span><br/>
<span class="delta">Intern</span><br/>
<span class="epsilon">May, 2011 &ndash; July, 2011</span>
</div>
</div>

Worked as an intern working with C#, ASP .NET and SQL Server 2005. The initial phase of my internship went into learning the required technologies from my mentor. Later, I got the opportunity to work on a live With the entire team and understand how projects are handled.
</div>
</section>

<section class="grid__item one-whole landmark" markdown="1">
## Speaking

I love to speak and I have been a speaker at a few events in the past:

{% for post in site.posts %}{% if post.category == 'talk' %}
- [{{ post.title }} on {{ post.topic }}]({{ post.url }})<!--
-->{% endif %}{% endfor %}

In April 2013, I conducted a workshop on HTML5 organized by Mozilla User Group, Goa for final year students of various colleges from Goa.
</section>

<section class="grid__item one-whole landmark" markdown="1">
## Technical Skills

I have a good level of understanding of projects and my major skill lies in creating the architecture for projects which involves planning at the modular level, the database design and the timeline for the project.

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">Front-end stack</span><br/>
<span class="epsilon">HTML(5), CSS(3), Haml, LESS, Sass and Compass, jQuery</span>
</div>
</div>

Write about front-end skills.
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">Back-end stack</span><br/>
<span class="epsilon">CodeIgniter, Laravel, WordPress, MySQL</span>
</div>
</div>

Write about back-end skills.
</div>
</section>

<section class="grid__item one-whole landmark" markdown="1">
## Education

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">B.E (Hons) Mechanical Engineering</span><br/>
<span class="epsilon">[BITS Pilani](http://universe.bits-pilani.ac.in)</span><br/>
<span class="epsilon">2010 &ndash; Present</span>
</div>
</div>

Electives undertaken:

- Internetworking Technologies
- Journalism
- Financial Management

<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">Inventory Allotment App</span>
</div>
</div>

The project required me to redesign the database and refactor the code for an already existing inventory application. The old application lacked a number of features and the code had to be rewritten. I built the application using Laravel and MySQL.
</div>

<div class="sub-section" markdown="1">
<div class="marginalia">
<div class="marginalia__body desk-two-thirds" markdown="1">
<span class="delta">10th &amp; 12th &mdash; CBSE Board</span><br/>
<span class="epsilon">[Army Public School, Dhaula Kuan](http://www.apsdk.com)</span><br/>
<span class="epsilon">2008 &ndash; 2010</span>
</div>
</div>

Write about school experience.
</div>
</section>

<section class="grid__item one-whole landmark" markdown="1">
## Professional Interests

application building, database design, project conceptualization, front-end web development, educating people about the web, typography
</section>

</div>

</div>

<div class="zen-space full-width"></div>