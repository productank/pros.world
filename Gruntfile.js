/*jslint node: true */
"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    install: true,
                    copy: false,
                    targetDir: './libs',
                    cleanTargetDir: true
                }
            }
        },

        //Enable this for ruby sass compiler
        /*sass: {
            dist: {
                files: {
                    'styles/styles.css': 'styles/styles.scss'
                }
            }
        },*/

        //Enable this for libsass compiler
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'styles/styles.css': 'styles/styles.scss',
                    'styles/IE/ie9.css': 'styles/IE/ie9.scss'
                }
            }
        },

        copy: {
            main: {
                files: [{
                    //for jquery files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/jquery/dist',
                    src: ['jquery.min.js','jquery.min.map'],
                    dest: 'dist/js'
                },{
                    //for jquery files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/matchMedia',
                    src: ['matchMedia.js','matchMedia.addListener.js'],
                    dest: 'dist/js'
                },{
                  //for HTML5Shiv files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/html5shiv/dist',
                  src: ['html5shiv.min.js'],
                  dest: 'dist/js'
                },{
                    //for selectivizer files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/selectivizr/dist',
                    src: ['selectivizr.js'],
                    dest: 'dist/js'
                },{
                  //for Fontawesome stylesheet files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/fontawesome/css',
                  src: ['font-awesome.min.css'],
                  dest: 'dist/css'
                },{
                    //for Fontawesome stylesheet files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist/css',
                    src: ['bootstrap.min.css'],
                    dest: 'dist/css'
                },{
                  //for Angular Material stylesheet files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/angular-material',
                  src: ['angular-material.min.css'],
                  dest: 'dist/css'
                },{
                    //for Angular Material stylesheet files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/angular-material',
                    src: ['angular-material.layouts.min.css'],
                    dest: 'dist/css'
                },{
                    //for IE specific files
                    expand: true,
                    dot: true,
                    cwd: 'styles/IE',
                    src: ['ie9.css'],
                    dest: 'dist/css'
                },{
                    //for dripicons fonts
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/dripicons',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                },{
                    //for weather fonts
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/weather-icons',
                    src: ['font/*.*'],
                    dest: 'dist'
                },{
                    //for font-awesome
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                },
                {
                    //for Images
                    expand: true,
                    dot: true,
                    cwd: 'images',
                    src: ['*.*','background/*'],
                    dest: 'dist/images'
                },
                {
                    //for Images
                    expand: true,
                    dot: true,
                    cwd: 'mp3',
                    src: ['*.*'],
                    dest: 'dist/mp3'
                }]
            },
            copyicons: {
                files: [{
                    //for Images
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/material-design-icons',
                    src: ['*/svg/production/*.svg'],
                    dest: 'dist/img/icons',
                    flatten: true
                }]
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/app.js': [ 'dist/js/app.js' ]
                },
                options: {
                    mangle: false,
                    preserveComments: 'some'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/css/main.css': [
                        'bower_components/dripicons/css/dripicons.css',
                        'bower_components/weather-icons/css/weather-icons.min.css',
                        'styles/styles.css'
                    ]
                }
            },
            add_banner: {
                options: {
                    banner: '/* My minified admin css file */'
                },
                files: {
                    'dist/css/main.css': ['dist/css/main.css']
                }
            }
        },

        html2js: {
            dist: {
                src: [ 'app/views/*.html','app/views/charts/*.html','app/views/forms/*.html','app/views/mail/*.html','app/views/maps/*.html','app/views/pages/*.html','app/views/tables/*.html','app/views/tables/*.html','app/views/tasks/*.html','app/views/ui_elements/*.html' ],
                dest: 'tmp/views.js'
            }
        },

        bless: {
            default_options: {
                options: {
                    force:true
                },
                files: {
                    'tmp/css/main.css': 'dist/css/main.css'
                }
            },
            custom_options: {
                options: {
                    banner: '/* This file has been blessed by <%= pkg.name %> v<%= pkg.version %> */',
                    cacheBuster: false,
                    compress: true,
                    force:true
                },
                files: {
                    'tmp/main.css': 'dist/css/main.css'
                }
            },
            // Just counting files with logging, without write
            check: {
                options: {
                    logCount: true
                },
                src: [
                    'dist/css/*.css'
                ]
            },
        },

        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['scripts/gmap.js',
                    'bower_components/slimScroll/jquery.slimscroll.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-resource/angular-resource.min.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-messages/angular-messages.min.js',
                    'bower_components/angular-aria/angular-aria.min.js',
                    'bower_components/angular-material/angular-material.min.js',
                    'bower_components/underscore/underscore-min.js',
                    'bower_components/raphael/raphael-min.js',
                    'bower_components/morrisjs/morris.min.js',
                    'bower_components/flot/jquery.flot.js',
                    'bower_components/flot/jquery.flot.canvas.js',
                    'bower_components/flot/jquery.flot.categories.js',
                    'bower_components/flot/jquery.flot.crosshair.js',
                    'bower_components/flot/jquery.flot.image.js',
                    'bower_components/flot/jquery.flot.navigate.js',
                    'bower_components/flot/jquery.flot.time.js',
                    'bower_components/flot/jquery.flot.pie.js',
                    'bower_components/flot/jquery.flot.resize.js',
                    'bower_components/flot/jquery.flot.selection.js',
                    'bower_components/flot/jquery.flot.stack.js',
                    'bower_components/flot.curvedlines/curvedLines.js',
                    'bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'bower_components/chartjs/Chart.min.js',
                    'bower_components/jquery.sparkline.build/dist/jquery.sparkline.min.js',
                    'bower_components/easypie/dist/angular.easypiechart.js',
                    'bower_components/angular-wizard/dist/angular-wizard.js',
                    'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
                    'bower_components/jqvmap/dist/jquery.vmap.min.js',
                    'scripts/other_charts.js',
                    'scripts/extras.js',
                    'scripts/audio.min.js',
                    'scripts/audio_widget.js',
                    'app/**/*.js'],
                dest: 'dist/js/app.js'
            }
        },

        jshint: {
            all: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js' ]
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8888
                }
            }
        },

        watch: {
            dev: {
                files: [ 'Gruntfile.js', 'app/**', '*.html','styles/*.*','styles/_*.scss' ],
                tasks: [ 'jshint','html2js:dist','sass', 'copy:main', 'concat:dist', 'clean:temp','cssmin', 'bless:check'],
                options: {
                    atBegin: true
                }
            },
            min: {
                files: [ 'Gruntfile.js', 'app/**', '*.html','styles/*.*','styles/_*.scss' ],
                tasks: [ 'jshint','html2js:dist','sass', 'copy:main', 'concat:dist', 'clean:temp', 'uglify:dist','cssmin', 'bless:check'],
                options: {
                    atBegin: true
                }
            }
        },

        compress: {
            dist: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [{
                    src: [ 'index.html' ],
                    dest: '/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //This uses Libsass
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bless');

    grunt.registerTask('dev', [ 'bower', 'connect:server', 'watch:dev' ]);
    grunt.registerTask('test', [ 'bower', 'jshint' ]);
    grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
    grunt.registerTask('copy-icons', [ 'copy:copyicons' ]);
};