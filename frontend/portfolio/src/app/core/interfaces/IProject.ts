import { FRAMEWORKS, LANGUAGES } from "../enums";

export interface IProject {
  id: number;
  name: string;
  languages: LANGUAGES[];
  frameworks?: FRAMEWORKS[];
  releaseDate: string;
  repositoryLink: string;
  descriptionPl: string;
  descriptionEN: string;
}
