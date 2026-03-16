# CUBILE PROP FUND – Quantitative Research Site

Official website for **CUBILE PROP FUND**, a quantitative investment research project focused on systematic derivatives strategies, disciplined portfolio construction, and robust risk management frameworks.

This repository contains the full source code for the public-facing website presenting the research philosophy, performance framework, and quantitative methodology behind the program.

---

## Overview

CUBILE PROP FUND focuses on **systematic trading strategies** driven by data, statistical modeling, and portfolio risk controls rather than discretionary decision-making.

The website highlights:

• Quantitative research philosophy
• Strategy performance framework
• Portfolio risk management approach
• Institutional-style reporting and analytics

The goal is to present research in a **transparent and structured format similar to institutional quantitative funds**.

---

## Technology Stack

The website is built using modern frontend technologies:

* **Next.js 14**
* **React**
* **Tailwind CSS**
* **Recharts** for performance visualizations

Key design goals include:

* Clean institutional UI
* Fully responsive layout
* Lightweight and fast loading
* Clear presentation of quantitative metrics

---

## Project Structure

```
quant-fund-site/
│
├── app/                 # Next.js app router pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── EquityChart.tsx
│   └── DrawdownChart.tsx
│
├── public/              # Static assets
│
├── tailwind.config.ts   # Tailwind configuration
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/cubile/quant-fund-site.git
cd quant-fund-site
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The website will be available at:

```
http://localhost:3000
```

---

## Features

### Institutional Design

Minimal, professional interface inspired by quantitative hedge funds.

### Performance Visualization

Interactive charts for:

* Equity curve
* Drawdown analysis

### Responsive Layout

Fully optimized for:

* Mobile devices
* Tablets
* Desktop screens

### Modular Components

Reusable React components for maintainable architecture.

---

## Purpose

This project serves as a **research presentation platform** rather than an investment solicitation. The site demonstrates the conceptual framework behind systematic derivatives trading strategies and portfolio construction techniques.

---

## Disclaimer

The content presented on this website is for **informational and educational purposes only**.

It does not constitute:

* investment advice
* an offer to sell securities
* a solicitation for investment capital

All strategy results and metrics are illustrative unless otherwise specified.

---

## Author

Developed and maintained by the CUBILE quantitative research project.

---

## License

This project is provided for educational and research purposes. Redistribution or commercial use should respect the original project attribution.
