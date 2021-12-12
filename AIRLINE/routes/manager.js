import express from "express";
import { insertSql, updateSql, deleteSql, selectSql } from "../database/sql";

const router = express.Router();


// 1. 공항 정보 입력
router.get('/manager', async (req, res) => {
    const Airport_res = await selectSql.getAirport();
    res.render('airport_insert', {
        title: "공항 정보 입력",
        Airport_res
    });
});
router.post('/airport_insert', (req, res) => {
    const vars = req.body;
    const data = {
        Airport_code: vars.Airport_code,
        Name: vars.Name,
        City: vars.City,
        State: vars.State
    };
    insertSql.setAirport(data);
    res.redirect('/manager');
})

// 2. 공항 정보 수정
router.get('/manager', async (req, res) => {
    const Airport_res = await selectSql.getAirport();
    res.render('airport_update', {
        title: "공항 정보 수정",
        Airport_res
    });
});
router.post('/airport_update', async (req, res) => {
    const vars = req.body;
    const data = {
        Airport_code: vars.Airport_code
    }
    await updateSql.updateAirport(data);
    res.redirect('/manager');
});

// 3. 공항 정보 삭제
router.get('/manager', async (req, res) => {
    const Airport_res = await selectSql.getAirport();
    res.render('airport_delete', {
        title: "공항 정보 삭제",
        Airport_res
    });
});
router.post('/airport_delete', async (req, res) => {
    const data = {
        Airport_code: req.body.delBtn
    };
    await deleteSql.deleteAirport(data);
    res.redirect('/manager');
});

// 4. 항공기 정보 입력
router.get('/manager', async (req, res) => {
    const Airplane_res = await selectSql.getAirplane();
    res.render('airplane_insert', {
        title: "항공기 정보 입력",
        Airplane_res
    });
});
router.post('/airplane_insert', (req, res) => {
    const vars = req.body;
    const data = {
        Airplane_id: vars.Airplane_id,
        Total_number_of_seats: vars.Total_number_of_seats,
        Airplane_type: vars.Airplane_type
    };
    insertSql.setAirplane(data);
    res.redirect('/manager');
})

// 5. 항공기 정보 수정
router.get('/manager', async (req, res) => {
    const Airplane_res = await selectSql.getAirplane();
    res.render('airplane_update', {
        title: "항공기 정보 수정",
        Airplane_res
    });
});
router.post('/airplane_update', async (req, res) => {
    const vars = req.body;
    const data = {
        Airplane_id: vars.Airplane_id
    }
    await updateSql.updateAirplane(data);
    res.redirect('/manager');
});

// 6. 항공기 정보 삭제
router.get('/manager', async (req, res) => {
    const Airplane_res = await selectSql.getAirplane();
    res.render('airplane_delete', {
        title: "항공기 정보 삭제",
        Airplane_res
    });
});
router.post('airplane_delete', async (req, res) => {
    const data = {
        Airplane_id: req.body.delBtn
    };
    await deleteSql.deleteAirplane(data);
    res.redirect('/manager');
});

// 7. 항공편 정보 입력
router.get('/manager', async (req, res) => {
    const Flight_res = await selectSql.getFlight();
    res.render('flight_insert', {
        title: "항공편 정보 입력",
        Flight_res
    });
});
router.post('/flight_insert', (req, res) => {
    const vars = req.body;
    const data = {
        Flight_number: vars.Flight_number,
        Airline: vars.Airline,
        Weekdays: vars.Weekdays
    };
    insertSql.setFlight(data);
    res.redirect('/manager');
})

// 8. 항공편 정보 수정
router.get('/manager', async (req, res) => {
    const Flight_res = await selectSql.getFlight();
    res.render('flight_update', {
        title: "항공편 정보 수정",
        Flight_res
    });
});
router.post('/flight_update', async (req, res) => {
    const vars = req.body;
    const data = {
        Flight_number: vars.Flight_number
    }
    await updateSql.updateFlight(data);
    res.redirect('/manager');
});

// 9. 항공편 정보 삭제
router.get('/manager', async (req, res) => {
    const Flight_res = await selectSql.getFlight();
    res.render('flight_delete', {
        title: "항공편 정보 삭제",
        Flight_res
    });
});
router.post('/flight_delete', async (req, res) => {
    const data = {
        Flight_number: req.body.delBtn
    };
    await deleteSql.deleteFlight(data);
    res.redirect('/manager');
});

module.exports = router;