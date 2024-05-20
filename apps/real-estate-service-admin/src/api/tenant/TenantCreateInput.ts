import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentWhereUniqueInput } from "../rent/RentWhereUniqueInput";
import { RentCreateNestedManyWithoutTenantsInput } from "./RentCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  property?: PropertyWhereUniqueInput | null;
  rent?: RentWhereUniqueInput | null;
  rents?: RentCreateNestedManyWithoutTenantsInput;
};
