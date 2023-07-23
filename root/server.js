const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = require('./config/db');
mongoose.connect(db.mongoURI, { useNewUrlParser: true })  
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.use('/api/users', require('./routes/api/users'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));