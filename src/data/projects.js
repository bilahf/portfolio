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

import { imageUrl } from './imageUrl'

export const projects = [
  {
    id: 'probing-monitoring',
    title: 'Mobile Monitoring System for Probing Operations',
    category: 'software',
    thumbnail: imageUrl(
      '/images/prob.jpg'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'mobile application dashboard for field customer probing operations, customer statistics cards, blue and white enterprise UI, realistic Android app screenshot'
          ),
          caption: 'Probing monitoring dashboard',
        },
        {
          src: imageUrl(
            'Android mobile application displaying a searchable list of customer records with willing unwilling and not found status labels, clean blue and white interface'
          ),
          caption: 'Customer records and probing status',
        },
        {
          src: imageUrl(
            'mobile field monitoring application showing customer location information on an integrated map, clean enterprise interface, realistic Android screenshot'
          ),
          caption: 'Customer location support',
        },
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
    id: 'daily-news-mobile',
    title: 'Daily News Mobile Application',
    category: 'software',
    thumbnail: imageUrl(
      '/images/news.png'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'Android news application home screen with top headlines, editorial thumbnails, article titles, white background and clean modern Jetpack Compose UI'
          ),
          caption: 'Daily news home screen',
        },
        {
          src: imageUrl(
            'native Android news app showing a vertically scrollable list of news articles with thumbnails, headlines and short descriptions, minimalist interface'
          ),
          caption: 'News article listing',
        },
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
    thumbnail: imageUrl(
      '/images/ai.jpg'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'n8n workflow editor with connected trigger HTTP request AI agent conditional logic and Google Sheets nodes, realistic workflow automation interface, readable node connections'
          ),
          caption: 'AI workflow automation',
        },
        {
          src: imageUrl(
            'workflow execution results showing structured JSON data passing through connected automation nodes, clean developer tool interface, realistic software screenshot'
          ),
          caption: 'Data processing workflow',
        },
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
    category: 'data',
    thumbnail: imageUrl(
      '/images/listr.jpg'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'Laravel electricity consumption forecasting dashboard with monthly industrial energy usage table and statistical summary cards, clean blue and white web interface'
          ),
          caption: 'Electricity consumption dashboard',
        },
        {
          src: imageUrl(
            'time series forecasting result page with historical electricity consumption and forecast line chart, actual versus predicted values and error metrics, professional analytics interface'
          ),
          caption: 'Forecasting results and evaluation',
        },
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
    thumbnail: imageUrl(
      '/images/mortgage.jpg'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'Power BI mortgage trading profitability report with revenue gross profit and margin KPI cards, interactive bar charts and pricing analysis, clean corporate dashboard screenshot'
          ),
          caption: 'Profitability overview',
        },
        {
          src: imageUrl(
            'Power BI business intelligence report showing pricing driver analysis, profitability comparisons and interactive filters, professional financial analytics dashboard'
          ),
          caption: 'Pricing and performance analysis',
        },
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
    thumbnail: imageUrl(
      '/images/cloud.jpg'
    ),
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
      screenshots: [
        {
          src: imageUrl(
            'Google Cloud Console Compute Engine virtual machine details page showing a running Linux instance, professional cloud infrastructure interface'
          ),
          caption: 'Compute Engine configuration',
        },
        {
          src: imageUrl(
            'simple deployed media website hosted on an Apache Linux server with image and video content, clean browser view and minimal web design'
          ),
          caption: 'Deployed media web page',
        },
        {
          src: imageUrl(
            'Google Cloud Storage bucket interface showing organized media files and object details, realistic cloud console screenshot'
          ),
          caption: 'Cloud Storage media assets',
        },
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
