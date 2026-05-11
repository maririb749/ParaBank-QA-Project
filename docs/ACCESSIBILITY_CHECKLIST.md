# ParaBank Accessibility Checklist

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Accessibility Smoke Test Checklist  
**Status:** Smoke Executed / Full Checklist Partially Executed  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This checklist defines accessibility checks for the ParaBank QA Portfolio project.

The goal is to assess basic accessibility risks around keyboard navigation, focus visibility, form usability, error messages, labels, contrast, and link purpose.

This document does not claim full WCAG compliance. It records a basic accessibility smoke execution focused on high-value user flows.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | 2026-05-11 |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | Chrome |
| Operating System | Windows |
| Assistive Tools | Keyboard navigation, Chrome DevTools, visual inspection |
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

This accessibility smoke execution focused on the public login area and visible navigation elements.

The full accessibility checklist remains available for future execution across the main ParaBank workflows already covered by the functional test suite:

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
| A11Y-001 | Keyboard Navigation | User can navigate the login form using only the keyboard | Passed | Login fields and submit button were reachable and the login form could be submitted using keyboard navigation. | `evidences/screenshots/accessibility/A11Y-001-login-keyboard-navigation.png` |
| A11Y-002 | Keyboard Navigation | User can reach major authenticated navigation links using only the keyboard | Not Executed | Full authenticated navigation check remains future scope. | N/A |
| A11Y-003 | Focus Visibility | Interactive elements show a visible focus indicator | Observation | Focus indicator is present on the Log In button during keyboard navigation, but it is subtle and could be stronger for better visibility. | `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png` |
| A11Y-004 | Forms | Login inputs have understandable labels or accessible names | Passed | Username and Password fields have visible and understandable labels. | `evidences/screenshots/accessibility/A11Y-004-login-form-labels.png` |
| A11Y-005 | Forms | Transfer form fields and dropdowns have understandable labels or context | Not Executed | Transfer form accessibility check remains future scope. | N/A |
| A11Y-006 | Forms | Update contact information fields have understandable labels or context | Not Executed | Profile form accessibility check remains future scope. | N/A |
| A11Y-007 | Error Messages | Login validation errors are visible and understandable | Passed | Invalid login feedback was visible and understandable. | `evidences/screenshots/accessibility/A11Y-007-login-error-message.png` |
| A11Y-008 | Error Messages | Form validation messages identify the affected field or action | Not Executed | Full form validation accessibility check remains future scope. | N/A |
| A11Y-009 | Visual Contrast | Primary text is readable against the page background | Not Executed | Contrast check remains future scope. | N/A |
| A11Y-010 | Visual Contrast | Buttons and links have enough contrast to be distinguishable | Not Executed | Contrast check remains future scope. | N/A |
| A11Y-011 | Structure | Headings and page sections help users understand the current page | Not Executed | Heading structure check remains future scope. | N/A |
| A11Y-012 | Tables | Account and transaction tables are understandable and readable | Not Executed | Table accessibility check remains future scope. | N/A |
| A11Y-013 | Zoom / Reflow | Key pages remain usable when browser zoom is increased | Not Executed | Zoom and reflow check remains future scope. | N/A |
| A11Y-014 | Link Purpose | Navigation links clearly communicate their destination or purpose | Passed | Main visible links use understandable text and communicate their purpose. | `evidences/screenshots/accessibility/A11Y-014-link-purpose.png` |
| A11Y-015 | Error Recovery | Users can recover from validation errors without losing required context | Not Executed | Error recovery check remains future scope. | N/A |

---

## Results Summary

| Metric | Total |
|---|---:|
| Checks Planned | 15 |
| Checks Executed | 5 |
| Passed | 4 |
| Failed | 0 |
| Observations | 1 |
| Not Applicable | 0 |
| Not Executed / Future Scope | 10 |

---

## Observations

| ID | Related Check | Summary | Impact | Evidence |
|---|---|---|---|---|
| A11Y-OBS-001 | A11Y-003 | Focus indicator is present on the Log In button, but it is subtle and could be stronger. | May make keyboard navigation less clear for some users. | `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png` |

---

## Bugs

| Bug ID | Related Check | Summary | Severity | Priority | Evidence |
|---|---|---|---|---|---|
| N/A | N/A | No confirmed accessibility bug was opened during this smoke execution. | N/A | N/A | N/A |

---

## Evidence

- `evidences/screenshots/accessibility/A11Y-001-login-keyboard-navigation.png`
- `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png`
- `evidences/screenshots/accessibility/A11Y-004-login-form-labels.png`
- `evidences/screenshots/accessibility/A11Y-007-login-error-message.png`
- `evidences/screenshots/accessibility/A11Y-014-link-purpose.png`

---

## Notes

- This checklist is not a full WCAG compliance audit.
- This execution was limited to a smoke accessibility pass on the public login page and visible navigation elements.
- Any confirmed accessibility defect should be documented in `docs/BUG_REPORTS.md`.
- Any accessibility scenario suitable for repeatable regression can be added to future Cypress automation scope.
