---
layout: post
title:  "Creating Animated SVGs"
date:   2018-04-17 16:06:21 -0800
categories: svg programming
---

I stumbled across this type of animation while browsing through the [anime.js library](https://www.google.com). I wanted to include it on my own personal website, but didn't want to load a whole entire library just for that one effect. I Googled a little further and stumbled across [this post](https://jakearchibald.com/2013/animated-line-drawing-svg/) which is what I have been following. 

I've used SVGs before in the form of FontAwesome icons, and I knew some of the benefits of using this type of representation using Bezier curves. But I've never created one, so this is how I did it.

*1) Create SVG graphic.*

SVG graphics can be created in Illustrator CC. In older versions, save it as .ai and convert it into SVG using [this website](https://cloudconvert.com/ai-to-svg).

If you want to, you can further minify it using: http://www.svgminify.com/

*2) Include the SVG on the page you're using it on.*

For Jekyll, I used the Liquid tags to actually have the SVG notation embedded onto the page because that way, you can manipulate the `stroke-dasharray` and `stroke-dashoffset` properties. If you use the `img` tag, then this doesn't work.

*3) Loop through all of the paths to get the multiple line drawing effect.*

My SVG file had multiple paths, so get Javascript to grab all the paths to loop through them:

```javascript
var paths = document.querySelectorAll('.svg-animate path');

paths.forEach( 
function(path, currentIndex, listObj) { 
    ...
}
```