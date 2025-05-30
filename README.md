# React Movies App

A modern, responsive web application built with React and Vite that allows users to browse, search, and explore movie information. The app features a clean, intuitive interface powered by Tailwind CSS for styling and modern React practices for state management.

## Features

### Core Functionality

- **Movie Browsing**: Browse through a collection of movies with a responsive grid layout
- **Search System**: Real-time search functionality to find movies quickly
- **Movie Details**: Detailed movie information displayed in a modal view
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices

### UI Components

- **Navigation Bar**: Clean and intuitive navigation interface
- **Movie Cards**: Visually appealing movie presentation cards
- **Search Component**: Interactive search with real-time results
- **Modal View**: Smooth and responsive movie detail modal
- **Shining Button**: Custom animated button component for enhanced user interaction
- **No Results Handler**: Graceful handling of empty search results

## Tech Stack

### Core Technologies

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework for styling

### Development Tools

- **ESLint**: JavaScript linting utility
- **PostCSS**: CSS transformation tool
- **Node.js**: JavaScript runtime environment

## Project Structure

├── src/
│ ├── Components/
│ │ ├── ContainerComponent.jsx
│ │ ├── HomePageComponent.jsx
│ │ ├── MovieComponent.jsx
│ │ ├── MovieDetailModal.jsx
│ │ ├── MovieListComponent.jsx
│ │ ├── NavbarComponent.jsx
│ │ ├── SearchComponent.jsx
│ │ └── ShiningButton.jsx
│ ├── App.jsx
│ └── main.jsx

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

## Component Documentation

### MovieComponent

- Displays individual movie information
- Handles click events for movie selection
- Responsive image loading

### MovieDetailModal

- Shows detailed movie information
- Implements modal behavior
- Manages state for open/close actions

### SearchComponent

- Handles user input for movie search
- Implements debounced search
- Updates results in real-time

### ShiningButton

- Custom animated button component
- Includes hover effects
- Customizable styling

## Contributing

1. Fork the project
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

### Coding Standards

- Follow ESLint configuration
- Maintain component structure
- Write meaningful commit messages
- Update documentation for new features

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Vite team for the build tool
- Tailwind CSS team for the styling framework
