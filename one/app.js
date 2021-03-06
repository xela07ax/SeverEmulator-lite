const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

let hdrWpd = {
    "Cache-Control": "public, max-age=31536000",
    "Content-Language": "ru",
    "Content-Type": "text/javascript;charset=UTF-8",
    "Expires": "Wed, 03 Mar 2021 05:27:03 GMT",
    "Last-Modified": "Mon, 02 Mar 2020 10:16:47 GMT",
    "Server": "Jetty(8.1.8.v20121106)"
}
let hdrJs = {
    "Accept-Ranges": "bytes",
    "Content-Length": "106",
    "Content-Type": "application/x-javascript",
    "Last-Modified": "Tue, 18 Feb 2020 07:04:14 GMT",
    "Server": "Jetty(8.1.8.v20121106)",
    "Vary": "Accept-Encoding"
}
let hdrCssDsp = {
    "Cache-Control": "private, max-age=129600, must-revalidate",
    "Content-Language": "ru",
    "Content-Length": "1028",
    "Content-Type": "text/css;charset=UTF-8",
    "Expires": "Wed, 04 Mar 2020 17:27:03 GMT",
    "Server": "Jetty(8.1.8.v20121106)"
}
let hdrCss = {
    "Cache-Control": "public, max-age=1800",
    "Content-Length": "1393",
    "Content-Type": "text/css",
    "ETag": "\"016bae19051d465e18c59d160b44fe08b\"",
    "Last-Modified": "Mon, 02 Mar 2020 09:17:50 GMT",
    "Server": "Jetty(8.1.8.v20121106)"
}
let hdrGif = {
    "Cache-Control": "public, max-age=86400",
    "Content-Language": "ru",
    "Content-Length": "1849",
    "Content-Type": "image/gif;charset=UTF-8",
    "ETag": "\"099f63ef860cab9963761bd1a4815a942\"",
    "Expires": "Tue, 02 Mar 2021 10:11:55 GMT",
    "Last-Modified": "Mon, 02 Mar 2020 10:16:49 GMT",
    "Server": "Jetty(8.1.8.v20121106)"
}
let hdrPng = {
    "Cache-Control": "public, max-age=86400",
    "Content-Language": "ru",
    "Content-Length": "1849",
    "Content-Type": "image/png;charset=UTF-8",
    "ETag": "\"099f63ef860cab9963761bd1a4815a942\"",
    "Expires": "Tue, 02 Mar 2021 10:11:55 GMT",
    "Last-Modified": "Mon, 02 Mar 2020 10:16:49 GMT",
    "Server": "Jetty(8.1.8.v20121106)"
}
router.get('/',function(req,res){
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Language","ru");
    res.setHeader("Content-Length", "18415");
    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    res.setHeader("Desktop", "Desktop_294");
    res.setHeader("Expires", "-1");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Server", "Jetty(8.1.8.v20121106)");
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.use('/static', express.static(__dirname + '/static'));
app.use('/versioned', express.static(__dirname + '/versioned'));
//app.use('/zkau', express.static(__dirname + '/zkau'));
app.use('/js', express.static(__dirname + '/js'));

router.get(/\/zkcomet;jsessionid.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zukao.js'));
});
router.post(/\/zkau;.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zukao.js'));
});
router.get(/\/js\/selDrag\.js.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/js/selDrag.js'), { headers: hdrJs, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/js\/zssex\.wpd.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/js/zssex.wpd'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/js\/otr\.wpd.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/js/otr.wpd'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/js\/zkbind\.wpd.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/js/zkbind.wpd'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/js\/zul\.lang\.wpd.*/,function(req,res){
    console.log('zul.lang.wpd')
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/js/zul.lang.wpd'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/js\/zk\.wpd.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/js/zk.wpd'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/override\.city\.css\.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/city/override.city.css.dsp'), { headers: hdrCssDsp, lastModified: false, etag: false });
});
router.get(/\/static\/resources\/forms\/global\/applied.css.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/static/resources/forms/global/applied.css'), { headers: hdrCss, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/css\/Actionbar.city.css.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/css/Actionbar.city.css.dsp'), { headers: hdrCssDsp, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/css\/jquery.gritter.css.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/css/jquery.gritter.css.dsp'), { headers: hdrCssDsp, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/css\/default.css.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/css/default.css.dsp'), { headers: hdrCssDsp, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/_zkiju-city\/zul\/css\/zk\.wcs.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zkau/web/30c5331e/_zkiju-city/zul/css/zk.wcs'), { headers: hdrCssDsp, lastModified: false, etag: false });
});
router.get(/\/libraries-js\.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/libraries-js.dsp'), { headers: hdrWpd, lastModified: false, etag: false });
});
router.get(/\/zk-full-js\.dsp.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/zk-full-js.dsp'), { headers: hdrWpd, lastModified: false, etag: false });
});
// IMAGES
router.get(/\/zkau\/web\/30c5331e\/city\/zul\/img\/misc\/progress\.gif.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/progress.gif'), { headers: hdrGif, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/img\/dot\.gif.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/dot.gif'), { headers: hdrGif, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/miscellaneous\/doc_state\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/doc_state.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/zul\/img\/groupbox\/groupbox-arrow\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/groupbox-arrow.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/expand_all\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/expand_all.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/collapse_all\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/collapse_all.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/24\/document_check\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/document_check.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/24\/print.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/print.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/static\/images\/file:sufd\.config\/forms\/\/images\/icons\/24\/to_right\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/to_right.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/static\/images\/file:sufd\.config\/forms\/\/images\/icons\/24\/dict_actualize\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/dict_actualize.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/table_delete\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/table_delete.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/exit\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/exit.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/static\/images\/file:sufd\.config\/forms\/\/images\/icons\/16\/book_open2\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/book_open2.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/info\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/info.png'), { headers: hdrPng, lastModified: false, etag: false });
});
router.get(/\/zkau\/web\/30c5331e\/city\/icons\/16\/table_add\.png.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/table_add.png'), { headers: hdrPng, lastModified: false, etag: false });
});

router.get(/\/favicon\.ico.*/,function(req,res){
    res.sendFile(path.join(__dirname+'/img/favicon.ico'), { headers: hdrPng, lastModified: false, etag: false });
});




let port = 3665
//add the router
app.use('/', router);
app.listen(process.env.port || port);

console.log('Running at Port '+port);
