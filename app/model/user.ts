import {Trade} from "./trade";
/**
 * Created by Jeffrey on 9/1/16.
 */

export interface User {
  id?: number;
  account: string;
  company?: string;
  license?: string;
  title?: string;
  phone?: string;
  trade?: Trade;
  address?: string;
}
