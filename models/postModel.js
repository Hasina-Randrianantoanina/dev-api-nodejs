const mongoose = require('mongoose');

const PostModel = mongoose.model(
   "node-api",
   {
        author: {
            type: String,
            require: true
        },

        message: {
            type: String,
            require: true
        },

        date: {
            type: Date,
            default: Date.now
        }
   },
   "posts" 
);

module.exports = { PostModel };