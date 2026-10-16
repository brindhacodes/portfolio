# Brindha S — Portfolio

A responsive personal portfolio built with React and Vite. It presents my education, technical skills, selected projects, certification, interests, and contact details through a terminal-inspired interface.

## Run locally

```bash
npm install
npm run dev
```

## Available commands

```bash
npm run dev      # Start the development server
npm run lint     # Check JavaScript and JSX
npm run build    # Create a production build
npm run preview  # Preview the production build
```

## Project structure

```text
Data/               Portfolio content stored as JSON
public/             Static media
src/
  components/       Reusable interface components
  App.jsx           Portfolio sections and page composition
  App.css           Portfolio theme and component styles
  index.css         Application-level styles
  main.jsx          React entry point
```

Portfolio content can be updated in `Data/` without editing the reusable components.
