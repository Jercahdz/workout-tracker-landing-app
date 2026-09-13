export type Language = 'en' | 'es'

export type ScreenshotId =
  | 'login'
  | 'home'
  | 'ai'
  | 'workouts'
  | 'exercises'
  | 'exercisesDetail'
  | 'progress'
  | 'stats'
  | 'profile'

interface FeatureContent {
  title: string
  description: string
}

interface WorkoutMockContent {
  name: string
  meta: string
}

export interface TranslationContent {
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    headlineLine3: string
    subcopy: string
    ctaPrimary: string
    ctaSecondary: string
    mockStreakLabel: string
    mockStreakValue: string
    mockWorkouts: WorkoutMockContent[]
    tiers: string[]
  }
  features: {
    eyebrow: string
    headline: string
    items: FeatureContent[]
  }
  ai: {
    eyebrow: string
    headline: string
    paragraph: string
    routineFocuses: string[]
  }
  screenshots: {
    eyebrow: string
    headline: string
    labels: Record<ScreenshotId, string>
  }
  download: {
    eyebrow: string
    headline: string
    paragraph: string
    cta: string
  }
  footer: {
    tagline: string
    appLink: string
    apiLink: string
  }
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    hero: {
      eyebrow: 'WORKOUT TRACKER',
      headlineLine1: 'Train.',
      headlineLine2: 'Track.',
      headlineLine3: 'Level up.',
      subcopy:
        'The app that builds your routines with AI, logs every session, and turns your consistency into measurable progress.',
      ctaPrimary: 'Download APK',
      ctaSecondary: 'View on GitHub',
      mockStreakLabel: 'CURRENT STREAK',
      mockStreakValue: '12 days',
      mockWorkouts: [
        { name: 'Chest + Triceps', meta: '6 exercises - 45 min' },
        { name: 'Back + Biceps', meta: '6 exercises - 45 min' },
        { name: 'Legs', meta: '7 exercises - 50 min' },
      ],
      tiers: ['ROOKIE', 'ATHLETE', 'WARRIOR', 'CHAMPION', 'LEGEND'],
    },
    features: {
      eyebrow: 'FEATURES',
      headline: 'Everything you need to train seriously',
      items: [
        {
          title: 'Training profile',
          description: 'Set your goal, level, and available days. The app builds everything around you.',
        },
        {
          title: 'Personalized routines',
          description: 'Create and edit routines with sets, reps, and weight per exercise.',
        },
        {
          title: '100+ exercises',
          description: 'Catalog with animated GIFs and step-by-step instructions by muscle group.',
        },
        {
          title: 'Visual progress',
          description: 'Body weight charts and load progression for every exercise.',
        },
        {
          title: 'Streaks and shields',
          description: 'Rack up consecutive training days and protect your streak on rest days.',
        },
        {
          title: 'English and Spanish',
          description: 'Fully translated interface with automatic device language detection.',
        },
      ],
    },
    ai: {
      eyebrow: 'AI GENERATION',
      headline: 'Your 5-day routine, ready in seconds',
      paragraph:
        'Based on your profile, goal, and training days, the model builds a structured plan by muscle group, sets, and reps. One tap and it is saved as your active routine.',
      routineFocuses: ['Chest + Triceps', 'Back + Biceps', 'Legs', 'Shoulders + Core', 'Full Body'],
    },
    screenshots: {
      eyebrow: 'SCREENSHOTS',
      headline: 'Here is what is inside',
      labels: {
        login: 'Login',
        home: 'Dashboard',
        ai: 'AI Routine',
        workouts: 'Workouts',
        exercises: 'Exercises',
        exercisesDetail: 'Exercise Instructions',
        progress: 'Progress',
        stats: 'Stats',
        profile: 'Profile',
      },
    },
    download: {
      eyebrow: 'GET STARTED',
      headline: 'Your progress starts here',
      paragraph: 'Download the APK, set up your profile, and generate your first AI routine in under two minutes.',
      cta: 'Download APK',
    },
    footer: {
      tagline: 'WORKOUT TRACKER',
      appLink: 'App',
      apiLink: 'API',
    },
  },
  es: {
    hero: {
      eyebrow: 'WORKOUT TRACKER',
      headlineLine1: 'Entrena.',
      headlineLine2: 'Trackea.',
      headlineLine3: 'Sube de nivel.',
      subcopy:
        'La app que arma tus rutinas con IA, registra cada sesion y convierte tu constancia en progreso medible.',
      ctaPrimary: 'Descargar APK',
      ctaSecondary: 'Ver en GitHub',
      mockStreakLabel: 'RACHA ACTUAL',
      mockStreakValue: '12 dias',
      mockWorkouts: [
        { name: 'Pecho + Triceps', meta: '6 ejercicios - 45 min' },
        { name: 'Espalda + Biceps', meta: '6 ejercicios - 45 min' },
        { name: 'Piernas', meta: '7 ejercicios - 50 min' },
      ],
      tiers: ['NOVATO', 'ATLETA', 'GUERRERO', 'CAMPEON', 'LEYENDA'],
    },
    features: {
      eyebrow: 'FUNCIONALIDADES',
      headline: 'Todo lo que necesitas para entrenar en serio',
      items: [
        {
          title: 'Perfil de entrenamiento',
          description: 'Define tu objetivo, nivel y dias disponibles. La app arma todo alrededor tuyo.',
        },
        {
          title: 'Rutinas personalizadas',
          description: 'Crea y edita rutinas con series, repeticiones y peso por ejercicio.',
        },
        {
          title: '+100 ejercicios',
          description: 'Catalogo con GIFs animados e instrucciones paso a paso por grupo muscular.',
        },
        {
          title: 'Progreso visual',
          description: 'Graficos de peso corporal y evolucion de carga en cada ejercicio.',
        },
        {
          title: 'Rachas y escudos',
          description: 'Suma dias consecutivos de entrenamiento y protege tu racha en los descansos.',
        },
        {
          title: 'Español e ingles',
          description: 'Interfaz completamente traducida, con deteccion automatica del idioma del dispositivo.',
        },
      ],
    },
    ai: {
      eyebrow: 'GENERACION CON IA',
      headline: 'Tu rutina de 5 dias, lista en segundos',
      paragraph:
        'A partir de tu perfil, objetivo y dias de entrenamiento, el modelo arma un plan estructurado por grupo muscular, series y repeticiones. Un toque y queda guardado como rutina activa.',
      routineFocuses: ['Pecho + Triceps', 'Espalda + Biceps', 'Piernas', 'Hombros + Core', 'Full Body'],
    },
    screenshots: {
      eyebrow: 'CAPTURAS',
      headline: 'Asi se ve por dentro',
      labels: {
        login: 'Inicio de sesion',
        home: 'Panel principal',
        ai: 'Rutina IA',
        workouts: 'Rutinas',
        exercises: 'Ejercicios',
        exercisesDetail: 'Instrucciones de Ejercicios',
        progress: 'Progreso',
        stats: 'Estadisticas',
        profile: 'Perfil',
      },
    },
    download: {
      eyebrow: 'EMPEZA HOY',
      headline: 'Tu progreso empieza aca',
      paragraph: 'Descarga el APK, crea tu perfil y genera tu primera rutina con IA en menos de dos minutos.',
      cta: 'Descargar APK',
    },
    footer: {
      tagline: 'WORKOUT TRACKER',
      appLink: 'App',
      apiLink: 'API',
    },
  },
}