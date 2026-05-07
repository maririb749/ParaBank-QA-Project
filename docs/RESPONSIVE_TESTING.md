# ParaBank Responsive Testing

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Responsive Testing Template  
**Status:** Planned / Ready for Execution  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This document defines planned responsive testing checks for the ParaBank QA Portfolio project.

The goal is to assess whether the main ParaBank workflows remain usable across common desktop, tablet, and mobile viewport sizes.

This document is currently a planned execution template. It does not claim that responsive testing has been fully executed.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | To be completed during execution |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | To be completed during execution |
| Operating System | To be completed during execution |
| Device / Viewport Mode | To be completed during execution |
| Evidence Folder | `evidences/screenshots/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md` |

---

## Status Legend

| Status | Meaning |
|---|---|
| Not Executed | Check has not been performed |
| Passed | Page or workflow was usable at the tested viewport |
| Failed | Page or workflow was not usable at the tested viewport |
| Observation | Behavior is usable but has a relevant layout or usability concern |
| Blocked | Check could not be completed due to environment or test data issues |

---

## Planned Viewports

| Viewport ID | Device Category | Width x Height | Status |
|---|---|---|---|
| RWD-Desktop | Desktop | 1366 x 768 | Not Executed |
| RWD-Tablet | Tablet | 768 x 1024 | Not Executed |
| RWD-Mobile | Mobile | 390 x 844 | Not Executed |

---

## Scope

Responsive testing should focus on the main user workflows:

- Login.
- Account overview.
- Open new account.
- Transfer funds.
- Find transactions.
- Account activity and transaction history.
- Update contact information.
- Validation and error message display.

---

## Responsive Checklist

| Check ID | Area | Check | Desktop | Tablet | Mobile | Notes | Evidence |
|---|---|---|---|---|---|---|---|
| RWD-001 | Login | Login form is visible and usable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-002 | Navigation | Main navigation remains accessible | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-003 | Accounts | Account overview content is readable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-004 | Accounts | Account details and balances are readable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-005 | Open Account | Account type and funding account controls are usable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-006 | Transfers | Amount input and account dropdowns are usable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-007 | Transfers | Transfer confirmation is readable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-008 | Transactions | Transaction table or result list is readable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-009 | Transactions | Find Transactions form is usable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-010 | Profile | Update contact information form is usable | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-011 | Validation | Error messages remain visible and associated with the relevant action | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |
| RWD-012 | Layout | No critical content is hidden, overlapping, or cut off | Not Executed | Not Executed | Not Executed | To be completed during execution | To be completed |

---

## Results Summary

| Metric | Total |
|---|---:|
| Responsive Checks Planned | 12 |
| Viewports Planned | 3 |
| Checks Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Observations | 0 |
| Blocked | 0 |

---

## Observations

- To be completed during execution.

---

## Bugs

| Bug ID | Related Check | Viewport | Summary | Severity | Priority | Evidence |
|---|---|---|---|---|---|---|
| To be completed | N/A | N/A | N/A | N/A | N/A | N/A |

---

## Evidence

- To be completed during execution.

---

## Notes

- Responsive testing should document the viewport used for each check.
- Any confirmed responsive defect should be documented in `docs/BUG_REPORTS.md`.
- Any stable responsive smoke scenario can be considered for future Cypress automation.

