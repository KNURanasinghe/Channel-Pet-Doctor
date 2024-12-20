const pool = require("../../config/db");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO farmer (name, contact, location, mobile_no, NIC_no, password) VALUES (?, ?, ?, ?,?,?)`,
            [
                data.name,
                data.contact,
                data.location,
                data.mobile_no,
                data.NIC_no,
                data.password,
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE farmer SET name = ?, email = ?, password = ?, role = ? WHERE id = ?`, // Removed extra comma
            [
                data.name,
                data.email,
                data.password,
                data.role
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },

    getUsers: (callBack) => {
        pool.query(
            `SELECT name, contact, location, mobile_no, NIC_no FROM farmer`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getUserByID: (id, callBack) => {
        pool.query(
            `SELECT name, contact, location, mobile_no, NIC_no FROM farmer WHERE id = ?`,
            [id],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },

    getUserByNIC: (NIC_no, callBack) => {
        pool.query(
            `SELECT * FROM farmer WHERE NIC_no = ?`,
            [NIC_no],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE farmer SET name = ?, email = ?, password = ? WHERE id = ?`, // Removed extra comma
            [
                data.name,
                data.email,
                data.password,
                data.id
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM farmer WHERE id = ?`,
            [data.id],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    }
    
};
