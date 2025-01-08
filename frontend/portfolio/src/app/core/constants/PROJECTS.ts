import {FRAMEWORKS, LANGUAGES, PROJECTS as Projects} from "../enums";
import {IProject} from "../interfaces";

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
    releaseDate: '2022-03-21',
    repositoryLink: 'https://github.com/wojlas/Check-out-the-movie',
    descriptionPl: `Aplikacja React wykorzystująca managera stanu jakim jest Redux, a także React router. Był to projekt końcowy kursu CodersLab JavaScript and React developer.
     Aplikacja wykorzystuje zewnętrzne api do pobrania listy filmów.
     Umożliwia przeglądanie ich listy korzystając z filtrów, a także udostępnia więcej informacji na temat danego filmu po kliknięciu w okładkę.
     Ponadto daje możliwość dodawania filmów do list 'Do obejrzenia' i 'Obejrzane'. Niestety, aplikacja nie korzysta z bazy danych więc po odświeżeniu strony wracamy do stanu początkowego.
     Jest to więc tylko pokaz tego co potrafiłem zrobić z Reactem po około miesięcznym kursie.`,
    descriptionEn: `A React application using Redux for state management and React Router. This was the final project for the CodersLab JavaScript and React Developer course.
     The application uses an external API to fetch a list of movies. It allows users to browse the list using filters and provides more information about each movie upon clicking the cover.
     Additionally, it enables users to add movies to 'To Watch' and 'Watched' lists.
      Unfortunately, the application does not use a database, so after refreshing the page, it returns to the initial state.
       Therefore, it's just a demonstration of what I was able to accomplish with React after about a month-long course.`,
  },
  [Projects.CHARITY_DONATION]: {
    id: 4,
    name: 'Charity donation',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.JAVA_SCRIPT, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.DJANGO],
    releaseDate: '2022-01-24',
    repositoryLink: 'https://github.com/wojlas/Charity-Donation',
    descriptionPl: `Projekt tworzony w ramach programu PortfolioLab. Było to pomiędzy kursami Pythona i Reacta. Jest to aplikacja Django z bardzo dużym wsparciem JS.
    Aplikacja polega na wysyłaniu darów charytatywnych do poszczególnych fundacji. Każda fundacja przyjmuje określone typy darów (ubrania, żywność, itp.).
    W projekcie można zauważyć bardzo ciekawe rozłożenie funkcjonalności. Django zajmuje się magazynowaniem danych i wyświetlaniem ich na start.
    JavaScript odpowiada bardziej za UX i walidację, ukrywając niepotrzebne elementy.
    Porównując kod JS z tego projektu z chociażby projektem Check out the movie, można zauważyć jak dużo nauczyłem się podczas kursu JS,
    myślę, że z tą wiedzą w tym projekcie, napisał bym kod JS wielokrotnie bardziej wydajny i czytelny. Był oto także fajne doświadczenie, pokazujące, że nawet w podstawowym Django,
    kliknięcie przycisku nie musi od razu przeładowywać całej strony. Myślę, że to właśnie w tym projekcie zauważyłem pełną moc JavaScript i jego wpływ na wygląd i działanie strony internetowej.`,
    descriptionEn: `A project created as part of the PortfolioLab program.
     It was done between the Python and React courses. This is a Django application with extensive JavaScript support.
      The application focuses on sending charitable donations to specific foundations, each accepting certain types of donations (clothes, food, etc.).
       The project features an interesting distribution of functionalities: Django handles data storage and initial display, while JavaScript is responsible for UX and validation,
        hiding unnecessary elements. Comparing the JavaScript code from this project with the "Check out the movie" project, you can see how much I've learned during the JavaScript course.
         With that knowledge, I could now write JavaScript code that is much more efficient and readable. It was also a great experience, demonstrating that even with basic Django,
          clicking a button doesn't have to reload the entire page.
     I think this project was where I truly realized the full potential of JavaScript and its impact on the look and functionality of a website.`,
  },
  [Projects.CONFERENCE_ROOMS]: {
    id: 5,
    name: 'Conference rooms',
    languages: [LANGUAGES.PYTHON, LANGUAGES.HTML, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.DJANGO],
    releaseDate: '2021-06-25',
    repositoryLink: 'https://github.com/wojlas/Conference-rooms',
    descriptionPl: `Aplikacja Django do zarządzania siecią sal konferencyjnych. Do dyspozycji dostajemy zestaw sal o określonych parametrach (pojemność, dostęp do rzutnika, itp).
    Aplikacja pozwala zarezerwować salę na określony czas, dbając o to, aby dwie osoby nie mogły wynająć tej samej sali na ten sam termin. Jest to mój pierwszy projekt Django pisany samodzielnie.
    Pomimo tego, że jest bardzo podstawowy (raptem 3 widoki), bardzo miło wspominam pracę nad nim.`,
    descriptionEn: `A Django application for managing a network of conference rooms.
     Users have access to a set of rooms with specific features (capacity, access to a projector, etc.).
     The application allows users to book a room for a specific time, ensuring that two people cannot book the same room for the same time slot.
     This is my first Django project that I developed independently. Although it's very basic (only three views), I have fond memories of working on it.`,
  },
  [Projects.TODO]: {
    id: 6,
    name: 'TODO App',
    languages: [LANGUAGES.JAVA_SCRIPT, LANGUAGES.HTML, LANGUAGES.CSS],
    frameworks: [FRAMEWORKS.REACT],
    releaseDate: '2022-01-19',
    repositoryLink: 'https://github.com/wojlas/TODO-React',
    descriptionPl: `Lista rzeczy do zrobienia. Moja pierwsza 'większa' aplikacja napisana w React, bez użycia managera stanu, tylko podstawowe propsy.
     Aplikacja umożliwia ustawienie listy rzeczy do zrobienia o określonych porach i z określonym priorytetem, a także możliwość odkładania zadania o 15 minut lub godzinę.`,
    descriptionEn: `A to-do list. My first 'bigger' application written in React, without using a state manager, just basic props.
     The application allows you to set a to-do list with specific times and priorities, and also provides the option to postpone tasks by 15 minutes or an hour.`,
  },
  [Projects.WEATHER_APP]: {
    id: 7,
    name: 'Weather App',
    languages: [LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JAVA_SCRIPT],
    releaseDate: '2021-11-28',
    repositoryLink: 'https://github.com/wojlas/weatherApp',
    descriptionPl: `Aplikacja wyświetlająca prognozę pogody na następne 5 dni. Prognoza pochodzi z zewnętrznego api, frontend został napisany w czystym JavaScript.`,
    descriptionEn: 'An application displaying the weather forecast for the next 5 days. The forecast comes from an external API, and the frontend is written in plain JavaScript.',
  },
  [Projects.LOTTO]: {
    id: 8,
    name: 'Lotto Game',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '2021-04-23',
    repositoryLink: 'https://github.com/wojlas/LOTTO-game',
    descriptionPl: `Symulacja gry Lotto napisana w Pythonie. Element większej serii mini-gierek do odpalenia w terminalu.
     Należy podać 6 liczb od 1 do 49. Komputer losuje swoje 6 liczb, po czym informuje nas ile z nich trafiliśmy.`,
    descriptionEn: `A Lotto game simulation written in Python. It is part of a larger series of mini-games to be run in the terminal.
     You need to enter 6 numbers from 1 to 49. The computer then draws its 6 numbers and informs you how many you guessed correctly.`,
  },
  [Projects.GUESS_THE_NUMBER]: {
    id: 9,
    name: 'Guess the number',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '2021-04-23',
    repositoryLink: 'https://github.com/wojlas/Guess-the-number',
    descriptionPl: `Prosta gra w zgadywanki napisana w Pythonie, element większej serii mini-gierek do odpalenia w terminalu.
    Komputer losuje liczbę od 1 do 100, naszym zadaniem jest zgadnąć tę liczbę przy jak najmniejszej liczbie prób.
     Gra informuje nas, czy podana liczba jest mniejsza, czy wyższa niż ta wylosowana.`,
    descriptionEn: `A simple guessing game written in Python, part of a larger series of mini-games to be run in the terminal.
     The computer draws a number from 1 to 100, and your task is to guess the number with as few attempts as possible.
     The game informs you whether the guessed number is lower or higher than the drawn number.`,
  },
  [Projects.GUESS_THE_NUMBER_FLASK]: {
    id: 10,
    name: 'Guess the number in Flask',
    languages: [LANGUAGES.PYTHON],
    frameworks: [FRAMEWORKS.FLASK],
    releaseDate: '2021-04-23',
    repositoryLink: 'https://github.com/wojlas/Guess_the_number_in_Flask',
    descriptionPl: `Wersja gry Guess the number wraz z interfejsem graficznym napisanym we frameworku Flask. Element większej serii mini-gierek do odpalenia w terminalu.
    Komputer losuje liczbę od 1 do 100, naszym zadaniem jest zgadnąć tę liczbę przy jak najmniejszej liczbie prób.
     Gra informuje nas, czy podana liczba jest mniejsza, czy wyższa niż ta wylosowana.`,
    descriptionEn: `A version of the Guess the Number game with a graphical interface written in the Flask framework. It is part of a larger series of mini-games to be run in the terminal.
     The computer draws a number from 1 to 100, and your task is to guess the number with as few attempts as possible.
      The game informs you whether the guessed number is lower or higher than the drawn number.`,
  },
  [Projects.ANOTHER_GUESS_THE_NUMBER]: {
    id: 11,
    name: 'Reverted guess the number',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '2021-04-23',
    repositoryLink: 'https://github.com/wojlas/Another-Guess-the-number',
    descriptionPl: `Prosta gra w zgadywanki, element większej serii mini-gierek do odpalenia w terminalu.
    Tym razem to gracz wybiera liczbę z przedziału 1-1000 a komputer ma 10 prób aby zgadnąć jaka to liczba. Jeżeli mu się uda - wygrywa, jeżeli nie - wygrywa gracz.`,
    descriptionEn: `A simple guessing game, part of a larger series of mini-games to be run in the terminal.
     This time, the player chooses a number from the range 1-1000, and the computer has 10 attempts to guess the number. If the computer succeeds, it wins; if not, the player wins.`,
  },
  [Projects.DICE]: {
    id: 12,
    name: 'Dice roll',
    languages: [LANGUAGES.PYTHON],
    releaseDate: '2021-04-23',
    repositoryLink: 'https://github.com/wojlas/DICE',
    descriptionPl: `Gra symulująca rzut kością do gry. Element większej serii mini-gierek do odpalenia w terminalu.
    Gracz wybiera liczbę rzutów, rodzaj kości i dodatkowy modyfikator, po czym gra zwraca wynik rzutu.`,
    descriptionEn: `A game simulating a dice roll. Part of a larger series of mini-games to be run in the terminal.
     The player chooses the number of rolls, the type of dice, and an additional modifier, and the game returns the result of the roll.`,
  },
  [Projects.CHATTLY]: {
    id: 13,
    name: 'Chattly',
    languages: [LANGUAGES.TYPE_SCRIPT, LANGUAGES.JAVA_SCRIPT, LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.SASS],
    frameworks: [FRAMEWORKS.REACT],
    releaseDate: '2024-11-22',
    projectPage: 'https://apps.shopify.com/chattly',
    descriptionPl: 'We współpracy z firmą AGInference stworzyłem warstwę UI dla Chattly - opartego o sztuczną inteligencję ' +
      'asystenta sklepu internetowego. Wiedząc o dostępnym asortymencie potrafi doradzić w zakupach. ' +
      'Warstwa frontend jest napisana w React. Do głównych cech aplikacji - z punktu widzenia programisty - należą: ' +
      'możliwość personalizacji właściwie wszystkiego - od kolorów tła, elementów ui i przycisków, po możliwość ' +
      'ustawiania svg jako tło. Niestety repozytorium jest prywatnym aktywem AGInference więc nie moge się nim tutaj podzielić.',
    descriptionEn: 'In collaboration with AGInference, I created the UI layer for Chattly, an AI-based online shop assistant. ' +
      'Knowing about the available product range, it is able to give shopping advice. The frontend layer is written in React. ' +
      'The main features of the app - from a developer\'s point of view - include the ability to customise virtually ' +
      'everything - from background colours, ui elements and buttons, to the ability to set svg as a background. ' +
      'Unfortunately, the repository is a private asset of AGInference so I cannot share it here.'
  }
};
