import { Property } from "../property/Property";
import { Tenant } from "../tenant/Tenant";

export type Rent = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  property?: Property | null;
  status?: "Option1" | null;
  tenant?: Tenant | null;
  tenants?: Array<Tenant>;
  updatedAt: Date;
};
