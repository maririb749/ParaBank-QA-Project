# ParaBank Test Summary Report

**Version:** 1.1  
**Last Updated:** May 2026  
**Document Type:** Test Summary Report  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing + Cypress UI Automation  
**Prepared By:** Mariana  
**Document Status:** Completed — Manual and Cypress Automation Cycles Executed  

---

## 1. Purpose

This document summarizes the results of the first manual functional testing cycle and the Cypress UI automation cycle executed for the ParaBank QA Portfolio project.

The report consolidates the executed manual scope, Cypress automation coverage, test results, confirmed bugs, observations, evidence, and final testing conclusion.

This document is based on:

- `docs/TEST_PLAN.md`
- `docs/TEST_STRATEGY.md`
- `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- `docs/BUG_REPORTS.md`

---

## 2. Executive Summary

The first manual testing cycle and the Cypress UI automation cycle were completed for the ParaBank Demo Banking Application.

A total of 15 functional test cases were executed across Authentication, Accounts, Transfers, Transactions, and Customer Profile modules.

The manual execution identified 3 confirmed bugs and 2 observations. The most critical issues were related to authentication and transfer validation.

After the manual cycle, Cypress UI automation was implemented for the 15 documented functional scenarios. The automation suite contains 5 spec files, with 12 passing tests and 3 pending tests linked to known confirmed bugs.

---

## 3. Scope Executed

| Module | Test Cases Executed | Result Summary |
|---|---:|---|
| Authentication | 3 | 2 Passed, 1 Failed |
| Accounts | 3 | 2 Passed, 1 Passed with Observation |
| Transfers | 3 | 1 Passed, 2 Failed |
| Transactions | 3 | 3 Passed |
| Customer Profile | 3 | 2 Passed, 1 Passed with Observation |

---

## 4. Execution Summary

| Metric | Total |
|---|---:|
| Total Test Cases | 15 |
| Executed | 15 |
| Passed | 10 |
| Failed | 3 |
| Passed with Observation | 2 |
| Blocked | 0 |
| Not Executed | 0 |
| Confirmed Bugs | 3 |
| Observations | 2 |

---

## 5. Cypress Automation Summary

After the manual execution cycle, a Cypress UI automation suite was implemented under:

- `Automation/`

The automated suite maps directly to the 15 documented manual test cases.

| Metric | Total |
|---|---:|
| Cypress Spec Files | 5 |
| Automated Test Cases Mapped | 15 |
| Passing Automated Tests | 12 |
| Pending Known Bug Tests | 3 |
| Failing Automated Tests | 0 |
| Latest Full Suite Duration | 01:36 |

### Cypress Spec Coverage

| Spec File | Related Test Cases | Result |
|---|---|---|
| `accounts.cy.js` | TC-004, TC-005, TC-006 | 3 Passed |
| `authentication.cy.js` | TC-001, TC-002, TC-003 | 2 Passed, 1 Pending |
| `customer-profile.cy.js` | TC-013, TC-014, TC-015 | 3 Passed |
| `transactions.cy.js` | TC-010, TC-011, TC-012 | 3 Passed |
| `transfers.cy.js` | TC-007, TC-008, TC-009 | 1 Passed, 2 Pending |

### Pending Automated Tests

The following automated tests are intentionally pending because the related behaviors are already documented as confirmed bugs from the manual cycle:

| Test Case | Related Bug | Reason |
|---|---|---|
| TC-002 | BUG-001 | Incorrect password authentication is a known confirmed bug |
| TC-008 | BUG-002 | Negative transfer amount processing is a known confirmed bug |
| TC-009 | BUG-003 | Insufficient balance transfer processing is a known confirmed bug |

### Automation Quality Notes

- Cypress tests use dynamic QA users to reduce dependency on unstable public demo data.
- Known bugs are represented in the automation suite but skipped/pending by default to keep the regression suite stable.
- Automated scenarios are linked to the documented manual test cases.
- The latest full Cypress run completed with 0 failing tests.

---

## 6. Test Case Results

| Test Case | Module | Title | Status | Related Finding |
|---|---|---|---|---|
| TC-001 | Authentication | Login with valid credentials | Passed | N/A |
| TC-002 | Authentication | Login with incorrect password | Failed | BUG-001 |
| TC-003 | Authentication | Login with empty required fields | Passed | N/A |
| TC-004 | Accounts | Open new account with valid data | Passed | N/A |
| TC-005 | Accounts | View account balance | Passed | N/A |
| TC-006 | Accounts / Security | Access account opening without authentication | Passed with Observation | OBS-001 |
| TC-007 | Transfers | Transfer money between own accounts | Passed | N/A |
| TC-008 | Transfers | Transfer with negative amount | Failed | BUG-002 |
| TC-009 | Transfers | Transfer with insufficient balance | Failed | BUG-003 |
| TC-010 | Transactions | View transaction history | Passed | N/A |
| TC-011 | Transactions | Search transactions by amount | Passed | N/A |
| TC-012 | Transactions | Empty transaction history for a newly created account | Passed | N/A |
| TC-013 | Customer Profile | Update contact information with valid data | Passed | N/A |
| TC-014 | Customer Profile | Update contact information with invalid phone format | Passed with Observation | OBS-002 |
| TC-015 | Customer Profile | Update contact information with empty required fields | Passed | N/A |

---

## 7. Confirmed Bugs

| Bug ID | Related Test Case | Module | Severity | Priority | Summary |
|---|---|---|---|---|---|
| BUG-001 | TC-002 | Authentication | Critical | P0 | User is authenticated with incorrect password |
| BUG-002 | TC-008 | Transfers | Critical | P0 | Negative transfer amount is accepted and processed |
| BUG-003 | TC-009 | Transfers | Critical | P0 | Transfer with insufficient balance is accepted and creates negative balance |

---

## 8. Observations

| Observation ID | Related Test Case | Module | Summary |
|---|---|---|---|
| OBS-001 | TC-006 | Accounts / Security | Restricted page access shows generic internal error message |
| OBS-002 | TC-014 | Customer Profile | Invalid phone format is accepted during contact information update |

---

## 9. Evidence Summary

Screenshot evidence was captured for the manual executed test cases and stored in:

- `evidences/screenshots/`


Cypress automation was executed through the terminal using the scripts defined in `Automation/package.json`. The latest full suite execution completed with:

- **15 automated test cases mapped**
- **12 passing**
- **3 pending known bugs**
- **0 failing**

Examples of captured manual evidence:

- `TC-001_login_valid_credentials_pass.png`
- `TC-002_login_incorrect_password_fail.png`
- `TC-004_open_new_account_confirmation_pass.png`
- `TC-007_transfer_funds_before_balances.png`
- `TC-007_transfer_funds_confirmation.png`
- `TC-007_transfer_funds_after_balances.png`
- `TC-008_negative_transfer_validation.png`
- `TC-009_insufficient_balance_validation.png`
- `TC-014_invalid_phone_format_observation.png`
- `TC-015_update_contact_info_empty_required_fields_pass.png`

---

## 10. Key Findings

The following key findings were identified during the manual execution and automation cycles:

- The application authenticated a user even when an incorrect password was provided.
- The transfer flow accepted and processed a negative amount.
- The transfer flow allowed a transaction greater than the source account balance and created a negative balance.
- Direct access to a restricted page was blocked, but the system displayed a generic internal error message.
- The contact information form accepted a non-phone text value in the phone field.

Automation-related findings:

- Cypress automation successfully covered the 15 documented functional scenarios.
- 12 automated scenarios passed in the latest full suite run.
- 3 automated scenarios were intentionally kept pending because they are linked to confirmed known bugs.
- Dynamic test data improved automation stability in the public ParaBank demo environment.


---

## 11. Risk Assessment

| Area | Risk Level | Reason |
|---|---|---|
| Authentication | High | Incorrect password authentication affects access control reliability |
| Transfers | High | Invalid transfer amounts and insufficient balance scenarios affect simulated financial logic |
| Accounts | Medium | Restricted access was blocked, but the error message was unclear |
| Transactions | Low | Transaction history and search behaved as expected during execution |
| Customer Profile | Medium | Invalid phone format was accepted, affecting data quality |

---

## 12. Exit Criteria Evaluation

| Exit Criteria | Status |
|---|---|
| All 15 test cases executed at least once | Met |
| 100% of High priority test cases executed | Met |
| Evidence captured for executed test cases | Met |
| Failed tests documented as bugs | Met |
| Observations documented where behavior required clarification | Met |
| Test documentation updated after execution | Met |
| Test summary report created | Met |
| Cypress automation suite implemented | Met |
| Cypress full suite executed successfully | Met |
| Cypress automated tests completed with 0 failures | Met |
| Known bugs represented as pending/skipped automation scenarios | Met |

---

## 13. Conclusion

The first manual functional testing cycle and the Cypress UI automation cycle for the ParaBank QA Portfolio project were completed.

The application passed most positive and standard functional scenarios. However, critical issues were found in authentication and transfer validation.

The most important concerns are:

- Authentication reliability.
- Validation of negative transfer amounts.
- Validation of insufficient balance scenarios.

The project is suitable for demonstrating manual QA and UI automation skills, including test planning, test strategy, test case execution, evidence collection, bug reporting, Cypress automation, regression mapping, and result analysis.

---

## 14. Recommendation

Before considering the tested scope stable, the following actions are recommended:

- Fix authentication validation so incorrect passwords are rejected.
- Reject negative transfer amounts before processing.
- Reject transfers when the source account balance is insufficient.
- Replace generic internal error messages with clearer user-facing messages.
- Consider adding phone format validation or documenting accepted phone input rules.
- Re-run failed and related test cases after fixes.
- Execute targeted regression testing around authentication, account access, transfers, and transaction history.
- Keep known-bug automated tests pending until the related application behavior is fixed.
- Re-enable TC-002, TC-008, and TC-009 automated tests after the related bugs are fixed.
- Run the Cypress full suite before future documentation or release milestones.


---

## 15. Future Improvements

Recommended next improvements for the project:

- Add a traceability matrix.
- Add exploratory testing notes.
- Add responsive testing checklist.
- Add accessibility checklist.
- Add API testing in a separate future phase if stable endpoints are included.
- Expand Cypress coverage with additional input validation, exploratory, accessibility and compatibility scenarios in future cycles.
- Add GitHub Actions to run the Cypress suite in CI.

---

## 16. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial summary report for the first manual functional testing cycle |
| 1.1 | May 2026 | Mariana | Updated with Cypress UI automation results and full suite execution summary |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026
