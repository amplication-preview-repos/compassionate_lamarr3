import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TenantCreateNestedManyWithoutRentsInput } from "./TenantCreateNestedManyWithoutRentsInput";

export type RentCreateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
  tenants?: TenantCreateNestedManyWithoutRentsInput;
};
