export type Language = 'fr' | 'en'

const fr = {
  page: {
    title: 'Juliette Bergoënd — Ingénieure logiciel',
    description:
      'Juliette Bergoënd — ingénieure logiciel spécialisée en Python, React et traitement du langage.',
  },
  profileName: 'Juliette Bergoënd',
  place: 'Besançon, France',
  profile: {
    heading: 'Qui suis-je ?',
    operatorLabel: 'Id',
    roleLabel: 'Rôle',
    role: 'Ingénieure logiciel / Full Stack',
    locationLabel: 'Localisation',
    statusLabel: 'Statut',
    status: 'Disponible',
    description:
      'Ingénieure logiciel spécialisée en Python, React et traitement du langage. Je transforme des besoins complexes en applications fiables, de la recherche au déploiement.',
    mission:
      'Relier recherche et produit pour créer des outils concrets, utiles et robustes.',
    terminalTitle: 'profil_utilisateur.log',
    whoamiCommand: 'whoami',
    qualificationsCommand: 'cat qualifications.txt',
    expertiseHeading: 'Domaines clés',
    experienceStat: 'Expérience',
    experienceValue: '5+ ans',
    projectsStat: 'Projets',
    projectsValue: '03',
    educationStat: 'Plathéine',
    educationValue: '∞',
    qualificationsHeading: 'Qualifications',
  },
  loader: {
    label: 'Une petite seconde, on prépare la page',
    caption: 'Une petite seconde…',
    subcaption: 'On prépare la page',
  },
  navigation: {
    homeLabel: 'Juliette Bergoënd — accueil',
    mainLabel: 'Navigation principale',
    experience: 'Parcours',
    expertise: 'Projets',
    contact: 'Me contacter',
    switchLanguage: 'Switch language to English',
    languageButton: 'EN',
  },
  hero: {
    eyebrow: 'Ingénieure logiciel · Python · Traitement du langage',
    headline: ['Qui suis-je ?'],
    intro:
      'J’aime transformer des idées en solutions concrètes, du traitement du langage aux applications embarquées.',
    experienceLink: 'Parcours',
    illustrationLabel: 'Illustration abstraite',
    illustrationCaption: 'Curiosité en mouvement',
    stamp: ['IDÉES', 'EN ACTION'],
    technologies: 'Python · React · TAL',
  },
  experience: {
    eyebrow: 'Expérience professionnelle',
    heading: 'Un parcours entre',
    headingEmphasis: 'recherche et produit.',
    aside:
      'Des applications embarquées à la recherche en traitement du langage et de la parole.',
    entries: [
      {
        period: '08/2021 — présent',
        role: 'Ingénieure logiciel',
        company: 'Aprogsys',
        location: 'Besançon',
        summary:
          'Développement d’applications embarquées pour le secteur du transport.',
        details: [
          'Conception technique et développement avec Python et React.',
          'Déploiement des applications sur le matériel avec Docker.',
          'Définition des spécifications techniques et de l’architecture applicative.',
          'Maintenance, débogage, tests, validation et accompagnement client.',
        ],
      },
      {
        period: '12/2020 — 06/2021',
        role: 'Ingénieure d’étude',
        company: 'LISN — Laboratoire Interdisciplinaire des Sciences du Numérique',
        location: 'Orsay',
        summary:
          'Outils d’annotation et méthodes de traitement automatique de séries télévisées.',
        details: [
          'Création d’interfaces d’annotation avec Prodigy.',
          'Scripts Python pour repérer les anomalies et annoter les interlocuteurs et entités.',
          'Recherche de modèles pour annoter automatiquement des corpus audio et textuels.',
        ],
      },
      {
        period: '02/2020 — 11/2020',
        role: 'Stage en traitement automatique des langues',
        company: 'Dassault Aviation',
        location: 'Istres',
        summary:
          'Traitement du langage et reconnaissance vocale appliqués aux essais en vol.',
        details: [
          'Étude des méthodes de reconnaissance de la parole et collecte de corpus.',
          'Traitement du signal audio et développement d’un système de reconnaissance vocale en Python.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '',
    heading: 'Projets',
    headingEmphasis: 'et réalisations',
    aside: 'Projets issus de mes expériences professionnelles',
    visualizationLabel: 'visualisation abstraite',
    skillsLabel: 'Technologies et compétences',
    experienceDetailsLabel: 'Voir les détails de cette expérience',
    entries: [
      {
        number: '01',
        name: 'Reconnaissance vocale aéronautique',
        category: 'Essais en vol · Audio · Deep learning',
        summary:
          'Recherche et développement d’un système de reconnaissance vocale pour les essais en vol, de l’analyse audio aux modèles de deep learning.',
        skills: ['Python', 'CNN', 'Traitement audio', 'Traitement de la parole'],
        experienceIndex: 2,
        tone: 'project-cyan',
        symbol: '〰',
      },
      {
        number: '02',
        name: 'Annotation de séries TV',
        category: 'TAL · Dialogue · Données',
        summary:
          'Outils d’annotation et scripts Python pour explorer les dialogues, repérer des anomalies et structurer les échanges.',
        skills: [
          'Prodigy',
          'Python',
          'TensorFlow',
          'Annotation de texte',
          'Entity linking',
        ],
        experienceIndex: 1,
        tone: 'project-magenta',
        symbol: '“ ”',
      },
      {
        number: '03',
        name: 'Systèmes embarqués',
        category: 'Transport · Applications · Déploiement',
        summary:
          'Applications embarquées pour le transport, de la conception technique au déploiement sur le matériel.',
        skills: [
          'Python',
          'React',
          'Docker',
          'Microservices',
          'MQTT',
          'Nginx',
          'Linux',
          'Frameworks métier',
        ],
        experienceIndex: 0,
        tone: 'project-violet',
        symbol: '⌘',
      },
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    heading: 'Outils & technologies',
    items: [
      { name: 'Python', level: 'Expert' },
      { name: 'React', level: 'Intermédiaire' },
      { name: 'HTML · CSS · Tailwind', level: 'Intermédiaire' },
      { name: 'Java', level: 'Débutant' },
      { name: 'Git · GitHub · Bitbucket', level: 'Expert' },
      { name: 'JIRA · Linux', level: 'Expert' },
      { name: 'Jenkins', level: 'Avancé' },
      { name: 'Claude', level: 'Expert' },
    ],
  },
  education: {
    eyebrow: 'Formation',
    heading: 'Apprendre, toujours.',
    entries: [
      {
        period: '2018 — 2020',
        degree: 'Master en Traitement Automatique des Langues',
        institution: 'Université de Franche-Comté',
        location: 'Besançon',
      },
      {
        period: '2015 — 2018',
        degree: 'Licence Sciences du Langage',
        institution: 'Université de Franche-Comté',
        location: 'Besançon',
      },
    ],
  },
  publication: {
    eyebrow: 'Publication',
    title: 'Bazinga! A Dataset for Multi-Party Dialogues Structuring',
    authors: 'Paul Lerner, Juliette Bergoënd et al.',
    venue: 'LREC 2022',
    href: 'https://aclanthology.org/2022.lrec-1.367/',
    summary:
      'Description d’un jeu de données pour structurer les dialogues multipartites, créé dans le cadre du projet Plumcot.',
    link: 'Lire la publication',
  },
  contact: {
    eyebrow: 'Un projet en tête ?',
    heading: 'Parlons-en.',
    intro: 'Curieuse de découvrir votre prochain défi.',
    email: 'juliette.bergoend.pr@gmail.com',
    github: 'GitHub',
    githubUrl: 'https://github.com/julietteBergoend',
  },
  footer: {
    copyright: '©',
    backToTop: 'Retour en haut ↑',
  },
}

type Translation = typeof fr

const en: Translation = {
  page: {
    title: 'Juliette Bergoënd — Software Engineer',
    description:
      'Juliette Bergoënd — software engineer specializing in Python, React, and language technology.',
  },
  profileName: 'Juliette Bergoënd',
  place: 'Besançon, France',
  profile: {
    heading: 'Who am I?',
    operatorLabel: 'Operator',
    roleLabel: 'Role',
    role: 'Software Engineer',
    locationLabel: 'Location',
    statusLabel: 'Status',
    status: 'Available',
    description:
      'Software engineer specializing in Python, React, and language technology. I turn complex needs into reliable applications, from research to deployment.',
    mission:
      'Connecting research and product to build practical, useful, and robust tools.',
    terminalTitle: 'user_profile.log',
    whoamiCommand: 'whoami',
    qualificationsCommand: 'cat qualifications.txt',
    expertiseHeading: 'Core expertise',
    experienceStat: 'Experience',
    experienceValue: '5+ yrs',
    projectsStat: 'Projects',
    projectsValue: '03',
    educationStat: 'Plathéine',
    educationValue: '∞',
    qualificationsHeading: 'Qualifications',
  },
  loader: {
    label: 'One moment, getting the page ready',
    caption: 'Just a little second…',
    subcaption: 'Getting things ready',
  },
  navigation: {
    homeLabel: 'Juliette Bergoënd — home',
    mainLabel: 'Main navigation',
    experience: 'Experience',
    expertise: 'Expertise',
    contact: 'Get in touch',
    switchLanguage: 'Passer en français',
    languageButton: 'FR',
  },
  hero: {
    eyebrow: 'Software engineer · Python · Language technology',
    headline: ['Understand.', 'Experiment.', 'Make it real.'],
    intro:
      'I love turning ideas into practical solutions, from language technology to embedded applications.',
    experienceLink: 'Explore my experience',
    illustrationLabel: 'Abstract illustration',
    illustrationCaption: 'Curiosity in motion',
    stamp: ['IDEAS', 'IN ACTION'],
    technologies: 'Python · React · NLP',
  },
  experience: {
    eyebrow: 'Professional experience',
    heading: 'A path across',
    headingEmphasis: 'research and product.',
    aside:
      'From embedded applications to language and speech technology research.',
    entries: [
      {
        period: '08/2021 — Present',
        role: 'Software Engineer',
        company: 'Aprogsys',
        location: 'Besançon',
        summary: 'Developing embedded applications for the transport sector.',
        details: [
          'Technical design and application development with Python and React.',
          'Deploying applications to hardware with Docker.',
          'Defining technical specifications and application architecture.',
          'Maintenance, debugging, testing, validation, and client support.',
        ],
      },
      {
        period: '12/2020 — 06/2021',
        role: 'Research Engineer',
        company: 'LISN — Laboratoire Interdisciplinaire des Sciences du Numérique',
        location: 'Orsay',
        summary:
          'Annotation tools and natural-language processing for television dialogue.',
        details: [
          'Built annotation interfaces with Prodigy.',
          'Wrote Python scripts to detect text anomalies and annotate addressees and entities.',
          'Researched models for automatic annotation of audio and text corpora.',
        ],
      },
      {
        period: '02/2020 — 11/2020',
        role: 'Natural Language Processing Intern',
        company: 'Dassault Aviation',
        location: 'Istres',
        summary:
          'Natural-language processing and speech recognition applied to flight tests.',
        details: [
          'Reviewed speech-recognition methods and collected general and aviation audio corpora.',
          'Processed audio and built a speech-recognition system from scratch in Python.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Areas of work',
    heading: 'Different problems.',
    headingEmphasis: 'Thoughtful solutions.',
    aside: 'A few areas and outcomes drawn from my experience.',
    visualizationLabel: 'abstract visualization',
    skillsLabel: 'Tools and skills',
    experienceDetailsLabel: 'View experience details',
    entries: [
      {
        number: '01',
        name: 'Aircraft speech recognition',
        category: 'Flight tests · Audio · Deep learning',
        summary:
          'Research and development of a speech-recognition system for flight tests, from audio analysis to deep-learning models.',
        skills: ['Python', 'CNN', 'Audio processing', 'Speech processing'],
        experienceIndex: 2,
        tone: 'project-cyan',
        symbol: '〰',
      },
      {
        number: '02',
        name: 'TV series annotation',
        category: 'NLP · Dialogue · Data',
        summary:
          'Annotation tools and Python scripts to explore dialogue, detect anomalies, and structure conversations.',
        skills: ['Prodigy', 'Python', 'TensorFlow', 'Text annotation', 'Entity linking'],
        experienceIndex: 1,
        tone: 'project-magenta',
        symbol: '“ ”',
      },
      {
        number: '03',
        name: 'Embedded systems',
        category: 'Transport · Applications · Deployment',
        summary:
          'Embedded applications for transport, from technical design through deployment to hardware.',
        skills: [
          'Python',
          'React',
          'Docker',
          'Microservices',
          'MQTT',
          'Nginx',
          'Linux',
          'Corporate frameworks',
        ],
        experienceIndex: 0,
        tone: 'project-violet',
        symbol: '⌘',
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    heading: 'Tools & technology',
    items: [
      { name: 'Python', level: 'Expert' },
      { name: 'React', level: 'Intermediate' },
      { name: 'HTML · CSS · Tailwind', level: 'Intermediate' },
      { name: 'Java', level: 'Beginner' },
      { name: 'Git · GitHub · Bitbucket', level: 'Expert' },
      { name: 'JIRA · Linux', level: 'Expert' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'Claude', level: 'Expert' },
    ],
  },
  education: {
    eyebrow: 'Education',
    heading: 'Always learning.',
    entries: [
      {
        period: '2018 — 2020',
        degree: 'Master’s in Natural Language Processing',
        institution: 'Université de Franche-Comté',
        location: 'Besançon',
      },
      {
        period: '2015 — 2018',
        degree: 'Bachelor’s in Language Sciences',
        institution: 'Université de Franche-Comté',
        location: 'Besançon',
      },
    ],
  },
  publication: {
    eyebrow: 'Publication',
    title: 'Bazinga! A Dataset for Multi-Party Dialogues Structuring',
    authors: 'Paul Lerner, Juliette Bergoënd et al.',
    venue: 'LREC 2022',
    href: 'https://aclanthology.org/2022.lrec-1.367/',
    summary:
      'A dataset for structuring multi-party dialogue, created as part of the Plumcot project.',
    link: 'Read the paper',
  },
  contact: {
    eyebrow: 'Have a project in mind?',
    heading: 'Let’s talk.',
    intro: 'Curious to hear about your next challenge.',
    email: 'juliette.bergoend.pr@gmail.com',
    github: 'GitHub',
    githubUrl: 'https://github.com/julietteBergoend',
  },
  footer: {
    copyright: '©',
    backToTop: 'Back to top ↑',
  },
}

export const translations: Record<Language, Translation> = { fr, en }
