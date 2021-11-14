# 2021 DB 실습 11주차 과제
## 3주차 실습
    1. DB 테이블 (STUDENT)
        > 학생의 학번, 이름, 학년, 입학 날짜, 이메일을 저장
### <span style="color:green">STUDENT</span>
학번|이름|학년|전공|입학날짜|이메일|
---|---|---|---|---|---|
12123456|김철수|4|정보통신공학|2012-03-01 00:00:00|철수@gmail.com|
12172065|길예림|4|정보통신공학|2017-03-02 07:03:14|kilyelim7@gmail.com|
12211234|홍길동|1|정보통신공학|2021-03-01 00:00:00|길동@gmail.com|
12345678|Leonardo Dicaprio|2|경영학과|2000-09-01 09:12:30|lp@gmail.com|

<br><br>

## 8주차 실습
    1. DB 테이블 (EMPLOYEE)
        > 직원의 이름, 중간이름, 성, Ssn, 생일, 주소, 성별, 연봉, 상사 Ssn, 부서 번호를 저장
### <span style="color:green">EMPLOYEE</span>
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
철수|A|김|111111111|1985-07-05|서울 강남구|남|15000||
예림|B|길|222222222|1998-07-14|서울 강서구|여|27000||
수진|C|이|333333333|2000-06-14|제주시|여|95000|111111111|
성민|D|박|444444444|1977-05-22|경기도 성남시|남|38900||
도현|E|최|555555555|1999-11-10|인천 미추홀구|남|7800|444444444|

<br><br>

    2. DB 테이블 (DEPARTMENT)
        > 부서이름, 부서번호, 매니저 Ssn, 매니저로 고용된 날짜를 저장
### <span style="color:green">DEPARTMENT</span>
Dname|Dnumber|Mrg_ssn|Mgr_start_date|
---|---|---|---|
개발부|1|111111111|2007-02-03|
총무부|2|222222222|2020-12-31|
영업부|3|444444444|2010-04-13|

<br><br>
## 10주차 실습
    1. DB 테이블 (USER)
        > ID, PW, 역할 저장

### <span style="color:green">USER</span>
ID|Password|Role|
---|---|---|
admin|admin1234|admin|
test|test1234|users|

<br><br>

    2. DB 테이블 (DEPARTMENT)
        > 과 이름, 과 번호 저장
### <span style="color:green">DEPARTMENT</span>
Dname|Dnumber|
---|---|
전기공학과|2|
전자공학과|3|
정보통신공학과|0|
컴퓨터공학과|1|

<br><br>

<!--
# 2021_DB

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:aaavocado-lover/2021_DB.git
    - (token을 사용하는 경우) git clone https://github.com/aaavocado-lover/2021_DB.git
2. 3week 폴더로 이동
    > cd 3week
3. 콘솔창(powershell)에서 npm package 설치
    > npm run start
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnection: ture,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

 - **데이터베이스** 실습은 재미 ~~없어요~~있어요.
-->