const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    postId: {
        type: String
    },
    content: {
        type: String
    },
    username: {
        type: String
    }
})

module.exports = mongoose.model('Comment', commentSchema);