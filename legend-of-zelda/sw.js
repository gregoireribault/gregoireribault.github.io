'use strict'
/* eslint-env serviceworker */

// Service worker of the page installed as an app: the network first, so that a new version is played as soon as
// there is one, and a copy of every file to play without network. The files of the game are fetched with ?v=…
// (see utils/io.js): the copy is looked for without it
const CACHE = 'loz-eeb731b'
const FILES = [
  './',
  'build/index.js',
  'build/game.js',
  'data/game.loz',
  'data/sounds.loz',
  'data/musics.loz',
  'data/sprites.loz',
  'images/sprites.png',
  'audio/sounds.mp3',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()))
})

// The copies of the former versions go
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim()))
})

self.addEventListener('fetch', event => {
  const request = event.request
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return
  }
  event.respondWith(fetch(request)
    .then(response => {
      if (response.ok) {
        const copy = response.clone()
        caches.open(CACHE).then(cache => cache.put(request, copy))
      }
      return response
    })
    .catch(() => caches.match(request, { ignoreSearch: true }).then(copy => copy ?? Response.error())))
})
