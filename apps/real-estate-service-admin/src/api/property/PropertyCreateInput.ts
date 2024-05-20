import { DocumentCreateNestedManyWithoutPropertiesInput } from "./DocumentCreateNestedManyWithoutPropertiesInput";
import { RentCreateNestedManyWithoutPropertiesInput } from "./RentCreateNestedManyWithoutPropertiesInput";
import { TenantCreateNestedManyWithoutPropertiesInput } from "./TenantCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  city?: string | null;
  documents?: DocumentCreateNestedManyWithoutPropertiesInput;
  rents?: RentCreateNestedManyWithoutPropertiesInput;
  state?: string | null;
  tenants?: TenantCreateNestedManyWithoutPropertiesInput;
  zipCode?: string | null;
};
