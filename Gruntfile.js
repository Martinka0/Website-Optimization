module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
  Loading our config
   */
  var config = grunt.file.readYAML('Gruntconfig.yml');

  /*
  Load our Grunt Tasks
   */
   require('load-grunt-tasks')(grunt);
    /*
  Configure our tasks
   */
   require('./grunt_tasks/sass.js')(grunt, config);
   require('./grunt_tasks/javascript.js')(grunt, config);
  /*
  Register our tasks
   */



    uglify: {


            build: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js',
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'

      }
    },




var mozjpeg = require('imagemin-mozjpeg');

  imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files
        'dist/img.png': 'src/img.png', // 'destination': 'source'
        'dist/img.jpg': 'src/img.jpg',
        'dist/img.gif': 'src/img.gif'
      }
    },
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
  };

  responsive_images_extender: {
    target: {
      options: {},
      files: [{
        expand: true,
        src: ['**/*.{html,htm,php}'],
        cwd: 'src/',
        dest: 'dist/'
      }]
    }
  };




responsive_images: {
    myTask: {
      options: {},
      responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 320,
            name: 'small'
          }, {
            width: 640,
            name: 'medium'
          }, {
            width: 800,
            name: 'large'
          }]
        },
        files: [{
          expand: true,
          src: ['assets/img/**/*.{jpg,gif,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*', '!assets/img/**/*.*'],
          cwd: 'src/',
          dest: config.jsSrcDir + ['**/*.{png,jpg,gif}'],
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      all_files: {
        expand: true,
        files: ['**/*', '!assets/img/**/*.*'],
        tasks: 'copy'
      },
      images: {
        expand: true,
        files: 'assets/img/**/*.{jpg,gif,png}',
        tasks: 'responsive_images'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');


    }
  }

    });

  grunt.registerTask('images', ['responsive_images','imagemin']);
   // Default task(s).
  grunt.registerTask('default', ['concat','uglify','imagemin','responsive_images_extender', 'grunt-contrib-watch', 'grunt-responsive-images']);

