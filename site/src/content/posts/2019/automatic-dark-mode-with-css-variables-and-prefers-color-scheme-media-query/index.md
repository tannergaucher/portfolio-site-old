---
title: "Switch Between Light / Dark Mode with prefers-color-scheme Media Query and CSS Variables"
date: "2019-11-13"
description: "A simple demo that..."
tags: ["CSS", "Web"]
---

<!-- GIF HERE  -->

As someone who spends a lot of time in front of screens, but doesn't enjoy reading text from screen, I put a decent amount of effort into tweaking settings so that the content that I am consuming presents itsef in the most readable way. Usually that means bumping the font size way up, getting rid of ads and annoying distractions, even if that means inspecting an element and throwing in a `display: none` (sorry codesandbox add on the bottom left), and switching to dark mode if that is an option.

Though I tend to live inside Google Chrome, ever since I discovered the reader reader view in Safari, when I come across some content that I would like to read I copy the link and open it up in safari reader mode, where I can adjust the text size, background color, and even font family and font to my liking.

> I look forward to the future of the web moving more towards a default experience similar to safari reader mode, where I declare my preferences for how I want content to be presented, and content automatically presents itself in that way.

Cutting and pasting a link whenever I want to read something doesn't take a ton of effort, but constantly swapping between browsers is not exactly an elegant solution. I've started using the `user-prefers-color-scheme` CSS media
query because it's a step closer in this direction where content conforms to one's own preferences.

Here's a minimal example of the `user-prefers-color-scheme` media query. It's an elegant solution to be able to detect the current mode of a user's system with a media query and toggle between a light and dark UI using CSS variables, without having to use any javascript.

```css
:root {
  --text-color: black;
  --background: white;
  --href-color: blue;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --background: black;
    --href-color: lime;
  }
}

body {
  background: var(--background);
  color: var(--text-color);
}
```

First we declare some root CSS variables. To keep things simple here, we just a text color and a background color, but this can be extended. Then we query `prefers-color-scheme`. If the user's system is in dark mode, then we can switch the values of the css variable to any arbitrary value.

### Related Links

- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
