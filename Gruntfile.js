module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);

	// init
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				browser: true,
			},
			all: ['Gruntfile.js']
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/css/screen.css': 'assets/scss/screen.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: [
					'assets/scss/*.scss',
					'assets/scss/**/*.scss'
				],
				tasks: ['sass']
			},
			html: {
				files: ['index.html'],
			},
			js: {
				files: ['Gruntfile.js'],
				tasks: ['jshint']
			}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 1337,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('build', ['setup', 'sass', 'jshint']);
};