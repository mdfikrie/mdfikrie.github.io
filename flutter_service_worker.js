'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "12a92ef79835b40a6093bcc932b54998",
"splash/img/light-2x.png": "5c9b84b32464050561e3e68973f5bf87",
"splash/img/dark-4x.png": "e9faf95a47071aaf42a73ab2b028f5c3",
"splash/img/light-3x.png": "fb06e8c8274283280efa1e73f43c5f44",
"splash/img/dark-3x.png": "fb06e8c8274283280efa1e73f43c5f44",
"splash/img/light-4x.png": "e9faf95a47071aaf42a73ab2b028f5c3",
"splash/img/dark-2x.png": "5c9b84b32464050561e3e68973f5bf87",
"splash/img/dark-1x.png": "c9523294960b0526a23dd238d4b8fee9",
"splash/img/light-1x.png": "c9523294960b0526a23dd238d4b8fee9",
"index.html": "3ddae78444c20a7213848609980d9235",
"/": "3ddae78444c20a7213848609980d9235",
"main.dart.js": "dbd2cb1d33af3337450a158ef7b6fa49",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe3efdabbab826762c914b1b0811f44f",
".git/config": "7fff1ca78d8c1d348e91621a4bb3bf97",
".git/objects/59/3490f691c7638b51ed0a1e7c5b61e789ffface": "8a838d6b7534a7f0f76e81dde7b9fc40",
".git/objects/66/f9bcd8f67bbb10b580f66fe11f038ad668e1c4": "40053ab092b6674fce02bd340a104b9e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/da92406cdd2cd9f74018e91811591e73f169f6": "84e858bd5c24f8267727b0ee3c75eeaa",
".git/objects/3d/822b754b03b4844bc5f4f22bec6eaca56fe6c2": "a863e28d30b337ba7d69a4c6d8d6ec26",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/33/777ebb0c5bb97741109d7e5008779a6b70ddc6": "90afcb70c861149ad0094b56bdc67ea5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/cdef6db18bf726ad42c27cc14c3a7d8d58a512": "824fe2a1e8501c217967b1b9d04b848f",
".git/objects/a2/74216e3268ec4677d5633ad31e417d8decea71": "ad5e03f75416082f9c8b5016d1a47126",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8078d4b7096962662aab87abab5c94e348cd44": "e7b8a97219e0603f5e0e9a9ad2bf22f1",
".git/objects/fc/c38b4c0d0cdce76733a12207c602e6419e872f": "d1831bd1145a45a5032a59284d41a81a",
".git/objects/fd/679e267ba1c86ba526373a49c398de8749b8fc": "8fe60e02076d7d57e7ad6f2ae311e47d",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/4b/2fa7a109aea86403b20b394c54329acecdded1": "65f22959eb3552c80b3dd0bce7666c0f",
".git/objects/80/f6c8ead4b91c244baf415883f0d0903f045b85": "57703a5bf68a495c455d73851ba39038",
".git/objects/8f/2959699fe27e56ebc1b64d251d2c89cfc3b4f5": "7e8ab9abb1e86ca094165ee9e7208a19",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8c2138df1a35706ca790b82b16d792491ff881": "6d9fc73a430fc97b3b4127bf053d9cbc",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/ccbe73356588cbb6a32c023957da973c331566": "10fc25c4906527432a0656ef5b992580",
".git/objects/75/bc2d462ef9d56c2a7fae21fa4440144d6dada8": "ec8d9fc8a0185cc9ca00209ec90152f5",
".git/objects/81/7dc764811d2f98093b4922d015f685c6b442a4": "4ac750162ebb08623b4bd392409d994b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/fac1caf097d079ad709b429832e5f8705f146f": "9a63d2a7e8262d66e16c11d81785bf96",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/19c0a4135e1ebeb5893bf4d38602e7bb5dde63": "70711df2ae7ac0bae0ce3c0276bad0ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/4a89503352f4db19cd1d7e449930464494270f": "8f60fd9003c9254dce579539dfdaa384",
".git/objects/b9/59ab917ae3c4bbe29e3ab799d85e77b5b9d37c": "7344ee0ae74dcd7dbd0e53e8be3c3c28",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/e5f1359eba9bc060aa4f41223b775b538c651f": "b06fec94e992e677910d5dbacc39e8bf",
".git/objects/fa/ba633be07449933416b4fa1fd26114f0a3fab3": "d952ce9da0ccfcc37ecf4a7e56e1208b",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/a31e8ff3353fd98c779987bcb2ea5218b91aab": "b411efd2c811760e28db1d56309e56d2",
".git/objects/f8/41ba1fd05336f2470161f7d814d0d3e4b28cbd": "2567600a4e3da5fe20824ac49b67822b",
".git/objects/f8/f41d3e4b6290bce545e4364a3d0cc04e809fff": "10554774e5eac3f94ea2c4ea263e4e8e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/8c538c2d35563982ef971f3f4f50c6b07ac126": "72f1c2920507e9181e016050e0450203",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b2007975c7af10c81f79131cc6a046ee",
".git/logs/refs/heads/main": "bead7417efc818df56e3389dc4a7c287",
".git/logs/refs/remotes/origin/main": "9ca9bf679785eb117232a1798d06f992",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "ebc3b9dcf6a859a0a57b615d00ebf2d0",
".git/refs/remotes/origin/main": "ebc3b9dcf6a859a0a57b615d00ebf2d0",
".git/index": "5fe77e519e46a36a281a112bd43ba343",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "cf91ffd98e706583e03273df7865fa8c",
"assets/AssetManifest.json": "5af1b9e404d83bf6587ebfe0c186d80e",
"assets/NOTICES": "2c390b760a3a42fadca7f6a66176966c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5b2f96824795d04d38bfcfb06a91af23",
"assets/fonts/MaterialIcons-Regular.otf": "ab5c770a86d7e1d621d1a78e72e1014f",
"assets/assets/svg/arrow.svg": "f39d1d20bf69b8e8317756be27a222ce",
"assets/assets/svg/line_window.svg": "baea1bbe91e0131d1bd928d235511618",
"assets/assets/images/demo4.png": "9cd6976d2e9449ffe9bfcf5ada4c1938",
"assets/assets/images/demo1.png": "e7e26d799f4172ce690bf182aa859837",
"assets/assets/images/demo3.png": "94e39858f3f1c5573a8fb6da69c1f218",
"assets/assets/images/demo2.png": "fbaf659af42c359add9d5937ca42fc9a",
"assets/assets/images/demo.png": "206b37757e6837ca9af34733ec7b8518",
"assets/assets/images/splash.png": "c18fb682dfb346073a54c16bec12432c",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
