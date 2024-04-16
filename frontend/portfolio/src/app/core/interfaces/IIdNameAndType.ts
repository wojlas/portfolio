import { IIdAndName } from "./IIdAndName";

export interface IIdNameAndType extends IIdAndName {
  is_frontend: boolean;
}
