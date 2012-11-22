---
author: Aniket
title: New CSS Trick
excerpt:
layout: post
category:
  - Tutorial
tags:
  - CSS
  - Trick
post_format: [ ]
---
This was something I was trying for sometime. Finally it’s working. Have a look at [this][1].

    .shift {
                    list-style: none;
                    display: inline-block;
                }
    
                .shift li {
                    background: orangered;
                    width: 0%;
                    display: block;
                    -webkit-transition: all 0.125s ease-in-out;
                    -moz-transition: all 0.125s ease-in-out;
                    transition: all 0.125s ease-in-out;
                }
    
                .shift li:hover {
                    width: 100%;
                    -webkit-transition: all 0.25s ease-in-out;
                    -moz-transition: all 0.25s ease-in-out;
                    transition: all 0.25s ease-in-out;
                }
    
                .shift li a {
                    text-transform: uppercase;
                    display: block;
                    color: #000;
                    font-size: 1em;
                    margin: 0.5em;
                    padding: 0.5em;
                    text-decoration: none;
                    white-space: nowrap;
                }
    

Here is the HTML.

    <ul class="shift">
                    <li><a href="#">Hover over me</a></li>
                    <li><a href="#">Hover over me too</a></li>
                </ul>
    

I tried this yesterday but when I had inserted blank spaces in the anchor element, since the li element is set with a 0% width in the beginning, the text was getting wrapped.

A while back I showed it to [Harry Roberts][2]. Thanks to him, this thing is done. I just needed the following code in the anchor element.

    white-space: nowrap

[View Demo][3]

 [1]: http://www.aniketpant.com/example/new-css-trick "Demo"
 [2]: http://csswizardry.com/ "Harry's Site"
 [3]: http://www.aniketpant.com/example/new-css-trick