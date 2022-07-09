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

_You can find a live version [**here**](https://cynicade.xyz/minesweeper) and the code [**here**](https://github.com/cynicade/react-redux-minesweeper)_

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

Also, the typings in the node package for Redis are horrible, I had to use the dirty `as unknown as <Type>` a few times to get around that.

I ended up not using the pub/sub stuff, maybe I'll refactor the backend to use it? I don't know. Currently, I just pass around events through sockets and
it works out just fine when I need to update all the clients in multiplayer mode.

Finally, the app is finished. Just a few minor details left to fix, mostly in the UI department, but everything is functional.

The way multiplayer currently works is:

1. One player makes a new multiplayer room by selecting the multiplayer option when clicking a difficulty in the "main menu".
2. A new room is created and the player can see the room ID in the top of the screen.
3. In order to join that room, other players have to click _Join Room_ in the "main menu" and enter the room ID in the modal that pops up.
4. Once in the room, players can click the checkmark next to their name to mark themselves as ready.
5. Once every player in the room is ready, the round starts.
6. The round ends whenever a player solves the grid, or when everyone loses. In case someone wins, they get a point.

This turned out to be a really fun project!
