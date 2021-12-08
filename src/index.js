const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://adso:adso@cluster0.ys6rw.mongodb.net/users', {
    useNewUrlParser: true}, { useUnifiedTopology: true });
// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model('Note', notesSchema);
// middlewares


//routes
app.use(require('./routes/index'));
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    //console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, 'views/index.html'));


// static files
app.use(express.static(path.join(__dirname,'public')));

// listening the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port') )
});

app.post('/', function(req, res) {
    let newNote = new Note({
        title: req.body.title,
        contend: req.body.content
    });
    newNote.save();
    ;
})