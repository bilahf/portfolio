import { imageUrl } from './imageUrl'

/**
 * ============================================================
 *  DATA PROYEK
 * ============================================================
 *  CARA MENAMBAH PROYEK:
 *  1. Copy salah satu objek di bawah, tempel di akhir array.
 *  2. Ubah semua isinya.
 *  3. Simpan. Layout tidak perlu disentuh.
 *
 *  CATATAN PENTING:
 *  - Semua proyek di bawah adalah DATA CONTOH. Ganti dengan proyek asli Anda.
 *  - `category` hanya boleh salah satu dari:
 *      'software' | 'ai' | 'data' | 'iot'
 *  - `thumbnail` boleh diisi URL apa pun, atau file lokal seperti '/images/proyek-1.png'.
 *    (taruh file di folder `public/images/`)
 *  - Isi teks proyek (judul, deskripsi, dokumentasi) BEBAS mau ditulis
 *    dalam Bahasa Indonesia atau English, karena ini konten milik Anda.
 *    Label antarmuka (Overview, Features, dst) otomatis mengikuti bahasa website.
 *  - `repo` dan `demo` boleh dikosongkan (null) kalau belum ada.
 */
export const projects = [
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System', // CONTOH
    category: 'software',
    thumbnail: imageUrl(
      'dark navy futuristic admin dashboard of a student attendance web application displayed on a laptop, cyan and electric blue accents, holographic HUD interface, clean minimal, high detail',
    ),
    shortDescription:
      'A web-based attendance system that records student presence automatically and generates monthly reports for the academic staff.',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    details: {
      overview:
        'A web application used by lecturers to record and monitor student attendance in real time, replacing the manual paper-based process.',
      problem:
        'Manual attendance recap took hours every month and was prone to human error and lost records.',
      objectives: [
        'Digitalise the attendance recording process',
        'Generate monthly recap reports automatically',
        'Provide a simple dashboard for lecturers and staff',
      ],
      features: [
        'Login for lecturers and administrators',
        'One-tap attendance recording per class session',
        'Automatic monthly recap and export to spreadsheet',
        'Attendance percentage alerts for each student',
      ],
      role: 'Full-stack developer — designed the database, built the REST API and the user interface.',
      process: [
        'Requirement gathering with two lecturers',
        'Database and API design',
        'Frontend implementation with React and Tailwind CSS',
        'User testing and bug fixing',
      ],
      screenshots: [
        {
          src: imageUrl(
            'attendance recap table inside a dark themed web dashboard with cyan highlight bars and charts, minimal UI, screenshot style',
          ),
          caption: 'Monthly recap dashboard',
        },
        {
          src: imageUrl(
            'mobile view of an attendance mobile responsive web page, dark navy theme, cyan buttons, clean list of students, screenshot style',
          ),
          caption: 'Responsive view on mobile',
        },
      ],
      challenges: [
        {
          challenge: 'Two classes could be recorded at the same time and the data overwrote each other.',
          solution:
            'Added a unique session identifier for every class meeting so each record is stored independently.',
        },
      ],
      results: [
        'Monthly recap time reduced from several hours to under five minutes',
        'Used by one study programme during the pilot period',
      ],
      repo: null, // TODO: isi link GitHub bila ada, contoh: 'https://github.com/username/repo'
      demo: null, // TODO: isi link live demo bila ada
    },
  },
  {
    id: 'document-summarizer',
    title: 'AI Document Summarizer', // CONTOH
    category: 'ai',
    thumbnail: imageUrl(
      'dark futuristic user interface that summarises a long document using artificial intelligence, glowing cyan neural network lines over a dark navy background, minimal tech aesthetic',
    ),
    shortDescription:
      'A small tool that condenses long PDF documents into a short summary and a list of key points.',
    tech: ['Python', 'FastAPI', 'LLM API', 'Streamlit'],
    details: {
      overview:
        'A lightweight web tool that accepts a PDF, extracts the text, and returns a short summary plus bullet points of the most important information.',
      problem:
        'Reading dozens of pages of reports or journals took too long when only the key points were needed.',
      objectives: [
        'Reduce reading time for long documents',
        'Produce consistent and easy to scan summaries',
      ],
      features: [
        'PDF upload and automatic text extraction',
        'Summary in a chosen length (short / medium)',
        'Automatic key point extraction',
        'Copy and download the summary as text',
      ],
      role: 'Solo project — built the pipeline, prompt design and the web interface.',
      process: [
        'Exploring text extraction libraries',
        'Prompt engineering and output formatting',
        'Building the interface with Streamlit',
        'Testing with several types of documents',
      ],
      screenshots: [
        {
          src: imageUrl(
            'dark themed web app screen showing an uploaded PDF file and an AI generated bullet point summary, cyan accent, minimal interface, screenshot style',
          ),
          caption: 'Summary result page',
        },
      ],
      challenges: [
        {
          challenge: 'The model sometimes returned a summary that was longer than the original text.',
          solution: 'Added a length limit in the prompt and an output validation step before displaying the result.',
        },
      ],
      results: ['Summaries generated in a few seconds', 'Key points accurate for structured documents'],
      repo: null, // TODO
      demo: null, // TODO
    },
  },
  {
    id: 'sales-analytics-dashboard',
    title: 'Sales Analytics Dashboard', // CONTOH
    category: 'data',
    thumbnail: imageUrl(
      'dark navy analytics dashboard with cyan line charts, bar charts and KPI cards, holographic data visualisation style, clean and minimal, high detail',
    ),
    shortDescription:
      'An interactive dashboard that visualises sales data to help small businesses spot their best selling products.',
    tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    details: {
      overview:
        'A dashboard that reads a sales spreadsheet and turns it into charts: revenue trend, top products, and sales by region.',
      problem:
        'Shop owners kept their sales data in spreadsheets and never analysed it because making charts manually was tedious.',
      objectives: [
        'Turn raw sales data into easy to read visualisations',
        'Highlight the best performing products and periods',
      ],
      features: [
        'Interactive date range filter',
        'Revenue and transaction trend chart',
        'Top 10 products and category breakdown',
        'Automatic data cleaning for common spreadsheet issues',
      ],
      role: 'Solo project — data cleaning, analysis and visualisation.',
      process: [
        'Data cleaning and column standardisation with Pandas',
        'Exploratory analysis to decide which metrics mattered',
        'Building interactive charts with Plotly',
        'Packaging it into a shareable dashboard',
      ],
      screenshots: [
        {
          src: imageUrl(
            'dark data analytics dashboard with cyan and blue charts, revenue trend line graph, top products bar chart, modern minimal UI, screenshot style',
          ),
          caption: 'Main dashboard view',
        },
      ],
      challenges: [
        {
          challenge: 'The source spreadsheets had inconsistent date formats and duplicate rows.',
          solution: 'Wrote a cleaning step that normalises dates and removes duplicates before analysis.',
        },
      ],
      results: ['Insights available in seconds instead of manual spreadsheet work'],
      repo: null, // TODO
      demo: null, // TODO
    },
  },
  {
    id: 'smart-room-monitor',
    title: 'Smart Room Monitor', // CONTOH
    category: 'iot',
    thumbnail: imageUrl(
      'ESP32 microcontroller board with temperature and humidity sensors and jumper wires on a dark desk, cyan indicator light, macro photography, tech aesthetic',
    ),
    shortDescription:
      'An IoT device that monitors room temperature and humidity and sends the reading to a web dashboard.',
    tech: ['ESP32', 'Arduino', 'MQTT', 'React'],
    details: {
      overview:
        'A sensor node built on an ESP32 that measures temperature and humidity every minute and publishes the reading to a dashboard through MQTT.',
      problem:
        'Lab rooms had no air conditioning monitoring, so equipment sometimes overheated without anyone noticing.',
      objectives: [
        'Monitor room conditions continuously',
        'Alert when the temperature passes a safe threshold',
      ],
      features: [
        'Temperature and humidity reading every minute',
        'Wireless data transmission over MQTT',
        'Live chart on a web dashboard',
        'Threshold alert indicator',
      ],
      role: 'Hardware and firmware — wiring, sensor calibration and the MQTT publishing code.',
      process: [
        'Selecting and testing the sensors',
        'Writing the ESP32 firmware',
        'Calibrating the readings against a reference thermometer',
        'Connecting the data to the dashboard',
      ],
      screenshots: [
        {
          src: imageUrl(
            'prototype wiring of an ESP32 with temperature sensor on a breadboard, dark background with cyan lighting, close up electronics photography',
          ),
          caption: 'Prototype wiring',
        },
      ],
      challenges: [
        {
          challenge: 'Sensor readings drifted after running for a few days.',
          solution: 'Added a simple averaging filter and a periodic recalibration on startup.',
        },
      ],
      results: ['Stable continuous monitoring during the testing period'],
      repo: null, // TODO
      demo: null, // TODO
    },
  },
  {
    id: 'campus-event-portal',
    title: 'Campus Event Portal', // CONTOH
    category: 'software',
    thumbnail: imageUrl(
      'dark navy website interface of a campus event listing portal with event cards, cyan highlights, minimal futuristic web design, screenshot style',
    ),
    shortDescription:
      'A simple portal where student organisations publish events and students register online.',
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    details: {
      overview:
        'A web portal for campus events: organisers create an event page, students browse and register, and each organiser sees the participant list.',
      problem:
        'Event registration was done through chat groups, so participant data was scattered and hard to recap.',
      objectives: [
        'Centralise campus event information',
        'Make participant recap automatic for organisers',
      ],
      features: [
        'Event creation with poster and schedule',
        'Online registration form',
        'Participant list with export',
        'Event status (open / closed / finished)',
      ],
      role: 'Backend developer — database design, CRUD modules and the registration flow.',
      process: [
        'Modelling the database',
        'Building the CRUD modules',
        'Implementing the registration and export flow',
        'Testing with one student organisation',
      ],
      screenshots: [
        {
          src: imageUrl(
            'dark themed event management page with a list of campus events and a participant table, cyan accent colour, clean interface, screenshot style',
          ),
          caption: 'Event management page',
        },
      ],
      challenges: [
        {
          challenge: 'Duplicate registrations happened when students double clicked the submit button.',
          solution: 'Enforced a unique constraint on student number and event, and disabled the button after the first click.',
        },
      ],
      results: ['Participant recaps became automatic instead of manual chat message counting'],
      repo: null, // TODO
      demo: null, // TODO
    },
  },
  {
    id: 'sentiment-analysis',
    title: 'Product Review Sentiment Analysis', // CONTOH
    category: 'ai',
    thumbnail: imageUrl(
      'dark futuristic interface showing text classification results with positive and negative sentiment labels, cyan glow, minimal data science aesthetic',
    ),
    shortDescription:
      'A text classification model that labels product reviews as positive or negative and shows the most common complaints.',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'Jupyter'],
    details: {
      overview:
        'A natural language processing experiment that classifies product reviews and summarises the words that appear most often in negative reviews.',
      problem:
        'Reading thousands of reviews manually to find recurring complaints was not practical.',
      objectives: [
        'Build a review classifier with a clear accuracy baseline',
        'Identify the most frequent complaint topics',
      ],
      features: [
        'Text pre-processing (cleaning, stopword removal, stemming)',
        'TF-IDF feature extraction',
        'Classification with a Naive Bayes and SVM comparison',
        'Word cloud of negative reviews',
      ],
      role: 'Solo project — data collection, model training and evaluation.',
      process: [
        'Collecting and labelling the review dataset',
        'Pre-processing and feature extraction',
        'Training and comparing two models',
        'Evaluating with a confusion matrix',
      ],
      screenshots: [
        {
          src: imageUrl(
            'confusion matrix and word cloud on a dark background, cyan and blue colours, data science notebook visual, minimal clean layout',
          ),
          caption: 'Model evaluation result',
        },
      ],
      challenges: [
        {
          challenge: 'The dataset was imbalanced with far more positive than negative reviews.',
          solution: 'Applied class weighting and evaluated with precision and recall instead of accuracy alone.',
        },
      ],
      results: ['Baseline classifier built and evaluated with documented metrics'],
      repo: null, // TODO
      demo: null, // TODO
    },
  },
]
