import React from 'react';
import ReactDOM from 'react-dom';
import mongoose from 'mongoose';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/whats-news-react");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
