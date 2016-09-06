import {Product} from "./product";
import {User} from "./user";
/**
 * Created by Jeffrey on 9/6/16.
 */

export interface Order {
  id?: number;
  remoteId?: number;
  product?: Product;
  quantity?: number;
  receiver?: string;
  receiverPhone?: string;
  address?: string;
  remark?: string;
  isPrototype?: boolean;
  user?: User;
}
