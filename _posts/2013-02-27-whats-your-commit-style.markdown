---
author: Aniket
layout: post
type: post
date: 2013-02-27 01:38
title: "What's your commit style?"
category: essay
tags: []
---

I have been experimenting with commit styles for the last one month and there are three styles that actually caught my attention and are very useful.


I am not sure how you do it, but I tried our different ways of making commits to my projects and each style has it's own upper-hand.

## Style #1

List out the **type of change** and then describe what the change is. This is how I categorized it:

* `Added`: When adding a new file to the repository
* `Removed`: When removing file
* `Changed`: When making a new change in a file
* `Updated`: When updating some existing code in a file
* `Fixed`: When fixing a bug

<div class="media">
<img src="/images/whats-your-commit-style/style-1.png" alt="Commit Style #1" />
</div>

What I like about this method is that I can easily monitor the nature of the commit. Let's say, I wish to see the way I worked on the project, I will notice that I first `Added` a file, then I maybe `Changed` something. Some bugs were `Fixed` and already existing functions were `Updated`. I personally feel that this style adds structure to the commits and makes them easy to analyse.

## Style #2

I can loosely classify this one as a **module based** commit style.

<div class="media">
<img src="/images/whats-your-commit-style/style-2.png" alt="Commit Style #2" />
</div>

The way to commit this way is quite simple. First list down the module/feature or part of the code you are editing and then describe the change. Whenever I cannot list out the module, I describe it with a sentence.

As of now I have shifted to this kind of commit style as it allows me to describe the change better and gives it a story-telling feel.

## Style #3

Now, this commit style is an interesting one. It's built over **#2**, or should I say that #2 was inspired by this one.

<div class="media">
<img src="/images/whats-your-commit-style/style-3.png" alt="Commit Style #3" />
</div>

If you noticed carefully, some of the commits had finer details engrained in them. These commits not only describe the exact location of the change, but also the parent of that feature.

## Where to use which style?

It's completely upon you, how you wish to do it. You can apply any of the styles in any kind of project. And anyone can pick them up pretty easily after looking at some of your commits.

<span class="note">I am a big fan of #2 now and I have shifted my commit style to this one. I enjoy committing this way for some odd reason as I think that someday I will read my commits and have a good time.</span>
