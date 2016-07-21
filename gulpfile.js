"use strict";

const gulp = require('gulp');
const markdown = require('gulp-markdown');
const inject = require('gulp-inject-string');

const mdFiles = ['./**/*.md', '!./node_modules/**/*.md'];

gulp.task('default', () => {
    return gulp.src(mdFiles)
        .pipe(markdown({}))
        .pipe(inject.prepend(
`<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown Preview</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
`))
        .pipe(inject.append(
`    </div>
</body>

</html>`))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
    return gulp.watch('./**/*.md', ['default']);
});
