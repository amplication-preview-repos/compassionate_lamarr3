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
import {
  IsNumber,
  IsOptional,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";
import { EnumRentStatus } from "./EnumRentStatus";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { TenantUpdateManyWithoutRentsInput } from "./TenantUpdateManyWithoutRentsInput";

@InputType()
class RentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

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
  property?: PropertyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumRentStatus,
  })
  @IsEnum(EnumRentStatus)
  @IsOptional()
  @Field(() => EnumRentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

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
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TenantUpdateManyWithoutRentsInput,
  })
  @ValidateNested()
  @Type(() => TenantUpdateManyWithoutRentsInput)
  @IsOptional()
  @Field(() => TenantUpdateManyWithoutRentsInput, {
    nullable: true,
  })
  tenants?: TenantUpdateManyWithoutRentsInput;
}

export { RentUpdateInput as RentUpdateInput };
