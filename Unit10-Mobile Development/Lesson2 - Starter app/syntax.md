### Syntax difference between React vs React native

[React vs React Native Syntax](https://docs.google.com/document/d/1I1a50pqPNjp0LQ1f9up75rgmGHLM6xi7MfgB6hK1Bfs/edit?tab=t.0)


# Expo Project Folder Structure Guide

Understanding these folders will help keep your project clean, organized, and scalable.

## 📁 assets/

Contains static files like images, videos, sounds, or fonts that are used throughout the app. Keeping these files in one place helps keep your project organized and improves performance by caching these assets.

---

## 📁 components/

This directory is for reusable UI components like buttons, cards, or modals. Using components helps keep your code DRY (Don't Repeat Yourself) and makes your UI easier to maintain.

---

## 📁 constants/

Holds static values like color themes, API endpoints, or configuration variables. Using constants keeps your app consistent and reduces the risk of errors when changing values globally.

---

## 📁 hooks/

Custom hooks go here. Hooks are functions that let you reuse stateful logic across your app. This helps keep your components clean and focused on UI logic.

---

## 📁 screens/
- Recommended folder for **screen-level components or pages**.
- Example: `HomeScreen.js`, `ProfileScreen.js`.
- Helps separate full screens from smaller reusable components.

---

## 📄 .gitignore

A file that tells Git which files or directories to ignore when committing. This usually includes **node\_modules**, **build** folders, and sensitive files like **.env**.

---

## 📄 App.js
- The **entry point** of your React Native app.
- Typically renders navigation and main app UI.

---

## 📄 app.json

The main configuration file for your Expo project. It contains metadata like app name, version, splash screen, and icon settings.

---


## 📝 Best Practices

* **Organize Components** - Keep your components modular and reusable.
* **Use Constants** - Centralize common values like colors, spacing, and API URLs.
* **Leverage Hooks** - Extract logic from components to make your code cleaner.
* **Clean Directory Structure** - Use meaningful names for directories and files to make navigation easier.

