/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "21bbdd8452bf3a667030db3fe95c27ed"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "manifest.json",
    "revision": "89be60895176466398d53bd4a693d9f6"
  },
  {
    "url": "static/favicon_white.ico",
    "revision": "8b497017267ec6b0bf11a8c4170b7157"
  },
  {
    "url": "static/favicon.ico",
    "revision": "7702c3dee145bffd128272b08ad719a1"
  },
  {
    "url": "static/icons/black/icon-128x128.png",
    "revision": "d1769b7f7953f3fdcf99cc7571730654"
  },
  {
    "url": "static/icons/black/icon-144x144.png",
    "revision": "4a7373744344b348f1fbe58d4c0c3ddb"
  },
  {
    "url": "static/icons/black/icon-152x152.png",
    "revision": "05afbc15b4753d062fb900178257ba66"
  },
  {
    "url": "static/icons/black/icon-192x192.png",
    "revision": "573b63aa71575696a8e37caade26ae08"
  },
  {
    "url": "static/icons/black/icon-384x384.png",
    "revision": "59ea880e374cb0c293290602e5151195"
  },
  {
    "url": "static/icons/black/icon-512x512.png",
    "revision": "84c592f8262196b0d97ae89d4cddb07c"
  },
  {
    "url": "static/icons/black/icon-72x72.png",
    "revision": "8f916eb2b15e3dcc94a042d10c3531e7"
  },
  {
    "url": "static/icons/black/icon-96x96.png",
    "revision": "0ef26ffc4bc7978659fad7c588ed7b0e"
  },
  {
    "url": "static/icons/white/icon-128x128.png",
    "revision": "259a13a79e6331da1874a88da2a3ca83"
  },
  {
    "url": "static/icons/white/icon-144x144.png",
    "revision": "69d9182b1f83d27c22e2691795c39f6d"
  },
  {
    "url": "static/icons/white/icon-152x152.png",
    "revision": "3cbbc67bfed1130d3150992d724c9f94"
  },
  {
    "url": "static/icons/white/icon-192x192.png",
    "revision": "1af17447c061bfa1d857f3b084067bb5"
  },
  {
    "url": "static/icons/white/icon-384x384.png",
    "revision": "b9a6272041338c1d662153522995df15"
  },
  {
    "url": "static/icons/white/icon-512x512.png",
    "revision": "fac445014b8c86ce97de922019662e15"
  },
  {
    "url": "static/icons/white/icon-72x72.png",
    "revision": "4ebbf72a3fcb945d9bb18c8c943fb174"
  },
  {
    "url": "static/icons/white/icon-96x96.png",
    "revision": "d60f5b709badbec5387c3ef4c3ad79fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
