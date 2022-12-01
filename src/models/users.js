const dbpool = require('../config/database');
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbpool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (nama, tanggal_lahir, usia, no, kota, pendidikan)
                                    VALUE ('${body.nama}', '${body.tanggal_lahir}', '${body.usia}', '${body.no}','${body.kota}', '${body.pendidikan}')`;
return dbpool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users 
                                    SET nama='${body.nama}', tanggal_lahir='${body.tanggal_lahir}',  usia='${body.usia}', no='${body.no}', kota='${body.kota}', pendidikan='${body.pendidikan}'
                                    WHERE id=${id}`;
return dbpool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery =`DELETE FROM  users WHERE id=${id}`;
return dbpool.execute(SQLQuery);
}
module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}