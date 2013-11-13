---
author: Aniket
layout: post
type: post
date: 2013-05-19 15:55
title: "HNsearch, my first gem"
category: note
tags: []
---

<p class="lead">I finally wrote my first Ruby gem and it's called <a href="https://github.com/aniketpant/HNsearch">HNsearch</a>. All it does is allows me to search for users and items on Hacker News from my terminal. It was a great experience for me to write a gem of my own and if you like to work with Ruby, then you should write one too.</p>

## What all did I use?

HNsearch uses `Nestful`, `Thor` and `JSON` gems.

- **Nestful** is a simple gem that allows one to make requests. I used it to communicate to the [hnsearch API](https://www.hnsearch.com/api).
- **Thor** is a powerful gem that helped me write the command line interface.
- **JSON** does what it is supposed to do. It parses the generated hash to a JSON object which was easy to fiddle with.

## How did I do it?

It wasn't a lot of effort to write a small gem of this sort. I started with some starting queries on the Internet like _writing your first ruby gem_ and _how to write your first ruby gem_. I found some great posts on the same -

- [How to write a gem?](http://stackoverflow.com/questions/2194547/ruby-how-to-write-a-gem)
- [Make your own gem](http://guides.rubygems.org/make-your-own-gem/)
- [Develop a RubyGem using Bundler](https://github.com/radar/guides/blob/master/gem-development.md)

Since, I was trying to write a command-line application, the third link was the most useful for me. I quickly set up a Bundler project using `bundle gem HNsearch` and it created my starting directory structure.

~~~
% tree
.
|-- .gitignore
|-- Gemfile
|-- HNsearch.gemspec
|-- lib
|   |-- HNsearch
|   |   `-- version.rb
|   `-- HNsearch.rb
|-- Rakefile
`-- README.md
~~~

As I needed a gem that I could run directly from the terminal, I created a directory `bin` and created a file called `HNsearch` inside it. The file just starts the `CLI` from my module `HNsearch`.

Writing a gem of your own is a satisfying experience and you get to learn a lot from it. And another advantage that comes along with it is the part where others can download your gem and use it.

## Screenshots

<div class="media">
  <img src="/assets/images/hnsearch-my-first-gem/screenshot-1.jpg" title="Screenshot 1" alt="Screenshot 1" />
</div>

<div class="media">
  <img src="/assets/images/hnsearch-my-first-gem/screenshot-2.jpg" title="Screenshot 2" alt="Screenshot 2" />
</div>