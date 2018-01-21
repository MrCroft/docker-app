'use strict';

import * as express from 'express';

const app = express();
const port = 8001;
const baseUrl = `http://localhost:${port}`;

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Allow caching for 1 hour
  res.setHeader('Cache-Control', 'max-age=3600');

  // Pass to next layer of middleware
  next();
});



app.get(['/videos'], (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const origin = req.get('origin');
  console.log('------------------------------');
  console.log(`ORIGIN: ${origin}`);
  console.log('------------------------------');

  const results = [
    {
      "id": 6546,
      "slug": "some-slug",
      "title": "Some Title",
      "thumb": "Some Thumb",
      "video": "some-video.mp4"
    },
    {
      "id": 6543,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6541,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6540,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6537,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6530,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6527,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6521,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6518,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6510,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6499,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6494,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6490,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6480,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6455,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6451,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6450,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6448,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6445,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6442,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6439,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6436,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6429,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6407,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6405,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6388,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6381,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6379,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6376,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6374,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6369,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6365,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6362,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6359,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6356,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6353,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6351,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6348,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6344,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6342,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6245,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6241,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6235,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6148,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6144,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6132,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 6126,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 5975,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 5970,
      "slug": "some-slug",
      "title": "Some Title"
    },
    {
      "id": 5968,
      "slug": "some-slug",
      "title": "Some Title"
    }
  ];
  res.send(JSON.stringify({
    "total": "50",
    "data": {
      "new": results.splice(0, 24),
      "popular": results
    }
  }));
});


app.get(['*'], (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    "success": true,
    "msg": "Welcome!"
  }));
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
