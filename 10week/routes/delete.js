import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {
    // selectSql 통해 테이블의 값 불러오기
    // const department = await selectSql.getDepartment();
    const student = await selectSql.getStudent();

    res.render('delete', {
        title: "삭제 기능",
        //department
        student
    })
});


// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {
    console.log('delete router: ', req.body.delBtn);

    const data = {
        //Dnumber: req.body.delBtn,
        Major: req.body.delBtn,
    };

    //await deleteSql.deleteDepartment(data);
    await deleteSql.deleteStudent(data);

    res.redirect('/delete');
});

module.exports = router;
