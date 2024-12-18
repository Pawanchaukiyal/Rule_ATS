# Rule Engine Application
Hosted link: https://rule-ats.vercel.app/

# Rule Engine Application

The Rule Engine Application is a web-based platform that allows users to create, combine, and evaluate rules in a flexible and interactive way. This application is built using Express.js on the backend with MongoDB for data persistence, and a simple HTML/CSS/JavaScript frontend to manage rules.

## Features

- **Create Rule**: Define rules using logical operators and conditions.
- **Combine Rules**: Combine multiple rules using operators (AND, OR).
- **Evaluate Rule**: Test a rule against a data JSON to see if it passes or fails.
- **Display Rule Tree**: Visualize the AST (Abstract Syntax Tree) structure of a rule for better understanding.

## Prerequisites

- **Node.js** (v14+)
- **MongoDB** (running instance or connection URI)
- **npm** (Node Package Manager)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/rule-engine.git
cd rule-engine




##Install Dependencies
npm install

##Project Structure
.
├── db/
│   └── index.js            # MongoDB connection setup
├── routes/
│   └── ruleRoutes.js       # API routes for rule handling
├── utils/
│   └── ast.js              # Utility functions for parsing rules
├── views/
│   ├── index.html          # Frontend HTML for the application
│   └── style.css           # Styling for the frontend
├── .env                    # Environment variables
├── controller.js           # Main application controller
└── README.md               # Project README

