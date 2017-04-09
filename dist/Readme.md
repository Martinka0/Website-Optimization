
## Website Performance Optimization portfolio project
The challenge was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques explained in the [Udacity's Critical Rendering Path course](https://www.udacity.com/course/ud884).

## Installation:

#### Part 1: Simple download
1.1 Clone or Download this repo:
```bash
$> git clone https://github.com/Martinka0/Website-Optimization
```
1.2 Unzip the repo. In the dist directory, double click the index.html file to launch the website in your browser.

#### Part 2: Local server 
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

2.3 Copy the public URL ngrok gives you and try running it through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/)! 


## Website optimization:
#### Part 1: Optimize PageSpeed Insights score for index.html

* Compressed and resized all images.
* Minified HTML, CSS and JaveScript files.
* Inlined and moved style.css at the bottom of the main body.
* Inlined web font into at the bottom of the main body.
* Added `media="print"` to "print.css" link. 
* Added `async` for links to JaveScript files. 
* Moved the links to JaveScript files at the bottom of the main body.
* Added a meta tag for Cache-control.



#### Part 2: Optimize Frames per Second in pizza.html
Optimizations made to views/js/main.js make views/pizza.html render with a consistent frame-rate at 60fps when scrolling.
Changed the logic in the main.js to stop force synchronous layout and improve performance.

#### 2.1 Function `changePizzaSizes()`:
Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page. 
Resize time is shown in the browser developer tools.
   
 * Added the actual width value to the `switch` cases.
    
    ```javascript
      switch(size) {
           case "1":
             newWidth = 25;
    ```
 * Used specific query selector `getElementById`.
     
     ```javascript
     document.getElementById("pizzaSize").innerHTML = "Small";
      ```
* Removed the query selection from the `for` loop and used specific query selector `getElementsByClassName`.
    
    ```javascript
     var randomPizzas = document.getElementsByClassName("randomPizzaContainer");
     ```
     
 #### 2.2 Function `updatePositions()`:
  Views/pizza.html renders with a consistent frame-rate at 60fps when scrolling.
 *  Moved the `scrollTop` calculation out of the `for` loop.
     ```javascript
      var s = document.body.scrollTop;
     ```
 *  Stored the phases in an array. 
     ```javascript
     var pizzasArray = []; 
     ```
 * Used specific query selector `getElementsByClassName`.
       This is more efficient to access DOM.
     ```javascript
     items = document.getElementsByClassName('mover');
     ```    
 * Moved query selection out of the for loop and dynamically calculating the number of scrolling pizzas.
   ```javascript
    var movingPizzas = document.getElementById('movingPizzas1');
   ```
  * Moved the length property outside the loop makes the loop run faster. 
    ```javascript
     var l = items.length;
    ```
#### Part 3: Used Gulp for automation.
* Created the **dist** directory for production-ready files.
* Installed [Gulp](http://gulpjs.com/).
* Installed Gulp plugins.
* Created the **Gulpfile.js** in the local directory.

| Gulp Plugins |  |
| ------ | ------ |
| Sass | http://sass-lang.com/install |
| Uglify | https://www.npmjs.com/package/gulp-uglify |
| Autoprefixer | https://www.npmjs.com/package/gulp-autoprefixer |
| Responsive |https://www.npmjs.com/package/gulp-responsive |
| Imagemin |https://www.npmjs.com/package/gulp-imagemin |
| Pngquant | https://www.npmjs.com/package/imagemin-pngquant |
| Eslint | https://www.npmjs.com/package/gulp-eslint |
| Watch | https://www.npmjs.com/package/gulp-watch |
| BrowserSync |https://www.browsersync.io/docs/gulp |



## Extra Resources:
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
* [Chrome Office Hours: Performance with Paul Lewis and Paul Irish](https://www.youtube.com/watch?v=z0_jD8nO5Zw)
* [Udacity' Web Tooling & Automation course by  Google](https://www.udacity.com/course/web-tooling-automation--ud892)
* [Writing Efficient JavaScript by by Nicholas C. Zakas](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html)
* [High Performance Browser Networking By Ilya Grigorik](https://hpbn.co/?utm_source=igvita&utm_medium=referral&utm_campaign=igvita-homepage)


