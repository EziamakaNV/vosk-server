
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// const whitelist = ['https://harvesters.yambarn.io']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// }

// app.use(cors());


app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.get('/assets/recorder-worker.js', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/assets', 'recorder-worker.js'));
});

app.get('assets/recorder-worker.js', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/assets', 'recorder-worker.js'));
});

app.get('/latency', (req, res) => {
  res.json({status: "ok"});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/assets', 'recorder-worker.js'));
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

module.exports = app;