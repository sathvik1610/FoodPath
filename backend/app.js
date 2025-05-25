const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const organRoutes = require('./routes/organRoutes');
const authRoutes=require('./routes/authRoutes');
const trophiesRoutes=require('./routes/trophiesRoutes');


dotenv.config({ path: path.resolve(__dirname, '../frontend/.env') });


if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined. Set it in the .env file");
  }
  

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/organs', organRoutes);
app.use('/auth',authRoutes);
app.use('/trophies',trophiesRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
