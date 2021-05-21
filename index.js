// configure express server
const express = require('express');

const app = express();

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
   res.send('authenticated!');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
