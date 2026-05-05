# ParaBank Test Summary Report

**Version:** 1.0  
**Last Updated:** May 2026  
**Document Type:** Test Summary Report  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing  
**Prepared By:** Mariana  
**Document Status:** Completed — Manual Cycle Executed  

---

## 1. Purpose

This document summarizes the results of the first manual functional testing cycle executed for the ParaBank QA Portfolio project.

The report consolidates the executed scope, test results, confirmed bugs, observations, evidence, and final testing conclusion.

This document is based on:

- `docs/TEST_PLAN.md`
- `docs/TEST_STRATEGY.md`
- `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- `docs/BUG_REPORTS.md`

---

## 2. Executive Summary

The first manual testing cycle was completed for the ParaBank Demo Banking Application.

A total of 15 functional test cases were executed across Authentication, Accounts, Transfers, Transactions, and Customer Profile modules.

The execution identified 3 confirmed bugs and 2 observations. The most critical issues were related to authentication and transfer validation.

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

## 5. Test Case Results

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

## 6. Confirmed Bugs

| Bug ID | Related Test Case | Module | Severity | Priority | Summary |
|---|---|---|---|---|---|
| BUG-001 | TC-002 | Authentication | Critical | P0 | User is authenticated with incorrect password |
| BUG-002 | TC-008 | Transfers | Critical | P0 | Negative transfer amount is accepted and processed |
| BUG-003 | TC-009 | Transfers | Critical | P0 | Transfer with insufficient balance is accepted and creates negative balance |

---

## 7. Observations

| Observation ID | Related Test Case | Module | Summary |
|---|---|---|---|
| OBS-001 | TC-006 | Accounts / Security | Restricted page access shows generic internal error message |
| OBS-002 | TC-014 | Customer Profile | Invalid phone format is accepted during contact information update |

---

## 8. Evidence Summary

Screenshot evidence was captured for the executed test cases and stored in:

- `evidences/screenshots/`

Examples of captured evidence:

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

## 9. Key Findings

The following key findings were identified during the manual execution cycle:

- The application authenticated a user even when an incorrect password was provided.
- The transfer flow accepted and processed a negative amount.
- The transfer flow allowed a transaction greater than the source account balance and created a negative balance.
- Direct access to a restricted page was blocked, but the system displayed a generic internal error message.
- The contact information form accepted a non-phone text value in the phone field.

---

## 10. Risk Assessment

| Area | Risk Level | Reason |
|---|---|---|
| Authentication | High | Incorrect password authentication affects access control reliability |
| Transfers | High | Invalid transfer amounts and insufficient balance scenarios affect simulated financial logic |
| Accounts | Medium | Restricted access was blocked, but the error message was unclear |
| Transactions | Low | Transaction history and search behaved as expected during execution |
| Customer Profile | Medium | Invalid phone format was accepted, affecting data quality |

---

## 11. Exit Criteria Evaluation

| Exit Criteria | Status |
|---|---|
| All 15 test cases executed at least once | Met |
| 100% of High priority test cases executed | Met |
| Evidence captured for executed test cases | Met |
| Failed tests documented as bugs | Met |
| Observations documented where behavior required clarification | Met |
| Test documentation updated after execution | Met |
| Test summary report created | Met |

---

## 12. Conclusion

The first manual functional testing cycle for the ParaBank QA Portfolio project was completed.

The application passed most positive and standard functional scenarios. However, critical issues were found in authentication and transfer validation.

The most important concerns are:

- Authentication reliability.
- Validation of negative transfer amounts.
- Validation of insufficient balance scenarios.

The project is suitable for demonstrating manual QA skills, including test planning, test strategy, test case execution, evidence collection, bug reporting, and result analysis.

---

## 13. Recommendation

Before considering the tested scope stable, the following actions are recommended:

- Fix authentication validation so incorrect passwords are rejected.
- Reject negative transfer amounts before processing.
- Reject transfers when the source account balance is insufficient.
- Replace generic internal error messages with clearer user-facing messages.
- Consider adding phone format validation or documenting accepted phone input rules.
- Re-run failed and related test cases after fixes.
- Execute targeted regression testing around authentication, account access, transfers, and transaction history.

---

## 14. Future Improvements

Recommended next improvements for the project:

- Add a traceability matrix.
- Add exploratory testing notes.
- Add responsive testing checklist.
- Add accessibility checklist.
- Add API testing in a separate future phase if stable endpoints are included.
- Add UI automation with Playwright or Cypress after the manual cycle is fully documented.
- Add GitHub Actions only after automated tests exist.

---

## 15. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial summary report for the first manual functional testing cycle |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026
