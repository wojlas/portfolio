import { IIdAndName } from "./IIdAndName";

export interface ISimpleProject extends IIdAndName {
  language: IIdAndName[];
  framework: IIdAndName[];
}
