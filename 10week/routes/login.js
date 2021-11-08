import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});


router.post('/', async (req, res) => {
    const vars = req.body;
    // 여기 녹음
    const users = await selectSql.getUsers();
    // 빈 string (let: 값 변경 가능한 데이터타입)
    let whoAmI = '';
    // 로그인 체크 상태. 지금 안 한 상태
    let checkLogin = false;

    // 자동 1개 증가. user==i
    // for 함수와 유사하게 쓰임
    users.map((user) => {
        console.log(user.Id);
        // vars: js에서 이용하는 오브젝트 타입. id, pw가 저장되어있는 개인
        // users: 이용하고자 하는 db. mysql.
        // vars는 id, user는 Id임에 주의할 것 (대소문자)

        // 입력한 id와 user 테이블의 id가 동일하고, 입력한 password와 user 테이블의 password가 동일할 때
        if (vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true;
            // user 테이블에 존재하는 튜플이 2개이므로 단순 if-else로 작성
            if(vars.id === 'admin'){
                whoAmI = 'admin';
            } else{
                whoAmI = 'user';
            }
        }
    })

    console.log('whoAmI:', whoAmI);

    // 로그인한 id가 admin 일 때 delete 페이지로 연결
    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/delete');
    } 
    // 로그인한 id가 user일 때 select 페이지로 연결
    else if (checkLogin && whoAmI === 'user') {
        res.redirect('/select');
    }
    // admin도 아니고 user도 아닐 때에는 로그인 및 접근 불가
    else {
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/'; </script>");
    }
})

module.exports = router;