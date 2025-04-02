# Kanban Board with JWT Authentication - LJ

## Description

This full-stack **Kanban Board** application was developed as part of a coding challenge to implement secure authentication features using **JSON Web Tokens (JWT)**. Built with **React**, **TypeScript**, **Node.js**, and **Sequelize/PostgreSQL**, it allows users to securely log in and manage work tasks using a traditional Kanban interface.

The focus of this project was enhancing a prebuilt board UI by adding secure login functionality that meets modern authentication standards.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Installation

To run the application locally:

1. **Clone the repository:**
   git clone https://github.com/lisaj5472/14-KanbanBoard-FullStackReact.git

2. **Navigate into the project folder:**
   cd 14-KanbanBoard-FullStackReact

3. **Install all dependencies:**
   npm install
   cd client && npm install
   cd ../server && npm install

4. **Create a `.env` file in the `/server` folder with the following:**
   DATABASE_URL=your_postgres_url_here
   JWT_SECRET_KEY=your_secret_key

5. **Seed the database (optional if already seeded):**
   npm run seed

6. **Start the development servers:**
   npm run start:dev

7. **The app will be running at** `http://localhost:3000/`.

## Usage

- **Login** using one of the seeded users:
  - Username: `JollyGuru`
  - Password: `password`
- Invalid credentials will trigger a proper error message.
- After logging in, you’ll be directed to the Kanban board.
- You can view, create, and manage tasks.
- Logging out will remove your JWT from localStorage and return you to the login page.

## Technologies Used

- **Frontend:**

  - React
  - TypeScript
  - Vite

- **Backend:**

  - Node.js
  - Express.js
  - Sequelize ORM
  - PostgreSQL

- **Authentication:**
  - JWT (JSON Web Token)
  - bcryptjs

## Features

- 🔐 Secure user authentication with JWT.
- ✅ Redirects based on authentication status.
- 📦 JWT stored in localStorage for session persistence.
- 🧹 Automatic logout on inactivity (session timeout).
- 📄 Clean, component-based architecture.
- 🗃️ Database seeding with sample users and tickets.

## Future Enhancements

- Add user-specific task filtering and tagging.
- Role-based access control (admin, user).
- OAuth integration (e.g., Google, GitHub).
- Token refresh functionality.

## Contributing

Contributions are welcome! Fork this repo and submit a pull request.

## License

This project is licensed under the **MIT License**.

## Acknowledgements

Huge thanks to the **University of Denver Coding Bootcamp** for providing the starter code and project framework. The original board UI and backend schema were prebuilt; the authentication functionality was developed as part of the challenge.

## Contact

**GitHub**: [lisaj5472](https://github.com/lisaj5472)  
**Email**: lisaj5472@gmail.com
