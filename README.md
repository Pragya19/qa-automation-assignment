# Senior QA Automation Assignment  
Playwright (UI Automation) | Postman (API Tests) | Locust (Performance) | Manual Test Cases | AI Usage

---

## Project Overview

This repository contains the end-to-end QA automation deliverables for the Senior QA Automation Engineer assignment.  
It includes:

- **UI Automation** using Playwright (TypeScript)
- **API Automation** using Postman (Petstore public API)
- **Performance Testing Design** using Locust
- **Manual Test Cases** in Excel format
- **AI Productivity Document** demonstrating how AI accelerates QA work

The goal of this project is to showcase:
- Automation skills  
- Test design  
- Performance testing knowledge  
- Understanding of QA strategy and the SDLC  
- Ability to use modern tools efficiently  

---

## Repository Structure

```
qa-automation-assignment/
│
├── src/
│   ├── pages/                # Page Object Models
│   └── utils/                # Utility functions (data loader, price calculator)
│
├── tests/
│   └── ui/                   # Playwright UI Test Scripts
│
├── test-data/
│   └── products.json         # Test data for checkout scenario
│
├── postman/
│   ├── petstore_collection.json
│   └── petstore_environment.json
│
├── performance/
│   └── Performance_Test_Design_Locust.docx
│
├── documents/
│   ├── Manual_Test_Cases.xlsx
│   ├── AI_Acceleration_Document.docx
│   └── AI_Acceleration_Visually_Rich.docx
│
├── package.json
├── playwright.config.ts
├── README.md
└── .gitignore
```

---

## UI Automation Using Playwright

### **Tech Stack**
- Playwright (TypeScript)
- Page Object Model (POM)
- Data-driven testing with JSON
- Assertions include:
  - Subtotal validation  
  - Tax validation  
  - Total price validation  

### **Run UI Tests**

#### Install dependencies:
```bash
npm install
```

#### Run all tests:
```bash
npx playwright test
```

#### View HTML report:
```bash
npx playwright show-report
```

---

## API Automation Using Postman

The `postman/` folder contains:

- `petstore_collection.json`
- `petstore_environment.json`

### How to Run API Tests
1. Import both JSON files into **Postman**  
2. Select the **Petstore Environment**  
3. Run the collection  
4. Tests included:
   - Create Pet (POST)
   - Validate response body
   - Save petId in environment
   - Fetch Pet by ID (GET)
   - Validate ID matches

---

## Performance Testing Using Locust

A full performance test design document is available in:

```
performance/Performance_Test_Design_Locust.docx
```

### **Scenarios Designed**
1. Add to cart spike test (500 users)  
2. Checkout steady load test (200 users for 30 min)  
3. Peak stress test (1,000 users for 5 minutes)  

Includes metrics, thresholds, and acceptance criteria.

---

## Manual Test Cases  
The file `Manual_Test_Cases.xlsx` contains 5 well-documented test cases, including:

- Guest checkout  
- Cart price calculations  
- Search + filtering  
- Order history validation  
- Coupon validation  

---

## AI Productivity Demonstration  
As part of the bonus task, two documents show how AI tools accelerate QA delivery:

- `AI_Acceleration_Document.docx`
- `AI_Acceleration_Visually_Rich.docx`

They describe:
- Selector generation  
- Debugging  
- Test planning  
- Documentation automation  
- Productivity impact  
- Recommended AI tools (ChatGPT, Copilot, Postman AI, etc.)

---

## .gitignore (Important)

```
node_modules/
test-results/
playwright-report/
videos/
screenshots/
.env
```

---

## Final Notes

This project demonstrates a complete QA skillset spanning:

- Automation (Playwright)
- API testing (Postman)
- Performance testing (Locust)
- Test design (manual + automated)
- AI assisted productivity
- Clean repository structure & documentation

---
