const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    upDown: [],
    vote_count: { upvote: { type: Number, default: 0 }, downvote: { type: Number, default: 0 } },
    title: String,
    question: String,
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ans' }],
    categoryName: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags: [String],
    attachments: [{ url: String, type: String }],
    created_at: { type: Date, default: () => new Date(0) }
});