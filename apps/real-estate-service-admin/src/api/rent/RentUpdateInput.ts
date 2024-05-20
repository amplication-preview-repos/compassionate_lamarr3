import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TenantUpdateManyWithoutRentsInput } from "./TenantUpdateManyWithoutRentsInput";

export type RentUpdateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
  tenants?: TenantUpdateManyWithoutRentsInput;
};
