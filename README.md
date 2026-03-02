# Demo Web Shop Automation – Playwright (POM)

Automation framework for:
https://demowebshop.tricentis.com/

Built using:
- Playwright
- JavaScript
- Page Object Model (POM)
- Environment Variables (.env)

---

📌 Project Overview

This project automates the core user flows of the Demo Web Shop application, including:

✅ User Registration (Positive & Negative)

✅ Login (Positive & Negative)

✅ Product Search

✅ Add to Cart (Multiple Categories)

✅ Multi-step Checkout

✅ Order Confirmation Validation

✅ Logout & Session Handling

✅ UI & Validation Checks

The framework is designed to be scalable, maintainable, and production-ready.

🧰 Tech Stack

Playwright

JavaScript (Node.js)

Page Object Model (POM)

Environment Variables (.env)

Built-in HTML Reporting

Git Version Control

🏗 Project Structure
demowebshop-playwright/
│
├── pages/                # Page Object Classes
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│
├── tests/                # Test Specifications
│   ├── register.spec.js
│   ├── login.spec.js
│   ├── search.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   ├── register-new-user.spec.js
│
├── utils/                # Utility Functions
│   └── randomData.js
│
├── playwright.config.js  # Playwright Configuration
├── package.json
├── .gitignore
├── .env (ignored)
└── README.md
🔐 Environment Configuration

Create a .env file in the project root:

BASE_URL=https://demowebshop.tricentis.com
USER_EMAIL=your_email
USER_PASSWORD=your_password

⚠️ Important:

.env is added to .gitignore

Credentials are never committed to version control

🚀 Installation

Clone the repository:

git clone <repository-url>
cd demowebshop-playwright

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
▶ Running Tests

Run all tests:

npx playwright test


