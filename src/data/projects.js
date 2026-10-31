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
    'Embedded Systems',
  ],
  details: {
    overview:
      'A two-wheel-drive (2WD) robot car prototype using ESP32 as its main controller. The project explores wireless motor control through a web interface hosted by the ESP32 and basic obstacle detection using an HC-SR04 ultrasonic sensor.',
    problem:
      'Controlling a robot car wirelessly requires communication between the controller and motor driver, while obstacle detection requires sensor input to help the car respond to nearby objects.',
    objectives: [
      'Build a basic 2WD robot car using ESP32',
      'Control two DC motors through an L298N motor driver',
      'Create a web interface for wireless car movement',
      'Use ESP32 Wi-Fi Access Point for local communication',
      'Understand ultrasonic distance measurement for obstacle detection',
      'Learn basic IoT hardware connections and programming',
    ],
    features: [
      'Wireless car control through a web interface',
      'Forward, backward, left, right, and stop controls',
      'ESP32 Wi-Fi Access Point connection',
      'Basic obstacle detection using HC-SR04',
      'Automatic movement mode for obstacle avoidance',
      'Dual DC motor control using L298N',
    ],
    role:
      'Hardware and programming developer — assembled the ESP32, motor driver, DC motors, and ultrasonic sensor, and developed the Arduino code for Wi-Fi-based car control and basic obstacle detection.',
    process: [
      'Preparing the ESP32 board, L298N motor driver, DC motors, and ultrasonic sensor',
      'Connecting the ESP32 GPIO pins to the motor driver',
      'Setting up the power supply and common ground connections',
      'Writing Arduino code to control motor direction and speed',
      'Configuring ESP32 as a Wi-Fi Access Point',
      'Creating a simple web interface for remote car control',
      'Connecting the HC-SR04 sensor to measure nearby object distances',
      'Testing wireless controls and basic obstacle detection',
    ],
    
    challenges: [
      {
        challenge:
          'The ESP32 Wi-Fi connection became unstable when powered through the motor driver module using the battery supply.',
        solution:
          'Checked the power connections, battery supply, and common ground configuration to understand the power requirements of the ESP32 and motors.',
      },
      {
        challenge:
          'Controlling two DC motors required proper GPIO configuration and motor driver connections.',
        solution:
          'Configured separate GPIO pins for motor direction and PWM speed control, then tested each motor individually.',
      },
      {
        challenge:
          'The ultrasonic sensor required suitable signal connections to the ESP32.',
        solution:
          'Configured separate trigger and echo pins and considered voltage level adjustment for the sensor output.',
      },
    ],
    results: [
      'Built a basic 2WD robot car prototype using ESP32.',
      'Implemented wireless movement control through a local web interface.',
      'Explored Wi-Fi Access Point communication and web server functionality.',
      'Practiced DC motor control, ultrasonic sensing, and basic obstacle avoidance.',
      'Gained practical experience with IoT components, circuit wiring, and power management.',
    ],
    repo: null,
    demo: null,
  },
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
      overview:
        'A mobile application developed to help field officers manage probing activities and customer information. The system connects a Flutter frontend with a PHP REST API and MySQL database, with additional integration for Google Sheets synchronization.',
      problem:
        'Customer probing data collected through manual processes can be difficult to monitor, consolidate, and recap. Field teams need a more centralized way to manage customer records and track the results of probing activities.',
      objectives: [
        'Centralize customer probing data in one application',
        'Simplify field activity monitoring and customer status updates',
        'Reduce repetitive manual data entry and recap work',
        'Support operational reporting through spreadsheet synchronization',
      ],
      features: [
        'Customer data creation, viewing, updating, and management',
        'JWT-based authentication',
        'Customer status tracking for willing, unwilling, and not-found results',
        'Monitoring dashboard for probing activities',
        'Google Maps integration for location support',
        'Activity history and status tracking',
        'Automated synchronization with Google Sheets',
      ],
      role:
        'Mobile application developer intern — developed the Flutter interface, integrated the PHP REST API, and supported customer data management and synchronization workflows.',
      process: [
        'Identifying the operational needs of the probing process',
        'Designing mobile screens and customer data workflows',
        'Connecting the Flutter application to the PHP REST API',
        'Integrating application data with MySQL',
        'Implementing customer status tracking and map functionality',
        'Configuring Google Apps Script and Google Sheets synchronization',
        'Testing application workflows and data consistency',
      ],
      
      challenges: [
        {
          challenge:
            'Keeping customer records consistent between the mobile application, backend database, and spreadsheet recap.',
          solution:
            'Used a PHP REST API connected to MySQL for application data and configured Google Apps Script to synchronize relevant records with Google Sheets.',
        },
        {
          challenge:
            'Making field probing results easier to identify and monitor.',
          solution:
            'Organized customer records using distinct probing status categories and provided a centralized interface for monitoring activities.',
        },
      ],
      results: [
        'Provided a centralized mobile interface for managing more than 500 customer records.',
        'Supported probing activity monitoring across four ULP areas in Gresik.',
        'Reduced dependence on separate manual forms and spreadsheet recaps.',
        'Connected mobile data management with automated Google Sheets synchronization.',
      ],
      repo: 'https://github.com/bilahf/probing',
      demo: null,
    },
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
    'VPS (Debian)',
    'Domain & DNS',
    'HTTPS/SSL',
    "Let's Encrypt",
  ],

  details: {
    overview:
      'A web-based Point of Sale (POS) and Inventory Management System developed using Laravel 13. The application supports daily sales operations, including product and category management, cashier transactions, shopping cart, checkout, transaction history, and automatic inventory updates. The application is containerized using Docker and deployed to a VPS with Nginx as the web server, a custom domain, and HTTPS.',

    problem:
      'Manual sales and inventory management can make it difficult to track transactions and monitor product stock. A web-based POS system provides a centralized application to manage products, record sales, and monitor inventory more efficiently.',

    objectives: [
      'Develop a web-based POS application using Laravel 13',
      'Understand Laravel application development and database integration',
      'Implement product and category management',
      'Build cashier transaction and checkout functionality',
      'Implement inventory management and stock validation',
      'Understand Docker containerization and Docker Compose',
      'Configure Nginx as a web server for Laravel',
      'Deploy and manage the application on a VPS',
      'Connect a custom domain through DNS configuration',
      'Implement HTTPS/SSL using Let’s Encrypt',
      'Manage source code using Git and GitHub',
    ],

    features: [
      'User authentication',
      'Product management',
      'Product category management',
      'Cashier transaction management',
      'Shopping cart functionality',
      'Checkout and transaction recording',
      'Transaction history',
      'Inventory and stock management',
      'Stock validation before checkout',
      'Automatic stock deduction after transactions',
      'Responsive dashboard and user interface',
    ],

    role:
      'Full-Stack Developer — developed the POS and inventory management features using Laravel 13, Blade, Tailwind CSS, and MySQL. Also handled Docker configuration, Nginx setup, VPS deployment, domain configuration, and HTTPS implementation.',

    process: [
      'Setting up the Laravel 13 development environment',
      'Configuring MySQL database and application environment',
      'Developing product and category management features',
      'Implementing authentication and cashier transaction functionality',
      'Developing shopping cart, checkout, and transaction history',
      'Implementing inventory management with stock validation and automatic stock deduction',
      'Building frontend assets using Vite and Tailwind CSS',
      'Configuring Docker and Docker Compose for application containerization',
      'Setting up separate containers for Laravel/PHP, MySQL, and Nginx',
      'Configuring Nginx to serve the Laravel application through PHP-FPM',
      'Preparing a Debian VPS and deploying the application using GitHub',
      'Configuring the custom domain and DNS records to point to the VPS IP address',
      'Installing HTTPS/SSL certificates using Let’s Encrypt',
      'Testing application access through the custom domain with HTTPS',
    ],

    

    challenges: [
      {
        challenge:
          'Configuring Laravel to connect to the MySQL database running in a separate Docker container.',
        solution:
          'Configured Docker Compose networking and database environment variables to allow Laravel to communicate with the MySQL service.',
      },
      {
        challenge:
          'Laravel could not initially access the generated Vite build assets inside the Docker container.',
        solution:
          'Built the frontend assets using Vite and configured a Docker volume to make the generated public/build directory accessible to the Laravel application.',
      },
      {
        challenge:
          'Configuring Nginx to serve the Laravel application through PHP-FPM containers.',
        solution:
          'Configured Nginx server settings, document root, request routing, and FastCGI connection to the Laravel PHP-FPM service.',
      },
      {
        challenge:
          'Connecting the custom domain to the VPS and enabling secure HTTPS access.',
        solution:
          'Configured DNS A records to point the domain to the VPS IP address and installed SSL certificates using Let’s Encrypt.',
      },
    ],

    results: [
      'Developed a functional web-based POS and inventory management application.',
      'Implemented product management, cashier transactions, and automatic stock updates.',
      'Containerized the application using Docker and Docker Compose.',
      'Deployed the application to a Debian-based VPS with Nginx and MySQL.',
      'Successfully connected the application to a custom domain.',
      'Enabled secure HTTPS access using Let’s Encrypt SSL certificates.',
      'Practiced Git and GitHub for source code management and deployment.',
    ],

    repo: null,
    demo: null,
  },
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
    'HTTP Communication',
    'Embedded Systems',
  ],
  details: {
    overview:
      'A simple IoT project using ESP32 to control an RGB LED through a web interface. ESP32 acts as a Wi-Fi Access Point and hosts a local web server, allowing users to select colors and turn the LED on or off directly from a browser.',
    problem:
      'Controlling LED colors manually requires direct interaction with hardware connections. A web-based control system provides a simpler way to change colors and manage LED power wirelessly.',
    objectives: [
      'Understand basic ESP32 programming using Arduino IDE',
      'Control RGB LED colors through ESP32 GPIO pins',
      'Learn basic PWM control for RGB LED color output',
      'Configure ESP32 as a Wi-Fi Access Point',
      'Create a simple web interface using HTML, CSS, and JavaScript',
      'Understand basic HTTP communication between a browser and ESP32',
      'Explore basic IoT hardware and software integration',
    ],
    features: [
      'Web-based RGB LED color control',
      'Red, green, and blue color selection',
      'Custom color selection using a color picker',
      'LED ON and OFF controls',
      'Local Wi-Fi Access Point connection',
      'HTTP request handling through ESP32 WebServer',
      'Real-time LED color changes through browser interaction',
    ],
    role:
      'Hardware and programming developer — assembled the ESP32 and RGB LED circuit, configured GPIO and PWM control, and developed a simple web interface for wireless LED color and power control.',
    process: [
      'Preparing the ESP32 board, expansion board, RGB LED, and resistors',
      'Connecting the RGB LED channels to ESP32 GPIO pins 21, 22, and 23',
      'Setting up the common ground connection',
      'Writing Arduino code for RGB LED control using PWM',
      'Configuring ESP32 as a Wi-Fi Access Point',
      'Setting up a local web server using the Arduino WebServer library',
      'Creating an HTML, CSS, and JavaScript interface for LED control',
      'Implementing HTTP endpoints to receive color and power commands',
      'Testing wireless LED control through a mobile or desktop browser',
    ],
    
    challenges: [
      {
        challenge:
          'The RGB LED did not initially respond to the ESP32 GPIO output.',
        solution:
          'Reviewed the LED wiring, GPIO connections, common pin configuration, and LED type to identify possible circuit issues.',
      },
      {
        challenge:
          'The LED PWM code was incompatible with the installed ESP32 Arduino Core version.',
        solution:
          'Adjusted the PWM configuration to use ledcSetup(), ledcAttachPin(), and ledcWrite() for compatibility with ESP32 Core 2.x.',
      },
      {
        challenge:
          'Uploading the program sometimes required manually entering ESP32 download mode.',
        solution:
          'Used the BOOT button during the upload connection process to help the ESP32 enter flash mode.',
      },
    ],
    results: [
      'Developed a basic web-based RGB LED control system using ESP32.',
      'Implemented wireless communication through a local Wi-Fi Access Point.',
      'Created a browser interface for color selection and LED power control.',
      'Practiced basic HTTP request handling using the Arduino WebServer library.',
      'Gained practical experience with GPIO, PWM, circuit wiring, and IoT fundamentals.',
    ],
    repo: null,
    demo: null,
  },
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
    'Embedded Systems',
    'PWM Control',
  ],
  details: {
    overview:
      'A small robotic arm prototype with four degrees of freedom (4-DOF), using Arduino to control multiple servo motors. The project explores basic robotic movement, joint positioning, and manual control using joystick inputs.',
    problem:
      'Controlling multiple joints requires coordinated servo movements and a suitable power supply to keep the robotic arm operating reliably.',
    objectives: [
      'Build a robotic arm prototype with four degrees of freedom',
      'Control multiple servo motors using Arduino',
      'Explore joint positioning through joystick input',
      'Understand servo control, circuit wiring, and external power requirements',
    ],
    features: [
      'Four-axis robotic arm movement',
      'Individual servo motor control',
      'Joystick-based manual movement',
      'Arduino-based control logic',
      'Servo position adjustment',
      'External power supply planning for multiple servos',
    ],
    role:
      'Hardware and programming developer — assembled the robotic arm circuit, configured servo connections, and developed Arduino code for controlling servo movements.',
    process: [
      'Preparing the Arduino board, four SG90 servo motors, and joystick modules',
      'Connecting servo signal wires to the assigned Arduino pins',
      'Writing the Arduino sketch to control servo positions',
      'Mapping joystick input values to servo movement',
      'Testing individual servo movements and joint coordination',
      'Checking power supply requirements and common ground connections',
      'Adjusting the control logic based on movement tests',
    ],
    
    challenges: [
      {
        challenge:
          'Multiple servo motors could jitter or behave inconsistently when powered directly from the Arduino USB supply.',
        solution:
          'Investigated the power requirements and considered a separate regulated 5V supply with sufficient current capacity for the servo motors, while maintaining a common ground.',
      },
      {
        challenge:
          'Coordinating several servo movements using joystick inputs required careful pin configuration and input mapping.',
        solution:
          'Organized the servo control logic by joint and tested each motor individually before testing combined movements.',
      },
    ],
    results: [
      'Developed a prototype for exploring four-axis robotic arm movement.',
      'Practiced Arduino programming and multi-servo control.',
      'Gained practical experience with joystick input, circuit wiring, and power management.',
    ],
    repo: null,
    demo: null,
  },
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
    'Prompt Engineering',
    'Google Sheets',
    'Google Drive',
    'API Integration',
    'Workflow Automation',
  ],

  details: {
    overview:
      'An automated AI-powered video generation pipeline developed using n8n to coordinate multiple AI agents and tools. The workflow uses Gemini AI and Qwen Tools to generate content ideas, captions, and structured video prompts, which are then processed using the Wan 2.6 video generation model to create 5-second before-and-after videos. Google Sheets is integrated for recording workflow data, while Google Drive is used to automatically store the generated videos.',

    problem:
      'Creating short-form video content involves several repetitive steps, including generating ideas, writing captions, preparing prompts, generating videos, and organizing output files. Automating these tasks through an AI-powered workflow helps simplify the content creation process and reduce manual work.',

    objectives: [
      'Understand multi-agent workflow automation using n8n',
      'Integrate Gemini AI for content idea and caption generation',
      'Use Qwen Tools to support structured prompt generation',
      'Integrate the Wan 2.6 model for AI video generation',
      'Generate 5-second before-and-after videos',
      'Automate the content creation workflow using multiple AI tools',
      'Integrate Google Sheets for workflow data logging',
      'Integrate Google Drive for automatic video storage',
      'Understand API integration between AI services and automation tools',
    ],

    features: [
      'Automated content idea generation',
      'AI-generated captions',
      'Structured video prompt generation',
      'Multi-agent workflow orchestration',
      'AI video generation using Wan 2.6',
      '5-second before-and-after video generation',
      'Automated workflow execution using n8n',
      'Google Sheets integration for data logging',
      'Automatic video storage in Google Drive',
    ],

    role:
      'AI Automation Developer — designed and configured an automated multi-agent workflow using n8n, Gemini AI, and Qwen Tools. Integrated the Wan 2.6 video generation model and connected Google Sheets and Google Drive for data logging and automatic video storage.',

    process: [
      'Designing the automated workflow using n8n',
      'Configuring multiple AI agents and workflow connections',
      'Integrating Gemini AI for generating content ideas and captions',
      'Using Qwen Tools to generate structured video prompts',
      'Connecting the Wan 2.6 model for AI video generation',
      'Generating 5-second before-and-after videos',
      'Integrating Google Sheets to record generated content and workflow data',
      'Configuring Google Drive for automatic video storage',
      'Testing the complete workflow from content generation to video storage',
    ],

    

    challenges: [
      {
        challenge:
          'Connecting multiple AI tools and coordinating their outputs within a single automated workflow.',
        solution:
          'Used n8n to organize workflow nodes and connect Gemini AI, Qwen Tools, and the Wan 2.6 video generation model.',
      },
      {
        challenge:
          'Preparing structured prompts that could be processed by the video generation model.',
        solution:
          'Integrated Qwen Tools to help generate structured prompts for the Wan 2.6 video generation process.',
      },
      {
        challenge:
          'Managing generated content and video files across different services.',
        solution:
          'Integrated Google Sheets for recording workflow data and Google Drive for automatically storing generated videos.',
      },
    ],

    results: [
      'Developed an automated multi-agent video generation pipeline using n8n.',
      'Integrated Gemini AI and Qwen Tools for content and prompt generation.',
      'Generated 5-second before-and-after videos using the Wan 2.6 model.',
      'Automated content data logging through Google Sheets.',
      'Implemented automatic video storage using Google Drive.',
      'Practiced AI tool integration, API connections, and workflow automation.',
    ],

    repo: null,
    demo: null,
  },
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
      overview:
        'A native Android application that retrieves news articles from NewsAPI and presents them in a mobile-friendly interface. The application demonstrates modern Android UI development and REST API integration using Kotlin.',
      problem:
        'Accessing current news through a mobile application requires reliable API communication and a clear interface for browsing article headlines and details.',
      objectives: [
        'Build a native Android application using Kotlin',
        'Retrieve news articles from an external REST API',
        'Present news content in a clear and responsive mobile interface',
        'Practice modern Android development with Jetpack Compose',
      ],
      features: [
        'News headline listing',
        'News article browsing',
        'NewsAPI integration',
        'Asynchronous data loading with Kotlin Coroutines',
        'REST API requests using Retrofit',
        'Scrollable news feed',
        'Pagination or additional article loading where supported',
      ],
      role:
        'Mobile developer trainee — developed the Android application interface, connected the application to NewsAPI, and implemented the news data loading workflow.',
      process: [
        'Setting up the Android project in Android Studio',
        'Designing the user interface with Jetpack Compose',
        'Configuring Retrofit for REST API requests',
        'Mapping API responses into application data models',
        'Loading news data asynchronously with Kotlin Coroutines',
        'Implementing the article listing and browsing interface',
        'Testing API responses and mobile screen behavior',
      ],
      
      challenges: [
        {
          challenge:
            'Handling API responses and displaying news data without blocking the mobile interface.',
          solution:
            'Used Retrofit for API communication and Kotlin Coroutines for asynchronous data loading.',
        },
        {
          challenge:
            'Presenting multiple news articles in a readable mobile layout.',
          solution:
            'Organized article information into reusable Jetpack Compose UI components and a scrollable list.',
        },
      ],
      results: [
        'Built a native Android application that retrieves news data from NewsAPI.',
        'Applied Kotlin and Jetpack Compose for mobile interface development.',
        'Practiced REST API integration and asynchronous data handling.',
      ],
      repo: null,
      demo: null,
    },
  },

  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation & Intelligent Data Processing',
    category: 'ai',
    thumbnail:'/images/ai.jpg',
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
      overview:
        'A collection of automation workflows that connect external services, AI models, and data-processing steps. The workflows use n8n to orchestrate multi-step tasks, process structured information, and deliver results to connected services.',
      problem:
        'Repeating information-processing tasks manually can consume time and make workflows harder to maintain. Tasks involving several services also require a consistent way to transfer and process data between steps.',
      objectives: [
        'Automate repetitive data-processing tasks',
        'Connect AI models with external APIs and productivity tools',
        'Organize multi-step processes into reusable workflows',
        'Improve consistency in data transformation and output handling',
      ],
      features: [
        'AI-assisted information processing',
        'Integration with external APIs through HTTP requests',
        'Multi-step workflow orchestration',
        'Conditional branching and looping',
        'Data extraction and transformation',
        'AI model access through OpenRouter',
        'Google Sheets integration',
        'Automated output delivery between workflow steps',
      ],
      role:
        'Workflow developer — designed automation flows, configured API integrations, connected AI services, and organized data-processing steps.',
      process: [
        'Identifying repetitive tasks suitable for automation',
        'Designing workflow nodes and data flow in n8n',
        'Configuring API credentials and HTTP requests',
        'Connecting AI services through OpenRouter',
        'Adding conditional logic and data transformation',
        'Integrating workflow outputs with Google Sheets where required',
        'Testing workflow execution and handling unsuccessful requests',
      ],
      
      challenges: [
        {
          challenge:
            'Passing data between multiple services while keeping the output structure consistent.',
          solution:
            'Organized workflow steps around explicit data transformations and checked the output of individual nodes during testing.',
        },
        {
          challenge:
            'Handling different API responses and potential failures during workflow execution.',
          solution:
            'Separated processing steps and added conditional checks where appropriate to make workflow behavior easier to inspect and maintain.',
        },
      ],
      results: [
        'Created reusable workflows for multi-step automation tasks.',
        'Connected AI services with external APIs and productivity tools.',
        'Reduced the need for repeated manual processing in supported workflows.',
      ],
      repo: 'https://github.com/bilahf/workflows',
      demo: null,
    },
  },

  {
    id: 'industrial-energy-forecasting',
    title: 'Industrial Energy Consumption Forecasting System',
    category: 'software',
    thumbnail:'/images/listr.jpg',
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
      overview:
        'A web-based application for analyzing historical electricity consumption and presenting forecasting results using the Fuzzy Time Series Cheng method. The system combines statistical processing with a Laravel interface for viewing historical data and forecast outputs.',
      problem:
        'Historical electricity consumption data needs to be analyzed systematically to identify usage patterns and generate forecasts that can support planning and evaluation.',
      objectives: [
        'Prepare and analyze historical electricity consumption data',
        'Implement the Fuzzy Time Series Cheng forecasting method',
        'Evaluate forecast accuracy using error metrics',
        'Present historical data and forecast results through a web application',
      ],
      features: [
        'Historical electricity consumption data management',
        'Data preparation and interval calculation',
        'Fuzzy Time Series Cheng forecasting calculations',
        'Forecast result presentation',
        'Actual versus forecast comparison',
        'Forecast error evaluation',
        'Web-based data monitoring',
      ],
      role:
        'Researcher and web developer — prepared the historical dataset, implemented forecasting calculations, evaluated model performance, and developed the Laravel application.',
      process: [
        'Collecting historical electricity consumption records',
        'Preparing and checking the dataset using Microsoft Excel',
        'Analyzing the data and applying the forecasting method',
        'Implementing forecasting calculations and evaluation',
        'Developing the web application with Laravel and MySQL',
        'Displaying historical data and forecasting results',
        'Comparing forecast outputs against actual consumption values',
      ],
      
      challenges: [
        {
          challenge:
            'Preparing historical data in a consistent format before applying the forecasting method.',
          solution:
            'Organized the historical records and performed data preparation before carrying out the forecasting calculations.',
        },
        {
          challenge:
            'Evaluating the forecast results to understand the difference between predicted and actual consumption.',
          solution:
            'Compared forecast values with actual observations and used error metrics, including MAPE, to assess model performance.',
        },
      ],
      results: [
        'Implemented a web-based electricity consumption forecasting system.',
        'Applied the Fuzzy Time Series Cheng method to historical consumption data.',
        'Achieved a MAPE of 5.78% for the selected 48-period configuration in the thesis analysis.',
        'Recorded an absolute percentage error of 10.51% for the June 2025 forecast comparison.',
      ],
      repo: 'https://github.com/bilahf/forecast',
      demo: null,
    },
  },

  {
    id: 'mortgage-profitability-dashboard',
    title: 'Mortgage Trading & Profitability Analysis Dashboard',
    category: 'data',
    thumbnail:'/images/mortgage.jpg',
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
      overview:
        'An analytical dashboard concept focused on mortgage trading performance and profitability. It organizes business data into interactive visualizations to make revenue, gross profit, margin, and pricing-related metrics easier to explore.',
      problem:
        'Business data stored in tabular formats can be difficult to interpret quickly when performance indicators and pricing factors are not presented in a unified analytical view.',
      objectives: [
        'Transform raw business data into an analysis-ready dataset',
        'Present key profitability metrics in a visual dashboard',
        'Explore pricing drivers and business performance patterns',
        'Make business indicators easier to compare and interpret',
      ],
      features: [
        'Data cleaning and transformation with Power Query',
        'Revenue and trading performance analysis',
        'Gross profit analysis',
        'Profit margin calculations using DAX',
        'Pricing driver analysis',
        'Interactive charts and KPI cards',
        'Business performance comparison',
      ],
      role:
        'Data analyst — prepared the data, developed analytical measures, and designed visualizations to communicate business performance indicators.',
      process: [
        'Reviewing the available business dataset',
        'Cleaning and transforming data in Power Query',
        'Defining relevant revenue and profitability metrics',
        'Creating calculated measures using DAX',
        'Designing KPI cards and supporting visualizations',
        'Organizing dashboard elements into a clear report layout',
        'Checking the consistency of displayed metrics',
      ],
      
      challenges: [
        {
          challenge:
            'Turning raw tabular data into useful indicators for business performance analysis.',
          solution:
            'Used Power Query to organize the dataset and DAX measures to define the key profitability metrics.',
        },
        {
          challenge:
            'Presenting several business indicators without making the dashboard difficult to read.',
          solution:
            'Grouped related KPIs and charts into sections so users can review overall performance and explore individual metrics.',
        },
      ],
      results: [
        'Developed a visual overview of mortgage trading and profitability indicators.',
        'Organized revenue, gross profit, and margin metrics into a unified report.',
        'Demonstrated data transformation, DAX calculations, and interactive dashboard design.',
      ],
      repo: null,
      demo: null,
    },
  },

  {
    id: 'cloud-media-server',
    title: 'Cloud Media Server Deployment',
    category: 'cloud',
    thumbnail:'/images/cloud.jpg',
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
      overview:
        'A cloud infrastructure project demonstrating how a virtual machine and object storage can be used together to host a web server and deliver media resources. The project covers basic Linux server administration and cloud service configuration.',
      problem:
        'Hosting a web application and its media assets requires an infrastructure setup that separates server processing from file storage and makes resources accessible through the web.',
      objectives: [
        'Deploy a virtual machine on Google Cloud Compute Engine',
        'Configure a Linux environment and Apache web server',
        'Use Cloud Storage to store media assets',
        'Understand the relationship between compute resources and object storage',
      ],
      features: [
        'Cloud virtual machine provisioning',
        'Linux environment configuration',
        'Apache HTTP Server setup',
        'Cloud Storage integration',
        'Web page deployment',
        'Media asset hosting and URL access',
        'Separation of compute and storage resources',
      ],
      role:
        'Cloud deployment practitioner — configured the cloud environment, prepared the server, deployed web resources, and explored object storage integration.',
      process: [
        'Preparing the Google Cloud project and required services',
        'Provisioning a Compute Engine virtual machine',
        'Configuring the Linux server environment',
        'Installing and configuring Apache HTTP Server',
        'Preparing the web page and media resources',
        'Configuring Cloud Storage for media assets',
        'Testing access to the deployed web page and media URLs',
      ],
      
      challenges: [
        {
          challenge:
            'Configuring the virtual machine and web server so the deployed page can be accessed correctly.',
          solution:
            'Checked the server configuration, Apache service status, and relevant network access settings during deployment testing.',
        },
        {
          challenge:
            'Managing media files separately from the web server environment.',
          solution:
            'Used Cloud Storage as an object storage service to separate media assets from the virtual machine resources.',
        },
      ],
      results: [
        'Deployed a Linux-based web server on Google Cloud Compute Engine.',
        'Configured Apache HTTP Server to serve web content.',
        'Explored Cloud Storage for media asset hosting.',
        'Practiced basic cloud infrastructure deployment and resource integration.',
      ],
      repo: null,
      demo: null,
    },
  },
]
