# ParaBank Exploratory Testing

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Exploratory Testing Plan and Execution Report  
**Status:** In Progress  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This document defines exploratory testing charters and execution notes for the ParaBank QA Portfolio project.

Exploratory testing is used to investigate risks, unexpected behavior, usability concerns, and workflow gaps that may not be fully covered by scripted test cases.

This document includes both planned exploratory charters and executed exploratory sessions. EXP-001 has been executed, while EXP-003 remains prioritized for the next exploratory execution. The remaining sessions are still planned.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | May 2026 |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | Chrome |
| Operating System | Windows 11 |
| Session Duration | EXP-001: approximately 30 minutes |
| Evidence Folder | `evidences/screenshots/exploratory/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`, `docs/BUG_REPORTS.md`, `docs/TRACEABILITY_MATRIX.md` |

---

## Session Status Legend

| Status | Meaning |
|---|---|
| Planned | Session has not been executed yet |
| Priority for Initial Execution | Session is planned as part of the first exploratory cycle |
| In Progress | Session is currently being executed |
| Completed | Session was executed and notes were recorded |
| Blocked | Session could not be completed due to environment or data issues |

---

## Exploratory Charters

| Charter ID | Area | Mission | Risk Focus | Status |
|---|---|---|---|---|
| EXP-001 | Authentication and Session Access | Explore login, logout, direct URLs, browser back behavior, and unauthenticated access paths | Unauthorized access, confusing session state, poor error handling | Completed |
| EXP-002 | Accounts and Balances | Explore account creation, account overview, account details, balance display, and navigation between accounts | Incorrect balance visibility, broken account navigation, unclear account state | Planned |
| EXP-003 | Transfers | Explore valid and invalid transfer behavior, amount input variations, source and destination selection, and balance changes | Invalid financial operations, incorrect balance changes, unclear validation | Priority for Initial Execution |
| EXP-004 | Transactions | Explore account activity, search by amount, transaction result states, and navigation from transaction results | Missing transactions, unrelated results, unclear empty states | Planned |
| EXP-005 | Customer Profile | Explore contact information editing, required fields, invalid values, persistence, and validation clarity | Data quality issues, incomplete validation, unexpected profile changes | Planned |

---

## Initial Execution Scope

The first exploratory cycle focuses on:

- EXP-001 - Authentication and Session Access
- EXP-003 - Transfers

These areas were prioritized because they represent the highest business and security risk in the current project scope. Authentication controls access to protected banking workflows, while transfer behavior directly affects account balances and simulated financial operations.

These areas also relate to previously documented findings from the manual testing cycle:

- BUG-001 - User is authenticated with incorrect password
- BUG-002 - Negative transfer amount is accepted and processed
- BUG-003 - Transfer with insufficient balance is accepted and creates negative balance
- OBS-001 - Restricted page access shows generic internal error message

EXP-001 has been executed as part of the first exploratory cycle. EXP-003 remains prioritized for the next exploratory execution.

---

# Executed Sessions

---

## EXP-001 - Authentication and Session Access

**Status:** Completed  
**Execution Date:** May 2026  
**Tester:** Mariana  
**Browser:** Chrome  
**Operating System:** Windows 11  
**Session Duration:** Approximately 30 minutes  

### Charter

Explore login, logout, direct URLs, browser back behavior, and unauthenticated access paths to identify authentication, session, and access-control issues.

### Scope

- Login with valid credentials
- Login with incorrect password
- Empty login fields
- Logout behavior
- Browser Back behavior after logout
- Direct URL access without authentication
- Authenticated navigation consistency

### Related Scripted Test Cases

- TC-001 - Login with valid credentials
- TC-002 - Login with incorrect password
- TC-003 - Login with empty required fields
- TC-006 - Access account opening without authentication

### Related Bugs / Observations

- BUG-001 - User is authenticated with incorrect password
- OBS-001 - Restricted page access shows generic internal error message

### Test Data

- **User account:** `pbqa_exp001_01`
- **Customer name:** Mariana QA
- **Password:** Valid local test password, not stored in versioned documentation
- **Execution note:** The account was created for exploratory authentication and session checks.

### Checks Performed

- Valid login with a registered QA user.
- Login attempt with incorrect password.
- Login attempt with empty username and password.
- Logout after successful authentication.
- Browser Back behavior after logout.
- Direct URL access to a protected page without authentication.
- Navigation between authenticated pages after login.

### Results

| Check ID | Check | Result | Notes | Evidence |
|---|---|---|---|---|
| EXP-001-01 | Login with valid credentials | Passed | Valid QA user logged in successfully and authenticated account services were displayed. | `evidences/screenshots/exploratory/EXP-001_valid_login.png` |
| EXP-001-02 | Login with incorrect password | Passed | Incorrect password was rejected and the user remained unauthenticated. Existing BUG-001 was not reproduced during this exploratory session. | `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png` |
| EXP-001-03 | Login with empty username/password | Passed | Empty login fields were rejected and the user remained unauthenticated. | `evidences/screenshots/exploratory/EXP-001_empty_login_fields.png` |
| EXP-001-04 | Logout after valid login | Passed | Logout ended the authenticated session and returned the user to the public login page. | `evidences/screenshots/exploratory/EXP-001_logout_success.png` |
| EXP-001-05 | Browser Back after logout | Observation | After logout, the browser Back button displayed the cached Accounts Overview page with account balance and Account Services visible. However, attempting to access a protected action requested login, indicating the active session was not restored. | `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png` |
| EXP-001-06 | Direct URL access without authentication | Observation Confirmed | OBS-001 was confirmed. Direct unauthenticated access to Open New Account was blocked, but the system displayed a generic internal error message instead of a clear authentication-required message. | `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png` |
| EXP-001-07 | Navigation between authenticated pages | Passed | Authenticated navigation remained consistent across protected banking pages and the session stayed active. | `evidences/screenshots/exploratory/EXP-001_session_navigation.png` |

### Observations

| Observation ID | Summary | Related Check | Evidence |
|---|---|---|---|
| OBS-001 | Direct unauthenticated access to `openaccount.htm` was blocked, but the system displayed a generic internal error message. | EXP-001-06 | `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png` |
| OBS-003 | Browser Back after logout displayed cached authenticated account information, including account balance and Account Services. Protected actions requested login, indicating the active session was not restored. | EXP-001-05 | `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png` |

### Bugs Found

No new confirmed bugs were found during EXP-001.

| Finding | Result | Evidence |
|---|---|---|
| BUG-001 | Not reproduced during this exploratory session. Incorrect password was rejected as expected. | `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png` |
| OBS-001 | Confirmed. Direct unauthenticated access was blocked with a generic internal error message. | `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png` |
| OBS-003 | New observation recorded. Browser Back after logout displayed cached account information, but protected actions required login. | `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png` |

### Evidence

- `evidences/screenshots/exploratory/EXP-001_valid_login.png`
- `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png`
- `evidences/screenshots/exploratory/EXP-001_empty_login_fields.png`
- `evidences/screenshots/exploratory/EXP-001_logout_success.png`
- `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png`
- `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png`
- `evidences/screenshots/exploratory/EXP-001_session_navigation.png`

### Follow-Up Ideas

- Update `docs/BUG_REPORTS.md` with a retest note for BUG-001, since the incorrect password issue was not reproduced during EXP-001.
- Add OBS-003 to the project observations if the cached account information after logout should be formally tracked.
- Consider adding a future security/usability test case for browser Back behavior after logout.
- Continue the first exploratory cycle with EXP-003 - Transfers.

---

# Pending Sessions

---

## EXP-003 - Transfers

**Status:** Priority for Initial Execution  
**Execution Date:** Pending  
**Tester:** Mariana  
**Browser:** Pending  
**Operating System:** Pending  
**Session Duration:** Pending  

### Charter

Explore valid and invalid transfer behavior, amount input variations, source and destination selection, balance changes, and transaction history after transfer attempts.

### Scope

- Valid transfer between own accounts
- Negative transfer amount
- Insufficient balance transfer
- Empty amount
- Non-numeric amount
- Zero amount
- Decimal amount
- Very large amount
- Same source and destination account, if available
- Balance consistency after invalid transfer attempts
- Transaction history after transfer attempts

### Related Scripted Test Cases

- TC-007 - Transfer money between own accounts
- TC-008 - Transfer with negative amount
- TC-009 - Transfer with insufficient balance
- TC-010 - View transaction history

### Related Bugs

- BUG-002 - Negative transfer amount is accepted and processed
- BUG-003 - Transfer with insufficient balance is accepted and creates negative balance

### Execution Status

EXP-003 has not been executed yet. It remains prioritized for the next exploratory testing session.

---

## Other Planned Sessions

| Charter ID | Area | Status |
|---|---|---|
| EXP-002 | Accounts and Balances | Planned |
| EXP-004 | Transactions | Planned |
| EXP-005 | Customer Profile | Planned |

---

## Execution Summary

| Metric | Total |
|---|---:|
| Sessions Planned | 5 |
| Sessions Executed | 1 |
| Sessions Blocked | 0 |
| New Bugs Found | 0 |
| Existing Bugs Not Reproduced | 1 |
| Observations Confirmed | 1 |
| New Observations Recorded | 1 |

### Summary Notes

- **Existing bug not reproduced:** BUG-001
- **Observation confirmed:** OBS-001
- **New observation recorded:** OBS-003 - Browser Back after logout displayed cached authenticated account data, but protected actions required login.
- **Next prioritized session:** EXP-003 - Transfers

---

## Maintenance Notes

Update this document when:

- A planned exploratory session is executed.
- A new observation is recorded.
- A new confirmed bug is found.
- A previously documented bug is not reproduced during retest.
- Evidence files are added, renamed, or replaced.
- A new scripted test case is created from exploratory findings.

Any confirmed defect should be documented in `docs/BUG_REPORTS.md`. Any new scripted regression candidate should be added to the test backlog or future coverage notes.