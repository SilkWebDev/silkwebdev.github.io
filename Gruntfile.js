module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/scripts/gallery.js': ['src/scripts/gallery.js'],
          'dist/scripts/io.js': ['src/scripts/io.js'],
          'dist/scripts/modal.js': ['src/scripts/modal.js'],
          'dist/scripts/testimonials.js': ['src/scripts/testimonials.js'],
          'dist/components/header.js': ['src/components/header.js'],
          'dist/components/footer.js': ['src/components/footer.js'],
          'dist/components/gallery-image-item.js': [
            'src/components/gallery-image-item.js',
          ],
        },
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeTagWhitespace: true,
          // useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
        },
        files: {
          'dist/index.html': 'src/index.html',
          'dist/services.html': 'src/services.html',
          'dist/project-gallery.html': 'src/project-gallery.html',
          'dist/contact-us.html': 'src/contact-us.html',
        },
      },
    },
    // cssmin: {
    //   dist: {
    //     src: ['src/styles/main.css'],
    //     dest: 'dist/styles/main.css',
    //   },
    // },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'htmlmin']);
};
