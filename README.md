# MintMate — Your Money, Your Rules 💚

> **Simulate before you spend. Shop smarter, protect your budget, and own your financial future.**

MintMate is a Gen Z-focused personal finance web application designed to make budgeting more interactive and engaging. With a cyber-neon, EDM-inspired interface, it helps users understand their spending, explore financial scenarios, and make more informed purchase decisions.

The experience is built around a simple idea: before spending money, understand how that decision could affect your financial future.

**Live Demo:** https://gen-z-expense-detector.vercel.app/

**GitHub Repository:** https://github.com/10809shaziaruhee2122-sys/GEN-Z-EXPENSE-DETECTOR

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Purchase Decision Simulator](#-purchase-decision-simulator)
- [Technology Stack](#-technology-stack)
- [Application Architecture](#-application-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [How to Use MintMate](#-how-to-use-mintmate)
- [Privacy and Data Handling](#-privacy-and-data-handling)
- [Accessibility and Responsive Design](#-accessibility-and-responsive-design)
- [Performance and Code Quality](#-performance-and-code-quality)
- [Testing and Verification](#-testing-and-verification)
- [Limitations and Future Improvements](#-limitations-and-future-improvements)
- [Project Goal](#-project-goal)

---

## 🌟 Overview

Managing a limited budget involves more than tracking expenses. Every purchase can affect the money available for future needs, daily spending limits, savings goals, and financial stability.

MintMate brings these decisions into one interactive experience.

The application is designed around a ₹10,000 budget over a 30-day period. Users can explore their financial overview, review spending, monitor goals and commitments, and simulate hypothetical purchases before deciding what to do.

Rather than presenting budgeting as a static spreadsheet, MintMate aims to make the consequences of spending visible through interactive controls, visualizations, and financial indicators.

### Design philosophy

- **Understand before spending:** Preview the potential impact of a purchase.
- **Make consequences visible:** Connect spending decisions to relevant financial indicators.
- **Encourage informed choices:** Explore alternatives, delay purchases, or decide not to spend.
- **Keep the experience engaging:** Combine a modern consumer-facing interface with interactive financial tools.

---

## 🎯 Problem Statement

Young adults often need to manage limited monthly funds while balancing everyday expenses, subscriptions, personal purchases, unexpected costs, and savings goals.

Basic expense trackers primarily show what has already happened. They may not make it easy to understand how a proposed purchase could affect the rest of the month.

MintMate addresses this problem by combining expense tracking with interactive financial decision support.

The application aims to help users understand:

- How much money remains available.
- How their current spending affects their daily allowance.
- Whether a hypothetical purchase could create financial pressure.
- How spending choices may affect savings progress and the monthly forecast.
- Whether delaying or skipping a purchase could better support their budget.

---

## ✨ Key Features

### 💸 1. Budget Overview and Financial Health

The financial dashboard brings key budgeting information into one place.

Depending on the current application state and implemented functionality, users can explore:

- Monthly budget and remaining balance.
- Recorded income and expenses.
- Safe daily spending allowance.
- Spending categories and cash-flow visualizations.
- Projected balance and financial runway.
- Financial health indicators.
- Financial BPM indicators for understanding spending pace.

The dashboard is intended to help users understand their current financial position rather than relying on a single balance figure.

### 🧾 2. Transaction Management

MintMate includes transaction-related controls for managing financial activity.

The available transaction experience supports relevant operations such as:

- Reviewing recorded transactions.
- Tracking income and expenses.
- Organizing transactions by category.
- Inspecting spending patterns.
- Using available transaction entry and filtering controls.

The effects of transaction actions depend on the current implementation and application state.

### 🎯 3. Savings Goals

Savings goals help users keep track of progress toward planned financial targets.

The goals experience is designed to make saving more visible alongside spending and budgeting decisions.

### 🔄 4. Subscription Tracking

The subscriptions experience helps users review recurring financial commitments where supported by the current application.

Understanding recurring expenses can help users evaluate how much of their available budget is already committed.

### 📈 5. Forecasting and Financial Insights

MintMate includes forecasting and financial insight views intended to help users understand how their current financial activity may affect the remainder of the month.

These views complement the dashboard by making spending trends and potential future outcomes easier to inspect.

### 👤 6. Profile and Personalization

The application provides profile and settings controls for the personalization options supported by the current implementation.

MintMate is designed to be accessible without requiring a mandatory sign-in screen for the demo experience.

### 🎮 7. Interactive, Gamified Experience

MintMate uses a cyber-neon visual theme inspired by gaming and electronic dance music.

The interface incorporates:

- Neon colors and contrasting visual elements.
- Interactive scenario cards.
- Financial indicators and visualizations.
- Animated transitions and visual effects.
- Reward-style progress elements where implemented.

The goal is to make financial exploration more engaging without losing sight of the underlying budget.

---

## 🛍️ Purchase Decision Simulator

The purchase simulator is a central feature of MintMate.

It lets users explore a potential purchase before committing money to it.

### How it works

1. Select an existing purchase scenario or create a custom one.
2. Adjust the purchase name, amount, category, and relevant parameters.
3. Inspect the projected financial impact.
4. Compare the potential outcome with the current financial position.
5. Choose an available action based on the result.

### Financial impact indicators

The simulator is designed to present relevant before-and-after comparisons, including:

- Remaining balance.
- Safe daily spending allowance.
- Savings goal progress.
- Financial health score.
- Purchase impact and affordability verdict.

These indicators help users understand that a purchase can affect several parts of their financial plan at once.

### Decision pathways

The interface provides decision options such as:

- **Buy now:** Commit the simulated purchase through the application's available transaction flow.
- **Try a cheaper alternative:** Explore the impact of a lower purchase amount.
- **Schedule for later:** Explore delaying the purchase to a future day within the supported timeline.
- **Skip the purchase:** Consider preserving the money for other needs.

### Affordability verdicts

The interface uses visual verdicts to communicate the potential impact of a decision.

- 🟢 **Safe Drop:** The purchase appears manageable within the modeled budget.
- 🟡 **Stretch:** The purchase may reduce available spending flexibility.
- 🔴 **Budget Blowout / Caution:** The purchase may create pressure on the financial plan.

Verdicts are based on the application's modeled financial state and should not be interpreted as professional financial advice.

### Product comparison

The application includes a product comparison interface for exploring products and possible alternatives.

Product information, pricing, ratings, availability, and deal details depend on the data source and functionality available at the time of use.

Displayed product prices should not be assumed to be live or independently verified unless the interface explicitly identifies a live source.

---

## 🧰 Technology Stack

MintMate uses a modern TypeScript-based frontend stack.

| Technology | Purpose |
|---|---|
| TypeScript | Application types and development |
| React | Component-based user interface |
| Vite | Development server and frontend build tooling |
| Tailwind CSS | Utility-based styling |
| Lucide React | Interface icons |
| Recharts | Data visualizations, where used |
| React Context | Shared application state, where implemented |
| Browser storage | Local persistence for supported data |
| Vercel | Application deployment |

The repository's `package.json` and lockfile are the authoritative references for the installed dependencies, versions, and package manager.

Additional dependencies may support animation, product comparison, server-side functionality, and other features.

---

## 🏗️ Application Architecture

MintMate follows a component-based application structure.

### Application entry point

The application entry point initializes the React application and its top-level providers.

Shared providers make application state and relevant functionality available to the components that need them.

### Views

The application is organized into dedicated views for major areas of the experience, including:

- Financial overview.
- Transactions.
- Purchase simulator.
- Savings goals.
- Subscriptions.
- Forecasting.
- Financial health.
- Profile.

The main application coordinates navigation between these views.

### Shared state and context

The finance context provides shared financial state and operations to relevant components.

This allows views and controls to access the financial information and actions needed for the user experience without independently maintaining every piece of shared state.

The repository also contains an authentication context. Its presence in the codebase should not be interpreted as proof that a complete user registration and sign-in workflow is exposed in the application.

### Reusable components

The interface uses dedicated components for reusable functionality such as:

- Navigation and headers.
- Notifications.
- Modal dialogs.
- Purchase comparison.
- Financial information and interactive controls.

### Utility modules

Shared utility modules support tasks such as currency formatting, seed data, product catalog handling, and other application logic.

### State and persistence

The application uses its implemented state-management and browser-storage mechanisms to support the demo experience.

Data persistence and financial calculations depend on the actual implementation. Browser-local storage does not automatically synchronize data across browsers or devices.

---

## 📁 Project Structure

The repository contains the application source, configuration, and supporting files.

Key paths include:

```text
GEN-Z-EXPENSE-DETECTOR/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── modals/
│   │   ├── simulator/
│   │   └── views/
│   ├── context/
│   ├── lib/
│   ├── types/
│   └── index.css
├── index.html
├── package.json
├── bun.lock
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The exact directory contents may evolve as the project develops. Refer to the repository for the current source files.

---

## 🚀 Getting Started

Follow these steps to run MintMate locally.

### Prerequisites

- Node.js compatible with the project's dependencies.
- Bun, recommended because the repository includes a Bun lockfile.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/10809shaziaruhee2122-sys/GEN-Z-EXPENSE-DETECTOR.git
```

### 2. Enter the project directory

```bash
cd GEN-Z-EXPENSE-DETECTOR
```

### 3. Install dependencies

```bash
bun install
```

Use the package manager and lockfile appropriate for the repository when installing dependencies.

### 4. Start the development server

```bash
bun run dev
```

Open the local URL printed in the terminal. For a typical Vite configuration, this is commonly `http://localhost:5173`, but the actual URL may differ.

### 5. Build for production

```bash
bun run build
```

The build command should complete successfully before deploying a new version.

### Additional scripts

Consult `package.json` for the available scripts and their intended purposes. Type-checking, linting, testing, and server startup commands depend on the current project configuration.

---

## ⚙️ Environment Configuration

Some optional integrations may depend on environment variables.

If configuration is required:

1. Inspect the repository's `.env.example`, if present.
2. Identify which variables are required by the current implementation.
3. Configure the appropriate variables in your local environment or deployment settings.
4. Never commit private API keys, tokens, passwords, or other secrets to a public repository.

Only expose variables intended for use in the browser through the frontend build system. Private credentials must remain on a trusted server.

The application should be evaluated against its actual configuration requirements rather than assuming that every optional integration is enabled.

---

## 🧭 How to Use MintMate

1. Open the [MintMate live demo](https://gen-z-expense-detector.vercel.app/).
2. Explore the financial dashboard and inspect the displayed budget and financial indicators.
3. Navigate to the transaction view and explore the available transaction controls.
4. Open the purchase simulator.
5. Select a preset scenario or enter a custom purchase.
6. Adjust the amount and inspect the projected financial impact.
7. Try a cheaper alternative, schedule the purchase for later, or skip it.
8. Explore savings goals, subscriptions, forecasting, financial health, and profile controls.
9. Refresh the application to verify which information persists in the current browser.

For a fair test, use demo data and verify the effects of important actions before relying on the displayed results.

---

## 🔐 Privacy and Data Handling

MintMate is a budgeting application demo, not a bank account, payment processor, or financial institution.

### Data storage

Where the application uses browser-local storage, the data remains associated with the browser and device unless an explicit synchronization mechanism is implemented.

Local storage should not be treated as a secure vault for sensitive financial information.

### Authentication

The demo is designed to be accessible without requiring a mandatory login screen.

A repository context or authentication-related dependency does not by itself establish that a complete authentication workflow is implemented.

### API keys and external services

- Never commit private API keys or credentials.
- Configure secrets through an appropriate trusted environment.
- Verify external integrations and data sources before relying on their results.
- Avoid entering real banking credentials or highly sensitive financial information into a demo application.

### Financial disclaimer

MintMate provides modeled budgeting insights and hypothetical purchase projections. Its outputs depend on the data and calculations implemented in the application.

The application does not replace professional financial advice or guarantee future financial outcomes.

---

## ♿ Accessibility and Responsive Design

MintMate aims to provide an engaging experience across desktop and mobile screen sizes.

Areas to consider during accessibility and responsive-design checks include:

- Semantic HTML elements.
- Accessible names for interactive controls.
- Keyboard navigation and visible focus indicators.
- Appropriate ARIA attributes where necessary.
- Readable text and sufficient contrast.
- Responsive layouts for smaller screens.
- Reduced-motion preferences for users who request less animation.

These are important quality goals. Actual compliance should be verified against the current deployed application rather than inferred from the visual design alone.

---

## ⚡ Performance and Code Quality

The project is designed around a modern frontend build workflow.

Important engineering considerations include:

- Keeping components focused on clear responsibilities.
- Maintaining useful TypeScript types.
- Avoiding unnecessary rendering and duplicated logic.
- Loading nonessential views when needed, where supported by the application.
- Keeping production bundles reasonably small.
- Avoiding unnecessary layout shifts.
- Validating user-controlled input.
- Handling errors in a predictable way.
- Keeping dependencies and configuration maintainable.

The repository and deployed build should be checked regularly for TypeScript errors, lint issues, failed builds, dependency concerns, and performance regressions.

---

## 🧪 Testing and Verification

Before using the application, verify the following areas.

### Build and deployment

- [ ] Dependencies install successfully.
- [ ] The configured production build completes successfully.
- [ ] The public GitHub repository is accessible.
- [ ] The deployed application loads over HTTPS.

### Functional checks

- [ ] Main navigation opens the intended views.
- [ ] Transaction actions produce the expected results.
- [ ] The purchase simulator responds to changes in the proposed purchase.
- [ ] Financial indicators update consistently with supported operations.
- [ ] Scheduling controls reject invalid dates.
- [ ] Savings goals and subscription controls behave as expected.
- [ ] Browser refresh behavior matches the implemented persistence model.

### Usability and quality

- [ ] The interface works at mobile and desktop sizes.
- [ ] Interactive controls can be reached using the keyboard.
- [ ] Focus indicators are visible.
- [ ] Forms and inputs have appropriate accessible names.
- [ ] The production browser console has no unexplained errors.
- [ ] Performance has been reviewed using an appropriate browser auditing tool.

These checks are a verification checklist, not a claim that every test has already been completed or that automated test coverage exists.

---

## 🔮 Limitations and Future Improvements

Potential areas for further development include:

- More comprehensive automated tests for financial calculations and user interactions.
- Further improvements to initial page load and JavaScript bundle size.
- Stronger separation of business logic from presentation components.
- Additional accessibility testing.
- Expanded product comparison and reliable, clearly attributed pricing sources.
- More detailed financial projections and scenario analysis.
- Optional account-based synchronization if a secure backend and authentication workflow are introduced.
- Improved error handling for unavailable external services.

These items represent possible future improvements and should not be interpreted as features already implemented.

---

## 🎯 Project Goal

MintMate aims to help users think through purchases before spending.

By combining budgeting, transaction tracking, spending pace, financial projections, and an interactive purchase simulator, the application makes everyday money decisions easier to explore.

The core idea is simple:

**Understand the impact. Explore your options. Make every rupee count.**

### MintMate — Your Money, Your Rules. 💚
