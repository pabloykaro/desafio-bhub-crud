import { PrismaClient } from "@prisma/client";
import { Bank } from "../../entities/Bank";
import { IBankRepository } from "../IBankRepository";
const prisma = new PrismaClient();

export class BankRepository implements IBankRepository{
 
  async findByAccountBank(account_bank: string): Promise<boolean> {
     
    const findManyByAccountBank = await prisma.bhub_data_banks.findMany({
      where:{
        account_bank
      }
    })

      if(findManyByAccountBank.length > 0) return true;
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
   
     await prisma.bhub_data_banks.create({
      data:{
        id_bank,
        id_fk_client,
        agency_account,
        account_bank,
        bank_name
      }
     });
    
  }

}