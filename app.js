const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const upload = multer({dest: 'uploads/'})

const app = module.export = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), 
	function(req, res, next) {
		return res.json(req.file);
	})

app.listen(5000, function(){
	console.log("Working!!!");
})