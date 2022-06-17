---
layout: ../../layouts/project.astro
title: React Redux Minesweeper
client: Self
publishDate: 2022-06-16 00:00:00
img: https://cynicade.xyz/static/img/minesweeper.png
description: |
  Tried my hand at Redux with React. Was pretty fun!
tags:
  - React
  - Redux
  - NodeJS
---

*You can find a live version [**here**](https://cynicade.xyz/minesweeper) and the code [**here**](https://github.com/cynicade/react-redux-minesweeper)*   

First I had an idea to build minesweeper in React. I quickly realised that I'd have to do a lot of prop-drilling to get multiple cells to
open with one click, so I decided to use Redux for state management. I had only used it in once in a different project before and I didn't
really get it back then (2 years ago). My mistake then was not reading the docs (I know) and just looking for a tutorial. This time around
though, I went straight for the docs and everything clicked. Only got a little stuck with async thunks and correct typing, but a quick revisit
of the docs solved my problem.   

The grids are generated on the backend, which is unnecessary for a single player game, but first of all, building APIs and connecting them to
the frontend is fun, and secondly, I also had a (perhaps a little ambitious) idea to add multiplayer to the game.   

I had recently watched a [**video by Hussein Nasser**](https://www.youtube.com/watch?v=gzIcGhJC8hA) about Redis with websockets and the part about Redis' pub/sub
functionality was intriguing, so I figured I'd use it for this project, specifically for the multiplayer since I didn't really need persistent storage.   

As it turns out, Redis is a fair bit different from other NoSQL databases, like MongoDB. The API is fairly limited, at least relative to the
aforementioned MongoDB. I guess I learned the hard way why it's mainly used for caching and not as a primary database.   

As it stands, I still haven't finished the multiplayer part of the project, but I'm planning on doing so soon. Just taking a short break from it.