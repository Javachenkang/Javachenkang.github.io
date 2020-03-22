/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/CK_Blog/Hexo/public/2020/02/01/hello-world/index.html","3bbd4869bdb7aee03eb6784939a95688"],["D:/CK_Blog/Hexo/public/2020/02/03/test/index.html","759e79bf4134e7f09adfff081eb0a6a0"],["D:/CK_Blog/Hexo/public/about/index.html","d15c477dbae0a7950958bb7838942417"],["D:/CK_Blog/Hexo/public/archives/2020/02/index.html","f03a3ab2e8d734fe5afdebcdef803ec9"],["D:/CK_Blog/Hexo/public/archives/2020/index.html","3f37d365efe58dd444d1bd2a4f4c14f9"],["D:/CK_Blog/Hexo/public/archives/index.html","16652afa4a0f2417e498cf1489a1945e"],["D:/CK_Blog/Hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/CK_Blog/Hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/CK_Blog/Hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/CK_Blog/Hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/CK_Blog/Hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/CK_Blog/Hexo/public/box/index.html","9d428d711c2a85768b1e1121e4cd5a9f"],["D:/CK_Blog/Hexo/public/categories/hexo/index.html","f582ffd8969884c16df76e78947c314e"],["D:/CK_Blog/Hexo/public/categories/index.html","3efcf51b9e3faa5d399ddc66698c68a6"],["D:/CK_Blog/Hexo/public/categories/test/index.html","236ebdc47e58c51d244fa52db74d4662"],["D:/CK_Blog/Hexo/public/categories/test2/index.html","99629ea2f75428e26b2155cd67d46017"],["D:/CK_Blog/Hexo/public/categories/test3/index.html","45ce22880e62d26db4f243dfb57b8482"],["D:/CK_Blog/Hexo/public/categories/分类A/index.html","803768df230f60e2f01700c31145fc97"],["D:/CK_Blog/Hexo/public/categories/分类A/分类B/index.html","218c3a03fe0f5b7137f500eb784c33f5"],["D:/CK_Blog/Hexo/public/categories/分类C/index.html","f4b19829bfa6bf0e5b966b961dd434b6"],["D:/CK_Blog/Hexo/public/categories/分类C/分类D/index.html","58eac3c8f7024a57d156ee4746fd1c04"],["D:/CK_Blog/Hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/CK_Blog/Hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/CK_Blog/Hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/CK_Blog/Hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/CK_Blog/Hexo/public/friends/index.html","96fac440ea5e688b8b369771a487ef8a"],["D:/CK_Blog/Hexo/public/images/ck_blog.jpg","52282ae1ab5e7c5f21eb0bd28defd604"],["D:/CK_Blog/Hexo/public/index.html","07b5480faef29c24339ed1e89f9ac4b2"],["D:/CK_Blog/Hexo/public/js/DigitalRain.js","501615363e4bf840f0e499a1c9fff6a7"],["D:/CK_Blog/Hexo/public/js/FunnyTitle.js","dc501f7840948651bb216a69bb265a6f"],["D:/CK_Blog/Hexo/public/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["D:/CK_Blog/Hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/CK_Blog/Hexo/public/js/click_show_text.js","473b08d5635a05ce5df56e5d9ccae7c5"],["D:/CK_Blog/Hexo/public/js/fireworks.js","926702a80c6c9ce4adada3760dbd0a6b"],["D:/CK_Blog/Hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/CK_Blog/Hexo/public/js/snow.js","ab44979a0ec91a6bc6ea48e286c7aecd"],["D:/CK_Blog/Hexo/public/js/volantis.js","87c8b6a1990415d9edb6a0fc188d8b4b"],["D:/CK_Blog/Hexo/public/lib/blog-encrypt.js","1e95eb64e58d1e6338a048bd4cd4986b"],["D:/CK_Blog/Hexo/public/messageboard/index.html","d64091ebf0093636a323d230838869d3"],["D:/CK_Blog/Hexo/public/resources/3D/index.html","321fefb393cdeced5db6da928a9adc76"],["D:/CK_Blog/Hexo/public/resources/index.css","a57e2b7b1ac4bd1b0c06f29850aed85c"],["D:/CK_Blog/Hexo/public/resources/index.html","1111bb8c9c7d39e801963f1eaeba2567"],["D:/CK_Blog/Hexo/public/resources/reset.css","4c48802ad3bc30f78346105688e7cecf"],["D:/CK_Blog/Hexo/public/style.css","34a1b93a7681870d884792104e7ab138"],["D:/CK_Blog/Hexo/public/tags/hexo/index.html","4f32b147fe8f938db113fa11189bba20"],["D:/CK_Blog/Hexo/public/tags/index.html","a9088614bc82778cbc3e0ef7845b78db"],["D:/CK_Blog/Hexo/public/tags/markdown/index.html","eb59c6baab39b7450cb7b08c4b8f5b0f"],["D:/CK_Blog/Hexo/public/tags/test2/index.html","45de973427942ba59bd5e5ad57e13086"],["D:/CK_Blog/Hexo/public/tags/test3/index.html","3050b5a49fd10632bca63e5532765630"],["D:/CK_Blog/Hexo/public/tags/test4/index.html","305174dbaf66b4f7f77c8fce616f3cb3"],["D:/CK_Blog/Hexo/public/tags/test5/index.html","9c18090b998ffc6ab289790c10a34478"],["D:/CK_Blog/Hexo/public/tags/分类A-分类B/index.html","0b41e8a27280a47228bca1c80c785fe2"],["D:/CK_Blog/Hexo/public/tags/分类C-分类D/index.html","9d3db4a57fcfde206200847ebcec1aa4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







