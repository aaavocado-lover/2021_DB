import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";
import managerRouter from "../routes/manager";
import userRouter from "../routes/user";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/manager', managerRouter);
app.use('/user', userRouter);

    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })