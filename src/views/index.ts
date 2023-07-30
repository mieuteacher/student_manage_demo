import path from 'path';
import express from 'express';
const router = express.Router();


router.use('/', (req, res) => {
    res.render(path.join(__dirname, "templates/home.ejs"), { mainCssUrl: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/css/main.css`})
})

export default router;