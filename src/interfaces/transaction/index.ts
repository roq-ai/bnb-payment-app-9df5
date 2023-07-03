import { WalletInterface } from 'interfaces/wallet';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  amount: number;
  wallet_id?: string;
  created_at?: any;
  updated_at?: any;

  wallet?: WalletInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  wallet_id?: string;
}
