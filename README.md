# 🌤 weatherApp

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://katozaaaa.github.io/weatherApp/)
[![Backend Repo](https://img.shields.io/badge/backend-repo-orange.svg)](https://github.com/katozaaaa/weatherAppProxy)

A responsive weather application built with React and TypeScript that provides current and forecasted weather data based on user location or search input.

![image](https://github.com/user-attachments/assets/5d38d4dc-5dfc-44cb-99c0-e83dd813d3ab)

## ✨ Key Features

- 🌍 Automatic location detection
- 🔍 Manual city search
- 📈 Detailed weather forecasts
- 📱 Mobile-friendly design

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Fetch API](https://img.shields.io/badge/Fetch_API-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)

## 🌍 API Integration

The app uses the following third-party APIs to deliver weather data and location services:

### Weather Data
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-blue?logo=openweathermap&logoColor=blue)](https://openweathermap.org/)
- Provides current weather and forecasts
- Returns temperature, humidity, wind speed, and weather conditions
- Free tier available with API key

### Location Services
[![GeoNames](https://img.shields.io/badge/GeoNames-API-blue?logo=openstreetmap&logoColor=blue)](https://www.geonames.org/)
- Converts city names to geographic coordinates
- Supports autocomplete for location search
- Free tier available with username registration

[![ipapi.co](https://img.shields.io/badge/ipapi.co-API-blue)](https://ipapi.co/)
- Detects user location by IP address
- Returns city, country, and coordinates
- Free tier available (1000 requests/day)

## 🚀 Quick Start
**Prerequisites**
- Node.js v20.11.1
- Backend server running

### 1. Clone the repository:
```bash
git clone https://github.com/katozaaaa/weatherApp.git
```
### 2. Go to the project folder:
```bash
cd weatherApp
```
### 3. Install dependencies:
```bash
npm install
```
### 4. Start the development server:
```bash
npm run dev
```

## 🛠 Available Commands

| Command           | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start development server        |
| `npm run build`   | Create production build         |
| `npm run lint`    | Run ESLint                      |
| `npm run lint:fix`| Auto-fix linting errors         |
| `npm run preview` | Preview production build        |
