 **Website optimization:**
Optimizations made to:
1.1 index.html
* In-lined style.css into the main body.
* In-lined web font into index.html.
* Added media="print" to "print.css" link. 
* Added async for links to JaveScript files and move them to the end of the body.
* Minified HTML, CSS and JaveScript files.

1.2 view/js/main.js for index.html
* Changed logic in the main.js to stop force synchronous layout and improve performance.

Detailed steps describing how to run the app successfully:

* Made a "dist" file with production-ready files.
* In-lined style.css into index.html.

* Compressed  and resized all images.
* Minified HTML, CSS and JaveScript files.


* Added a meta tag for Cache-control.

* Used Gulp for automation. (compression and minifications of some files) 
