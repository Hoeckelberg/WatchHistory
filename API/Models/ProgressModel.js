const dbc = require('./dbc');

const getProgressByUserId = async(id) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * FROM tbl_seriesprogress WHERE user_id = ?;", id);
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}
const createProgress = async(progress) => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("INSERT INTO tbl_seriesprogress(series_id, user_id, season, episode) VALUES(?, ?, ?, ?);", [progress.series_id, progress.user_id, progress.season, progress.episode]);
        return rows;
    } catch (error) {
        console.log(error)
    } finally {
        if(conn)
        conn.end();
    }
}
const updateProgress = async() => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query(";");
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        if(conn)
        conn.end();
    }
}

module.exports = {
    getProgressByUserId,
    createProgress,
    updateProgress
}