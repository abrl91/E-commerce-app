// configure express server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send(`
      <div>
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="password confirmation" placeholder="password confirmation" />
            <button>Sign Up</button>
        </formi>
      </div>
   `);
});

app.post('/', (req, res) => {
      console.log(req.body);
      res.send('formData');
});
//
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const bodyParser = (req, res, next) => {
//    if (req.method === 'POST') {
//       res.on('data', data => {
//          const parsedData = data.toString('utf8').split('&');
//          const formData = {};
//          for (let pair of parsedData) {
//             const [key, value] = pair.split('=');
//             formData[key] = value;
//          }
//          req.body = formData;
//          next();
//       });
//    } else {
//       next();
//    }
// }
