import { DocumentUpdateManyWithoutPropertiesInput } from "./DocumentUpdateManyWithoutPropertiesInput";
import { RentUpdateManyWithoutPropertiesInput } from "./RentUpdateManyWithoutPropertiesInput";
import { TenantUpdateManyWithoutPropertiesInput } from "./TenantUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  city?: string | null;
  documents?: DocumentUpdateManyWithoutPropertiesInput;
  rents?: RentUpdateManyWithoutPropertiesInput;
  state?: string | null;
  tenants?: TenantUpdateManyWithoutPropertiesInput;
  zipCode?: string | null;
};
