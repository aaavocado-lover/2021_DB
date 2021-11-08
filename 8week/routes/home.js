// views 폴더의 home.hbs와 연계된 js
// home.hbs로 디자인 구현, home.js로 실행 방법 구현

import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

// 지정된 템플릿을 이용하여 home을 렌더링
router.get('/', (req, res) => {
    res.render('home');
});


router.post('/', (req, res) => {
    const vars = req.body;

    // req.body의 길이를 저장
    const var_length = Object.keys(req.body).length;

    // 입력된 갯수가 4개보다 많을 때
    // employee
    if(var_length > 4){
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    
    // 입력된 갯수가 4개보다 적을 때
    // department
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/');
})

module.exports = router;