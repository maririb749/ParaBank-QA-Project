# ParaBank Bug Reports

**Version:** 1.0  
**Last Updated:** May 2026  
**Document Type:** Bug Reports  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing  
**Prepared By:** Mariana  
**Document Status:** Draft — Ready for Test Execution  

---

## 1. Purpose

This document is used to record confirmed bugs and relevant observations found during the manual testing phase of the ParaBank QA Portfolio project.

The goal is to document issues clearly, consistently, and professionally, including reproduction steps, actual result, expected result, severity, priority, environment, and evidence.

This document supports the following project artifacts:

- `docs/TEST_PLAN.md`
- `docs/TEST_STRATEGY.md`
- `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`

---

## 2. Current Bug Status

No confirmed bugs have been identified yet.

This document will be updated during test execution if defects, inconsistencies, or relevant observations are found.

---

## 3. Bug Reporting Guidelines

A bug should be documented when the actual behavior differs from the expected behavior defined in the test case or from reasonable application behavior.

Before creating a bug report:

- Reproduce the issue at least once.
- Confirm the test data used.
- Confirm the test environment.
- Capture evidence.
- Check whether the issue is a real bug, a test data issue, an environment issue, or a test case expectation that needs to be updated.

If the behavior is unclear, document it as an observation until it can be confirmed.

---

## 4. Severity Levels

Severity describes the impact of the issue on the application or user flow.

| Severity | Definition | Example |
|---|---|---|
| Critical | Core functionality is blocked, restricted access fails, or simulated financial data becomes inconsistent | Unauthenticated user accesses a restricted account page |
| High | Major functionality fails with significant user impact | Transfer confirmation appears but balances do not update |
| Medium | Feature partially fails, validation is unclear, or user flow is affected but not blocked | Required field error message is missing |
| Low | Minor usability, visual, wording, or cosmetic issue | Label is unclear or layout is slightly misaligned |

---

## 5. Priority Levels

Priority describes how urgently the issue should be addressed.

| Priority | Definition | Example |
|---|---|---|
| P0 | Must be addressed immediately because it blocks a critical flow or creates high risk | Authentication bypass |
| P1 | Should be addressed before final reporting or release decision | Incorrect account balance after transfer |
| P2 | Should be addressed in a normal improvement cycle | Search result message is unclear |
| P3 | Can be addressed when time allows | Minor visual inconsistency |

---

## 6. Bug Status Legend

| Status | Meaning |
|---|---|
| New | Bug has been identified and documented |
| Open | Bug is confirmed and still unresolved |
| In Review | Bug requires clarification or additional investigation |
| Retest | Bug is ready to be tested again after a fix or clarification |
| Closed | Bug is resolved, accepted, or no longer reproducible |
| Not a Bug | Behavior is expected after review |
| Observation | Behavior is notable but not confirmed as a defect |

---

## 7. Bug Report Template

Use the following structure for each confirmed bug.

---

## BUG-XXX — Short bug title

**Related Test Case:** TC-XXX  
**Module:** Module name  
**Severity:** Critical / High / Medium / Low  
**Priority:** P0 / P1 / P2 / P3  
**Status:** New / Open / In Review / Retest / Closed / Not a Bug / Observation  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Briefly describe the issue and the user impact.

### Pre-conditions

- Pre-condition 1
- Pre-condition 2
- Pre-condition 3

### Test Data

- **Username:** `example_user`
- **Password:** `example_password`
- **Account:** `example_account`
- **Amount:** `$00.00`

### Steps to Reproduce

1. Step one.
2. Step two.
3. Step three.
4. Step four.

### Expected Result

Describe what should happen.

### Actual Result

Describe what actually happened.

### Evidence

- Screenshot: `evidences/screenshots/BUG-XXX_short_description.png`
- Video: `evidences/videos/BUG-XXX_short_description.mp4`

### Impact

Explain how this issue affects the user, business flow, or test execution.

### Notes

Add any additional context, investigation notes, browser console information, or uncertainty.

---

# Confirmed Bugs

## BUG-001 — User is authenticated with incorrect password

**Related Test Case:** TC-002  
**Module:** Authentication  
**Severity:** Critical  
**Priority:** P0  
**Status:** New  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome Incognito Mode, ParaBank Demo Web Application  

### Summary

The system authenticates a registered user even when an incorrect password is provided. This allows access to the authenticated account area without valid credentials.

### Pre-conditions

- The user is not logged in.
- Browser is opened in incognito mode.
- The ParaBank login page is displayed.
- A valid registered username exists.

### Test Data

- **Username:** Valid registered username
- **Password:** Incorrect password

### Steps to Reproduce

1. Open Chrome in incognito mode.
2. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
3. Enter a valid registered username.
4. Enter an incorrect password.
5. Click the **Log In** button.

### Expected Result

- The user should not be authenticated.
- The system should display an authentication error message.
- The authenticated account services area should not be displayed.
- The `Accounts Overview` page should not be displayed.
- The `Log Out` option should not be visible.

### Actual Result

- The user was authenticated even with an incorrect password.
- The authenticated account services area was displayed.
- The `Accounts Overview` page was displayed.
- The welcome message was visible.
- The `Log Out` option was visible.
- No authentication error message was displayed.

### Evidence

- Screenshot: `evidences/screenshots/TC-002_login_incorrect_password_fail.png`

### Impact

This issue affects authentication reliability. If a user can access the system with an incorrect password, restricted account information may be exposed and the login validation flow cannot be trusted.

### Notes

The issue was reproduced in Chrome incognito mode, reducing the likelihood that the result was caused by an existing authenticated browser session.

---

# Observations

Observations are used when behavior is notable but not yet confirmed as a defect.

---

## OBS-001 — No confirmed observations yet

**Related Test Case:** N/A  
**Module:** N/A  
**Status:** Observation  
**Reported By:** Mariana  
**Reported Date:** May 2026  

### Summary

No observations have been documented yet.

### Notes

This section will be updated during test execution if the application behavior requires clarification.

---

# Example Bug Reports

The examples below are included only to demonstrate the expected documentation style. They should be replaced, removed, or moved to a separate examples section after real execution.

---

## BUG-EXAMPLE-001 — Login error message is not displayed when username and password are empty

**Related Test Case:** TC-003  
**Module:** Authentication  
**Severity:** Medium  
**Priority:** P2  
**Status:** Example  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

When the user attempts to log in with both username and password fields empty, the system should display a clear validation or authentication error message. If no message is displayed, the user may not understand why the login attempt failed.

### Pre-conditions

- The user is not logged in.
- The browser is on the ParaBank home page.
- Username and password fields are visible.

### Test Data

- **Username:** Empty
- **Password:** Empty

### Steps to Reproduce

1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click the **Log In** button.

### Expected Result

- The user is not authenticated.
- The system displays a clear validation or authentication error message.
- The authenticated area is not displayed.
- The `Accounts Overview` page is not displayed.

### Actual Result

Example only. Actual result must be completed during real execution.

### Evidence

- Screenshot: `evidences/screenshots/BUG-EXAMPLE-001_empty_login_error.png`
- Video: `evidences/videos/BUG-EXAMPLE-001_empty_login_error.mp4`

### Impact

The user may not understand why the login attempt failed, which affects usability and validation clarity.

### Notes

This is an example bug report. It should only be kept if the issue is reproduced during real execution.

---

## BUG-EXAMPLE-002 — Transfer with negative amount is accepted by the system

**Related Test Case:** TC-008  
**Module:** Transfers  
**Severity:** Critical  
**Priority:** P0  
**Status:** Example  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system should reject negative transfer amounts. If a negative amount is accepted, the transfer logic may allow invalid simulated financial transactions.

### Pre-conditions

- The user is logged in.
- The user has at least two active accounts.
- The current balances for source and destination accounts are recorded before execution.

### Test Data

- **Source Account:** Active customer account
- **Destination Account:** Another active customer account
- **Amount:** `-50.00`

### Steps to Reproduce

1. Log in with a valid customer.
2. Navigate to **Transfer Funds**.
3. Enter `-50.00` in the amount field.
4. Select a source account.
5. Select a destination account.
6. Click the **Transfer** button.

### Expected Result

- The transfer is not completed.
- A validation error message is displayed.
- Source account balance remains unchanged.
- Destination account balance remains unchanged.
- No transaction is created for the rejected transfer.

### Actual Result

Example only. Actual result must be completed during real execution.

### Evidence

- Screenshot: `evidences/screenshots/BUG-EXAMPLE-002_negative_transfer.png`
- Video: `evidences/videos/BUG-EXAMPLE-002_negative_transfer.mp4`

### Impact

Invalid transfer processing may cause inconsistent balances and unreliable transaction behavior.

### Notes

This is an example bug report. It should only be kept if the issue is reproduced during real execution.

---

## BUG-EXAMPLE-003 — Unauthenticated user can access the Open New Account page

**Related Test Case:** TC-006  
**Module:** Accounts / Security  
**Severity:** Critical  
**Priority:** P0  
**Status:** Example  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Restricted account functionality should not be accessible without authentication. If an unauthenticated user can access the Open New Account page directly, access control is not working as expected.

### Pre-conditions

- The user is not logged in.
- Browser cookies and session data are cleared.

### Test Data

- **Direct URL:** `https://parabank.parasoft.com/parabank/openaccount.htm`

### Steps to Reproduce

1. Open a new browser session.
2. Ensure no user is logged in.
3. Navigate directly to `https://parabank.parasoft.com/parabank/openaccount.htm`.

### Expected Result

- The unauthenticated user cannot access the account opening form.
- The system redirects the user to the login page or displays an access restriction message.
- No account creation controls are available.
- No account is created.

### Actual Result

Example only. Actual result must be completed during real execution.

### Evidence

- Screenshot: `evidences/screenshots/BUG-EXAMPLE-003_unauthorized_open_account.png`
- Video: `evidences/videos/BUG-EXAMPLE-003_unauthorized_open_account.mp4`

### Impact

Restricted functionality may be exposed to unauthenticated users, which affects access control and application trust.

### Notes

This is an example bug report. It should only be kept if the issue is reproduced during real execution.

---

# Evidence Naming Convention

Recommended file naming pattern:

- `BUG-001_short_description.png`
- `BUG-001_short_description.mp4`
- `OBS-001_short_description.png`

Recommended folders:

- `evidences/screenshots/`
- `evidences/videos/`

Examples:

- `evidences/screenshots/BUG-001_empty_login_error.png`
- `evidences/videos/BUG-001_empty_login_error.mp4`
- `evidences/screenshots/OBS-001_profile_phone_validation_behavior.png`

---

# Bug Review Checklist

Before marking a bug as confirmed, verify:

- [ ] The issue is reproducible.
- [ ] The related test case is identified.
- [ ] The expected result is clear.
- [ ] The actual result is documented.
- [ ] Severity is assigned.
- [ ] Priority is assigned.
- [ ] Environment is documented.
- [ ] Evidence is attached or referenced.
- [ ] The issue is not caused by incorrect test data.
- [ ] The issue is not caused by an outdated test case expectation.

---

# Retest Checklist

When retesting a bug:

- [ ] Re-run the original steps to reproduce.
- [ ] Use the same or equivalent test data.
- [ ] Confirm whether the actual result now matches the expected result.
- [ ] Capture new evidence.
- [ ] Update the bug status.
- [ ] Run related regression tests if needed.
- [ ] Update affected test cases if the expected behavior changed.

---

# Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial bug reports document with template, severity, priority, examples, and evidence guidelines |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026