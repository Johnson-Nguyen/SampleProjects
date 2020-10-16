var sql = require('mssql');

var dbConfig ={
    server: "atl-sb-db01",
    database: "master",
    user:"apihelpLoginRO",
    password: "qTpjPeVa#p4V3nKThJ5YQS!3tK",
    port: 1535
};

function getEmp(){
    var conn = new sql.ConnectionPool(dbConfig);
    var req= new sql.Request(conn);

    conn.connect(function(err){
        if(err){
            console.log(err);
            return;
        }
        req.query("SELECT TOP 10 * FROM FirstData.MM035.Merchant" ,function(err, recordset){
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset);
            }
            conn.close();
        });
    });
}

getEmp();