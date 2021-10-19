import mysql, { MysqlError, Connection, Query } from 'mysql';
import config from '../../config/config';

var connection: Connection;

function query(sql: string, args: any, callback?: mysql.queryCallback | undefined): Promise<any> {

    if (!connection) {
        connection = mysql.createConnection({
            host: config.SQL.HOST,
            user: config.SQL.USER,
            password: config.SQL.PASSWORD,
            port: config.SQL.PORT,
            database: config.SQL.DATABASE
        });

        connection.connect((err: MysqlError) => {
            if (err) {
                console.error(err)
            } else {
                console.info('Connected!')
            }
        });
    }

    return new Promise((resolve, reject):any => {
        connection.query(sql, args, (err, rows) => {
            if (err)
                return reject(err);
            resolve(rows);
        });
    });
}

function close() {

    if (!connection) {
        return;
    }

    return new Promise((resolve, reject) => {
        connection.end(err => {
            if (err)
                return reject(err);
            resolve({});
        });
    });
}

export {
    query,
    close
};