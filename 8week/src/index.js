// code 외부에서 express, logger, path의 모듈 가져옴
import express from "express";
import logger from "morgan";
import path from "path";

// code 외부에서 homeRouter, updateRouter, selectRouter 모듈 가져옴(상대경로)
// 각각 8week의 route 폴더에서의 .js를 가져옴
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

// 사용할 포트 3000으로 지정
const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

//  / -> routes폴더의 home.js 연동
app.use('/', homeRouter);
// /update -> routes 폴더의 update.js 연동
app.use('/update', updateRouter);
// /select -> routers 폴더의 select.js 연동
app.use('/select', selectRouter);

    // 지정한 port를 통해 서버 연결
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })