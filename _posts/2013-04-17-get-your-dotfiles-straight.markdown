---
author: Aniket
layout: post
type: post
date: 2013-04-17 17:01
title: "Get your dotfiles straight"
category: notes
tags: []
---
<p class="lead">Fiddling with dotfiles has made me learn many things. I learnt that data needs to organized well everywhere. When you make aliases or write functions for each type of tool that you use, you should organize it well.</p>

I thank [Holman](https://github.com/holman) for his set of [dotfiles](https://github.com/holman/dotfiles). They're great and the kind of organization he has developed over there is remarkable. Over 700 people use his files and are making there own renditions. I am one of them and I am proud of it.

It's great to use dotfiles because they are **powerful**, very powerful. And they make you learn a lot.

I had to make some changes for Holman's dotfiles to work for me. The major problem I faced was the fact that I use `oh-my-zsh` and it has it's own set of features to take care of. And then, Holman's dotfiles work from the your cloned repo. To fix it, I changed one variable and introduced my own. `$ZSH` was changed to `$ZSHDOT` everywhere and I changed `$ZSH` to point to `.oh-my-zsh` and everything became _peaceful_. It really did give me a greater sense of peace once all of this was done, because now I could type in `c` to `cd` to my project folder. Similarly, `h` took me to my home. And if I need to add a new function, I can make a change in my repo and it will be done. If I feel someone has made a better feature, I can get it from their repo. It's all collaborative and in a much bigger sense.

<span class="note">There's so much that one can do with their dotfiles and I would recommend you try them out.</span>