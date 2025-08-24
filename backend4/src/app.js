const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postModel = require('./models/post.model')
const cors = require("cors");
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const upload = multer({ storage: multer.memoryStorage() })

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.post('/api/posts', upload.single("mama"), async (req, res) => {
    console.log(req.body)// isme caption aara he
    console.log(req.file);

    const caption = req.body.caption
    const file = req.file.buffer
    const result = await uploadFile(file, "test")
    console.log(result);
    const post = await postModel.create({
        caption: caption,
        url: result.url
    })

    res.json({
        message: "post created successfully",
        post: post
    })


})

app.get('/api/posts', async (req, res) => {
    const post = await postModel.find()

    res.json({
        message: "post fetch successfully",
        post: post
    })
})

app.get('*name', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app