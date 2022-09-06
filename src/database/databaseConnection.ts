import mysql from 'mysql2/promise';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;
}


var db = process.env.MYSQL_DATABASE;
class ConnectionDataBase{

  config_mysql = {
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: '12345678',
    database: 'database_bhub',
  } as ConfigProps ;

  async connect(){
    const con = await mysql.createConnection(this.config_mysql);
    return con;
  }
}
const connectionDataBase = new ConnectionDataBase;
export default connectionDataBase;