import { FRAMEWORKS, LANGUAGES } from "../enums";

export interface IProject {
  id: number;
  languages: LANGUAGES[];
  frameworks?: FRAMEWORKS[];
  releaseDate: string;
  repositoryLink: string;
  descriptionPl: string;
  descriptionEN: string;
}
