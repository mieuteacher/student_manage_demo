/* Kích Hoạt .env */
import dotenv from 'dotenv';
dotenv.config();

/* Dùng express khởi tạo server */
import express from 'express';
const server = express();

/* Thiết lập các views config */
import viewConfig from './views';
server.use("/views",viewConfig);

/* Thiết lập body parser */
import bodyParser from 'body-parser';
server.use(bodyParser.json());

/* Thiết lập các api config */
import apiConfig from './routes';
server.use("/apis", apiConfig);

/* public folder domain/file */
server.use(express.static("public"));

/* Yêu cầu server lắng nghe port $NUMBER trên hệ điều hành */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server đã khởi chạy tại: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
})