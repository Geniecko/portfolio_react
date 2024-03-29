import musicFestival from 'assets/image/music_festival.jpg';
import musicFestivalMobile from 'assets/image/music_festival_mobile.jpg';
import thomasAnderson from 'assets/image/thomas_anderson.jpg';
import thomasAndersonMobile from 'assets/image/thomas_anderson_mobile.jpg';
import justQuiz from 'assets/image/just_quiz.jpg';
import paperRockScissors from 'assets/image/paper_rock_scissors.png';
import portfolioReact from 'assets/image/portfolio_react.jpg';
import portfolioReactMobile from 'assets/image/portfolio_react_mobile.jpg';
import moviesLibrary from 'assets/image/movies_library.jpg';
import moviesLibraryMobile from 'assets/image/movies_library_mobile.jpg';
import weatherApp from 'assets/image/weather_app.jpg';
import weatherAppMobile from 'assets/image/weather_app_mobile.jpg';
import bmwIx from 'assets/image/bmw_ix.jpg'
import bmwIxMobile from 'assets/image/bmw_ix_mobile.jpg'
import frontendFlashcards from 'assets/image/frontend_fiszki.jpg'
import frontendFlashcardsMobile from 'assets/image/frontend_fiszki_mobile.jpg'

export const websiteProjects = [
  {
    id: 1,
    title: 'Weather App',
    content:
      'Projekt to prosta apilkacja pogodowa. Jej celem jest wyszukiwanie prognozy pogody po wpisaniu nazwy miasta. Skorzystałem w tym projekci z API pogodowego w wersji darmowej, więc nie miałem dużego pola do popisu. Skorzystałem z aktualnej pogody, jakości powietrza oraz prognozy na najbliższe dni. W tym projekcie użyłem Reduxa w którym przechowuje główny stan pogody, status, alerty oraz błędy. Głównym celem projektu było przećwiczenie technologii React & TypeScript oraz zapoznanie się z narzędziem Redux Toolkit. W projekcie korzystałem również z gita - etapy przebiegu projektu można zobaczyć na moim GitHubie. Aplikacje stylowałem za pomocą bilblioteki styled-components.',
    technologiesContent:
      'Użyte technologie: React & TypeScript, React-Router v6, React-Redux, Redux toolkit, React-Hooks, Styled-Components, Eslint, Prettier',
    siteUrl: 'https://weather-app-g.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/weather_app',
    image: weatherApp,
    imageMobile: weatherAppMobile,
  },
  {
    id: 2,
    title: 'Movies Library',
    content:
      'Projekt na który patrzysz to biblioteka filmów i seriali. Jej głównym celem jest wyszukiwanie filmów po tytule, ale aplikacja jest rozbudowana o kilka dodatkowych funkcji jak dodawanie filmów do zakładek: obejrzane, ulubione oraz do oglądnięcia. Jest również możliwość dodania oceny oraz komentarza(opcjonalnie). Ocenione filmy zapisują się w zakładce ocenione. Skorzystałem w tym projekci z API filmowego. Dane zapamiętywane są w LocalStorage przeglądarki. Od samego początku tworzenia aplikacji używałem narzędzi takich jak Eslint oraz Prettier. Projekt stworzyłem głównie z myślą o użyciu w praktyce hooki oraz reduxa. Arkusze stylów pisałem za pomocą bilblioteki styled-components. Aplikacja jest przeznaczona na desktop oraz urządzenia mobilne. Projekt jest nadal w fazie budowy, chcę usprawnić oraz zoptymalizować kilka rzeczy. W przyszłości gdy poznam lepiej TypeScript, chciałbym przebudować ten projekt w oparciu o React&TypeScript.',
    technologiesContent:
      'Użyte technologie: React, React-Router, React-Redux, Hooks, Styled-Components, Eslint, Prettier, Figma',
    siteUrl: 'https://movies-library-g.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/movies_library',
    image: moviesLibrary,
    imageMobile: moviesLibraryMobile,
  },
  {
    id: 3,
    title: 'Frontend Flashcards',
    content:
      'Projekt Frontend Flashcards to aplikacja edukacyjna oparta na popularnym pomyśle nauki z fiszek. Na głównej stronie znajdują się najnowsze fiszki dodane przez użytkowników oraz dodatkowo cztery losowe karty. Użytkownik może się zalogować na swoje konto, a następnie może stworzyć nową fiszke lub wrócić do podglądu wcześniej stworzonych przez siebie fiszek. Projekt powstał z myślą o stworzeniu prostego dashboardu użytkownika oraz przećwiczenia React Context w praktyce. Wszystkie dane ładowane są z pliku metodą fetch, imitując tym pobranie danych z serwera. Aplikacja niestety nie jest połączona z żadną bazą danych, więc po odświeżeniu przeglądarki wraca do stanu początkowego. Przykładowe dane logowania (login/hasło): user/userpass',
    technologiesContent:
      'Użyte technologie: React & TypeScript, React-Router, React Context, React Hooks, Styled-Components, React Icons, Eslint, Prettier, Figma',
    siteUrl: 'https://frontend-flashcard.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/frontend_flashcards',
    image: frontendFlashcards,
    imageMobile: frontendFlashcardsMobile,
  },
  {
    id: 4,
    title: 'BMW IX',
    content:
      'Strona zakodowana z gotowego projektu graficznego. Ten projekt posiada pełną responsywność oraz był pisany zgodnie z fluid RWD. Do stworzenia slidera użyłem zewnętrznej bliblioteki SplideJS. Zdjęcia na stronie są kompatybilne z ekranami typu hi-rez (retina-friendly). Strona posiada lekkie animacje.',
    technologiesContent:
      'Użyte technologie: HTML, CSS(SASS & BEM), JavaScript, SplideJs, AOC, Webpack, Git',
    siteUrl: 'https://bmw-example-site.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/bmw_ix',
    image: bmwIx,
    imageMobile: bmwIxMobile,
  },
  {
    id: 5,
    title: 'Music Festival',
    content:
      'Layout strony stworzyłem w programie Figma, a następnie zakodowałem stronę przy użyciu techonologii wymienionych poniżej. Artyści są wczytywani z pliku JSON metodą FETCH API, a następnie za pomocą JavaScript dodani do strony. Strona posiada RWD. Arkusz stylów jest napisany przy użyciu preprocesora SASS. Zastosowałem tutaj metodę Mobile First',
    technologiesContent:
      'Użyte technologie: HTML, CSS(SASS & BEM), JavaScript, SplideJs, Webpack, Figma, Photoshop',
    siteUrl: 'https://music-festival-cracow.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/music_festival',
    image: musicFestival,
    imageMobile: musicFestivalMobile,
  },
  {
    id: 6,
    title: 'Thomas Anderson',
    content:
      'Wstępny layout strony stworzyłem w programie Figma oraz grafiki w programie Photoshop. Postanowiłem użyc przy tym projekcie uprzednio skonfigurowanego Webpacka ponieważ chciałem przetestować go w praktyce. W projekcie zdecydowałem się użyc preprocesora SASS w połączeniu z metodologią BEM. Strona posiada wersję mobilną i jest w pełni responsywna (Desktop First).',
    technologiesContent:
      'Użyte technologie: HTML, CSS(SASS & BEM), JavaScript, Webpack, Figma, Photoshop',
    siteUrl: 'https://thomasphotography.netlify.app',
    gitHubUrl: 'https://github.com/Geniecko/thomas_anderson',
    image: thomasAnderson,
    imageMobile: thomasAndersonMobile,
  },
  {
    id: 7,
    title: 'Portfolio',
    content:
      'Portfolio, które właśnie oglądasz jest to jeden z pierwszych projektów, które stworzyłem w ReactJS. Postanowiłem użyc Reacta ze względu na routing. Za pomocą CSSTransition udało mi się stworzyć animowane przejścia pomiędzy podstronami. Od samego początku tworzenia aplikacji używałem narzędzi takich jak Eslint oraz Prettier, które zkonfigurowałem w plikach .eslintrc oraz .prettierrc. Struktura plików jest zbudowana zgodnie z zasadą Atomic Design Pattern. Strone stylowałem za pomocą bilblioteki styled-components. Portfolio jest w pełni responsywne. Layout stworzony w programie Figma. ',
    technologiesContent:
      'Użyte technologie: React, React-Router, Styled-Components, CSSTransition, Eslint, Prettier, Figma, Photoshop',
    siteUrl: '/',
    gitHubUrl: 'https://github.com/Geniecko/portfolio_react',
    image: portfolioReact,
    imageMobile: portfolioReactMobile,
  },
];

export const appProjects = [
  {
    id: 1,
    title: 'Paper Rock Scissors',
    content:
      'Popularna gra "Papier Kamień Nożyce". Grę stworzyłem, aby zapoznać się z podstawami języka TypeScript w praktyce. Wykorzystałem preprocesor SASS z metodologią BEM do ostylowania aplikacji. Wyniki zapisane są w localStorage przeglądarki, dzięki czemu po odświeżeniu strony nie tracimy naszych wyników. Swoją przygodę z TypeScript rozpocząłem od tego projektu i w ciągu dalszej nauki zamierzam go usprawniać.',
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS & BEM), TypeScript, Webpack',
    siteUrl: 'https://paper-rock-scissors-g.netlify.app',
    gitHubUrl: 'https://github.com/Geniecko/paper_rock_scissors',
    image: paperRockScissors,
  },
  {
    id: 2,
    title: 'Just Quiz',
    content:
      'Quiz stworzony w JS. Pytania, odpowiedzi pobierane są z pliku za pomocą metody fetch. Aplikacja nie jest połączona z bazą danych więc wyniki po odświeźeniu strony kasują się. Arkusze stylów pisane za pomocą preprocesora SASS oraz konwencji nazewnictwa BEM.',
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS & BEM), JS, Webpack, Figma',
    siteUrl: 'https://justquiz.netlify.app/',
    gitHubUrl: 'https://github.com/Geniecko/justquiz',
    image: justQuiz,
  },
];
