/**
 * Created by Jeffrey on 9/4/16.
 */

export interface Enquiry {
  id: number;
  project: string;
  func?: string;
  quantity?: number;
  isCustom?: boolean;
  email: string;
  user?: any;
}
