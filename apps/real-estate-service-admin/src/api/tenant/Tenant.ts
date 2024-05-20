import { Property } from "../property/Property";
import { Rent } from "../rent/Rent";

export type Tenant = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  property?: Property | null;
  rent?: Rent | null;
  rents?: Array<Rent>;
  updatedAt: Date;
};
