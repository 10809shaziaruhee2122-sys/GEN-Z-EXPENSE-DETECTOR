# MintMate --- Your Money, Your Rules 💚

> **Simulate before you spend. Shop smarter, protect your budget, and
> own your financial future.**

MintMate is a Gen Z-focused personal finance web application that turns
budgeting into an interactive experience. Built around a vibrant
cyber-neon, EDM-inspired interface, it helps users manage a limited
budget, understand their spending pace, and explore the financial impact
of purchases before committing.

**Live demo:** https://gen-z-expense-detector.vercel.app/\
**Repository:**
https://github.com/10809shaziaruhee2122-sys/GEN-Z-EXPENSE-DETECTOR

------------------------------------------------------------------------

## ✨ Features

### 💸 Budget overview and financial health

-   Track a monthly budget and remaining balance.
-   Calculate a safe daily spending allowance.
-   Monitor expenses and spending categories.
-   View projected cash flow and financial runway.
-   Use Financial BPM indicators to understand spending pace.

### 🛍️ "Can I Afford It?" --- Purchase Simulator

-   Explore products through the available web/catalog search
    experience.
-   Review product information such as INR prices, ratings, and deal
    details where available.
-   Preview how a hypothetical purchase could affect the remaining
    balance, daily allowance, savings, and month-end outlook.
-   See affordability verdicts:
    -   🟢 **Safe Drop** --- the purchase appears to fit within the
        budget.
    -   🟡 **Stretch** --- the purchase may reduce the daily allowance.
    -   🔴 **Budget Blowout / Caution** --- the purchase may put the
        financial plan at risk.
-   Adjust a hypothetical purchase amount or date to compare possible
    outcomes.
-   Confirm a simulated purchase to add it to tracked expenses, where
    supported by the current implementation.

> Product availability and pricing can vary. Do not treat displayed
> prices as live unless the result is explicitly sourced from a live
> provider.

### 📊 Transactions and spending insights

-   Track income and expenses.
-   Organize spending by category.
-   Review spending breakdowns and cash-flow visualizations.
-   Use the available transaction filters and entry controls.

### 🎯 Goals, subscriptions, and gamification

-   Monitor savings goals and recurring subscriptions where available in
    the app.
-   Explore spending streaks, badges, and reward-style progress.
-   Experience a colorful interface with animated transitions and
    EDM-inspired visual effects.

### 👤 Personalization and persistence

-   Customize the profile and budget settings where supported.
-   The app is designed for quick access without a mandatory login
    screen.
-   User settings and financial data are stored locally in the browser
    where implemented. Browser-local data is not automatically
    synchronized across devices.

------------------------------------------------------------------------

## 🧰 Technology

The repository is built with a modern TypeScript-based frontend stack.
The repository currently identifies TypeScript as its primary language.

-   **TypeScript**
-   **Vite**
-   **React** (verify against `package.json`)
-   **Tailwind CSS**
-   **Modern UI and interaction components**
-   **Browser local storage**, for supported persisted settings and data
-   **Vercel**, for deployment

For exact dependency versions and scripts, see
[`package.json`](./package.json).

------------------------------------------------------------------------

## 🚀 Run locally

### Prerequisites

-   A recent version of Node.js
-   A package manager compatible with the lockfile in this repository

### Setup

Clone the repository:

``` bash
git clone https://github.com/10809shaziaruhee2122-sys/GEN-Z-EXPENSE-DETECTOR.git
cd GEN-Z-EXPENSE-DETECTOR
```

Install dependencies. This repository includes a `bun.lock`, so Bun is a
suitable option:

``` bash
bun install
```

Start the development server using the script defined in `package.json`:

``` bash
bun run dev
```

Open the local URL printed in your terminal (commonly
`http://localhost:5173` for Vite).

If you use npm instead, run `npm install` and then the appropriate
development script listed in `package.json`.

------------------------------------------------------------------------

## 🧭 How to try MintMate

1.  Open the [live demo](https://gen-z-expense-detector.vercel.app/).
2.  Explore the dashboard and current financial overview.
3.  Open the **"Can I Afford It?"** purchase simulator.
4.  Change a hypothetical purchase amount or date, if available, and
    inspect the projected impact.
5.  Test the transaction and profile controls.
6.  Refresh the page to check which data is persisted locally by the
    current build.

------------------------------------------------------------------------

## 🏗️ Project structure

The repository includes the following top-level items:

-   `src/` --- application source code
-   `public/` --- static public assets
-   `index.html` --- frontend entry HTML
-   `package.json` --- dependencies and scripts
-   `vite.config.ts` --- Vite configuration
-   `tsconfig.json` --- TypeScript configuration
-   `server.ts` --- server-related code, if used by the current setup
-   `.env.example` --- example environment configuration, if required

The precise component and route structure may evolve as the project
develops.

------------------------------------------------------------------------

## 🔐 Privacy and data

MintMate is a budgeting experience, not a bank account or financial
institution. Use demo data when exploring the application. Data saved in
browser storage remains tied to that browser and device unless the
application explicitly provides a synchronization service. Never put
private credentials or API secrets in public source code.

------------------------------------------------------------------------

## ♿ Quality and usability

MintMate aims to combine an expressive visual style with practical
usability. Before relying on the live demo, test the main navigation,
purchase simulation, transaction actions, mobile layout, keyboard
navigation, and persistence behavior in your browser.

------------------------------------------------------------------------

## 🔮 Future improvements

Potential next steps include: - More reliable product search
integrations with clearly attributed pricing sources. - Expanded
purchase comparison and scenario analysis. - Additional automated tests
for financial calculations. - Further performance and accessibility
improvements. - More detailed financial insights and forecasting.

These are possible improvements, not a claim that every item is already
implemented.

------------------------------------------------------------------------

## 🎯 Project goal

MintMate helps users think through a purchase before spending. By
bringing budgeting, spending pace, financial projections, and purchase
simulation into one interactive experience, it aims to make everyday
money decisions clearer and more engaging.

**Make every rupee count. MintMate --- your money, your rules.**
