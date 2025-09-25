# Shopping List Web App Challenge
                                                             

**GitHub Repository:** [https://github.com/panasasatyassai/shopping_list_web_app_challenge_2](https://github.com/panasasatyassai/shopping_list_web_app_challenge_2)

## Overview
This project is a full-stack web application for managing a shopping list. It allows users to add, edit, delete, and view items in their shopping list. The app demonstrates the ability to create a cohesive, functional, and well-designed application using modern web technologies.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js with Express
- **Other Tools:** npm, RESTful APIs

## Features
The application provides the following core functionalities:

1. **Add Items**
   - Users can add a new item to the shopping list.
   - Item details can include name, quantity, category, or any other relevant information.

2. **Edit Items**
   - Users can modify the details of an existing item.

3. **Delete Items**
   - Users can remove an item from the shopping list.

4. **Display Items**
   - All items currently on the shopping list are displayed clearly and effectively.

## Setup Instructions

### Backend
1. Navigate to the backend folder: 
--cd backend
2.Install dependencies: 
--npm install 
3.Start the server: 
--npm start  
*The server will run on http://localhost:5000 (default).

# Frontend 
# Navigate to the frontend folder: 
--cd frontend 
--Install dependencies 
--npm install 
* Start the React development server: 
--npm start
* The app will run on http://localhost:3000 (default).

# API Endpoints
| Method | Endpoint       | Description                 |
| ------ | -------------- | --------------------------- |
| GET    | /api/items     | Retrieve all shopping items |
| POST   | /api/items     | Add a new item              |
| PUT    | /api/items/:id | Update an existing item     |
| DELETE | /api/items/:id | Delete an item              |

# Folder Structure
shopping_list_web_app_challenge/
│
├── backend/             # Node.js + Express backend
│   ├── index.js         # Entry point
│   ├── routes/          # API routes
│   └── models/          # Data models (if any)
│
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   └── App.js       # Main App
│
└── README.md


