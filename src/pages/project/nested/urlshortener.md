---
layout: ../../../layouts/project.astro
title: Simple url shortnener
client: Self
publishDate: 2022-06-23 00:00:00
img: https://cynicade.xyz/static/img/urls.png
description:
tags:
  - React
  - NodeJS
  - Express
  - MongoDB
---

_You can find the live version [**here**](https://cynicade.xyz/urls)_

A simple url shortener with a React front-end I built in a couple hours. As with every project I build, I wanted to learn something new with this one,
so I used TailwindCSS for my styling.

There isn't much going on in the front-end, a user just enters a url they want shortened and get back a "shorter" one they can use that points to the same site
the original one did. I say "shorter" because the shortened urls have the format of _cynicade.xyz/urls/api/$short_, which is obviously not very short. I could easily
make it shorter by using another domain (I use cynicade.xyz for almost all my projects, so I have to give them a different URL each time), or by making a few changes to my Nginx configuration, but this isn't really
much more than a portfolio project, so I don't feel like those are necessary.
