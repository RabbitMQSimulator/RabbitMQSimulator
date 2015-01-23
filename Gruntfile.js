module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'components/*.js'
                ],
                dest: 'web/js/scripts.js'
            },
            processing: {
                src: [
                    'processing/*.pde'
                ],
                dest: 'web/js/Simulator.pde'
            }
        },
        watch: {
            files: ['components/*.js', '*.pde'],
            tasks: 'default'
        },
        copy: {
            website: {
                cwd: 'web/',
                expand: true,
                src: ['**'],
                dest: 'static/'
              },
            build: {
                cwd: 'web/',
                expand: true,
                src: ['**'],
                dest: 'build/'
              },
            build: {
                cwd: 'web/',
                expand: true,
                src: ['**'],
                dest: 'web-export/'
              }
        }
    });

    grunt.registerTask('default', ['concat', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
};