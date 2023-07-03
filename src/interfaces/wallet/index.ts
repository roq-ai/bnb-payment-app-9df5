import { TransactionInterface } from 'interfaces/transaction';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface WalletInterface {
  id?: string;
  altcoin_type: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    transaction?: number;
  };
}

export interface WalletGetQueryInterface extends GetQueryInterface {
  id?: string;
  altcoin_type?: string;
  organization_id?: string;
}
