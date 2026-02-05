# APWEN UNILAG

The official website for the **Association of Professional Women Engineers of Nigeria (APWEN), University of Lagos Chapter**. This platform serves as a hub for members, students, and the public to connect, stay updated on events, and register for the association.

## 🚀 Features

- **Modern & Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.
- **Smooth Navigation**: polished scrolling experience for easy access to different sections.
- **Interactive Sections**:
  - **Events Carousel**: Dynamic, infinite-loop carousel showcasing recent and upcoming events.
  - **Leadership Showcase**: detailed view of the executive team members.
  - **About Section**: Information about the mission and vision of APWEN UNILAG.
- **Registration System**: Comprehensive registration form capturing detailed member information including:
  - Personal Details (Name, Birthday, Phone, Email)
  - Academic Info (Faculty, Department, Level, Session)
  - Comments/Feedback
- **Social Integration**: Direct links to social media platforms (WhatsApp, Instagram, LinkedIn, Email).

## 🛠️ Tech Stack

This project is built with a modern, performance-focused stack:

- **[React 19](https://react.dev/)**: The latest version of the library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast build and server start times.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript for better developer experience and code reliability.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Embla Carousel](https://www.embla-carousel.com/)**: A lightweight carousel library with fluid motion and great swipe precision.
- **React Icons / Lucide React**: Comprehensive icon libraries for consistent UI iconography.

## 📦 Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd APWEN
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal) to view the app.

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI components (Header, Hero, About, Events, etc.)
├── data/           # Static data files (e.g., text content, configuration)
├── App.tsx         # Main application component layout
├── main.tsx        # Entry point rendering the React root
└── index.css       # Global styles and Tailwind directives
```

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Type-check and build the project for production.
- `npm run lint`: Run ESLint to catch code quality issues.
- `npm run preview`: Preview the production build locally.
