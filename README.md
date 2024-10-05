# Task Management System

## Overview

The **Task Management System** is a web-based application that helps users manage and organize tasks effectively. It features user authentication and allows users to view, update, and track the status of their tasks. The system utilizes local storage to manage user data and tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Sign In, Sign Up).
- View ongoing tasks and completed tasks.
- Update task status.
- Local storage for persistent data management.
- Responsive design for a better user experience.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## File Structure

```plaintext
.
├── Done.html
├── DoneTasks.js
├── first.js
├── home.css
├── Home.html
├── LICENSE
├── Ongoingtasks.html
├── Ongoingtasks.js
├── README.md
├── Sign_in_up.css
├── SignIn.html
├── SignIn.js
├── SignUp.html
├── signup.js
└── tabletest.html

```

- **Done.html**: Displays completed tasks.
- **DoneTasks.js**: JavaScript for managing and displaying completed tasks.
- **Ongoingtasks.html**: Displays ongoing tasks.
- **Ongoingtasks.js**: JavaScript for managing and updating ongoing tasks.
- **SignIn.html**: User sign-in page.
- **SignIn.js**: JavaScript for handling user sign-in logic.
- **SignUp.html**: User sign-up page.
- **signup.js**: JavaScript for handling user sign-up logic.
- **firstjs.js**: Main JavaScript file managing user session, task creation, and validation. It handles navigation, task management, and user authentication.
- **home.css**: Stylesheet for the application.
- **tabletest.html**:  A test HTML file demonstrating the use of jQuery DataTables for displaying tasks in a tabular format.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mbishnoi29786/Task-Management-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management-system
   ```

3. Open the `SignIn.html` file in your web browser to start using the application.

## Usage

1. **Sign In**: Enter your email and password to log in.
2. **Manage Tasks**: After signing in, you can navigate to "My Tasks" to view ongoing tasks or "Done Tasks" to view completed tasks.
3. **Update Task Status**: Click the "Update Status" button next to a task to mark it as completed.
4. **Logout**: Click the "Log out" button to log out from the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.