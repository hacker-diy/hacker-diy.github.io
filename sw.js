importScripts("./sw-toolbox.js");
toolbox.precache([
    "index.html",
    "icon-512.png"
]);
toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 2 });