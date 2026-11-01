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

// import { imageUrl } from './imageUrl'


export const projects = [

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
      input: [
        'ESP32',
        'L298N Motor Driver',
        'DC Gear Motors',
        'HC-SR04 Ultrasonic Sensor',
        'Wi-Fi',
      ],
      process: [
        'Connecting hardware components',
        'Programming motor control using Arduino IDE',
        'Setting up ESP32 Wi-Fi Access Point',
        'Creating a web interface for car control',
        'Testing movement and obstacle detection',
      ],
      output: [
        'A 2WD robot car controlled through a web interface',
        'Basic obstacle detection using an ultrasonic sensor',
      ],
    },
    repo: null,
    demo: null,
  },

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
      input: [
        'Flutter',
        'PHP REST API',
        'MySQL',
        'Google Apps Script',
        'Google Sheets',
        'Google Maps',
      ],
      process: [
        'Designing mobile screens',
        'Connecting Flutter with PHP REST API',
        'Managing customer data and probing status',
        'Integrating Google Maps',
        'Setting up Google Sheets synchronization',
      ],
      output: [
        'A mobile application for monitoring probing activities',
        'Centralized management of 500+ customer records',
        'Automated Google Sheets synchronization',
      ],
    },
    repo: 'https://github.com/bilahf/probing',
    demo: null,
  },

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
      'VPS',
      'HTTPS/SSL',
    ],
    details: {
      input: [
        'Laravel 13',
        'PHP 8.4',
        'MySQL',
        'Blade',
        'Tailwind CSS',
        'Docker',
        'Nginx',
        'VPS',
      ],
      process: [
        'Developing product and category management',
        'Implementing cashier transactions and checkout',
        'Managing inventory and stock updates',
        'Configuring Docker and Nginx',
        'Deploying the application to a VPS',
        'Setting up domain and HTTPS',
      ],
      output: [
        'A web-based POS and inventory management system',
        'Product, transaction, and stock management',
        'A deployed application accessible through a custom domain with HTTPS',
      ],
    },
    repo: null,
    demo: null,
  },

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
    ],
    details: {
      input: [
        'ESP32',
        'RGB LED',
        'Arduino IDE',
        'Wi-Fi Access Point',
        'HTML, CSS, and JavaScript',
      ],
      process: [
        'Connecting RGB LED to ESP32 GPIO pins',
        'Programming LED control using PWM',
        'Setting up ESP32 Wi-Fi Access Point',
        'Creating a web interface for color selection',
        'Testing LED control through a browser',
      ],
      output: [
        'A web-based RGB LED control system',
        'Wireless color selection and LED power control',
      ],
    },
    repo: null,
    demo: null,
  },

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
      input: [
        'Arduino',
        '4 SG90 Servo Motors',
        'Joystick Modules',
        'Arduino IDE',
      ],
      process: [
        'Assembling the robotic arm components',
        'Connecting servo motors to Arduino',
        'Programming servo movement',
        'Mapping joystick inputs to servo positions',
        'Testing joint movement and power connections',
      ],
      output: [
        'A 4-DOF robotic arm prototype',
        'Manual servo movement controlled through joystick inputs',
      ],
    },
    repo: null,
    demo: null,
  },

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
      'Google Sheets',
      'Google Drive',
      'API Integration',
    ],
    details: {
      input: [
        'n8n',
        'Gemini AI',
        'Qwen Tools',
        'Wan 2.6',
        'Google Sheets',
        'Google Drive',
      ],
      process: [
        'Generating content ideas and captions',
        'Creating structured video prompts',
        'Generating videos using Wan 2.6',
        'Automating data logging',
        'Configuring automatic video storage',
      ],
      output: [
        'An automated AI video generation workflow',
        '5-second before-and-after videos',
        'Automatic video storage in Google Drive',
      ],
    },
    repo: null,
    demo: null,
  },

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
      input: [
        'Kotlin',
        'Jetpack Compose',
        'Retrofit',
        'NewsAPI',
        'Kotlin Coroutines',
      ],
      process: [
        'Designing the mobile interface using Jetpack Compose',
        'Connecting the application to NewsAPI',
        'Processing API responses using Retrofit',
        'Loading news data asynchronously',
        'Testing the news browsing interface',
      ],
      output: [
        'A native Android news application',
        'News articles retrieved from NewsAPI',
        'A mobile interface for browsing news',
      ],
    },
    repo: null,
    demo: null,
  },

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
      input: [
        'n8n',
        'AI Agents',
        'OpenRouter',
        'External APIs',
        'Google Sheets',
      ],
      process: [
        'Designing automation workflows',
        'Connecting AI services and external APIs',
        'Processing and transforming data',
        'Configuring conditional workflow steps',
        'Testing workflow execution',
      ],
      output: [
        'Automated multi-step data processing workflows',
        'AI-assisted information processing',
        'Automated data transfer between connected services',
      ],
    },
    repo: 'https://github.com/bilahf/workflows',
    demo: null,
  },

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
      input: [
        'Historical PLN Electricity Consumption Data',
        'Microsoft Excel',
        'Fuzzy Time Series Cheng',
        'Laravel',
        'MySQL',
      ],
      process: [
        'Collecting and preparing historical consumption data',
        'Analyzing data using Microsoft Excel',
        'Applying the Fuzzy Time Series Cheng method',
        'Evaluating forecast accuracy',
        'Developing a web application using Laravel',
      ],
      output: [
        'A web-based electricity consumption forecasting system',
        'Historical and forecast consumption visualization',
        'Forecast evaluation with a MAPE of 5.78% for the selected configuration',
      ],
    },
    repo: 'https://github.com/bilahf/forecast',
    demo: null,
  },

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
      input: [
        'Business Dataset',
        'Power BI',
        'Power Query',
        'DAX',
      ],
      process: [
        'Reviewing and cleaning business data',
        'Transforming data using Power Query',
        'Creating profitability measures using DAX',
        'Designing KPI cards and visualizations',
        'Organizing the dashboard for business analysis',
      ],
      output: [
        'An interactive mortgage trading dashboard',
        'Revenue, gross profit, and margin visualization',
        'A visual overview of business profitability',
      ],
    },
    repo: null,
    demo: null,
  },

  {
    id: 'cloud-media-server',
    title: 'Cloud Media Server Deployment',
    category: 'cloud',
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
      input: [
        'Google Cloud',
        'Compute Engine',
        'Cloud Storage',
        'Linux',
        'Apache HTTP Server',
      ],
      process: [
        'Creating a virtual machine on Google Cloud',
        'Configuring the Linux environment',
        'Installing Apache HTTP Server',
        'Setting up Cloud Storage for media files',
        'Testing web page and media access',
      ],
      output: [
        'A deployed web server on Google Cloud',
        'A web page accessible through Apache',
        'Media files hosted using Cloud Storage',
      ],
    },
    repo: null,
    demo: null,
  },

]
