import mysql from 'mysql2/promise';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;
}

class ConnectionDataBase{

  config_mysql = {
    host: 'localhost',
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