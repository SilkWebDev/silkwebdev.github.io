module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      docs: {
        files: {
          'src/styles/main.css': 'src/styles/main.scss',
        },
      },
    },
    uglify: {
      docs: {
        files: {
          'docs/scripts/gallery.js': ['src/scripts/gallery.js'],
          'docs/scripts/io.js': ['src/scripts/io.js'],
          'docs/scripts/modal.js': ['src/scripts/modal.js'],
          'docs/scripts/testimonials.js': ['src/scripts/testimonials.js'],
          'docs/components/header.js': ['src/components/header.js'],
          'docs/components/footer.js': ['src/components/footer.js'],
          'docs/components/gallery-image-item.js': [
            'src/components/gallery-image-item.js',
          ],
        },
      },
    },
    htmlmin: {
      docs: {
        options: {
          removeComments: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeTagWhitespace: true,
        },
        files: {
          'docs/index.html': 'src/index.html',
          'docs/services.html': 'src/services.html',
          'docs/project-gallery.html': 'src/project-gallery.html',
          'docs/contact-us.html': 'src/contact-us.html',
        },
      },
    },
    cssmin: {
      docs: {
        src: ['src/styles/main.css'],
        dest: 'docs/styles/main.css',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'sass']);
};
