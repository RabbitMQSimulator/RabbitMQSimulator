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
        }
    });

    grunt.registerTask('default', ['concat']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
};