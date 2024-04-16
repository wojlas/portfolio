import { IIdAndName } from "./IIdAndName";
import { IIdNameAndLanguage } from "./IIdNameAndLanguage";
import { IIdNameAndType } from "./IIdNameAndType";

export interface IProjectDetails extends IIdAndName {
  framework: IIdNameAndLanguage[];
  language: IIdNameAndType[];
  release_date: string;
  repository_link: string;
}
