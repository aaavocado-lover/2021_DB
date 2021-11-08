// export 명령어: 다른 파일에서 해당 함수를 사용 가능

import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'Yefla14*07',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
    getEmployee : async () => {
        // employee 테이블에서 모든 튜플 출력
        const [rows] = await promisePool.query(`select * from employee`);
        //console.log(rows)
        return rows
    },
    getDepartment : async () => {
        // department 테이블에서 모든 튜플 출력
        const [rows] = await promisePool.query(`select * from department`);
        console.log(rows)
        return rows
    },
}

// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query를 생성
    // setEmployee 함수가 employee 테이블에 값 입력
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}", 
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

            await promisePool.query(sql);
    },

    // setDepartment 함수가 department 테이블에 값 입력
    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

            await promisePool.query(sql);
    },
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        // 현재는 employee 테이블에서 Minit이 F인 사람의 salary를 500으로 변경
        //const sql = `update employee set salary = 500 where Minit = "F"`;
        const sql = `update employee set salary = "${data.Salary}" where Lname = "김"`;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        // 현재는 department 테이블에서 Dnumber가 0인 사람의 dname을 변경
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        //const sql = `update department set dname = "개발부" where Dnumber = "${data.Dnumber}"`;
        await promisePool.query(sql);

    },
}