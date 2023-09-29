module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/scripts/gallery.min.js': ['src/scripts/gallery.js'],
          'dist/scripts/io.min.js': ['src/scripts/io.js'],
          'dist/scripts/modal.min.js': ['src/scripts/modal.js'],
          'dist/scripts/testimonials.min.js': ['src/scripts/testimonials.js'],
          'dist/components/header.min.js': ['src/components/header.js'],
          'dist/components/footer.min.js': ['src/components/footer.js'],
          'dist/components/gallery-image-item.min.js': [
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
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
        },
        files: {
          'index.html': 'index.max.html',
          'services.html': 'services.max.html',
          'project-gallery.html': 'project-gallery.max.html',
          'contact-us.html': 'contact-us.max.html',
        },
      },
    },
    cssmin: {
      dist: {
        src: ['src/styles/main.css'],
        dest: 'dist/styles/main.css',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
};
