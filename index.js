const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
// app.use(cors({origin: 'http://localhost:3000'})); //lien de connexion @app front ohatra
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log("server starded: 5500"));