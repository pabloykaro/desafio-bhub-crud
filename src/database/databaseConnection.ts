import mysql from 'mysql2/promise';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;
}


class ConnectionDataBase{

  config_mysql = {
    host: 'sql815.main-hosting.eu',
    user: 'u618775946_desafiobhub',
    password: 'Quiz8727',
    database: 'u618775946_desafiobhub',
  } as ConfigProps ;

  async connect(){
    const con = await mysql.createConnection(this.config_mysql);
    return con;
  }
}
const connectionDataBase = new ConnectionDataBase;
export default connectionDataBase;