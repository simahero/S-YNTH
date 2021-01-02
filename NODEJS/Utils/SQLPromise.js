class SQLPromise {
    
    query(connection, sql, args) {
        return new Promise(( resolve, reject ) => {
            connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }

    close(connection) {
        return new Promise( ( resolve, reject ) => {
            connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

module.exports =  new SQLPromise();