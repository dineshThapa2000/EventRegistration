const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrations');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));


// Root route
app.get('/', (req, res) => {
    res.send('Event Registration Backend is running');
});

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
