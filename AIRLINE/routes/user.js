import express from "express";
import { insertSql, selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 1. 예약하기
router.post('/user_reservation', (req, res) => {
    const vars = req.body;
    const data = {
        Flight_number: vars.Flight_number,
        Leg_number: vars.Leg_number,
        Date: vars.Date,
        Seat_number: vars.Seat_number,
        Customer_name: vars.Customer_name,
        Customer_phone: vars.Customer_phone
    };
    insertSql.setReservation(data);
    res.redirect('/user');
})

// 2. 예약 조회
router.get('/user', async (req, res) => {
    const Reservation_res = await selectSql.getReservation();
    res.render('user_reservation', {
        title: "사용자 페이지 (예약 조회)",
        Reservation_res
    });
    res.redirect('/user');
});

// 3. 예약 취소
router.get('/user', async (req, res) => {
    const Reservation_res = await selectSql.getReservation();
    res.render('reservation_delete', {
        title: "예약 취소",
        Reservation_res
    });
});

router.post('/user', async (req, res) => {
    const data = {
        Flight_number: req.body.delBtn,
        Leg_number: req.body.delBtn,
        Date: req.body.delBtn,
        Seat_number: req.body.delBtn
    };
    await deleteSql.deleteReservation(data);
    res.redirect('/user');
});


module.exports = router;