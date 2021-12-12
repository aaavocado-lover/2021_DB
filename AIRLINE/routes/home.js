import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;

    users.map((user) => {
        if (vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true;
            if(vars.id === 'manager'){
                whoAmI = 'manager';
            } else{
                whoAmI = 'user';
            }
        }
    })

    console.log('whoAmI:', whoAmI);
    if(checkLogin && whoAmI === 'manager'){
        res.redirect('/manager');
    } 
    else if (checkLogin && whoAmI === 'user') {
        res.redirect('/user');
    }
    else {
        console.log('login failed!');
        res.send("<script>alert('접근에 실패했습니다.'); location.href='/'; </script>");
    }
})

module.exports = router;