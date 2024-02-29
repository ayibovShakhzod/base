export type EnumValueType = string | number | symbol
export type EnumType = { [key in EnumValueType]: EnumValueType }
