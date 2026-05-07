# ParaBank QA Traceability Matrix

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing + Cypress UI Automation + Exploratory Testing  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This traceability matrix connects requirements, manual test cases, Cypress automation, defects, observations, and evidence.

It helps reviewers quickly verify that each tested requirement has documented coverage, execution status, supporting evidence, and automation mapping where applicable.

---

## Traceability Summary

| Metric | Total |
|---|---:|
| Requirement Groups Covered | 6 |
| Manual Test Cases | 15 |
| Cypress Scenarios Mapped | 15 |
| Passing Manual Test Cases | 10 |
| Failed Manual Test Cases | 3 |
| Passed with Observation | 2 |
| Passing Cypress Tests | 12 |
| Pending Known-Bug Cypress Tests | 3 |
| Manual Bugs | 3 |
| Manual Observations | 2 |
| Exploratory Observations | 4 |
| Total Observations | 6 |
| Exploratory Sessions Executed | 2 |
| Exploratory Checks Executed | 18 |
| Existing Bugs Confirmed by Exploratory Testing | 2 |
| Existing Bugs Not Reproduced by Exploratory Testing | 1 |
| Linked Exploratory Impact Evidence Items | 2 |

---

## Requirement Coverage Matrix

| Requirement ID | Requirement Area | Manual Test Case | Manual Status | Cypress Spec | Cypress Status | Finding | Evidence | Notes |
|---|---|---|---|---|---|---|---|---|
| AUTH-001 | Valid customer authentication | TC-001 - Login with valid credentials | Passed | `authentication.cy.js` | Passed | N/A | `evidences/screenshots/TC-001_login_valid_credentials_pass.png` | Covers the primary login path that unlocks all authenticated banking workflows. |
| AUTH-002 | Invalid password rejection | TC-002 - Login with incorrect password | Failed | `authentication.cy.js` | Pending / Skipped Known Bug | BUG-001 | `evidences/screenshots/TC-002_login_incorrect_password_fail.png` | Validates authentication trust and protects against unauthorized account access. |
| AUTH-003 | Empty login field validation | TC-003 - Login with empty required fields | Passed | `authentication.cy.js` | Passed | N/A | `evidences/screenshots/TC-003_login_empty_required_fields_pass.png` | Checks basic form validation and unauthenticated state handling. |
| ACC-001 | New account creation | TC-004 - Open new account with valid data | Passed | `accounts.cy.js` | Passed | N/A | `evidences/screenshots/TC-004_open_new_account_confirmation_pass.png` | Covers a core customer banking flow and setup dependency for transfers. |
| ACC-002 | Account balance and details visibility | TC-005 - View account balance | Passed | `accounts.cy.js` | Passed | N/A | `evidences/screenshots/TC-005_view_account_balance_pass.png` | Verifies that customers can review account identity, balance, and available funds. |
| SEC-001 | Restricted page access control | TC-006 - Access account opening without authentication | Passed with Observation | `accounts.cy.js` | Passed | OBS-001 | `evidences/screenshots/TC-006_access_open_account_without_authentication_pass.png` | Covers direct URL access risk for restricted account functionality. |
| TRF-001 | Valid transfer between own accounts | TC-007 - Transfer money between own accounts | Passed | `transfers.cy.js` | Passed | N/A | `evidences/screenshots/TC-007_transfer_funds_before_balances.png`, `evidences/screenshots/TC-007_transfer_funds_confirmation.png`, `evidences/screenshots/TC-007_transfer_funds_after_balances.png` | Validates money movement, confirmation messaging, and balance consistency. |
| TRF-002 | Negative transfer amount rejection | TC-008 - Transfer with negative amount | Failed | `transfers.cy.js` | Pending / Skipped Known Bug | BUG-002 | `evidences/screenshots/TC-008_negative_transfer_before_balances.png`, `evidences/screenshots/TC-008_negative_transfer_validation.png`, `evidences/screenshots/TC-008_negative_transfer_after_balances.png` | Targets invalid financial input that can reverse expected debit and credit behavior. |
| TRF-003 | Insufficient balance transfer rejection | TC-009 - Transfer with insufficient balance | Failed | `transfers.cy.js` | Pending / Skipped Known Bug | BUG-003 | `evidences/screenshots/TC-009_insufficient_balance_validation.png`, `evidences/screenshots/TC-009_insufficient_balance_after_balances.png` | Covers balance protection and prevents transactions that exceed available funds. |
| TXN-001 | Transaction history visibility | TC-010 - View transaction history | Passed | `transactions.cy.js` | Passed | N/A | `evidences/screenshots/TC-010_view_transaction_history_pass.png` | Verifies that account activity is visible and reviewable after banking operations. |
| TXN-002 | Transaction search by amount | TC-011 - Search transactions by amount | Passed | `transactions.cy.js` | Passed | N/A | `evidences/screenshots/TC-011_search_transactions_by_amount_pass.png` | Checks whether users can locate specific transactions efficiently. |
| TXN-003 | New account transaction history state | TC-012 - Newly created account displays a valid transaction history state | Passed | `transactions.cy.js` | Passed | N/A | `evidences/screenshots/TC-012_new_account_created.png`, `evidences/screenshots/TC-012_empty_transaction_history_new_account_pass.png` | Covers edge behavior for newly created accounts with limited activity. |
| PRF-001 | Valid customer contact update | TC-013 - Update contact information with valid data | Passed | `customer-profile.cy.js` | Passed | N/A | `evidences/screenshots/TC-013_update_contact_info_valid_data_pass.png` | Validates that customers can maintain personal contact information. |
| PRF-002 | Invalid phone format handling | TC-014 - Update contact information with invalid phone format | Passed with Observation | `customer-profile.cy.js` | Passed | OBS-002 | `evidences/screenshots/TC-014_invalid_phone_format_observation.png` | Assesses data quality risk when non-phone text is entered in the phone field. |
| PRF-003 | Required profile field validation | TC-015 - Update contact information with empty required fields | Passed | `customer-profile.cy.js` | Passed | N/A | `evidences/screenshots/TC-015_update_contact_info_empty_required_fields_pass.png` | Verifies required identity fields are protected from empty submissions. |

---

## Finding Mapping

| Finding ID | Type | Related Test Case | Requirement ID | Module | Severity / Status | Cypress Mapping |
|---|---|---|---|---|---|---|
| BUG-001 | Confirmed Bug | TC-002 | AUTH-002 | Authentication | Critical / P0 / Needs Retest | `authentication.cy.js` - pending known bug |
| BUG-002 | Confirmed Bug | TC-008 | TRF-002 | Transfers | Critical / P0 | `transfers.cy.js` - pending known bug |
| BUG-003 | Confirmed Bug | TC-009 | TRF-003 | Transfers | Critical / P0 | `transfers.cy.js` - pending known bug |
| OBS-001 | Observation | TC-006 | SEC-001 | Accounts / Security | Observation | `accounts.cy.js` - passed |
| OBS-002 | Observation | TC-014 | PRF-002 | Customer Profile | Observation | `customer-profile.cy.js` - passed |

---

## Automation Coverage by Spec

| Cypress Spec | Related Manual Test Cases | Active Passing Tests | Pending Known-Bug Tests | Coverage Notes |
|---|---|---:|---:|---|
| `authentication.cy.js` | TC-001, TC-002, TC-003 | 2 | 1 | TC-002 is linked to BUG-001. BUG-001 was not reproduced during EXP-001, but remains pending/skipped until consistent retest results support a documentation and automation strategy update. |
| `accounts.cy.js` | TC-004, TC-005, TC-006 | 3 | 0 | Includes unauthenticated direct URL access check |
| `transfers.cy.js` | TC-007, TC-008, TC-009 | 1 | 2 | TC-008 and TC-009 are linked to confirmed transfer validation bugs |
| `transactions.cy.js` | TC-010, TC-011, TC-012 | 3 | 0 | Covers transaction history, amount search, and new account history state |
| `customer-profile.cy.js` | TC-013, TC-014, TC-015 | 3 | 0 | Includes valid update, invalid phone observation, and required field validation |

---

## Risk Coverage

| Risk Area | Related Requirements | Covered By | Current Result |
|---|---|---|---|
| Authentication reliability | AUTH-001, AUTH-002, AUTH-003 | TC-001 to TC-003, `authentication.cy.js`, EXP-001 | BUG-001 was found during the manual cycle, was not reproduced during EXP-001, and remains Needs Retest |
| Restricted access control | SEC-001 | TC-006, `accounts.cy.js` | Access blocked, but generic internal error observed |
| Account creation and balance visibility | ACC-001, ACC-002 | TC-004, TC-005, `accounts.cy.js` | Passed |
| Transfer validation and balance consistency | TRF-001, TRF-002, TRF-003 | TC-007 to TC-009, `transfers.cy.js` | Valid transfer passed; two critical validation bugs found |
| Transaction visibility and search | TXN-001, TXN-002, TXN-003 | TC-010 to TC-012, `transactions.cy.js` | Passed |
| Customer profile data quality | PRF-001, PRF-002, PRF-003 | TC-013 to TC-015, `customer-profile.cy.js` | Core update and required fields passed; phone format observation documented |

---


## Exploratory Testing Coverage Matrix

| Exploratory Session | Area | Related Test Cases | Related Bugs / Observations | Result | Evidence |
|---|---|---|---|---|---|
| EXP-001 | Authentication and Session Access | TC-001, TC-002, TC-003, TC-006 | BUG-001, OBS-001, OBS-003 | Completed. BUG-001 was not reproduced. OBS-001 was confirmed. OBS-003 was recorded as a high-risk observation. | `evidences/screenshots/exploratory/EXP-001_valid_login.png`, `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png`, `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png`, `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png` |
| EXP-003 | Transfers | TC-007, TC-008, TC-009, TC-010 | BUG-002, BUG-003, OBS-004, OBS-005, OBS-006, linked impact evidence OBS-007 and OBS-008 | Completed. BUG-002 and BUG-003 were confirmed. Three transfer-related exploratory observations were recorded. OBS-007 and OBS-008 are treated as linked impact evidence for BUG-003 and related transfer validation issues. | `evidences/screenshots/exploratory/EXP-003_valid_transfer.png`, `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png`, `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`, `evidences/screenshots/exploratory/EXP-003_final_balances.png` |

---

## Exploratory Findings Mapping

| Finding ID | Type | Related Session | Related Area | Status / Risk | Evidence |
|---|---|---|---|---|---|
| BUG-001 | Existing Bug | EXP-001 | Authentication | Not reproduced during exploratory retest; remains Needs Retest | `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png` |
| BUG-002 | Existing Bug | EXP-003 | Transfers | Confirmed during exploratory testing | `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png` |
| BUG-003 | Existing Bug | EXP-003 | Transfers | Confirmed during exploratory testing | `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`, `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png` |
| OBS-003 | Exploratory Observation | EXP-001 | Authentication / Session | Recorded during exploratory testing; High / P1 | `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png` |
| OBS-004 | Exploratory Observation | EXP-003 | Transfers / Validation | Recorded during exploratory testing; Medium / P2 | `evidences/screenshots/exploratory/EXP-003_empty_amount.png`, `evidences/screenshots/exploratory/EXP-003_non_numeric_amount.png` |
| OBS-005 | Exploratory Observation | EXP-003 | Transfers / Validation | Recorded during exploratory testing; Medium / P2 | `evidences/screenshots/exploratory/EXP-003_zero_amount.png` |
| OBS-006 | Exploratory Observation | EXP-003 | Transfers / Validation | Recorded during exploratory testing; Medium / P2 | `evidences/screenshots/exploratory/EXP-003_same_account_transfer.png` |
| OBS-007 | Linked Impact Evidence | EXP-003 | Transactions / Transfer History | Supports BUG-003 and transfer validation impact; not counted as a standalone observation | `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png` |
| OBS-008 | Linked Impact Evidence | EXP-003 | Accounts / Balance Consistency | Supports BUG-003 and transfer validation impact; not counted as a standalone observation | `evidences/screenshots/exploratory/EXP-003_final_balances.png` |

---

## Related Documentation

- Test Plan: `docs/TEST_PLAN.md`
- Test Strategy: `docs/TEST_STRATEGY.md`
- Manual Test Cases: `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- Bug Reports: `docs/BUG_REPORTS.md`
- Test Summary Report: `docs/TEST_SUMMARY_REPORT.md`
- Cypress Automation: `Automation/`
- Evidence Screenshots: `evidences/screenshots/`
- Exploratory Testing: `docs/EXPLORATORY_TESTING.md`

---

## Maintenance Notes

Update this matrix when:

- A manual test case status changes.
- A new bug or observation is documented.
- A Cypress test is added, removed, skipped, or re-enabled.
- Evidence files are renamed or replaced.
- New requirements, exploratory sessions, accessibility checks, responsive checks, API tests, or CI results are added.
