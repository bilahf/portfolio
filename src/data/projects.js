
import { imageUrl } from './imageUrl'

export const projects = [
  // 1. ESP32 Wi-Fi Controlled Robot Car
  {
    id: 'esp32-wifi-robot-car',
    title: 'ESP32 Wi-Fi Controlled Robot Car',
    category: 'iot',
    thumbnail: '/images/car.jpg',
    shortDescription:
      'A 2WD robot car prototype built with ESP32, L298N motor driver, and an ultrasonic sensor. The car can be controlled through a web interface over Wi-Fi and supports basic obstacle detection.',
    tech: [
      'ESP32',
      'Arduino IDE',
      'L298N Motor Driver',
      'DC Gear Motors',
      'HC-SR04 Ultrasonic Sensor',
      'Wi-Fi Access Point',
      'Arduino WebServer',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Preparing the ESP32, L298N motor driver, DC motors, and ultrasonic sensor',
        'Connecting the ESP32 GPIO pins to the motor driver',
        'Setting up the power supply and common ground connections',
        'Programming motor direction and speed control',
        'Configuring ESP32 as a Wi-Fi Access Point',
        'Creating a web interface for remote car control',
        'Connecting the HC-SR04 sensor for distance measurement',
        'Testing wireless movement and basic obstacle detection',
      ],

      screenshots: [
      {
        src: '/images/Shot.png',
        caption: 'remote web control',
      },
      
    ],

      challenges: [],

      results: [
        'Built a basic 2WD robot car prototype using ESP32.',
        'Implemented wireless movement control through a local web interface.',
        'Explored Wi-Fi Access Point and web server functionality.',
        'Practiced DC motor control and ultrasonic distance measurement.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 2. Mobile Monitoring System for Probing Operations
  {
    id: 'probing-monitoring',
    title: 'Mobile Monitoring System for Probing Operations',
    category: 'software',
    thumbnail: '/images/prob.jpg',
    shortDescription:
      'A mobile monitoring system developed during an internship to support PLN probing operations through centralized customer data management, field activity monitoring, and automated data synchronization.',
    tech: [
      'Flutter',
      'PHP REST API',
      'MySQL',
      'JWT',
      'Google Apps Script',
      'Google Sheets',
      'Google Maps',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Identifying the operational needs of the probing process',
        'Designing mobile screens and customer data workflows',
        'Connecting the Flutter application to the PHP REST API',
        'Integrating application data with MySQL',
        'Implementing customer status tracking and map functionality',
        'Configuring Google Apps Script and Google Sheets synchronization',
        'Testing application workflows and data consistency',
      ],

      challenges: [],

      results: [
        'Developed a mobile interface for managing more than 500 customer records.',
        'Supported probing activity monitoring across four ULP areas in Gresik.',
        'Reduced dependence on separate manual forms and spreadsheet recaps.',
        'Connected mobile data management with automated Google Sheets synchronization.',
      ],

      repo: 'https://github.com/bilahf/probing',
      demo: null,
    },
  },

  // 3. Point of Sale & Inventory Management System
  {
    id: 'laravel-13-pos-inventory',
    title: 'Point of Sale (POS) & Inventory Management System',
    category: 'software',
    thumbnail: '/images/kasir.jpg',
    shortDescription:
      'A web-based Point of Sale and Inventory Management System built with Laravel 13, featuring product management, cashier transactions, shopping cart, checkout, transaction history, and automatic stock management. Deployed using Docker, Nginx, and VPS with a custom domain and HTTPS.',
    tech: [
      'Laravel 13',
      'PHP 8.4',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'Vite',
      'Laravel Breeze',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Git',
      'GitHub',
      'VPS (Debian)',
      'Domain & DNS',
      'HTTPS/SSL',
      "Let's Encrypt",
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Setting up the Laravel 13 development environment',
        'Configuring MySQL database and application environment',
        'Developing product and category management',
        'Implementing authentication and cashier transactions',
        'Developing shopping cart, checkout, and transaction history',
        'Implementing stock validation and automatic stock deduction',
        'Building frontend assets using Vite and Tailwind CSS',
        'Configuring Docker and Docker Compose',
        'Setting up Laravel, MySQL, and Nginx containers',
        'Preparing a Debian VPS and deploying the application',
        'Configuring the custom domain and DNS records',
        'Installing HTTPS/SSL certificates using Let’s Encrypt',
        'Testing the application through the custom domain',
      ],

      challenges: [],

      results: [
        'Developed a web-based POS and inventory management application.',
        'Implemented product management, cashier transactions, and automatic stock updates.',
        'Containerized the application using Docker and Docker Compose.',
        'Deployed the application to a Debian-based VPS with Nginx and MySQL.',
        'Connected the application to a custom domain with HTTPS.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 4. ESP32 RGB LED Web Control
  {
    id: 'esp32-rgb-led-web-control',
    title: 'ESP32 RGB LED Web Control',
    category: 'iot',
    thumbnail: '/images/led.jpg',
    shortDescription:
      'An RGB LED control system built with ESP32, allowing users to select LED colors and control power through a simple web interface connected via Wi-Fi Access Point.',
    tech: [
      'ESP32',
      'Arduino IDE',
      'RGB LED',
      'PWM Control',
      'Wi-Fi Access Point',
      'Arduino WebServer',
      'HTML',
      'CSS',
      'JavaScript',
      'HTTP Communication',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Preparing the ESP32 board, RGB LED, and resistors',
        'Connecting the RGB LED channels to ESP32 GPIO pins',
        'Setting up the common ground connection',
        'Programming RGB LED control using PWM',
        'Configuring ESP32 as a Wi-Fi Access Point',
        'Setting up a local web server using Arduino WebServer',
        'Creating an HTML, CSS, and JavaScript control interface',
        'Testing LED color and power control through a browser',
      ],

      screenshots: [
      {
        src: '/images/sht.png',
        caption: 'remote web control',
      },
      
    ],

      challenges: [],

      results: [
        'Developed a basic web-based RGB LED control system using ESP32.',
        'Implemented wireless communication through a local Wi-Fi Access Point.',
        'Created a browser interface for color selection and LED power control.',
        'Practiced basic HTTP communication, GPIO, and PWM control.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 5. Arduino 4-DOF Robotic Arm
  {
    id: 'arduino-4dof-robotic-arm',
    title: 'Arduino 4-DOF Robotic Arm',
    category: 'iot',
    thumbnail: '/images/robot.jpeg',
    shortDescription:
      'A 4-DOF robotic arm prototype built with Arduino and four servo motors, designed to demonstrate basic robotic movement and multi-axis positioning through servo control.',
    tech: [
      'Arduino',
      'Arduino IDE',
      'SG90 Servo Motors',
      'Joystick Modules',
      'PWM Control',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Preparing the Arduino board, four SG90 servo motors, and joystick modules',
        'Connecting servo signal wires to the assigned Arduino pins',
        'Writing the Arduino sketch to control servo positions',
        'Mapping joystick input values to servo movement',
        'Testing individual servo movements and joint coordination',
        'Checking power supply requirements and common ground connections',
        'Adjusting the control logic based on movement tests',
      ],

      challenges: [],

      results: [
        'Built a prototype for exploring four-axis robotic arm movement.',
        'Practiced Arduino programming and multi-servo control.',
        'Gained practical experience with joystick input and circuit wiring.',
        'Learned about external power requirements for multiple servo motors.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 6. AI Multi-Agent Video Generation Pipeline
  {
    id: 'n8n-ai-video-generation-pipeline',
    title: 'AI Multi-Agent Video Generation Pipeline',
    category: 'ai',
    thumbnail: '/images/aivid.png',
    shortDescription:
      'An automated multi-agent video generation pipeline built with n8n, Gemini AI, and Qwen Tools, integrating the Wan 2.6 video generation model to generate content ideas, captions, structured prompts, and 5-second before-and-after videos. Integrated Google Sheets for data logging and Google Drive for automatic video storage.',
    tech: [
      'n8n',
      'Gemini AI',
      'Qwen Tools',
      'Wan 2.6',
      'AI Video Generation',
      'Multi-Agent Workflow',
      'Prompt Engineering',
      'Google Sheets',
      'Google Drive',
      'API Integration',
      'Workflow Automation',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Designing the automated workflow using n8n',
        'Configuring multiple AI agents and workflow connections',
        'Integrating Gemini AI for content ideas and captions',
        'Using Qwen Tools to generate structured video prompts',
        'Connecting the Wan 2.6 model for AI video generation',
        'Generating 5-second before-and-after videos',
        'Integrating Google Sheets for workflow data logging',
        'Configuring Google Drive for automatic video storage',
        'Testing the workflow from content generation to video storage',
      ],

      challenges: [],

      results: [
        'Created an automated multi-agent video generation workflow using n8n.',
        'Integrated Gemini AI and Qwen Tools for content and prompt generation.',
        'Generated 5-second before-and-after videos using the Wan 2.6 model.',
        'Automated content data logging through Google Sheets.',
        'Configured automatic video storage using Google Drive.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 7. Daily News Mobile Application
  {
    id: 'daily-news-mobile',
    title: 'Daily News Mobile Application',
    category: 'software',
    thumbnail: '/images/news.png',
    shortDescription:
      'An Android news application developed during the Bank Mandiri Mobile Apps Developer Project-Based Internship Program, using NewsAPI to retrieve and display news articles.',
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Retrofit',
      'REST API',
      'NewsAPI',
      'Kotlin Coroutines',
      'Android Studio',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Setting up the Android project in Android Studio',
        'Designing the user interface with Jetpack Compose',
        'Configuring Retrofit for REST API requests',
        'Mapping API responses into application data models',
        'Loading news data asynchronously with Kotlin Coroutines',
        'Implementing the article listing and browsing interface',
        'Testing API responses and mobile screen behavior',
      ],

      challenges: [],

      results: [
        'Built a native Android application that retrieves news data from NewsAPI.',
        'Applied Kotlin and Jetpack Compose for mobile interface development.',
        'Practiced REST API integration and asynchronous data handling.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 8. AI Workflow Automation & Intelligent Data Processing
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation & Intelligent Data Processing',
    category: 'ai',
    thumbnail: '/images/ai.jpg',
    shortDescription:
      'A collection of AI-powered automation workflows built with n8n to streamline data extraction, transformation, processing, and storage through API integrations and AI services.',
    tech: [
      'n8n',
      'AI Agents',
      'OpenRouter',
      'API Integration',
      'Google Sheets',
      'Workflow Automation',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Identifying repetitive tasks suitable for automation',
        'Designing workflow nodes and data flow in n8n',
        'Configuring API credentials and HTTP requests',
        'Connecting AI services through OpenRouter',
        'Adding conditional logic and data transformation',
        'Integrating workflow outputs with Google Sheets where required',
        'Testing workflow execution and handling unsuccessful requests',
      ],

      challenges: [],

      results: [
        'Created reusable workflows for multi-step automation tasks.',
        'Connected AI services with external APIs and productivity tools.',
        'Automated several repetitive data-processing steps.',
      ],

      repo: 'https://github.com/bilahf/workflows',
      demo: null,
    },
  },

  // 9. Industrial Energy Consumption Forecasting System
  {
    id: 'industrial-energy-forecasting',
    title: 'Industrial Energy Consumption Forecasting System',
    category: 'software',
    thumbnail: '/images/listr.jpg',
    shortDescription:
      'A web-based forecasting system developed as a final thesis project to analyze and predict industrial electricity consumption using historical PLN data and Fuzzy Time Series Cheng.',
    tech: [
      'Laravel',
      'RStudio',
      'Microsoft Excel',
      'Fuzzy Time Series Cheng',
      'Statistical Analysis',
      'Data Forecasting',
      'MySQL',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Collecting historical electricity consumption records',
        'Preparing and checking the dataset using Microsoft Excel',
        'Analyzing the data and applying the forecasting method',
        'Implementing forecasting calculations and evaluation',
        'Developing the web application with Laravel and MySQL',
        'Displaying historical data and forecasting results',
        'Comparing forecast outputs against actual consumption values',
      ],

      challenges: [],

      results: [
        'Developed a web-based electricity consumption forecasting system.',
        'Applied the Fuzzy Time Series Cheng method to historical consumption data.',
        'Achieved a MAPE of 5.78% for the selected 48-period configuration.',
        'Recorded an absolute percentage error of 10.51% for the June 2025 forecast comparison.',
      ],

      repo: 'https://github.com/bilahf/forecast',
      demo: null,
    },
  },

  // 10. Mortgage Trading & Profitability Analysis Dashboard
  {
    id: 'mortgage-profitability-dashboard',
    title: 'Mortgage Trading & Profitability Analysis Dashboard',
    category: 'data',
    thumbnail: '/images/mortgage.jpg',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze mortgage trading performance, pricing drivers, revenue, and profitability through data transformation and visualization.',
    tech: [
      'Power BI',
      'Power Query',
      'DAX',
      'Data Cleaning',
      'Data Visualization',
      'Business Intelligence',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Reviewing the available business dataset',
        'Cleaning and transforming data in Power Query',
        'Defining relevant revenue and profitability metrics',
        'Creating calculated measures using DAX',
        'Designing KPI cards and supporting visualizations',
        'Organizing dashboard elements into a clear report layout',
        'Checking the consistency of displayed metrics',
      ],

      challenges: [],

      results: [
        'Created a visual overview of mortgage trading and profitability indicators.',
        'Organized revenue, gross profit, and margin metrics into a unified report.',
        'Practiced data transformation, DAX calculations, and dashboard design.',
      ],

      repo: null,
      demo: null,
    },
  },

  // 11. Cloud Media Server Deployment
  {
    id: 'cloud-media-server',
    title: 'Cloud Media Server Deployment',
    category: 'software',
    thumbnail: '/images/cloud.jpg',
    shortDescription:
      'A cloud deployment project using Google Cloud Compute Engine and Cloud Storage to demonstrate virtual machine hosting, web server configuration, and cloud-based media delivery.',
    tech: [
      'Google Cloud',
      'Compute Engine',
      'Cloud Storage',
      'Linux',
      'Apache HTTP Server',
      'HTML',
    ],
    details: {
      overview: null,
      problem: null,
      objectives: [],
      features: [],
      role: null,

      process: [
        'Preparing the Google Cloud project and required services',
        'Creating a virtual machine using Compute Engine',
        'Configuring the Linux server environment',
        'Installing and configuring Apache HTTP Server',
        'Preparing the web page and media resources',
        'Uploading media files to Cloud Storage',
        'Testing access to the deployed web page and media URLs',
      ],

      challenges: [],

      results: [
        'Deployed a Linux-based web server on Google Cloud Compute Engine.',
        'Configured Apache HTTP Server to serve web content.',
        'Used Cloud Storage for media asset hosting.',
        'Practiced basic cloud deployment and storage configuration.',
      ],

      repo: null,
      demo: null,
    },
  },
]
