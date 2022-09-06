import { format } from 'date-fns';
import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import { InterfaceDataClient } from '../Interfaces/InterfaceDataClient';
import {VariablesClients} from '../entity/clients';


const UseSelectAllClient = async (req: Request, res:Response) => {
  const { idClient } = new VariablesClients(req.params);

  const connection = await connectionDataBase.connect();
  const libFormatNumber = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
  });
  try{
  if(idClient){
    const [rows] = await connection.execute("SELECT *, count(id_bank) as quantityBank FROM bhub_clients LEFT JOIN bhub_data_banks ON id_client=id_fk_client WHERE id_client=? GROUP BY id_client ORDER BY id_client ASC",[idClient]) as RowDataPacket[];
    if(rows.length > 0){
    const newData = rows.map( (db_data: InterfaceDataClient) => {
      const date_register_account = format(db_data.date_register_account,'d/MM/y HH:m:s');
      const billing_declared = libFormatNumber.format(parseFloat(db_data.billing_declared));
      const quantity_account_banks = db_data.quantityBank;
    
      return {
        id_client: db_data.id_client,
        corporate_name: db_data.corporate_name,
        cnpj_number: db_data.cnpj_number,
        telephone_number: db_data.telephone_number,
        address_city: db_data.address_city,
        date_register_account,
        billing_declared,
        quantity_account_banks,

      };
    });
   res.status(200).json({data: newData});
  }else{
    res.status(400).json({data: {not_exists_users: true}});
  }
}else{
  const [rows] = await connection.query("SELECT *, count(id_bank) as quantityBank FROM bhub_clients LEFT JOIN bhub_data_banks ON id_client=id_fk_client GROUP BY id_client ORDER BY id_client ASC") as RowDataPacket[];
  if(rows.length > 0){
    const newData = rows.map( (db_data: InterfaceDataClient) => {
      const date_register_account = format(db_data.date_register_account,'d/MM/y HH:m:s');
      const billing_declared = libFormatNumber.format(parseFloat(db_data.billing_declared));
      const quantity_account_banks = db_data.quantityBank;
    
      return {
        id_client: db_data.id_client,
        corporate_name: db_data.corporate_name,
        cnpj_number: db_data.cnpj_number,
        telephone_number: db_data.telephone_number,
        address_city: db_data.address_city,
        date_register_account,
        billing_declared,
        quantity_account_banks,
      
      };
    });
   res.status(200).json({data: newData});
  }else{
    res.status(400).json({data: {not_exists_users: true}});
  }
}
}catch(err){
  res.status(500).json({data: {server_status: "off"}});
}
}

export { UseSelectAllClient };