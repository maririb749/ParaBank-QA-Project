# ParaBank Responsive Testing

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Responsive Smoke Test Checklist  
**Status:** Smoke Executed / Full Checklist Partially Executed  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This document defines responsive testing checks for the ParaBank QA Portfolio project.

The goal is to assess whether key public ParaBank screens remain usable across common desktop, tablet, and mobile viewport sizes.

This document does not claim full responsive coverage. It records a limited responsive smoke execution and identifies remaining areas for future testing.

The smoke execution focused on the public login page, visible navigation, and login error message behavior.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | 2026-05-11 |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | Chrome |
| Operating System | Windows |
| Device / Viewport Mode | Chrome DevTools responsive mode |
| Evidence Folder | `evidences/screenshots/responsive/` |
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

## Tested Viewports

| Viewport ID | Device Category | Width x Height | Status |
|---|---|---|---|
| RWD-Desktop | Desktop | 1366 x 768 | Executed |
| RWD-Tablet | Tablet | 768 x 1024 | Executed |
| RWD-Mobile | Mobile | 390 x 844 | Executed |

---

## Scope

This responsive smoke execution focused on the public login page, public navigation links, and login error message display.

The full responsive checklist remains available for future execution across the main ParaBank workflows already covered by the functional test suite:

- Login.
- Account overview.
- Open new account.
- Transfer funds.
- Find transactions.
- Account activity and transaction history.
- Update contact information.
- Validation and error message display.

---

## Responsive Smoke Execution

| Check ID | Area | Viewport | Status | Result / Notes | Evidence |
|---|---|---|---|---|---|
| RWD-001 | Login | Desktop - 1366x768 | Passed | Login page remains readable and usable on desktop viewport. No critical layout issue was observed. | `evidences/screenshots/responsive/RWD-001-login-desktop.png` |
| RWD-002 | Login | Tablet - 768x1024 | Observation | Login page remains usable on tablet viewport, but the layout keeps a fixed-width desktop structure and does not fully adapt to the available screen width. | `evidences/screenshots/responsive/RWD-002-login-tablet.png` |
| RWD-003 | Login | Mobile - 390x844 | Observation | Login page remains accessible on mobile viewport, but the layout keeps a fixed-width desktop structure and appears visually reduced instead of adapting to the screen width. | `evidences/screenshots/responsive/RWD-003-login-mobile.png` |
| RWD-004 | Validation | Mobile - 390x844 | Observation | Invalid login error message is displayed on mobile viewport, but the page keeps a scaled desktop layout instead of a mobile-friendly layout. | `evidences/screenshots/responsive/RWD-004-login-error-mobile.png` |
| RWD-005 | Navigation | Mobile - 390x844 | Observation | Public navigation links remain visible on mobile viewport, but the layout is scaled down and not optimized for touch-friendly mobile navigation. | `evidences/screenshots/responsive/RWD-005-public-navigation-mobile.png` |

---

## Full Responsive Checklist Coverage

| Check ID | Area | Check | Desktop | Tablet | Mobile | Notes |
|---|---|---|---|---|---|---|
| RWD-001 | Login | Login form is visible and usable | Passed | Observation | Observation | Covered in responsive smoke execution. |
| RWD-002 | Navigation | Main navigation remains accessible | Not Executed | Not Executed | Observation | Public navigation was checked on mobile only. Full navigation coverage remains future scope. |
| RWD-003 | Accounts | Account overview content is readable | Not Executed | Not Executed | Not Executed | Authenticated account pages remain future scope. |
| RWD-004 | Accounts | Account details and balances are readable | Not Executed | Not Executed | Not Executed | Authenticated account pages remain future scope. |
| RWD-005 | Open Account | Account type and funding account controls are usable | Not Executed | Not Executed | Not Executed | Authenticated open account flow remains future scope. |
| RWD-006 | Transfers | Amount input and account dropdowns are usable | Not Executed | Not Executed | Not Executed | Authenticated transfer flow remains future scope. |
| RWD-007 | Transfers | Transfer confirmation is readable | Not Executed | Not Executed | Not Executed | Authenticated transfer confirmation remains future scope. |
| RWD-008 | Transactions | Transaction table or result list is readable | Not Executed | Not Executed | Not Executed | Authenticated transaction pages remain future scope. |
| RWD-009 | Transactions | Find Transactions form is usable | Not Executed | Not Executed | Not Executed | Authenticated transaction search remains future scope. |
| RWD-010 | Profile | Update contact information form is usable | Not Executed | Not Executed | Not Executed | Authenticated profile form remains future scope. |
| RWD-011 | Validation | Error messages remain visible and associated with the relevant action | Not Executed | Not Executed | Observation | Login error message was checked on mobile only. |
| RWD-012 | Layout | No critical content is hidden, overlapping, or cut off | Passed | Observation | Observation | No critical blocking issue found, but tablet and mobile keep a fixed desktop-style layout. |

---

## Results Summary

| Metric | Total |
|---|---:|
| Responsive Smoke Checks Executed | 5 |
| Viewports Tested | 3 |
| Passed | 1 |
| Failed | 0 |
| Observations | 4 |
| Blocked | 0 |
| Full Checklist Items Fully Covered | 2 |
| Full Checklist Items Partially Covered | 2 |
| Full Checklist Items Not Executed | 8 |

---

## Observations

| ID | Related Check | Viewport | Summary | Impact | Evidence |
|---|---|---|---|---|---|
| RWD-OBS-001 | RWD-002 | Tablet - 768x1024 | Login page keeps a fixed-width desktop structure on tablet viewport. | The page remains usable, but does not fully adapt to the available screen width. | `evidences/screenshots/responsive/RWD-002-login-tablet.png` |
| RWD-OBS-002 | RWD-003 | Mobile - 390x844 | Login page appears visually reduced on mobile instead of adapting to the screen width. | Mobile users may need zoom or careful navigation to interact comfortably. | `evidences/screenshots/responsive/RWD-003-login-mobile.png` |
| RWD-OBS-003 | RWD-004 | Mobile - 390x844 | Login error message is displayed, but inside a scaled desktop layout. | Error feedback remains visible, but readability and mobile usability are limited. | `evidences/screenshots/responsive/RWD-004-login-error-mobile.png` |
| RWD-OBS-004 | RWD-005 | Mobile - 390x844 | Public navigation links remain visible, but are not optimized for touch-friendly mobile navigation. | Navigation remains available, but the experience is not mobile-friendly. | `evidences/screenshots/responsive/RWD-005-public-navigation-mobile.png` |

---

## Bugs

| Bug ID | Related Check | Viewport | Summary | Severity | Priority | Evidence |
|---|---|---|---|---|---|---|
| N/A | N/A | N/A | No confirmed responsive bug was opened during this smoke execution. | N/A | N/A | N/A |

---

## Evidence

- `evidences/screenshots/responsive/RWD-001-login-desktop.png`
- `evidences/screenshots/responsive/RWD-002-login-tablet.png`
- `evidences/screenshots/responsive/RWD-003-login-mobile.png`
- `evidences/screenshots/responsive/RWD-004-login-error-mobile.png`
- `evidences/screenshots/responsive/RWD-005-public-navigation-mobile.png`

---

## Notes

- Responsive testing should document the viewport used for each check.
- This execution was limited to a responsive smoke pass on the public login page, visible navigation, and login error message.
- Any confirmed responsive defect should be documented in `docs/BUG_REPORTS.md`.
- Any stable responsive smoke scenario can be considered for future Cypress automation.
