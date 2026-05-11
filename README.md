# ParaBank QA Portfolio Project

[![Cypress Regression Tests](https://github.com/maririb749/ParaBank-QA-Project/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/maririb749/ParaBank-QA-Project/actions/workflows/cypress.yml)

A practical QA project focused on testing core banking workflows, identifying risks, documenting bugs, collecting evidence, and building Cypress regression coverage.

This project demonstrates manual functional testing, Cypress UI automation, risk-based exploratory testing, bug reporting, traceability, evidence management, and CI with GitHub Actions.

The focus is practical QA work: identifying high-risk banking workflows, documenting results clearly, and mapping manual coverage to automated regression scenarios.

## Summary

- Manual QA + Cypress automation project for a demo banking application
- 15 manual test cases covering authentication, accounts, transfers, transactions and customer profile
- 5 Cypress spec files with 15 mapped automated scenarios
- Latest Cypress result: 12 passing, 3 pending known bugs, 0 failing
- 3 documented bugs, 6 observations and 2 exploratory sessions
- Includes risk analysis, traceability matrix, evidence, bug reports and GitHub Actions CI

## Application Under Test

| Item | Details |
|---|---|
| Application | ParaBank Demo Banking Application |
| URL | `https://parabank.parasoft.com/parabank/index.htm` |
| Type | Demo online banking web application |
| Tested Interface | Web UI |

ParaBank simulates common banking workflows including login, account opening, account balance review, transfers, transaction history, and customer profile updates.

## Current Project Status

| Area | Current Status |
|---|---|
| Manual functional testing | Completed |
| Manual test cases executed | 15 |
| Bugs documented | 3 |
| Manual observations | 2 |
| Exploratory observations | 4 |
| Linked exploratory impact evidence items | 2 |
| Cypress automation | Implemented |
| Cypress scenarios mapped | 15 |
| Latest Cypress result | 12 passing, 3 pending known bugs, 0 failing |
| GitHub Actions CI | Workflow exists |
| Exploratory testing | EXP-001 and EXP-003 completed |
| Accessibility testing | Template exists; execution planned |
| Responsive testing | Template exists; execution planned |
| API testing | Future scope if stable endpoints are included |

## Scope Tested

| Module | Coverage |
|---|---|
| Authentication | Valid login, incorrect password, empty login fields |
| Accounts | Open new account, view account balance, restricted page access |
| Transfers | Valid transfer, negative amount, insufficient balance |
| Transactions | Transaction history, search by amount, new account transaction state |
| Customer Profile | Valid update, invalid phone format, empty required fields |
| Exploratory Testing | Authentication/session access and transfers |

Scenario coverage includes positive, negative, boundary, edge case, access control, exploratory, and regression-oriented testing.

## Risk-Based Testing Mindset

The testing approach was guided by simple risk-based questions:

- What is the most important functionality for the user?
- What could interrupt the customer workflow?
- What data is sensitive?
- What could cause the most damage if it failed?

Based on these questions, the project focused first on core banking flows such as authentication, restricted access, transfers, balances, and transaction history.

Other areas, such as profile validation, accessibility, responsive testing, compatibility, and API testing, are also important, but were documented or planned after the highest-risk flows were covered.

This approach helped keep the testing focused, realistic, and aligned with the main risks of the application.

## Key Findings

| ID | Finding | Current Status |
|---|---|---|
| BUG-001 | Incorrect password authentication was reproduced during manual testing. It was not reproduced during EXP-001 and remains Needs Retest. | Needs Retest |
| BUG-002 | Negative transfer amount was accepted and processed. | Open |
| BUG-003 | Insufficient balance transfer was accepted and created invalid balance behavior. | Open |
| OBS-003 | Browser Back after logout displayed cached authenticated account data, while protected actions still required login. | Observation |

Exploratory transfer testing also revealed additional validation weaknesses around empty, non-numeric, zero-value, same-account, and very large transfers. Transaction history and final balance evidence were linked to transfer validation impact instead of counted as separate standalone observations.

## Automation Summary

The Cypress project is located in [Automation/](Automation/).

| Automation Area | Details |
|---|---|
| Framework | Cypress |
| Spec files | 5 |
| Mapped scenarios | 15 |
| Latest result | 12 passing, 3 pending known bugs, 0 failing |
| Known-bug handling | TC-002, TC-008, and TC-009 are pending/skipped by default |
| Test data strategy | Dynamic QA users are used during Cypress execution |
| CI | GitHub Actions workflow runs the Cypress suite |

Cypress supports regression coverage, but it does not replace manual QA or exploratory thinking. The automated tests are mapped to documented manual test cases and keep known application bugs visible without causing the default regression run to fail.

## How To Run Cypress

All Cypress commands should be executed from the `Automation/` directory.

Install dependencies:

```bash
cd Automation
npm install
```

Run the default Cypress suite:

```bash
npm run cy:run
```

Run Cypress in Chrome:

```bash
npm run cy:run:chrome
```

Open Cypress interactively:

```bash
npm run cy:open
```

Run known-bug scenarios intentionally:

```bash
npm run cy:run:known-bugs

```

Additional spec-level scripts are available in [Automation/package.json](Automation/package.json).

## CI

GitHub Actions workflow exists at [.github/workflows/cypress.yml](.github/workflows/cypress.yml).

The workflow installs dependencies, runs the Cypress regression suite from the `Automation/` directory, and uploads Cypress screenshots and videos as artifacts when available.

The workflow status is displayed through the GitHub Actions badge at the top of this README.

## Documentation Map

| Document | Purpose |
|---|---|
| [Test Plan](docs/TEST_PLAN.md) | Scope, objectives, environment, risks, execution approach, deliverables |
| [Test Strategy](docs/TEST_STRATEGY.md) | Testing approach, risk prioritization, regression strategy, automation strategy |
| [Manual Test Cases](docs/test-cases/PARABANK_15_TEST_CASES_EN.md) | 15 executable manual test cases with expected results, actual results, status, and evidence |
| [Bug Reports](docs/BUG_REPORTS.md) | Bugs, observations, severity, priority, impact, evidence, and retest notes |
| [Test Summary Report](docs/TEST_SUMMARY_REPORT.md) | Manual, Cypress, and exploratory execution results |
| [Traceability Matrix](docs/TRACEABILITY_MATRIX.md) | Requirement, test case, bug, automation, risk, and evidence mapping |
| [Exploratory Testing](docs/EXPLORATORY_TESTING.md) | Exploratory charters, executed sessions, observations, and linked impact evidence |
| [Accessibility Checklist](docs/ACCESSIBILITY_CHECKLIST.md) | Planned accessibility testing checklist |
| [Responsive Testing](docs/RESPONSIVE_TESTING.md) | Planned responsive testing checklist |

## Evidence

| Evidence Area | Path | Status |
|---|---|---|
| Manual test screenshots | [evidences/screenshots/](evidences/screenshots/) | Evidence captured |
| Exploratory screenshots | [evidences/screenshots/exploratory/](evidences/screenshots/exploratory/) | Evidence captured |
| Accessibility screenshots | `evidences/screenshots/accessibility/` | Planned evidence folder; execution planned |
| Responsive screenshots | `evidences/screenshots/responsive/` | Planned evidence folder; execution planned |

Evidence file names include related test case, bug, observation, or exploratory session IDs so reviewers can trace claims back to screenshots quickly.

## Repository Structure

```text
ParaBank-QA-Project/
├── Automation/
│   ├── cypress/e2e/
│   └── package.json
├── docs/
│   ├── test-cases/
│   ├── ACCESSIBILITY_CHECKLIST.md
│   ├── BUG_REPORTS.md
│   ├── EXPLORATORY_TESTING.md
│   ├── RESPONSIVE_TESTING.md
│   ├── TEST_PLAN.md
│   ├── TEST_STRATEGY.md
│   ├── TEST_SUMMARY_REPORT.md
│   └── TRACEABILITY_MATRIX.md
├── evidences/
│   └── screenshots/
├── .github/
│   └── workflows/
└── README.md
```
## Tools Used

| Tool | Purpose |
|---|---|
| Visual Studio Code | Editing QA documentation, Markdown files, Cypress tests, and project structure |
| Markdown | QA documentation, test cases, reports, and checklists |
| Git | Version control |
| GitHub | Repository hosting, portfolio presentation, and project history |
| Cypress | UI regression automation |
| GitHub Actions | CI workflow for Cypress execution |
| Chrome | Manual web testing and evidence capture |
| Chrome DevTools | Basic inspection and investigation during web testing |
| Git Bash | Command-line Git and project workflow |
---

## Planned Next Steps

- Execute the planned accessibility smoke test checklist and capture evidence.
- Execute the planned responsive testing checklist and capture evidence.
- Add a small browser compatibility smoke pass.
- Convert selected exploratory findings into scripted regression candidates.
- Improve CI reporting or artifact handling if needed.
- Add API testing as a future phase if stable endpoints are included.
