import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles: string;
  rightIcon: string;
  isDisabled: boolean;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: Number;
  class: String;
  combination_mpg: Number;
  cylinders: Number;
  displacement: Number;
  drive: String;
  fuel_type: String;
  highway_mpg: Number;
  make: String;
  model: String;
  transmission: String;
  year: Number;
  angle: String;
}
export interface FilterProps {
  manufacturer: string;
  year: Number;
  fuel: string;
  limit: Number;
  model: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}
