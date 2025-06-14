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

<div style="display: flex">
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" alt="HTML" width="32" height="32">
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" alt="CSS" width="32" height="32">
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="React" width="32" height="32">
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="32" height="32">
</div>
