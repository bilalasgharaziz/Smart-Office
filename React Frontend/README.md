## Sity React Frontend Application

## Description

- This React application is built using [Vite](https://vitejs.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is developed in JavaScript.

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1.  `cd react_frontend`
2.  `npm install`
3.  `npm start`

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   └── images --------- All Project Images
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── fonts ---------- Project fonts
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.jsx
│   ├── pages -------------- All route pages
│   ├── Routes.jsx ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.jsx ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```


## Application Structure

The application is structured around the src directory, which houses the core of the frontend application:

**App.jsx:** The main application component that orchestrates the rendering of different pages and components.

**index.jsx:** The entry point for the React application. It renders the ***App*** component into the DOM.

***Routes.jsx:*** Manages the routing of the application, defining the paths to different pages and their corresponding components.

#### Components and Pages

**components/:** Contains reusable UI components like buttons, error messages, footers, and more. Each component is organized into its own directory with an ***index.jsx*** file.

**pages/:** Houses the components representing different pages within the application, such as Home, About Us, Account for Pitch, Floor Plan, etc. Each page has its own directory with an ***index.jsx*** file for the page component.

#### Styles
**styles/:** Includes CSS and Tailwind configuration files for the application's styling. It contains global styles, theme colors, font styles, and utility classes to ensure a consistent look and feel across the application.

#### Assets
**assets/:** Stores static assets such as images and fonts used across the application. This directory is organized into subdirectories for different types of assets.

#### Utilities
**utils/:** Contains utility functions and helpers that can be used across the application to perform common tasks or calculations.

#### Understanding the Floor Plan Page

* **Data on Desks:** The page starts with a list that includes all the desks by number, showing their status (like if they're busy, available, or recently vacated), and where they're positioned(top,left) on the map.
* **Fetching Updates:** Regularly, the page talks to a server using **REST API** to get the latest updates on the desks. This ensures that what you see is always current, almost as if you're looking at the office in real-time.
* **Visual Guide:** It visually represents each desk's status using different colors—green for available, red for occupied, orange for recently vacated, and grey for offline (or information not available).
* **Interactive Elements:** The page has buttons and images that you can click on. For example, clicking on the "LOG OUT" text or the company logo at the top will navigate you away from the page. There's also an "Imprint" button in the footer for additional information.

***The Magic Behind It***

* **Live Updates:** A special function continuously checks for updates about the desks, making sure the information you see is always fresh.
* **Navigation:** It uses a tool that lets users move around the application smoothly, helping them get from one page to another without any hassle.
* **Custom Components:** The code uses custom-made building blocks (like buttons, images, and text styles) to create a unique look and feel for the page.

***What Users See***

When users visit the Floor Plan page, they're greeted with a map-like layout displaying desks. They can easily spot which desks are available (green), busy (red), recently vacated (orange), or not available/empty (grey). There's also a section explaining these color codes for clarity. Additionally, the page provides a summary of the office's occupancy and activity, like how many desks are in use and how often people switch desks.

In essence, this code brings an interactive and informative map to life, making it easier for users to navigate the office space virtually. It's a blend of technology and user experience design, aimed at simplifying how people interact with their workspace.

For the project to build, **these files must exist with exact filenames**:

- `index.html` is the page template;
- `src/index.jsx` is the JavaScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Installing a Dependency

You can install any dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

### Author 
------

Bilal Asghar Aziz
