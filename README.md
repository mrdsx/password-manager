# Password Manager

This is my Password Manager App that is designed to securely storage your passwords.

![Password Manager UI](/src/assets/password-manager-ui.png)

## Features

- creating/editing/deleting logins
- searching passwords by login
- creating/editing/deleting folders

Additional feature: press Shift+L to lock vault

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/mrdsx/password-manager.git
cd password-manager
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add following keys:

```env
VITE_CRYPTO_KEY=your_crypto_key
```

_(Replace with your actual key for encrypting and decrypting)_

### 3. Install Dependencies and run the Dev Server

```bash
npm install
npm run dev
```

## Tech stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
