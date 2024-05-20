/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TenantUpdateManyWithoutRentsInput {
  @Field(() => [TenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TenantWhereUniqueInput],
  })
  connect?: Array<TenantWhereUniqueInput>;

  @Field(() => [TenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TenantWhereUniqueInput],
  })
  disconnect?: Array<TenantWhereUniqueInput>;

  @Field(() => [TenantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TenantWhereUniqueInput],
  })
  set?: Array<TenantWhereUniqueInput>;
}

export { TenantUpdateManyWithoutRentsInput as TenantUpdateManyWithoutRentsInput };
