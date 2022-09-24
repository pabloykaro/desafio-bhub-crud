import {dataBaseMYSQL, RowDataPacket} from "../../database/databaseConnection";
import { Bank } from "../../entities/Bank";
import { IBankRepository } from "../IBankRepository";

export class BankRepository implements IBankRepository{
 
  async findByAccountBank(account_bank: string): Promise<boolean> {
    const connection = await dataBaseMYSQL.connect();
    const querySelectBankByAccountBank = 
    `SELECT id_bank FROM bhub_data_banks WHERE account_bank=?`;

    const [rows] = await connection.execute(
      querySelectBankByAccountBank,[account_bank]) as RowDataPacket[];

      if(rows.length > 0) return true;
      return false;
  }

  async save(entityBank: Bank): Promise<void> {
    const {
      id_bank,
      id_fk_client,
      agency_account,
      account_bank,
      bank_name
     } = entityBank;
    const connection = await dataBaseMYSQL.connect();
    const queryInsertBankByAccountBank = 
    `INSERT INTO 
    bhub_data_banks(id_bank,id_fk_client,agency_account,account_bank,bank_name)
    VALUES(?,?,?,?,?)`;
    
    await connection.execute(
      queryInsertBankByAccountBank,
      [
        id_bank,
        id_fk_client,
        agency_account,
        account_bank,
        bank_name
      ]) as RowDataPacket[];
    
  }

}