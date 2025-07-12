var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 3-1: respond with a plain text containing a timestamps of the previous visit to the page
router.get('/last.txt', function(req, res) {
  let time = new Date();
  let currentDatenTime = time.toLocaleString();
  res.send(`${currentDatenTime}`);
});

const colors = ['red', 'yellow', 'green', 'blue'];
let visit = 0;

// 3-2
router.get('/color.html', function(req, res) {
  let color = colors[visit % colors.length];
  visit++;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <h1 style="color: ${color}">${color}</h1>
      </body>
    </html>
  `);
}
);

let arrTime = [];
// 3-3: log ALL timestamps, not just the 2 most recent!!
router.get('/log.html', function(req, res) {
  let time = new Date();
  arrTime.push(time);

  let html =
  `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
      <ul>`
  ;

  for (let i = 0; i < arrTime.length; i++) {
    html += `<li>${arrTime[i].toLocaleString()}</li>`;
  }

  html += `</ul>
         </body>
       </html>`;

  res.send(html);
});

// new route for /color.txt
const colors2 = ['red', 'yellow', 'green', 'blue'];
let visit2 = 0;

router.get('/color.txt', function(req, res) {
  let color = colors2[visit2 % colors2.length];
  visit2++;
  res.send(color);
});

let arrTimeLog = [];
// new route for /log.json
router.get('/log.json', function(req, res) {
  let time = new Date();
  arrTimeLog.push(time);
  res.json(arrTimeLog.map(t => t.toLocaleString()));
});

let arrTimeLogRo = [];
// new route for /log-ro.json
router.get('/log-ro.json', function(req, res) {
  res.json(arrTimeLogRo.map(t => t.toLocaleString()));
});
