import path from 'path';
import express from 'express';
import axios from 'axios';
const router = express.Router();

router.use('/', (req, res) => {
    axios.get("http://localhost:3000/apis/v1/students")
    .then(resApi => {
        res.render(path.join(__dirname, "templates/home.ejs"), 
        { 
            mainCssUrl: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/css/main.css`,
            students: resApi.data.data
        })
    })
    .catch(err => {
        res.redirect('/404')
    })
    
})

export default router;