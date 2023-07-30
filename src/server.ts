/* Kích Hoạt .env */
import dotenv from 'dotenv';
dotenv.config();

/* Dùng express khởi tạo server */
import express from 'express';
const server = express();

/* Thiết lập các views config */
import viewConfig from './views';
server.use("/views",viewConfig);


/* public folder domain/file */
server.use(express.static("public"));

/* Yêu cầu server lắng nghe port $NUMBER trên hệ điều hành */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server đã khởi chạy tại: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
})