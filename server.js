"use strict";

const express = require('express'),
  path = require('path'),
  pug = require('pug'),
  packageJSON = require('./package.json'),
  app = express(),
  db = require('./db'),
  api = require('./api/app');


// App Port
app.set('port', (process.env.PORT || 8085));


// HTML Templates with Pug
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/static'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/admin', express.static(__dirname + '/admin/dist/index.html'));

// API Express Router
app.use('/api', api);

// GET '/resume'
app.use('/resume', express.static(__dirname + '/static/pdf/dillon-drenzek-resume.pdf'));

// About page
app.get('/about', function (req, res) {
  res.render('pages/about', {

    githubUrl: 'https://github.com/dillondrenzek/dillon-drenzek-com',
    appVersion: packageJSON['version'],
    page: {
      titleImageUrl: '/static/img/portrait.jpg'
    },

    socialMedia: db.socialMedia,
    experience: db.experience,
    education: db.education,
    projects: db.projects

  });
});


// Index page
app.get('/', function (req, res) {
  res.render('pages/home', {

    githubUrl: 'https://github.com/dillondrenzek/dillon-drenzek-com',
    appVersion: packageJSON['version'],
    page: {
      titleImageUrl: '/static/img/always-wondering.jpg'
    },

    socialMedia: db.socialMedia,
    experience: db.experience,
    education: db.education,
    projects: db.projects

  });
});



app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'));
});
