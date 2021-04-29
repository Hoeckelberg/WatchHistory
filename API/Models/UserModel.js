const dbc = require('./dbc');

const createUser = async (user) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("INSERT INTO tbl_user(username, email, passwd) VALUES(?, ?, ?);", [user.username, user.email, user.passwd]);
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}

const getAllUser = async () => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * FROM tbl_user;");
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}

const getUserById = async (id) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * FROM tbl_user WHERE id = ?;", id);
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}

const loginUser = async (username, passwd) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * FROM tbl_user WHERE username LIKE '?' AND passwd LIKE '?';", [username, passwd]);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    loginUser

}