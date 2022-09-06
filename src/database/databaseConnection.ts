import mysql from 'mysql2/promise';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;
}


class ConnectionDataBase{


  config_mysql = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  } as ConfigProps ;

  async connect(){
    const con = await mysql.createConnection(this.config_mysql);
    return con;
  }
}
const connectionDataBase = new ConnectionDataBase;
export default connectionDataBase;
