module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          'static/styles/index.css': 'static/styles/index.less'
        }
      }
    },
    jshint: {
      files: ['static/js/*.js'],
      options: {
        camelcase: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 4,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        eqnull: true,
        browser: true,
        devel: true,
        globals: {
          jQuery: true,
        }
      }
    },
    watch: {
      styles: {
        files: ['static/styles/**/*.less', 'static/js/*.js'],
        tasks: ['jshint', 'less'],
        options: {
          nospawn: true
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['watch']);
};