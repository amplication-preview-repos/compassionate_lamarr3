import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { RentWhereUniqueInput } from "../rent/RentWhereUniqueInput";
import { RentUpdateManyWithoutTenantsInput } from "./RentUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  property?: PropertyWhereUniqueInput | null;
  rent?: RentWhereUniqueInput | null;
  rents?: RentUpdateManyWithoutTenantsInput;
};
