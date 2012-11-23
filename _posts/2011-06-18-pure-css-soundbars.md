---
author: Aniket
title: Pure CSS Soundbars
excerpt: |
  Keep thinking and you will surely find a new way to have fun with CSS.
  
  Yesterday, I introduced myself to CSS3 keyframes and today (out of the blue), I came up with these Pure CSS Sound Bars.
  
  There's just one thing to it, they work only in "modern" browsers like FF5/Aurora, Webkit and Chrome.
layout: post
category:
  - weblog
tags:
  - CSS
  - CSS3
  - Pure CSS Sound Bars
  - tutorial
post_format: [ ]
---
Keep thinking and you will surely find a new way to have fun with CSS.

Yesterday, I introduced myself to CSS3 keyframes and today (out of the blue), I came up with these Pure CSS Sound Bars.

There’s just one thing to it, they work only in “modern” browsers like FF5/Aurora, Webkit and Chrome.

This is the HTML markup for it:

    <div id="equalizer">
    <ul class="bars">
    <li class="bar1"></li>
    <li class="bar2"></li>
    <li class="bar3"></li>
    <li class="bar4"></li>
    <li class="bar5"></li>
    <li class="hidden"></li>
    </ul>
    </div>
    

And here goes the CSS:

    @-moz-keyframes move1 {
    0% { height: 50px; }
    25% { height: 200px; }
    75% { height: 150px; }
    100% { height: 50px; }
    }
    @-moz-keyframes move2 {
    0% { height: 25px; }
    25% { height: 125px; }
    75% { height: 200px; }
    100% { height: 25px; }
    }
    @-moz-keyframes move3 {
    0% { height: 75px; }
    25% { height: 25px; }
    75% { height: 200px; }
    100% { height: 75px; }
    }
    @-moz-keyframes move4 {
    0% { height: 0px; }
    25% { height: 100px; }
    75% { height: 250px; }
    100% { height: 0px; }
    }
    @-moz-keyframes move5 {
    0% { height: 125px; }
    25% { height: 50px; }
    75% { height: 225px; }
    100% { height: 125px; }
    }
    @-moz-keyframes flicker {
    0% { box-shadow: 0px 0px 5px #ddd; }
    50% { box-shadow: 0px 0px 10px #fff; }
    100% { box-shadow: none; }
    }
    @-webkit-keyframes move1 {
    0% { height: 50px; }
    25% { height: 200px; }
    75% { height: 150px; }
    100% { height: 50px; }
    }
    @-webkit-keyframes move2 {
    0% { height: 25px; }
    25% { height: 125px; }
    75% { height: 200px; }
    100% { height: 25px; }
    }
    @-webkit-keyframes move3 {
    0% { height: 75px; }
    25% { height: 25px; }
    75% { height: 200px; }
    100% { height: 75px; }
    }
    @-webkit-keyframes move4 {
    0% { height: 0px; }
    25% { height: 100px; }
    75% { height: 250px; }
    100% { height: 0px; }
    }
    @-webkit-keyframes move5 {
    0% { height: 125px; }
    25% { height: 50px; }
    75% { height: 225px; }
    100% { height: 125px; }
    }
    @-webkit-keyframes flicker {
    0% { box-shadow: 0px 0px 5px #ddd; }
    50% { box-shadow: 0px 0px 10px #fff; }
    100% { box-shadow: none; }
    }
    #equalizer {
    float: left;
    display: block;
    height: 75%;
    margin-left: 41%;
    -moz-animation: flicker 1s infinite ease-in-out;
    -webkit-animation: flicker 1s infinite ease-in-out;
    }
    
    .bars {
    list-style: none;
    }
    
    .bars li {
    display: inline-block;
    width: 15px;
    margin-left: 5px;
    margin-right: 5px;
    
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: inset 0px 0px 2px #ddd;
    }
    
    .bars:first-child {
    margin-left: 0;
    }
    
    .bars:last-child {
    margin-right: 0;
    }
    
    .bar1 {
    height: 100px;
    background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.02, #F5251E),
    color-stop(0.5, #D93C15)
    );
    background-image: -moz-linear-gradient(
    left center,
    #F5251E 2%,
    #D93C15 50%
    );
    
    -moz-animation: move1 infinite 1s linear;
    -webkit-animation: move1 infinite 1s linear;
    }
    
    .bar2 {
    height: 200px;
    background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.02, #F5B120),
    color-stop(0.5, #D99115)
    );
    background-image: -moz-linear-gradient(
    left center,
    #F5B120 2%,
    #D99115 50%
    );
    
    -moz-animation: move2 infinite 2s linear;
    -webkit-animation: move2 infinite 2s linear;
    }
    
    .bar3 {
    height: 150px;
    background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.02, #70F523),
    color-stop(0.5, #B2D915)
    );
    background-image: -moz-linear-gradient(
    left center,
    #70F523 2%,
    #B2D915 50%
    );
    
    -moz-animation: move3 infinite 1s linear;
    -webkit-animation: move3 infinite 1s linear;
    }
    
    .bar4 {
    height: 75px;
    background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.02, #257FF5),
    color-stop(0.5, #15B2D9)
    );
    background-image: -moz-linear-gradient(
    left center,
    #257FF5 2%,
    #15B2D9 50%
    );
    
    -moz-animation: move4 infinite 2s linear;
    -webkit-animation: move4 infinite 2s linear;
    }
    
    .bar5 {
    height: 50px;
    background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.02, #EE27F5),
    color-stop(0.5, #D915AB)
    );
    background-image: -moz-linear-gradient(
    left center,
    #EE27F5 2%,
    #D915AB 50%
    );
    
    -moz-animation: move5 infinite 0.4s linear;
    -webkit-animation: move5 infinite 0.4s linear;
    }
    
    .hidden {
    height: 300px;
    box-shadow: none !important;
    }

[View Demo][1]

 [1]: https://developer.mozilla.org/en-US/demos/detail/pure-css-sound-bars/launch "Pure CSS Sound Bars"