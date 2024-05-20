import { Document } from "../document/Document";
import { Rent } from "../rent/Rent";
import { Tenant } from "../tenant/Tenant";

export type Property = {
  address: string | null;
  city: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  id: string;
  rents?: Array<Rent>;
  state: string | null;
  tenants?: Array<Tenant>;
  updatedAt: Date;
  zipCode: string | null;
};
