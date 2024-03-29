# ASU: CSE 573 - Semantic Web Mining

## Final Project - Front End - Repository

## Project Abstract

Predicting stock market movements has always been challenging and vital for traders and financial analysts. This project focuses on harnessing the power of viral tweets and news data to accurately predict stock prices for two prominent technology companies, Amazon and Apple. We have employed natural language processing (NLP) techniques and machine learning algorithms to extract valuable insights from social media and news sources. Three different preprocessing techniques (BertTokenizer, Word2Vec, CountVectorizer) were applied for three distinct models (BERT, SVM, Logistic Regression) to perform a comprehensive comparison. The project presents the methodology and techniques used to achieve this goal and evaluates the predictive performance of our models.

Index Terms — BERT, Logistic Regression, SVM

## Frontend Project Readme

## Project Overview

Welcome to the User-Friendly Interaction frontend project for Stock Sentiment Analysis! This project focuses on delivering an immersive and user-friendly experience for individuals engaging in stock sentiment analysis. Developed using React, our frontend offers a clean and intuitive webpage with interactive elements, ensuring ease of use for both novice and experienced users.

## Libraries and Packages Used

- **React** (`^18`): A JavaScript library for building user interfaces.
- **React DOM** (`^18`): React package for working with the DOM.
- **Next.js** (`14.0.1`): A React framework for building server-side rendered and statically generated web applications.

### Development Dependencies

- **Autoprefixer** (`^10.0.1`): A tool to parse CSS and add vendor prefixes to CSS rules.
- **PostCSS** (`^8`): A tool for transforming styles with JS plugins.
- **Tailwind CSS** (`^3.3.0`): A utility-first CSS framework.
- **ESLint** (`^8`): A tool for identifying and reporting patterns found in ECMAScript/JavaScript code.
- **ESLint Config Next** (`14.0.1`): ESLint configuration specific to Next.js projects.

## User Interaction Flow

### 1. User Input
The UI caters to user inputs through a strategically placed text box. Users can effortlessly input textual data related to stock information, enabling dynamic queries. To enhance customization, users have the flexibility to select from a range of data models and datasets, tailoring their analysis to specific stocks or sectors of interest.

### 2. API Interaction
Seamless API interactions bridge the frontend and the Django backend. User queries and preferences are transmitted through these API calls, initiating backend processing.

### 3. Backend Processing
The Django backend, a robust framework for web applications, incorporates pre-trained sentiment analysis models stored as pickle files. This dynamic loading mechanism ensures adaptability to evolving market trends. Utilizing asynchronous processing, the backend handles user queries swiftly and efficiently, maintaining responsiveness even during periods of high traffic.

## Visualization Output

Predicted stock movements are visually represented, providing users with an intuitive understanding of sentiment trends.

## Backend and Inference Processing

At the heart of the system lies the Django backend, acting as the nerve center for real-time inference. Integrating machine learning models, the backend processes user queries, applying sophisticated algorithms to generate predictions.

## Key Features

### 1. Asynchronous Processing
Asynchronous processing ensures a seamless user experience by allowing the system to handle multiple requests simultaneously without performance degradation.

### 2. Scalability Considerations
The architecture is designed with scalability in mind, allowing the system to accommodate a growing user base and evolving data demands.

## Getting Started

To run the frontend project locally, follow these steps:

1. Clone the repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd frontend-project`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

Now, you can access the frontend by visiting `http://localhost:3000` in your web browser.

Feel free to explore the intuitive UI and interact with the various features designed to enhance your stock sentiment analysis experience.

## Acknowledgments

This frontend project was developed with a user-centric approach to provide a seamless and insightful experience for stock sentiment analysis. We appreciate your interest and welcome any feedback or contributions to make this project even better.