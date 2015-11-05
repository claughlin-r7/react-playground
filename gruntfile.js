module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    var pkgjson = require('./package.json');

    // Configuration
    grunt.initConfig({
        config: {
            name: 'r7-cloud-app',
            pkg: pkgjson,
            app: 'src',
            dist: 'dist',
            bower: 'bower_components/**'
        },
        pkg: this.config.pkg,

        clean: {
            all: '<%= config.dist %>'
        },

        bump: {
            options: {
                files: ['bower.json', 'package.json'],
                commitMessage: 'Release %VERSION%',
                commitFiles: ['bower.json', 'package.json'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                pushTo: 'origin'
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },

                files: {
                    '<%= config.dist %>/css/example.dev.css': '<%= config.app %>/scss/main.scss'
                }
            },
            min: {
                options: {
                    style: 'compressed',
                    sourcemap: false
                },

                files: {
                    '<%= config.dist %>/css/example.dev.min.css': '<%= config.app %>/scss/main.min.scss'
                }
            }
        },

        jscs: {
            src: 'src/js/**/*.js',
            options: {
                config: '.jscsrc'
            }
        },

        eslint: {
            target: ['src/js/**/*.js']
        },

        shell: {
            devServer: {
                command: ['node server.js', 'npm run watch'].join('&')
            },
            webpack: {
                command: 'npm run build'
            }
        }
    });

    grunt.registerTask('build', ['checkStyle', 'clean:all', 'sass:min', 'shell:webpack']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('dev', ['checkStyle', 'clean:all', 'sass:dev', 'shell:devServer']);
    grunt.registerTask('checkStyle', ['jscs', 'eslint']);

};
