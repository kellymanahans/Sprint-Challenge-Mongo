const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    title: {type: String, required: true},
    budget_amount: {type: Number, required: true}
});

module.exports = mongoose.model('Budget', Budget);