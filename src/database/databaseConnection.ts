import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;
}


class ConnectionDataBase{

  config_mysql = {
    host: 'db',
    user: 'pablodev',
    password: '12345678',
    database: 'database_bhub',
  } as ConfigProps ;

  async connect(){
    const con = await mysql.createConnection(this.config_mysql);
    return con;
  }
}
const dataBaseMYSQL = new ConnectionDataBase;
export {dataBaseMYSQL, RowDataPacket};
