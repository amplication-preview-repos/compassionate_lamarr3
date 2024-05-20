import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type DocumentUpdateInput = {
  path?: string | null;
  property?: PropertyWhereUniqueInput | null;
  title?: string | null;
  uploadedAt?: Date | null;
};
