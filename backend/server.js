import express from 'express';
const app = express();
import router from './router/router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const port = 8080;



app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})

