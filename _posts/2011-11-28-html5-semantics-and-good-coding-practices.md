---
author: Aniket
title: >
  HTML5 Semantics and Good Coding
  Practices
layout: post
type: post
category: essay
tags:
  - coding
  - html5
  - semantic
---
## Introduction

Evil people put ids to nearly every element on their pages and make *everything* **rigid and ugly**. Moroever there was hardly any semantic structure around the front-end code.

Thankfully HTML5 puts and end to much of this evilery. Well at least it tries to. Let's talk about what's new with HTML5 and how it makes more sense.

## Doctype

Let's start with starting of comment


```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

DOCTYPEs can't get simpler than this!

```html
<!DOCTYPE html>
```

## The Changes in the Sections

Read this brilliant post on Smashing Magazine Coding on [The Document Outlining Algorithm](http://coding.smashingmagazine.com/2011/08/16/html5-and-the-document-outlining-algorithm/)

It will help you understand the importance of using headings and the hgroup element.and enclose the post with a class like "post"

You can later use the hgroup to club your headings and create an outline which is actually related to the way you write it and show it.
hgroup is like a wrapper for your headings ranging from h1-h6. You can make a list of these inside a hgroup according to title, subtitle and the rest.

The use of hgroup is to create an effective document outline.

Almost every (sane) front-end developer was using similar ids and classes with same logic.

```html
<div class="header">
<div class="navigation">
<div class="footer">
```

and so on.

We have tags like header, footer, nav, article, section and aside, which bring clarity to your code and make it  more sane.
Isn't it simple to have more meaningful tags like these to structure your content.

### Header

You can use [header](http://html5doctor.com/the-header-element/) as many times as you want to anywhere on your page. Usually it is used to enclose an hgroup or some headings or relevant content like a table of contents or something like these things.

You must be used to seeing things like

```html
<div id="header">
```

header is a substitute to this.

### Footer

The [footer](http://html5doctor.com/the-footer-element/) is similar to header.

Replace your

```html
<div id="footer">
```

with a simple footer tag. You can use it as many times as you want to!

### Nav

You can group together your links in the [nav](http://html5doctor.com/nav-element) element.

This is the way we code as of now &ndash;

```html
<div id="main-nav" class="navigation">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/blog/">Blog</a></li>
  </ul>
</div>
```

Change your primitive code to this &ndash;

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/blog/">Blog</a></li>
  </ul>
</nav>
```

### Article and Section

The spec defines [section](http://html5doctor.com/the-section-element/) as &ndash;

> The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading.
>
> Authors are encouraged to use the article element instead of the section element when it would make sense to syndicate the contents of the element.

The next line makes the use of section clear.

> Examples of sections would be chapters, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A Web site's home page could be split into sections for an introduction, news items, and contact information.

Not: The section element should not be used for styling. A div should be preferred.

A great post by Louis Lazaris ([Impressive Webs](http://www.impressivewebs.com)) on [When to Use the HTML5 "section" element](http://www.impressivewebs.com/html5-section/).

You can read about the [article](http://html5doctor.com/the-article-element/) element from HTML5 Doctor.

### Aside

From what I have read and understood about [aside](http://html5doctor.com/aside-revisited/) is that it can be used to relate content to the element it is enclosed inside.

For example, if an aside is contained inside an article, it means that the content of the aside is related to the article but not to the page.
Whereas, if the aside is outside the article, then it means that it is not as closely related to the article but related to the page.

### Address

Another addition to the new elements is an [address](http://html5doctor.com/the-address-element/) tag! Yes, we have an address tag.
Imagine that you can actually get the address from a webpage more easily now, by just looking for this simple tag.

### Example

Here is an example.

*   A simple blog post of yours. Put the title of the post and the post information in the header.
*   Move on to the actual post and place in an article. Put the tags and maybe a "tweet my post" link in the footer.
*   These simple tags make things more logical unlike the earlier method to use ids like "header" and "footer" to do the job.

## Groupings

A figure tag has been introduced for your images and other illustrations.
As of now we to do this by making divs or my associating different classes, but soon we will begin to enclose them with the figure element.

```html
<figure>
<!-- Your image here -->
<figcaption></figcaption>
</figure>
```

See this [fiddle](http://jsfiddle.net/aniketpant/hUWhD/embedded/result/), I made to demonstrate the use!

## Forms

Form elements were changed the most in HTML5.

We have placeholders! Yes, placeholders are there which we used by javascripts.
Now, how to use placeholders. Well, it's as easy as eating cheese!

Just include placeholders and the text you need inside you input elements.

```html
<input name="user-name" type="email" placeholder="Your username is your email address">
```

Apart from this, we have keygen.

The [draft](http://dev.w3.org/html5/spec/Overview.html#the-keygen-element) says &ndash;

> The keygen element represents a key pair generator control. When the control's form is submitted, the private key is stored in the local keystore, and the public key is packaged and sent to the server.

It will help in improving security by verification, I think. Need to study more about it!
According to the [draft](http://dev.w3.org/html5/spec/Overview.html#the-output-element), the output element represents the result of a calculation.

See the following code &ndash;

```html
<form name="main">
  Result: <output name="result"></output>
  <script>
    document.forms.main.elements.result.value = 'Hello World';
  </script>
</form>
```

I guess, now you understand the logic of this element. You can manipulate this to change things accordingly and display results in a more orderly fashion.

Other than the above mentioned elements, we have progress and meter.

The progress element can be used to create a progress bar. The value can be easily changed and updated using javascript and can be used to have progress bars in forms & other step based processes.

Meter element is nothing big in terms of what it does, but it brings logic to your code.

### BAD CODE

```html
<section>
  My height is 5 feet and 10 inches.
</section>
```

### GOOD CODE

```html
<section>
My height is
<dl>
  <dt>Feet: <dd> <meter min=0 max=7 value=5>5ft</meter>
  <dt>Inches: <dd> <meter min=0 max=12 value=11>11in</meter>
</dl>
</section>
```

You can easily understand what all this means. Better than before right?

## The Interactive Elements

The elements under this category are … wait for it …

* Details
* Summary
* Command
* Menu

To be frank, I did not use the details element but I saw an example a while back and it pretty cool!
It's like a mini-accordion.

As of now, you can use it in webkit browsers. Won't work on Mozilla. And it will be soon available in Opera.
So, what details does is that you can easily collapsible elements.

The code for it is like this -

```html
<details>
  <summary>Show/Hide me</summary>
  <p>Hello! I am a paragraph element inside a details tag.</p>
</details>
```

It would look like this, a simple arrow before the summary text and when you click on the arrow, you will see the paragraph text.
[Demo](http://jsbin.com/egefop#html,live) for details element.

Another good [example](http://jsbin.com/egefop/8#3) with a collapsible table of contents.

The menu element seems very interesting.

The context menu type allows the element to represent the commands of a context menu. The user will be only be able to interact with the commands if that context menu is activated.

If the attribute is in the toolbar state, then the element will represent a list of active commands which the user can immediately interact with.

In the case of the list state attribute, the element will represent an unordered list of items (each represented by an li element), each of which represents a command that the user can perform or activate.

## Embeddable Elements

Fresh out of the oven, we have these 6 things.
Canvas, area, map, audio, video and track.

Everyone is very much aware of Canvas. Use canvas for anything and everything. Build games using it, render graphs or play with images.

What all you can do with the nifty canvas?

* Draw shapes
* Fill colors
* Create pretty gradients and patterns
* Render text
* Get frames from other canvases
* Play with pixels
* Export your canvas to a file

A lot of demos and other articles are already there on how to interact with the canvas. It is one of the very much loved introductions in HTML5.

Moving onto the map and area elements. It can be used to relate pixel coordinates to another element on any image or media.

A good example from HTML5 Doctor is this -

```html
<section>
  <h1>Clothing</h1>
  <img src="/images/menu.gif" alt="Select a department to go to its page." usemap="#nav">
</section>
<footer>
  <map name="nav">
  <p>
    <a href="/women/">Women</a>
    <area alt="Women" coords="0,0,100,50" href="/women/"> |
    <a href="/men/">Men</a>
    <area ALT="Men" coords="0,0,100,50" href="/men/"> |
    <a HREF="/kids/">Kids</a>
    <area alt="Food" coords="0,0,100,50" href="/kids/"> |
  </p>
  </map>
</footer>
```

Seems useful!

These ones are the best.

Take a look at this ugly HTML code used for embedding a video from youtube!

```html
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="344" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">
<param name="allowFullScreen" value="true" />
<param name="allowscriptaccess" value="always" />
<param name="src" value="http://www.youtube.com/v/oHg5SJYRHA0&hl=en&fs=1&" />
<param name="allowfullscreen" value="true" />
<embed type="application/x-shockwave-flash" width="425" height="344" src="http://www.youtube.com/v/oHg5SJYRHA0&hl=en&fs=1&" allowscriptaccess="always" allowfullscreen="true">
</embed>
</object>
```

Don't even feel like reading what it says.

Let's do this the HTML5 way.

```html
<video width="640"  height="360" src="http://www.youtube.com/demo/google_main.mp4"  controls autobuffer>
<p> Try this page in Safari  4! Or you can <a  href="http://www.youtube.com/demo/google_main.mp4">download the  video</a> instead.</p>
</video>
```

Oh, this is so neat! (This is what you said, right?)
You can even add an autoplay to the video tag and you know what it means.

The track element can be used with video and you will be able to link external files to your video.
Code for it is quite easy to understand.

Example:

```html
<track kind=subtitles src=abc.vtt srclang=en label="English">
```

There are other ‘kind' for it like subtitles, captions, descriptions, chapters and metadata.

Video done, time for some audio.

The audio tag defines 5 attributes.

* src
* autoplay
* loop
* controls
* preload

Example:

```html
<audio controls preload="auto" autobuffer>
  <source src="track.mp3" />
  <source src="track.ogg" />
</audio>
```

This enables controls for the audio, enable auto buffering and loads the file beforehand.

The support for the filetypes vary from browsers as of now.

Read more on HTML5 Doctor – [Native Audio in the browser](http://html5doctor.com/native-audio-in-the-browser)

## The Final Say

The new elements introduced are effective over what we had earlier. At least that's what I feel as a guy who loves to code.

For a front-end guy, some of the changes won't make difference like map, area, address and others like these.

The minor things don't make that much of a difference in terms of the result. Code your pages the way you wish.
But if someone doesn't see the result and checks your code, he will be able to make out the difference because of these minor things.

## Resources

1.  [Canvas Gradients](http://html5demos.com/canvas-grad)
2.  [The Loading Demo](http://html5demos.com/canvas)
3.  You can go through [HTML5 Demos](http://html5demos.com/) for more demos with great technologies.
4.  [HTML5 Doctor](http://html5doctor.com/) is great for definitions and good explanations of the various elements.

## Credits

Some examples mentioned above are inspired and taken from the draft and [HTML5 Doctor](http://html5doctor.com/).

## Brief Note

I have included only those changes which I felt brought more clarity and made the code semantic.

If you are on HN, please upvote. The [link](http://news.ycombinator.com/item?id=3285210) to the discussion.