const { getProjectPath } = require('@hn-ui/shared-utils')
const gulp = require('gulp')
const fse = require('fs-extra')
const runCmd = require('../runCmd')

const lintIcon = () => done => {
  runCmd('node', ['build/bin/icon-init.js'], done)
}

const lintEntry = () => done => {
  runCmd('node', ['build/bin/build-entry.js'], done)
}

const lintCss = () => done => {
  runCmd('node', ['build/bin/gen-cssfile.js'], done)
}

const lintTheme = () => done => {
  // function copy() {
  //   fse.copySync(
  //     getProjectPath('components', 'theme-chalk', 'lib'),
  //     getProjectPath('lib', 'theme-chalk'),
  //   )
  //   done(0)
  // }
  runCmd('gulp', ['build', '--gulpfile', 'gulpfile.js'], done)
}

gulp.task('icon', gulp.series(lintIcon(), lintTheme()))

gulp.task('file', gulp.series(lintEntry()))

gulp.task('theme', gulp.series(lintCss(), lintTheme()))

function utils(done) {
  console.log('utils...')
  done(0)
}

gulp.task(
  'utils',
  gulp.series(done => {
    utils(done)
  }),
)
