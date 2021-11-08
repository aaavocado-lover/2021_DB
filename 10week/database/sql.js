// export 명령어: 다른 파일에서 해당 함수를 사용 가능

import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'Yefla14*07',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

// async와 await은 무조건 같이 나와야함

// select query. 
export const selectSql = {
    // mysql에서 user 테이블의 값을 모두 출력하는 함수
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        //console.log(rows)
        return rows
    },

    // mysql에서 department 테이블의 값을 모두 출력하는 함수
    getDepartment : async () => {
        // department 테이블에서 모든 튜플 출력
        const [rows] = await promisePool.query(`select * from department`);
        //console.log(rows)
        return rows
    },

    // mysql에서 student 테이블 (임의로 작성) 값을 모두 출력하는 함수
    getStudent : async () => {
        const [rows] = await promisePool.query(`select * from student`);
        console.log(rows)
        return rows
    },
}

// delete query
export const deleteSql = {
    // department에서 특정 조건을 만족하면 삭제하도록 하는 함수
    deleteDepartment : async (data) => {
        //console.log('deleteSql.deleteDepartment:', data.Dnumber);
        // 삭제 버튼을 누른 튜플은 항상 해당 조건 만족
        const sql = `delete from department where Dnumber = ${data.Dnumber}`;
        await promisePool.query(sql);
    },

    deleteStudent : async (data) => {
        // 기존 deleteStudent 명령 수행문
        // 삭제 버튼을 누른 튜플은 항상 해당 조건 만족
        //const sql = `delete from student where Major = "${data.Major}"`;

        // step3
        // 조건 : 학번이 12181234인 학생 튜플을 삭제
        const sql = `delete from student where StudentNumber = 12181234`;
        await promisePool.query(sql);
    }
}