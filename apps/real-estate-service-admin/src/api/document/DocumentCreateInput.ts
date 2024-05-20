import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type DocumentCreateInput = {
  path?: string | null;
  property?: PropertyWhereUniqueInput | null;
  title?: string | null;
  uploadedAt?: Date | null;
};
