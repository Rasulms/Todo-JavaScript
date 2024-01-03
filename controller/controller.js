const TodoSchema = require('../todoSchema.js')
const path = require('path')




const getTodo = async (req, res) => {
    try {
        var userData = await TodoSchema.find()
        res.json(userData)
    } catch (err) {
        console.log(err);
    }



}
const getTodoHtml = async (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))


}

const postTodo = async (req, res) => {

    var reqdata = req.body;

    console.log('reqdata', reqdata);

    const result = await TodoSchema.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    })

    console.log('user added');

    console.log(result);

}
module.exports = { getTodo, postTodo, getTodoHtml }
