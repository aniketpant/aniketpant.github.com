---
layout: custom
title: Aniket Pant's Resume
slug: resume
sitemap:
  priority: 0.7
  changefreq: monthly
  lastmod: 2013-11-30T08:55:30+05:30
---

<div class="wrapper">
  <div class="grid">
    <header class="grid__item  one-quarter  palm-one-whole  header-container">
      <h1><a href="/" rel="nofollow" class="brand"><span class="part--former weight--light">Aniket</span> <span class="part--latter  weight--semibold">Pant</span></a></h1>
      <nav>
        <ul class="nav  nav--stacked  nav--block">
          <li><a href="mailto:me@aniketpant.com">me@aniketpant.com</a></li><li><a href="http://www.aniketpant.com">aniketpant.com</a></li><li><a href="https://twitter.com/aniket_pant">@aniket_pant</a></li><li><a href="https://github.com/aniketpant">GitHub</a></li>
        </ul>
      </nav>
    </header><!--

  --><div class="grid__item  three-quarters  palm-one-whole  main-container">
      <section class="push-half--top section">
        <h2 class="gamma">Experience</h2>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://www.zomato.com">Zomato</a></h3>
          <p class="byline">Software Engineer | June, 2014 &ndash; Present | <span class="loz active">current</span></p>
          <p>Currently working at Zomato Engineering.</p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="https://www.instamojo.com">Instamojo</a></h3>
          <p class="byline">Front End Consultant | September, 2013 &ndash; March, 2014</p>
          <p>Worked with the team remotely to develop a <a href="https://github.com/aniketpant/immoral">modal library</a> and the embed buttons given by Instamojo for remote checkout.</p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://markmyword.in">Mark My Word</a></h3>
          <p class="byline">Curator | Feb, 2012 &ndash; May, 2014</p>
          <p>Founded Mark My Word which is India's First Content &amp; Design Conference featuring speakers around India and gathering a crowd of over 500 people.</p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://webmutiny.in">Web Mutiny</a></h3>
          <p class="byline">Lead Front End Developer | Nov, 2012 &ndash; May, 2013</p>
          <p>The major concentration of my work was building websites which have a strong foundation making them easier to scale. During my term at Web Mutiny, I worked on two projects &ndash; Instamojo and Current News.</p>
          <ul>
            <li>
              <h4 class="delta  flush--bottom"><a href="http://instamojo.com">Instamojo</a></h4>
              <p>Created a static website design using Jekyll. inuit.css was used as the CSS framework as it provides a strong foundation for designing. All page templates and basic page designs were created by me.</p>
            </li>
            <li>
              <h4 class="delta  flush--bottom">Current News</h4>
              <p>Built a new child theme for Thesis. The theme had support for a new custom post type which was further associated with taxonomies of it's own. The features needed for creating the new site required the creation of a number of custom loops. We created a Custom Loop API of our own which made the creation of pages simpler. The theme also had a number of custom hooks created by us. Metabox support for custom post types was built using <a href="https://github.com/jaredatch/Custom-Metaboxes-and-Fields-for-WordPress">Custom Metaboxes and Fields for WordPress</a>.</p>
            </li>
          </ul>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://tedxbitsgoa.com/2012">TEDxBITSGoa 2012</a></h3>
          <p class="byline">Designer &amp; Developer | Nov, 2011 &ndash; Feb, 2012</p>
          <p>The entire design and development of the TEDxBITSGoa 2012 website was handled by me. The website was developed over WordPress and I created a new theme that used a custom post types for listing the speakers. The theme used Bones as the WordPress theme framework. The curator of TEDxBITSGoa 2012 was looking for a fresh design for the event and he did not want to go for the usual designs followed by other TEDx events happening around. CSS animations were new around the scene that time and I created some interactive elements for the website.</p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://nih.ernet.in">National Institute of Hydrology, Roorkee</a></h3>
          <p class="byline">Intern | May, 2012 &ndash; July, 2012</p>
          <p>Worked in Remote Sensing &amp; GIS Laboratory and spent my time learning different GIS software. The completion of the internship also involved a project titled _Web GIS and its Applications in Water Resource Systems_. The project required me to create a web application using Open GIS.</p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom"><a href="http://lsipl.com">LogicSoft International Private Limited</a></h3>
          <p class="byline">Intern | May, 2011 &ndash; July, 2011</p>
          <p>Worked as an intern working with C#, ASP .NET and SQL Server 2005. The initial phase of my internship went into learning the required technologies from my mentor. Later, I got the opportunity to work on a live With the entire team and understand how projects are handled.</p>
        </div>
      </section>

      <div class="rule"></div>

      <section class="section">
        <h2 class="gamma">Speaking</h2>

        <p>I love to speak and I have been a speaker at a few events in the past:</p>
        <ul>
          {% for post in site.posts %}{% if post.category == 'talk' %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
          {% endif %}{% endfor %}
        </ul>
        <p>In April 2013, I conducted a workshop on HTML5 organized by Mozilla User Group, Goa for final year students of various colleges from Goa.</p>
      </section>

      <div class="rule"></div>

      <section class="section">
        <h2 class="gamma">Technical Skills</h2>
        <p>I have a good level of understanding of projects and my major skill lies in creating the architecture for projects which involves planning at the modular level, the database design and the timeline for the project.</p>
        <dl>
          <dt>Front-end stack</dt>
          <dd>HTML(5), CSS(3), Sass, jQuery</dd>
          <dt>Back-end stack</dt>
          <dd>CodeIgniter, Laravel, WordPress, MySQL</dd>
        </dl>
      </section>

      <div class="rule"></div>

      <section class="section">
        <h2 class="gamma">Education</h2>

        <div class="sub-section">
          <h3 class="delta  flush--bottom">B.E (Hons) Mechanical Engineering</h3>
          <p class="byline"><a href="http://universe.bits-pilani.ac.in">BITS Pilani</a> | 2010 &ndash; 2014 | <span class="loz active">graduated</span></p>
        </div>

        <div class="rule rule--dotted"></div>

        <div class="sub-section">
          <h3 class="delta  flush--bottom">10th &amp; 12th &mdash; CBSE Board</h3>
          <p class="byline"><a href="http://www.apsdk.com">Army Public School, Dhaula Kuan</a> | 2008 &ndash; 2010</p>
        </div>
      </section>
    </div>
  </div>
</div>
