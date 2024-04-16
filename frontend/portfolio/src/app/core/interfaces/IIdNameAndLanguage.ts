import { IIdAndName } from "./IIdAndName";

export interface IIdNameAndLanguage extends IIdAndName {
  languages: IIdAndName[];
} 
