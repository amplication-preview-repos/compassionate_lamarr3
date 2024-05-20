import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";

export type RentWhereInput = {
  amount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
  status?: "Option1";
  tenant?: TenantWhereUniqueInput;
  tenants?: TenantListRelationFilter;
};
