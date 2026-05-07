# ParaBank Exploratory Testing

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Exploratory Testing Plan and Execution Report  
**Status:** First Exploratory Cycle Completed — Additional Sessions Planned  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This document defines exploratory testing charters and execution notes for the ParaBank QA Portfolio project.

Exploratory testing is used to investigate risks, unexpected behavior, usability concerns, and workflow gaps that may not be fully covered by scripted test cases.

This document includes both planned exploratory charters and executed exploratory sessions. EXP-001 and EXP-003 were executed as part of the first exploratory testing cycle. EXP-002, EXP-004, and EXP-005 remain planned for future cycles.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | May 2026 |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | Chrome |
| Operating System | Windows 11 |
| Session Duration | EXP-001: approximately 30 minutes; EXP-003: approximately 45 minutes |
| Evidence Folder | `evidences/screenshots/exploratory/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`, `docs/BUG_REPORTS.md`, `docs/TRACEABILITY_MATRIX.md` |

---

## Session Status Legend

| Status | Meaning |
|---|---|
| Planned | Session has not been executed yet |
| In Progress | Session is currently being executed |
| Completed | Session was executed and notes were recorded |
| Blocked | Session could not be completed due to environment or data issues |

---

## Exploratory Charters

| Charter ID | Area | Mission | Risk Focus | Status |
|---|---|---|---|---|
| EXP-001 | Authentication and Session Access | Explore login, logout, direct URLs, browser back behavior, and unauthenticated access paths | Unauthorized access, confusing session state, poor error handling | Completed |
| EXP-002 | Accounts and Balances | Explore account creation, account overview, account details, balance display, and navigation between accounts | Incorrect balance visibility, broken account navigation, unclear account state | Planned |
| EXP-003 | Transfers | Explore valid and invalid transfer behavior, amount input variations, source and destination selection, and balance changes | Invalid financial operations, incorrect balance changes, unclear validation | Completed |
| EXP-004 | Transactions | Explore account activity, search by amount, transaction result states, and navigation from transaction results | Missing transactions, unrelated results, unclear empty states | Planned |
| EXP-005 | Customer Profile | Explore contact information editing, required fields, invalid values, persistence, and validation clarity | Data quality issues, incomplete validation, unexpected profile changes | Planned |

---

## Initial Execution Scope

The first exploratory cycle focused on:

- EXP-001 - Authentication and Session Access
- EXP-003 - Transfers

These areas were prioritized because they represent the highest business and security risk in the current project scope. Authentication controls access to protected banking workflows, while transfer behavior directly affects account balances and simulated financial operations.

These areas also relate to previously documented findings from the manual testing cycle:

- BUG-001 - User is authenticated with incorrect password
- BUG-002 - Negative transfer amount is accepted and processed
- BUG-003 - Transfer with insufficient balance is accepted and creates negative balance
- OBS-001 - Restricted page access shows generic internal error message

EXP-001 and EXP-003 were executed as part of the first exploratory cycle.

---

## Executed Sessions

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

Existing bug retest result and observations from this exploratory session:

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

---

## EXP-003 - Transfers

**Status:** Completed  
**Execution Date:** May 2026  
**Tester:** Mariana  
**Browser:** Chrome  
**Operating System:** Windows 11  
**Session Duration:** Approximately 45 minutes  

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
- Same source and destination account
- Balance consistency after invalid or questionable transfer attempts
- Transaction history after invalid or questionable transfer attempts

### Related Scripted Test Cases

- TC-007 - Transfer money between own accounts
- TC-008 - Transfer with negative amount
- TC-009 - Transfer with insufficient balance
- TC-010 - View transaction history

### Related Bugs

- BUG-002 - Negative transfer amount is accepted and processed
- BUG-003 - Transfer with insufficient balance is accepted and creates negative balance

### Test Data

- **User account:** `pbqa_exp003_01`
- **Customer name:** Mariana QA
- **Password:** Valid local test password, not stored in versioned documentation
- **Accounts used during execution:** `22668`, `23556`, `14232`, `14343`
- **Initial balance evidence:** `evidences/screenshots/exploratory/EXP-003_initial_balances.png`
- **Execution note:** Multiple ParaBank test accounts were used during the exploratory session because additional account creation and transfer attempts generated new account states during execution.

### Evidence Setup

- `evidences/screenshots/exploratory/EXP-003_initial_balances.png`

### Results

| Check ID | Check | Result | Notes | Evidence |
|---|---|---|---|---|
| EXP-003-01 | Valid transfer between own accounts | Passed | A valid transfer of `$10.00` was completed successfully from account `22668` to account `23556`. | `evidences/screenshots/exploratory/EXP-003_valid_transfer.png` |
| EXP-003-02 | Negative transfer amount | Existing Bug Confirmed | BUG-002 confirmed: negative transfer amount `-$10.00` was accepted and processed instead of being rejected. | `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png` |
| EXP-003-03 | Insufficient balance transfer | Existing Bug Confirmed | BUG-003 confirmed: transfer with insufficient balance `$999999.00` was accepted instead of being rejected. | `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png` |
| EXP-003-04 | Empty amount | Observation | Empty transfer amount was not processed, but the system displayed a generic internal error message instead of a clear validation message. | `evidences/screenshots/exploratory/EXP-003_empty_amount.png` |
| EXP-003-05 | Non-numeric amount | Observation | Non-numeric transfer amount was not processed, but the system displayed a generic internal error message instead of a clear validation message. | `evidences/screenshots/exploratory/EXP-003_non_numeric_amount.png` |
| EXP-003-06 | Zero amount | Observation | Zero amount transfer `$0.00` was accepted and processed. No monetary value was moved, but the system should ideally reject zero-value transfers or provide a clear validation message. | `evidences/screenshots/exploratory/EXP-003_zero_amount.png` |
| EXP-003-07 | Decimal amount | Passed | Decimal transfer amount `$0.01` was accepted and processed successfully as a valid monetary value. | `evidences/screenshots/exploratory/EXP-003_decimal_amount.png` |
| EXP-003-08 | Very large amount | Existing Bug Confirmed | BUG-003 confirmed with a very large amount: transfer `$9999999999.00` was accepted instead of being rejected for insufficient balance. | `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png` |
| EXP-003-09 | Same source and destination account | Observation | Transfer to the same account was accepted and processed. The system should ideally prevent transfers where source and destination accounts are the same. | `evidences/screenshots/exploratory/EXP-003_same_account_transfer.png` |
| EXP-003-10 | Transaction history after invalid attempts | Observation | Transaction history displayed records for invalid or questionable transfer attempts, including zero-value, very large, and same-account transfers. | `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png` |
| EXP-003-11 | Final balance consistency | Observation | Final balances were affected by invalid or questionable transfer attempts processed during the exploratory session, creating extreme negative and positive account balances while the total balance remained `$515.00`. | `evidences/screenshots/exploratory/EXP-003_final_balances.png` |

### Observations

| Observation ID | Summary | Related Check | Evidence |
|---|---|---|---|
| OBS-004 | Invalid transfer amount inputs displayed generic internal error messages instead of clear validation messages. This was observed for empty and non-numeric amount inputs. | EXP-003-04, EXP-003-05 | `evidences/screenshots/exploratory/EXP-003_empty_amount.png`, `evidences/screenshots/exploratory/EXP-003_non_numeric_amount.png` |
| OBS-005 | Zero-value transfer was accepted and processed. The system should ideally reject zero-value transfers or provide a clear validation message. | EXP-003-06 | `evidences/screenshots/exploratory/EXP-003_zero_amount.png` |
| OBS-006 | Transfer to the same source and destination account was accepted and processed. | EXP-003-09 | `evidences/screenshots/exploratory/EXP-003_same_account_transfer.png` |
| OBS-007 | Transaction history displayed records for invalid or questionable transfer attempts. | EXP-003-10 | `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png` |
| OBS-008 | Final account balances showed extreme negative and positive values after invalid or questionable transfer attempts were processed. | EXP-003-11 | `evidences/screenshots/exploratory/EXP-003_final_balances.png` |

### Bugs Found

No new confirmed bugs were found during EXP-003.

Existing bugs confirmed during this exploratory session:

| Bug ID | Result | Evidence |
|---|---|---|
| BUG-002 | Confirmed. Negative transfer amount was accepted and processed instead of being rejected. | `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png` |
| BUG-003 | Confirmed. Transfers with insufficient balance and very large amounts were accepted instead of being rejected. | `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`, `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png` |

### Evidence

- `evidences/screenshots/exploratory/EXP-003_initial_balances.png`
- `evidences/screenshots/exploratory/EXP-003_valid_transfer.png`
- `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png`
- `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`
- `evidences/screenshots/exploratory/EXP-003_empty_amount.png`
- `evidences/screenshots/exploratory/EXP-003_non_numeric_amount.png`
- `evidences/screenshots/exploratory/EXP-003_zero_amount.png`
- `evidences/screenshots/exploratory/EXP-003_decimal_amount.png`
- `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png`
- `evidences/screenshots/exploratory/EXP-003_same_account_transfer.png`
- `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png`
- `evidences/screenshots/exploratory/EXP-003_final_balances.png`

### Follow-Up Ideas

- Update `docs/BUG_REPORTS.md` with exploratory retest notes for BUG-002 and BUG-003.
- Add OBS-004, OBS-005, OBS-006, OBS-007 and OBS-008 to the project observations if they should be formally tracked.
- Consider adding future scripted test cases for empty amount, non-numeric amount, zero amount, same-account transfer and transaction history after invalid attempts.
- Consider automating high-value exploratory findings in Cypress after documentation is aligned.

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
| Sessions Executed | 2 |
| Sessions Blocked | 0 |
| New Bugs Found | 0 |
| Existing Bugs Confirmed | 2 |
| Existing Bugs Not Reproduced | 1 |
| Observations Confirmed | 1 |
| New Observations Recorded | 6 |

### Summary Notes

- **Executed sessions:** EXP-001, EXP-003
- **Existing bugs confirmed:** BUG-002, BUG-003
- **Existing bug not reproduced:** BUG-001
- **Observation confirmed:** OBS-001
- **New observations recorded:** OBS-003, OBS-004, OBS-005, OBS-006, OBS-007, OBS-008
- **Remaining planned sessions:** EXP-002, EXP-004, EXP-005

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