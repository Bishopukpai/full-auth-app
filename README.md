# React and Node.js Authentication Project

This project is a full-stack web application that implements user authentication using React.js on the front end and Node.js on the back end. It provides a secure and seamless way to register users, handle authentication, and manage user sessions.

## Features

- User registration with email verification
- Secure password hashing and storage
- Token-based authentication
- Protected routes on the frontend
- User login and logout functionality
- User profile management
- Access control for protected resources

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - Axios 

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB 

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible via a connection string

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bishopukpai/full-auth-app.git
   ```
2. Navigate to the project directory:

   ```bash
     cd full-auth-app
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd React-auth
   npm install --force

   #Open another command line window
   
   cd ../Login_server
   npm install
   ```
## Project Structure

1. **/frontend:** Contains the React.js frontend code.

2. **/backend:** Contains the Node.js backend code.

## Configuration

Create a .env file in the backend directory and configure the following:
```bash
PORT=3001
MONGODB_URI=mongodb://localhost:27017/your-database
SECRET_KEY=your-secret-key
```
## Usage

1. Start the backend server:
    ```bash
    npm start
    ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```
## Contributing
Contributions are welcome! Please follow the Contribution Guidelines.

## License
This project is licensed under the MIT License.


Make sure to replace placeholders like `your-username`, `your-database`, `your-secret-key`, and others with your actual project details. Additionally, feel free to add or modify sections based on your project's specific features and requirements.
