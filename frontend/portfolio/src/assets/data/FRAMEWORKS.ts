import { FRAMEWORKS as Frameworks, LANGUAGES } from "../../app/core/enums";

export const FRAMEWORKS: Record<Frameworks, { name: string, language: LANGUAGES[] }> = {
  [Frameworks.DJANGO]: { name: 'Django', language: [LANGUAGES.PYTHON] },
  [Frameworks.FLASK]: { name: 'Flask', language: [LANGUAGES.PYTHON] },
  [Frameworks.DJANGO_REST]: { name: 'DjangoRest', language: [LANGUAGES.PYTHON] },
  [Frameworks.REACT]: { name: 'React', language: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.TYPE_SCRIPT] },
  [Frameworks.REACT_NATIVE]: { name: 'ReactNative', language: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.TYPE_SCRIPT] },
  [Frameworks.ANGULAR]: { name: 'Angular', language: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.TYPE_SCRIPT] }
};
