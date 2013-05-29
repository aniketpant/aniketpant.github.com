---
layout: custom
title: Resume
slug: resume
---
<div class="header-container">
  <div class="zen-space full-width"></div>
  <div class="grid wrapper">
    <header class="grid__unit one-whole" role="banner">
      <h1 class="grid__unit one-whole title text--center">Aniket Pant</h1>
      <hr class="grid__unit one-whole rule" />
      <ul class="grid__unit one-whole nav nav--banner nav--block">
      	<li><a href="mailto:me@aniketpant.com">me@aniketpant.com</a></li><!--
      	--><li><a href="http://aniketpant.com">aniketpant.com</a></li><!--
        --><li><a href="https://twitter.com/aniket_Pant">@aniket_pant</a></li><!--
        --><li><a href="https://github.com/aniketpant">GitHub</a></li>
      </ul>
    </header> <!-- header -->
  </div>
</div> <!-- header-container -->

<div class="main-container">
  <div class="grid wrapper" role="main">
  	<section>
  		<h2>Summary</h2>
  		<p markdown="1">
  			I am a passionate about making the **front-end semantic and understandable**. I love to build new applications and fiddling with any new technology out there.
  		</p>
  	</section>
    <hr class="grid__unit one-whole rule" />
  	<section>
  		<h2>Experience</h2>

  		<h3>2012 &ndash; Present</h3>

			<p><em>Curator of <a href="http://markmyword.in">Mark My Word</a></em></p>
			<p>Founded Mark My Word which is India's First Content &amp; Design Conference featuring speakers around India and gathering a crowd of over 500 people.</p>

      <hr class="grid__unit one-whole rule rule--dotted" />

			<h3>2012 &ndash; 2013<h3>
			
      <p><em>Lead Front End Developer at <a href="http://webmutiny.in">Web Mutiny</a></em></p>
    	<p>The major concentration of my work was building websites which have a strong foundation making them easier to scale.</p>
      
      <hr class="grid__unit one-whole rule rule--dotted" />

			<h3>2011</h3>

			<p><em>Intern at <a href="http://nih.ernet.in">National Institute of Hydrology, Roorkee</a></em></p>
			<p>Worked in Remote Sensing &amp; GIS Laboratory and learnt how to use different GIS software. Along with this, I also worked on a project on "Web GIS and Its Applications in Water Resource Systems".</p>

			<p><em>Developer at <a href="http://tedxbitsgoa.com/2012">TEDxBITSGoa 2012</a></em></p>
			<p>Built the website for TEDxBITSGoa 2012. The entire design and development of the website was handled by me.</p>
      
      <hr class="grid__unit one-whole rule rule--dotted" />
      
      <h3>2010</h3>

			<p><em>Summer Intern at <a href="http://lsipl.com">Logicsoft International Private Limited</a></em></p>
			<p>Worked as a summer intern working with ASP .NET and SQL Server 2005. I got the opportunity to work on a live project and understand how projects are handled.</p>
  	</section>
    <hr class="grid__unit one-whole rule" />
  	<section>
  		<h2>Speaking</h2>
  		<p>I have been a speaker at the following events in the past &ndash;</p>
  		<ul>
        {% for post in site.posts %}{% if post.category == 'talk' %}
        <li><a href="{{ post.url }}">{{ post.title }} on <span class="highlight">{{ post.topic }}</span></a></li>
        {% endif %}{% endfor %}
  		</ul>
  	</section>
    <hr class="grid__unit one-whole rule" />
  	<section>
  		<h2>Technical Skills</h2>
  		<p>I have a good level of understanding of projects and my major skill lies in creating the architecture for projects which involves planning at the modular level, the database design and the timeline for the project.</p>
  		<ul class="matrix two-cols">
  			<li class="all-cols"><strong>Front-end stack</strong></li>
  			<li>HTML(5)</li>
  			<li>CSS(3)</li>
  			<li>Haml, Sass and LESS</li>
  			<li>Javascript</li>
  			<li class="all-cols"><strong>Back-end stack</strong></li>
  			<li>PHP &ndash; Codeigniter &amp; Laravel</li>
  			<li>SQL &ndash; MySQL &amp; SQL Server 2005</li>
  		</ul>
  	</section>
    <hr class="grid__unit one-whole rule" />
  	<section>
  		<h2>Education</h2>
  		<table class="table--bordered">
        <colgroup>
          <col class="t25">
          <col class="t25">
          <col>
        </colgroup>
        <tbody>
    			<tr>
    				<td><strong>2010 &ndash; Present</strong></td>
    				<td colspan="2">
    					<p><strong>B.E (Hons) Mechanical Engineering</strong></p>
    					<p><a href="http://universe.bits-pilani.ac.in">BITS Pilani</a></p>
              <p>Undertook Internetworking Technologies, Journalism, Financial Management as electives. I also developed an Inventory Allotment application as a project which is used by the faculty.</p>
    				</td>
    			</tr>
    			<tr>
    				<td><strong>2008 &ndash; 2010</strong></td>
    				<td colspan="2">
    					<p><strong>10th &amp; 12th &mdash; CBSE Board</strong></p>
    					<p><a href="http://www.apsdk.com">Army Public School, Dhaula Kuan</a></p>
    				</td>
    			</tr>
        </tbody>
  		</table>
  	</section>
    <hr class="grid__unit one-whole rule" />
  	<section>
  		<h2>Professional Interests</h2>
  		<p>application building, database design, project conceptualization, front-end web development, educating people about the web, typography</p>
    </section>
  </div> <!-- main -->
</div> <!-- main-container -->

<div class="footer-container">
  <div class="zen-space full-width"></div>
</div>
