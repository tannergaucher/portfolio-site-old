---
title: "Responsive UI Themes with @prefers-color-scheme Media Query and CSS variables"
date: "2019-11-13"
description: "Detect if a user is in light or dark mode and present a themed UI accordingly."
tags: ["CSS", "Web"]
---

<!-- VIDEO / GIF HERE  -->

#### Minimal implementation of a responsive color scheme

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

a {
  color: var(--href-color);
}
```

First declare some root CSS variables. To keep things simple, just a text color, a background color, and a link color. Then add the media query `prefers-color-scheme`, which will detect if the user's system is in dark mode. If we detect dark mode, we can switch any arbitrary CSS value inside the media query. In this case, setting the text color to white and the background color to black.

### Related Links

- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
