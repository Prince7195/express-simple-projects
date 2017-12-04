const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  let users = [
    {
      firstName: "Vijay",
      lastName: "Deepak",
      age: 22,
      gender: "Male"
    },
    {
      firstName: "Prince",
      lastName: "Deepak",
      age: 22,
      gender: "Male"
    },
    {
      firstName: "God",
      lastName: "Father",
      age: 22,
      gender: "Male"
    }
  ];
  res.json(users);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname + "/downloads/pdf.pdf"));
});

app.get('/about', (req, res) => {
  res.redirect("/about.html");
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  console.log(name + ", " + email);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
