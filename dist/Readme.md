## Website Performance Optimization portfolio project
The challenge was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques explained in the Udacity's [Critical Rendering Path course](https://www.udacity.com/course/ud884).

## Installation:
1.1 Clone or Download this repo:
```bash
$ git clone https://github.com/Martinka0/Website-Optimization
 ```
1.2 Simply click on index.html in the "dist" folder to open the website in your browser.

2.1 To inspect the site on your phone, you can run a local server
 ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
2.2 Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

2.3 Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)


## Website optimization:
#### Part 1: Optimize PageSpeed Insights score for index.html
1.1 index.html
* In-lined style.css into the main body.
* In-lined web font into index.html.
* Added media="print" to "print.css" link. 
* Added async for links to JaveScript files and move them to the end of the body.
* Minified HTML, CSS and JaveScript files.
* Added a meta tag for Cache-control.

#### Part 2: Optimize Frames per Second in pizza.html
* Changed logic in the main.js to stop force synchronous layout and improve performance.

#### Part 3: Used Gulp for automation.
* Made a "dist" folder with production-ready files.
* Compressed  and resized all images.
* Minified HTML, CSS and JaveScript files.
Sass 

## Recources:
* [Chrome Office Hours: Performance with Paul Lewis and Paul Irish](https://www.youtube.com/watch?v=z0_jD8nO5Zw)
* [Udacity' Web Tooling & Automation course by  Google](https://www.udacity.com/course/web-tooling-automation--ud892)
* [Gulp](http://gulpjs.com/), [Sass](http://sass-lang.com/install)
* [Writing Efficient JavaScript by by Nicholas C. Zakas](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html)
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
* [High Performance Browser Networking by ILYA GRIGORIK](https://hpbn.co/?utm_source=igvita&utm_medium=referral&utm_campaign=igvita-homepage)

