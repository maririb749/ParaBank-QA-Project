# ParaBank Accessibility Checklist

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Accessibility Testing Template  
**Status:** Planned / Ready for Execution  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This checklist defines planned accessibility checks for the ParaBank QA Portfolio project.

The goal is to assess basic accessibility risks around keyboard navigation, focus visibility, form usability, error messages, labels, contrast, and responsive readability.

This document is currently a planned execution template. It does not claim that accessibility testing has been fully executed.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | To be completed during execution |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | To be completed during execution |
| Operating System | To be completed during execution |
| Assistive Tools | To be completed during execution |
| Evidence Folder | `evidences/screenshots/accessibility/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md` |

---

## Status Legend

| Status | Meaning |
|---|---|
| Not Executed | Check has not been performed |
| Passed | Check passed based on observed behavior |
| Failed | Check failed and should be documented as a bug or observation |
| Observation | Behavior is notable but not confirmed as a defect |
| Not Applicable | Check does not apply to the tested page or flow |

---

## Scope

Planned accessibility checks should focus on the main ParaBank workflows already covered by the functional test suite:

- Login.
- Account overview.
- Open new account.
- Transfer funds.
- Find transactions.
- Update contact information.
- Error and validation messages.

---

## Accessibility Checklist

| Check ID | Area | Check | Status | Result / Notes | Evidence |
|---|---|---|---|---|---|
| A11Y-001 | Keyboard Navigation | User can navigate the login form using only the keyboard | Not Executed | To be completed during execution | To be completed |
| A11Y-002 | Keyboard Navigation | User can reach major authenticated navigation links using only the keyboard | Not Executed | To be completed during execution | To be completed |
| A11Y-003 | Focus Visibility | Interactive elements show a visible focus indicator | Not Executed | To be completed during execution | To be completed |
| A11Y-004 | Forms | Login inputs have understandable labels or accessible names | Not Executed | To be completed during execution | To be completed |
| A11Y-005 | Forms | Transfer form fields and dropdowns have understandable labels or context | Not Executed | To be completed during execution | To be completed |
| A11Y-006 | Forms | Update contact information fields have understandable labels or context | Not Executed | To be completed during execution | To be completed |
| A11Y-007 | Error Messages | Login validation errors are visible and understandable | Not Executed | To be completed during execution | To be completed |
| A11Y-008 | Error Messages | Form validation messages identify the affected field or action | Not Executed | To be completed during execution | To be completed |
| A11Y-009 | Visual Contrast | Primary text is readable against the page background | Not Executed | To be completed during execution | To be completed |
| A11Y-010 | Visual Contrast | Buttons and links have enough contrast to be distinguishable | Not Executed | To be completed during execution | To be completed |
| A11Y-011 | Structure | Headings and page sections help users understand the current page | Not Executed | To be completed during execution | To be completed |
| A11Y-012 | Tables | Account and transaction tables are understandable and readable | Not Executed | To be completed during execution | To be completed |
| A11Y-013 | Zoom / Reflow | Key pages remain usable when browser zoom is increased | Not Executed | To be completed during execution | To be completed |
| A11Y-014 | Link Purpose | Navigation links clearly communicate their destination or purpose | Not Executed | To be completed during execution | To be completed |
| A11Y-015 | Error Recovery | Users can recover from validation errors without losing required context | Not Executed | To be completed during execution | To be completed |

---

## Results Summary

| Metric | Total |
|---|---:|
| Checks Planned | 15 |
| Checks Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Observations | 0 |
| Not Applicable | 0 |

---

## Observations

- To be completed during execution.

---

## Bugs

| Bug ID | Related Check | Summary | Severity | Priority | Evidence |
|---|---|---|---|---|---|
| To be completed | N/A | N/A | N/A | N/A | N/A |

---

## Evidence

- To be completed during execution.

---

## Notes

- This checklist is not a full WCAG compliance audit.
- Any confirmed accessibility defect should be documented in `docs/BUG_REPORTS.md`.
- Any accessibility scenario suitable for repeatable regression can be added to future Cypress automation scope.

