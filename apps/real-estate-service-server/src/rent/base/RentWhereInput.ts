/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";
import { EnumRentStatus } from "./EnumRentStatus";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { TenantListRelationFilter } from "../../tenant/base/TenantListRelationFilter";

@InputType()
class RentWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dueDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PropertyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PropertyWhereUniqueInput)
  @IsOptional()
  @Field(() => PropertyWhereUniqueInput, {
    nullable: true,
  })
  property?: PropertyWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumRentStatus,
  })
  @IsEnum(EnumRentStatus)
  @IsOptional()
  @Field(() => EnumRentStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TenantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TenantListRelationFilter)
  @IsOptional()
  @Field(() => TenantListRelationFilter, {
    nullable: true,
  })
  tenants?: TenantListRelationFilter;
}

export { RentWhereInput as RentWhereInput };
