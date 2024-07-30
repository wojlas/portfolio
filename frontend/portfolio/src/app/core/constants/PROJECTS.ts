import { FRAMEWORKS, LANGUAGES, PROJECTS as Projects } from "../enums";
import { IProject } from "../interfaces";

export const PROJECTS: Record<Projects, IProject> = {
  [Projects.PORTFOLIO]: {
    id: 0,
    name: 'Portfolio',
    languages: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.TYPE_SCRIPT, LANGUAGES.SASS, LANGUAGES.HTML],
    frameworks: [FRAMEWORKS.ANGULAR],
    releaseDate: '2024-07-30',
    repositoryLink: 'https://github.com/wojlas/portfolio',
    descriptionPl: `Projekt napisany w angularze zawierający informacje o mnie, a także projekty nad którymi pracowałem lub pracuję obecnie.
     Sam projekt początkowo miał posiadać backend pisany w Django, jednak po pewnym czasie postanowiłem przerzucić wszystkie dane tylko na front (co zapewne ulegnie zmianie w przyszłości).
      Portfolio poza informacjami kontaktowymi a także krótkim opisem mnie, zawiera odnośniki do Linkedin, Github a także pozwala pobrać CV.
       Projekt jest na bardzo zaawansowanym etapie, ale na pewno będę go uaktualniał i ulepszał.`,
    descriptionEn: `A project written in Angular that includes information about me, as well as the projects I have worked on or am currently working on.
     Initially, the project was supposed to have a backend written in Django, but after some time, I decided to move all the data to the frontend (which may change in the future).
      Besides contact information and a brief description of myself, the portfolio contains links to LinkedIn, GitHub, and also allows you to download my CV.
       The project is at a very advanced stage, but I will definitely keep updating and improving it.`,
  },
  [Projects.RATE_A_CAR]: {
    id: 1,
    name: 'Rate a car',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JAVA_SCRIPT],
    frameworks: [FRAMEWORKS.DJANGO],
    releaseDate: '2021-09-30',
    repositoryLink: 'https://github.com/wojlas/Rate-a-car',
    descriptionPl: `Rate a car to największy projekt jaki stworzyłem. Jest to aplikacja Django, która była także projektem zaliczeniowym podczas bootcampu Python Developer w CodersLab.
    Aplikacja pozwala stworzyć użytkownika, dostosować jego profil, po czym można oceniać samochody pod 4 kątami (niezawodność, wygoda, wygląd, koszty),
     a także budować swoje własne portfolio samochodów. Oczywiście można również po prostu przeglądać auta i porównywać je ze sobą.
      Strona główna stanowi coś na kształt dashboardu, gdzie mamy wgląd w statystyki pojazdów jak top10 najwyżej ocenionych, ostatnio dodane, moje pojazdy, itp.
      Aplikacja obsługuje system uploadu zdjęć. Można śmiało powiedzieć, że w przypadku tej aplikacji wykorzystałem wszystko co wiem o Pythonie i Django w jego podstawowej wersji.`,
    descriptionEn: `Rate a Car is the largest project I've created. It's a Django application that was also a final project during the Python Developer Bootcamp at CodersLab.
     The application allows users to create an account, customize their profile, and then rate cars from four perspectives (reliability, comfort, appearance, and cost).
      Users can also build their own car portfolio. Of course, users can simply browse and compare cars as well.
       The homepage acts as a dashboard, providing insights into vehicle statistics such as the top 10 highest-rated cars, recently added vehicles, my vehicles, etc.
        The application also supports an image upload system. It's safe to say that this project encompasses everything I know about Python and basic Django.`,
  },
  [Projects.RATE_A_CAR_2]: {
    id: 2,
    name: 'Rate a car REST',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.SASS, LANGUAGES.JAVA_SCRIPT, LANGUAGES.TYPE_SCRIPT],
    frameworks: [FRAMEWORKS.ANGULAR, FRAMEWORKS.DJANGO_REST],
    releaseDate: '',
    repositoryLink: 'https://github.com/wojlas/rate-a-car-2.0',
    descriptionPl: `Rozwinięcie pomysłu znanego z Rate a car. W tym projekcie chcę wykorzystać bazę jaką daje ten duży projekt, jednak połączyć ją z nowoczesnym frontendem.
    Aby rozwinąć swoją wiedzę o Django, użyłem Django Rest Api jako aplikację backendową a także Angulara jako frontend.
     Cały pomysł opiera się na przeniesieniu podstaw z Rate a car, jednak z pominięciem konieczności ciągłego przeładowywania strony.
     Niestety, w ostatnim czasie nie maiłem wiele czasu na rozwijanie tego pomysłu, choć - zwłaszcza ze strony backendu - wiele zostało już zrobione i całość wygląda obiecująco.
     Na pewno jest to ten projekt z którym będę chciał popracować w najbliższej przyszłości.`,
    descriptionEn: `An extension of the concept from "Rate a Car." In this project, I aim to use the foundation provided by that large project but combine it with a modern frontend.
     To further my knowledge of Django, I used Django Rest API as the backend application and Angular for the frontend.
      The whole idea is to transfer the basics from "Rate a Car" while eliminating the need for constant page reloads.
       Unfortunately, I haven't had much time recently to develop this idea further, although much has already been done, especially on the backend side, and the whole project looks promising.
        This is definitely the project I want to focus on in the near future.`,
  },
  [Projects.CHECK_OUT_THE_MOVIE]: {
    id: 3,
    name: 'Check out the movie',
    languages: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.HTML, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.REACT],
    releaseDate: '2022-02-28',
    repositoryLink: '',
    descriptionPl: 'Movie',
    descriptionEn: 'Movie',
  },
  [Projects.CHARITY_DONATION]: {
    id: 4,
    name: 'Charity donation',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.JAVA_SCRIPT, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.DJANGO],
    releaseDate: '2021-11-20',
    repositoryLink: '',
    descriptionPl: 'Donation',
    descriptionEn: 'Donation',
  },
  [Projects.CONFERENCE_ROOMS]: {
    id: 5,
    name: 'Conference rooms',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.DJANGO],
    releaseDate: '2021-07-23',
    repositoryLink: '',
    descriptionPl: 'Rooms',
    descriptionEn: 'Rooms',
  },
  [Projects.TODO]: {
    id: 6,
    name: 'TODO App',
    languages: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.HTML, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.REACT],
    releaseDate: '2022-01-10',
    repositoryLink: '',
    descriptionPl: 'TODO App',
    descriptionEn: 'TODO App',
  },
  [Projects.WEATHER_APP]: {
    id: 7,
    name: 'Weather App',
    languages: [LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JAVA_SCRIPT],
    releaseDate: '2021-12-15',
    repositoryLink: '',
    descriptionPl: 'Forecast',
    descriptionEn: 'Forecast',
  },
  [Projects.LOTTO]: {
    id: 8,
    name: 'Lotto Game',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '',
    repositoryLink: '',
    descriptionPl: 'Game',
    descriptionEn: 'Game',
  },
  [Projects.GUESS_THE_NUMBER]: {
    id: 9,
    name: 'Guess the number',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '',
    repositoryLink: '',
    descriptionPl: 'Game',
    descriptionEn: 'Game',
  },
  [Projects.GUESS_THE_NUMBER_FLASK]: {
    id: 10,
    name: 'Guess the number in Flask',
    languages: [LANGUAGES.PYTHON],
    frameworks: [FRAMEWORKS.FLASK],
    releaseDate: '',
    repositoryLink: '',
    descriptionPl: 'Game',
    descriptionEn: 'Game',
  },
  [Projects.ANOTHER_GUESS_THE_NUMBER]: {
    id: 11,
    name: 'Reverted guess the number',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '',
    repositoryLink: '',
    descriptionPl: 'Game',
    descriptionEn: 'Game',
  },
  [Projects.DICE]: {
    id: 12,
    name: 'Dice roll',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '',
    repositoryLink: '',
    descriptionPl: 'Game',
    descriptionEn: 'Game',
  }
};
