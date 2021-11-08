// views 폴더의 select.hbs와 연계
// select.hbs는 디자인 구현, select.js는 실행 동작 구현

import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    // database/sql.js에서 selectSql 객체에 있는 getEmployee함수 호출
    // employee 테이블의 모든 객체 출력
    const employee = await selectSql.getEmployee();
    // database/sql.js에서 selectSql 객체에 있는 getDepartment함수 호출
    // department 테이블의 모든 객체 출력
    const department = await selectSql.getDepartment();

    // view rendering
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;