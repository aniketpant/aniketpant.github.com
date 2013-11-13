---
author: Aniket
title: CodeIgniter with jQuery Problem
layout: post
type: post
category: weblog
---

Yesterday, I was trying to run a jquery in my CodeIgniter view and there was some problem.

It wasn't working. I couldn't figure out why. So I asked some friends of mine and they had no idea why it wasn't working.

So, I posted on the CI forum. Here is the [link](http://codeigniter.com/forums/viewthread/194701) to my post.

Today, I was seeing a sample code and then I was something and everything was clear.

I had made the most idiotic error.

It should have been
```html
<script src="<?php echo base_url(); ?>public/js/jquery.js" type="text/javascript"></script>
```

rather than
```html
<script href="<?php echo base_url(); ?>public/js/jquery.js" type="text/javascript"></script>
```

I ended up wasting quite sometime because of this. After this, I realised that my Netbeans code template was written wrong.