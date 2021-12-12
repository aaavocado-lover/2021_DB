import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'project',
        password: 'Yefla14*07',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const insertSql = {
    setAirport : async (data) => {
        const sqlAirport = `insert into AIRPORT values (
            "${data.Airport_code}", "${data.Name}", "${data.City}", "${data.State}")`;

        await promisePool.query(sqlAirport); 
    },

    setAirplane : async (data) => {
        const sqlAirplane = `insert into AIRPLANE values (
            "${data.Airplane_id}", "${data.Total_number_of_seats}", "${data.Airplane_type}")`;

        await promisePool.query(sqlAirplane);
    },

    setFlight : async (data) => {
        const sqlFlight = `insert into FLIGHT values (
            "${data.Flight_number}", "${data.Airline}", "${data.Weekdays}")`;

        await promisePool.query(sqlFlight);
    },

    setReservation : async (data) => {
        const sqlReservation = `insert into SEAT_RESERVATION values (
            "${data.Flight_number}", "${data.Leg_number}", "${data.Date}",
            "${data.Seat_number}", "${data.Customer_name}", "${data.Customer_phone}")`;

        await promisePool.query(sqlReservation);
    }
}

export const updateSql = {
    updateAirport : async (data) => {
        const sqlAirport = `update AIRPORT set Airport_code = "${data.Airport_code}"`;

        await promisePool.query(sqlAirport);
    },

    updateAirplane : async (data) => {
        const sqlAirplane = `update AIRPLANE set Airplane_id = "${data.Airplane_id}"`;

        await promisePool.query(sqlAirplane);
    },

    updateFlight : async (data) => {
        const sqlFlight = `update FLIGHT set Flight_number = "${data.Flight_number}"`;

        await promisePool.query(sqlFlight);
    }
}

export const deleteSql = {
    deleteAirport : async (data) => {
        const sqlAirport = `delete from AIRPORT where Airport_code = "${data.Airport_code}"`;
        await promisePool.query(sqlAirport);
    },

    deleteAirplane : async (data) => {
        const sqlAirplane = `delete from AIRPLANE where Airplane_id = "${data.Airplane_id}"`;
        await promisePool.query(sqlAirplane);
    },

    deleteFlight : async (data) => {
        const sqlFlight = `delete from FLIGHT where Flight_number = "${data.Flight_number}"`;
        await promisePool.query(sqlFlight);
    },

    deleteReservation : async (data) => {
        const sqlReservation = `delete from SEAT_RESERVATION where Flight_number = "${data.Flight_number}"
        and Leg_number = "${data.Leg_number} and Date = "${data.Date}" and Seat_number = "${data.Seat_number}"`;

        await promisePool.query(sqlReservation);
    }
}

export const selectSql = {
    getUsers: async () => {
        const [rows] = await promisePool.query(`select * from USER`);
        console.log(rows);
        return rows;
    },

    getReservation : async () => {
        const [rows] = await promisePool.query(`select * from SEAT_RESERVATION`);
        console.log(rows);
        return rows;
    },

    getAirport : async () => {
        const [rows] = await promisePool.query(`select * from AIRPORT`);
        return rows;
    },

    getAirplane : async () => {
        const [rows] = await promisePool.query(`select * from AIRPLANE`);
        return rows;
    },

    getFlight : async () => {
        const [rows] = await promisePool.query(`select * from FLIGHT`);
    }
}