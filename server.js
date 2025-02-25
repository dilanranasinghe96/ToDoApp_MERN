const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
 require('dotenv').config();
 const authRoutes = require('./routes/authRoutes')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api',authRoutes);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
    });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

