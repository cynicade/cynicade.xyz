---
layout: ../../../layouts/project.astro
title: The classic full stack todo app
client: Self
publishDate: 2021-02-18 00:00:00
img: https://cynicade.xyz/static/img/todo.png
description: 
tags:
  - React
  - Golang
  - PostgreSQL
  - Auth
---

*You can find the code [**here**](https://github.com/cynicade/fullstacktodo-frontend)*   

Not really much to talk about here, it's just another full stack todo app. Not super proud of it, I'd make it much better if I made it now, but what's done
is done.   

I used Go for the backend with the Fiber framework, which is inspired by the Express framework for NodeJS. Was a fun development a experience.

There's authentication using JWTs and full CRUD functionality for the todos.   

*"Why is there no live version of this?"* I hear you ask. Well, because for some reason it's broken 😂. If you clone the repos for the backend and the frontend
it works fine locally however, I promise. You need a PostgreSQL database running and to set some things in a .env file. It's probably a simple fix and I'll get around to fixing it sometime, but I'm more focused on other things at the moment.   

And because probably nobody is going to go through the trouble, here's a [**short demo**](https://youtu.be/IgKS57lCiew).


