
shadow.cljs.devtools.client.env.module_loaded('index');

try { dev.app.init(); } catch (e) { console.error("An error occurred when calling (dev.app/init)"); throw(e); }