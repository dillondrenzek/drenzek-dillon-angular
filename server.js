"use strict";

const express = require('express'),
  path = require('path'),
  pug = require('pug'),
  packageJSON = require('./package.json'),
  app = express();


// App Port
app.set('port', (process.env.PORT || 8085));


// HTML Templates with Pug
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/static'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


// GET '/resume'
app.use('/resume', express.static(__dirname + '/static/pdf/dillon-drenzek-resume.pdf'));

// Index page
app.get('/', function (req, res) {
  res.render('index', {

    githubUrl: 'https://github.com/dillondrenzek/dillon-drenzek-com',
    appVersion: packageJSON['version'],

    socialMedia: {
      'instagram': {
        title: 'Instagram',
        url: 'https://www.instagram.com/dillondrenzek/'
      },
      'github': {
        title: 'GitHub',
        url: 'https://github.com/dillondrenzek'
      },
      'linkedin': {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dillondrenzek/'
      }
    },

    experience: {
      entries: [
        {
          title: 'Front End Web Developer',
          duration: 'Current',
          location: 'Peach - Seattle, WA',
          dates: 'Nov \'17 - Current',
          description: 'I help build the Front End of Peach\'s website and web application using Angular.js',
          skills: ['Angular.js', 'Sass', 'Foundation']
        },
        {
          title: 'Web Application Developer',
          duration: '1 yr 4 mos',
          location: 'Vizualiiz - Seattle, WA',
          dates: 'Feb \'16 - Jun \'17',
          description: 'First experience with Angular 2; helped rebuild company’s flagship asset management application',
          skills: ['Angular', 'RxJS', 'Sass', 'REST']
        },{
          title: 'iOS Developer',
          duration: '1 yr 3 mos',
          location: 'Native - Boulder, CO',
          dates: 'Feb \'14 - May \'15',
          description: 'Helped build a new company with a team of graduating seniors, winning the New Venture Challenge at CU and participating in Techstars-Boulder',
          skills: ['iOS SDK', 'Objective-C', 'Swift', 'REST']
        }
      ]
    },
    education: {
      entries: [
        {
          title: 'Computer Science, B.A.',
          dates: 'May 2015',
          location: 'University of Colorado at Boulder',
          status: 'Graduated',
          description: 'Honors Minor in Technology, Arts & Media (TAM)'
        },
        {
          title: 'Graphic Design Studio',
          dates: 'May - Aug 2015',
          location: 'DIS - Copenhagen, Denmark',
          status: 'Completed',
          description: 'Completed an academic rebranding of Copenhagen’s premiere fashion shop'
        }
      ]
    },



    // Project
    // - title, type, description, url
    // - image { src, alt }
    projects: {
      entries: [

        // vertical panoramas
        // {
        //   title: 'Vertical Panoramas',
        //   type: 'Photography Showcase',
        //   image: {
        //     src: '/static/img/always-wondering.jpg',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: `
        //     A photography project I\'ve been working on for a few years.
        //     Every landmark-ish place I go to, I take a "vertical panorama" that
        //     includes the landmark and my feet standing in front of it
        //     `,
        //   url: null
        // },

        // spotify playlist editor
        // {
        //   title: 'Spotify Timeline',
        //   type: 'Web App',
        //   image: {
        //     src: '/static/img/spotify-placeholder.png',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: 'A web application that utilizes the Spotify API to help users create playlists',
        //   url: null
        // },

        // minesweeper game

        // stocks app
        // {
        //   title: 'Stocks App',
        //   type: 'Web App',
        //   image : {
        //     src: '/static/img/always-wondering.jpg',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: `
        //     A web application that utilizes the Markit free API
        //     for stock quotes and helps the user draw quick conclusions
        //     about their Portfolio
        //   `
        // },

        {
          title: 'Storm Design Art Fashion',
          type: 'Academic Rebranding',
          image : {
            src: '/static/img/storm.jpg',
            alt: 'Storm Design Art Fashion Company Rebranding'
          },
          description: `
            Received praise from store\'s owner,
            local industry professionals about project\'s attention to customer needs
            `,
          url: null
        },
        {
          title: 'Drenzek Does Denmark',
          type: 'Blog',
          image : {
            src: '/static/img/drenzek-does-denmark.png',
            alt: 'Drenzek Does Denmark Logo'
          },
          description: 'A travel blog I built to practice the MEAN stack while abroad in Denmark',
          url: null
        },
        {
          title: 'Capstone Portfolio',
          type: 'Website',
          image : {
            src: '/static/img/capstone-portfolio-1.jpg',
            alt: 'Capstone Portfolio Screenshot 1'
          },
          description: 'Major Project in senior Capstone class at CU; first used Node.js and Neo4j',
          url: null
        },
        {
          title: 'Technology, Arts & Media Portal',
          type: 'Class Portal',
          image : {
            src: '/static/img/tam-portal-1.jpg',
            alt: 'TAM Portal 1'
          },
          description: 'A portal to the work I completed for my Honor\'s Minor in Technology, Arts and Media',
          url: null
        }
      ]
    }
  });
});



app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'));
});






// Get Meta App info
// app.use('/meta', metaApi);

// // Static files
// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/static', express.static(__dirname + '/src/static'));
// // app.use('/src/app',       express.static(__dirname + '/src/app'));
// app.use('/app', express.static(__dirname + '/src/app'));
// app.use('/systemjs-angular-loader.js', express.static(__dirname + '/src/app/systemjs-angular-loader.js'));
// // app.use('/app',           express.static(__dirname + '/public/app'));
// app.get('/*', function (req, res) {
//     res.sendFile(__dirname + '/src/app/index.html');
// });
// // App Listen
// app.listen(app.get('port'), function () {
//     console.log("App: Listening on " + app.get('port'));
// });
// // // Main Server
// // // v4.0.2
// //
// // var express = require('express'),
// // 	app = express(),
// // 	path = require('path'),
// // 	Projects = require('./db/seed-projects'),
// // 	Skills = require('./db/seed-skills');
// //
// //
// //
// // //-----------
// // // App Setup
// // //-----------
// //
// // // App Port
// // app.set('port', (process.env.PORT || 8081));
// //

// //
// // // Public Directories
// // app.use(express.static(__dirname + '/ng-deprecated'));
// // app.use(express.static(__dirname + '/bower_components'));
// //
// //
// //
// // //------------
// // // API Routes
// // //------------
// //
// // var api = express();
// // app.use('/api', api);
// //
// // // Projects API
// //
// // // GET projects
// // api.get('/projects', function(req,res){
// // 	// TODO: fix with mongoDB v4.1
// // 	res.json([
// // 		Projects['capstonePortfolio'],
// // 		Projects['drenzekDoesDenmark'],
// // 		Projects['storm'],
// // 		Projects['gridrunner'],
// // 		Projects['leFaux'],
// // 		Projects['tam'],
// // 		// Projects['wordpressPortfolio'],
// // 		// Projects['alwaysWondering'],
// // 	]);
// // });
// //
// // // GET Project by permalink
// // api.get('/projects/:permalink', function(req,res){
// //
// // 	// TODO: v4.1 - fix with mongoDB
// // 	if (req.params.permalink === 'capstone-portfolio') {
// // 		res.json(Projects['capstonePortfolio']);
// // 	} else if (req.params.permalink === 'drenzek-does-denmark') {
// // 		res.json(Projects['drenzekDoesDenmark']);
// // 	} else if (req.params.permalink === 'storm') {
// // 		res.json(Projects['storm']);
// // 	} else if (req.params.permalink === 'always-wondering') {
// // 		res.json(Projects['alwaysWondering']);
// // 	} else if (req.params.permalink === 'gridrunner') {
// // 		res.json(Projects['gridrunner']);
// // 	}
// //
// // });
// //
// // // TODO: v4.1 - Projects Model CRUD operations
// // // api.post('/projects/:id', function(req,res){res.json({}); });
// // // api.put('/projects/:id', function(req,res){res.json({}); });
// // // api.delete('/projects/:id', function(req,res){res.json({}); });
// //
// //
// //
// // // Skills API
// //
// // // GET skills
// // api.get('/skills', function(req,res){
// // 	// TODO: v4.1 - Skills Model w/ MongoDB
// // 	res.json(Skills);
// // });
// //
// // // TODO: Implement Skill Model CRUD Operations
// // // api.get('/skills/:id', function(req,res){res.json({});});
// // // api.post('/skills/:id', function(req,res){res.json({});});
// // // api.put('/skills/:id', function(req,res){res.json({});});
// // // api.delete('/skills/:id', function(req,res){res.json({});});
// //
// //
// //
// // //--------------------
// // // Static Directories
// // //--------------------
// //
// // var staticHTMLPath = '/static/html';
// //
// // // Gridrunner
// // app.use('/gridrunner', express.static(__dirname + staticHTMLPath + '/gridrunner'));
// //
// // // TAM Portal
// // app.use('/tam', express.static(__dirname + staticHTMLPath + '/tam-portal'));
// //
// // // Le Faux Désign Compagnie
// // app.use('/le-faux', express.static(__dirname + staticHTMLPath + '/faux-company'));
// //

// //
// //
// //
// // // GET '/'
// // app.use('/', function(req, res){
// // 	res.render('angular');
// // });
// //
// // // App Listen
// // app.listen(app.get('port'));
// // console.log("App: Listening on "+app.get('port'));
// //# sourceMappingURL=server.js.map
