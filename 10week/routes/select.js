import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    //const department = await selectSql.getDepartment();
    const student = await selectSql.getStudent();

    res.render('select', {
        //title: 'IT 공대',
        //department

        title: '학생',
        student
    });
});

module.exports = router;