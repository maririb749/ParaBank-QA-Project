# ParaBank Test Summary Report

**Version:** 1.3  
**Last Updated:** October 2026  
**Document Type:** Test Summary Report  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing + Cypress UI Automation + Exploratory Testing + Accessibility Testing + Responsive Smoke Testing  
**Prepared By:** Mariana  
**Document Status:** Completed — Manual, Cypress Automation, and First Exploratory Cycles Executed  

---

## 1. Purpose

This document summarizes the results of the first manual functional testing cycle, the Cypress UI automation cycle, the first exploratory testing cycle, the accessibility smoke test, and the responsive smoke test executed for the ParaBank QA Portfolio project.

The report consolidates the executed manual scope, Cypress automation coverage, exploratory testing scope, accessibility smoke testing, responsive smoke testing, test results, confirmed bugs, observations, evidence, and final testing conclusion.

This document is based on:

- `docs/TEST_PLAN.md`
- `docs/TEST_STRATEGY.md`
- `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- `docs/BUG_REPORTS.md`
- `docs/EXPLORATORY_TESTING.md`
- `docs/ACCESSIBILITY_CHECKLIST.md`
- `docs/RESPONSIVE_TESTING.md`
- `docs/TRACEABILITY_MATRIX.md`

---

## 2. Executive Summary

The first manual testing cycle, the Cypress UI automation cycle, the first exploratory testing cycle, the accessibility smoke test, and the responsive smoke test were completed for the ParaBank Demo Banking Application.

A total of 15 functional test cases were executed across Authentication, Accounts, Transfers, Transactions, and Customer Profile modules.

The manual execution identified 3 confirmed bugs and 2 observations. The most critical issues were related to authentication and transfer validation.

After the manual cycle, Cypress UI automation was implemented for the 15 documented functional scenarios. The automation suite contains 5 spec files, with 12 passing tests and 3 pending tests linked to known confirmed bugs. The automation layer also includes custom Cypress commands and lightweight Page Objects for authentication-related flows.

Exploratory testing was then executed for two high-risk areas: authentication/session access and transfers. It confirmed two existing transfer bugs, did not reproduce BUG-001 during EXP-001, confirmed one existing observation, recorded four standalone exploratory observations, and captured two linked impact evidence items for transfer validation risk.

Accessibility smoke testing was executed on the public login area and visible navigation elements in May 2026. In October 2026, the accessibility checklist was mapped to WCAG 2.1 and re-tested with Lighthouse and manual contrast verification. The re-test executed 10 of 17 checks (2 passed, 6 failed, 2 observations) and documented 5 accessibility defects (A11Y-BUG-001 to A11Y-BUG-005). Accessibility defects are tracked separately from the functional bug metrics below. Responsive smoke testing was executed across desktop, tablet, and mobile viewports for the public login page, login error message, and public navigation.

---

## 3. Scope Executed

The executed scope includes the manual functional cycle, Cypress UI automation mapping for the same 15 scenarios, the first exploratory testing cycle, accessibility smoke testing, and responsive smoke testing.

| Module | Test Cases Executed | Result Summary |
|---|---:|---|
| Authentication | 3 | 2 Passed, 1 Failed |
| Accounts | 3 | 2 Passed, 1 Passed with Observation |
| Transfers | 3 | 1 Passed, 2 Failed |
| Transactions | 3 | 3 Passed |
| Customer Profile | 3 | 2 Passed, 1 Passed with Observation |

| Exploratory Session | Area | Status | Result Summary |
|---|---|---|---|
| EXP-001 | Authentication and Session Access | Completed | BUG-001 was not reproduced. OBS-001 was confirmed. OBS-003 was recorded. |
| EXP-003 | Transfers | Completed | BUG-002 and BUG-003 were confirmed. OBS-004 to OBS-006 were recorded. OBS-007 and OBS-008 were retained as linked impact evidence. |

| Accessibility Area | Checks Executed | Result Summary |
|---|---:|---|
| Public login and visible navigation (WCAG 2.1 re-test, October 2026) | 10 | 2 Passed, 6 Failed, 2 Observations; 5 accessibility defects |

| Responsive Smoke Area | Viewports Tested | Result Summary |
|---|---:|---|
| Public login, login error message, and public navigation | 3 | 1 Passed, 4 Observations, 0 Failed |

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
| Manual Bugs | 3 |
| Manual Observations | 2 |
| Exploratory Observations | 4 |
| Total Observations | 6 |
| Existing Bugs Confirmed by Exploratory Testing | 2 |
| Existing Bugs Not Reproduced by Exploratory Testing | 1 |
| Linked Exploratory Impact Evidence Items | 2 |
| Accessibility Checks Executed | 10 |
| Accessibility Checks Passed | 2 |
| Accessibility Checks Failed | 6 |
| Accessibility Observations | 2 |
| Accessibility Defects (WCAG 2.1) | 5 |
| Lighthouse Accessibility Score (`index.htm`) | 43/100 |
| Responsive Smoke Checks Executed | 5 |
| Responsive Smoke Passed | 1 |
| Responsive Smoke Observations | 4 |

---

## 5. Cypress Automation Summary

After the manual execution cycle, a Cypress UI automation suite was implemented under:

- `Automation/`

The automated suite maps directly to the 15 documented manual test cases.

The automation structure includes custom Cypress commands and lightweight Page Objects for authentication-related flows:

- `Automation/cypress/support/commands.js`
- `Automation/cypress/pages/LoginPage.js`
- `Automation/cypress/pages/RegisterPage.js`

| Metric | Total |
|---|---:|
| Cypress Spec Files | 5 |
| Automated Test Cases Mapped | 15 |
| Passing Automated Tests | 12 |
| Pending Known Bug Tests | 3 |
| Failing Automated Tests | 0 |
| Latest Full Suite Duration | 01:21 |

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
| TC-002 | BUG-001 | Incorrect password authentication was reproduced during the manual cycle but was not reproduced during EXP-001. The behavior appears flaky or environment-dependent, so the scripted test remains pending/skipped until consistent reproduction is achieved. |
| TC-008 | BUG-002 | Negative transfer amount processing is a known confirmed bug |
| TC-009 | BUG-003 | Insufficient balance transfer processing is a known confirmed bug |

### Automation Quality Notes

- Cypress tests use dynamic QA users to reduce dependency on unstable public demo data.
- Custom commands keep repeated Cypress actions reusable across specs.
- Lightweight Page Objects centralize authentication-related page interactions and selectors.
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

## 7. Manual Bugs

| Bug ID | Related Test Case | Module | Severity | Priority | Summary |
|---|---|---|---|---|---|
| BUG-001 | TC-002 | Authentication | Critical | P0 | User is authenticated with incorrect password |
| BUG-002 | TC-008 | Transfers | Critical | P0 | Negative transfer amount is accepted and processed |
| BUG-003 | TC-009 | Transfers | Critical | P0 | Transfer with insufficient balance is accepted and creates negative balance |

BUG-001 was reproduced during the manual cycle and was not reproduced during EXP-001. The behavior appears flaky or environment-dependent, so it is treated as an intermittent authentication risk. The scripted Cypress scenario remains pending/skipped until consistent reproduction is achieved.

---

## 8. Observations

### Manual Observations

| Observation ID | Related Test Case | Module | Summary |
|---|---|---|---|
| OBS-001 | TC-006 | Accounts / Security | Restricted page access shows generic internal error message |
| OBS-002 | TC-014 | Customer Profile | Invalid phone format is accepted during contact information update |

### Exploratory Observations

| Observation ID | Related Session | Module | Risk / Priority | Summary |
|---|---|---|---|---|
| OBS-003 | EXP-001 | Authentication / Session | High / P1 | Browser Back after logout displayed cached account information, but protected actions required login. |
| OBS-004 | EXP-003 | Transfers / Validation | Medium / P2 | Empty and non-numeric transfer amounts displayed generic internal error messages. |
| OBS-005 | EXP-003 | Transfers / Validation | Medium / P2 | Zero-value transfer was accepted and processed. |
| OBS-006 | EXP-003 | Transfers / Validation | Medium / P2 | Same-account transfer was accepted and processed. |

### Linked Exploratory Impact Evidence

| Evidence ID | Related Session | Related Issue | Summary |
|---|---|---|---|
| OBS-007 | EXP-003 | BUG-003 / transfer validation impact | Transaction history displayed records for invalid or questionable transfer attempts. |
| OBS-008 | EXP-003 | BUG-003 / transfer validation impact | Final balances showed extreme negative and positive values after invalid or questionable transfer attempts. |

---

## 9. Evidence Summary

Screenshot evidence was captured for manual test execution, exploratory testing, accessibility smoke testing, and responsive smoke testing.

Evidence folders:

- `evidences/screenshots/`
- `evidences/screenshots/exploratory/`
- `evidences/screenshots/accessibility/`
- `evidences/screenshots/responsive/`

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

The following key findings were identified during the manual execution, Cypress automation, and exploratory testing cycles:

- The application authenticated a user even when an incorrect password was provided.
- The transfer flow accepted and processed a negative amount.
- The transfer flow allowed a transaction greater than the source account balance and created a negative balance.
- Direct access to a restricted page was blocked, but the system displayed a generic internal error message.
- The contact information form accepted a non-phone text value in the phone field.
- BUG-001 was not reproduced during exploratory retest and is treated as an intermittent authentication risk.
- BUG-002 and BUG-003 were confirmed again during exploratory transfer testing.
- Browser Back after logout displayed cached authenticated account information, but protected actions required login.
- Additional transfer validation weaknesses were observed for empty, non-numeric, zero-value, and same-account transfers.
- Accessibility smoke testing found that the login focus indicator is present but visually subtle.
- The WCAG 2.1 re-test found that the login inputs have no programmatic labels, the login error message has insufficient contrast (3.99:1), the page language is not defined, secondary text has insufficient contrast, and the header image link to the admin page has no text alternative.
- Responsive smoke testing found that tablet and mobile viewports keep a reduced desktop-style layout instead of adapting fully to smaller screens.

Automation-related findings:

- Cypress automation successfully covered the 15 documented functional scenarios.
- 12 automated scenarios passed in the latest full suite run.
- 3 automated scenarios were intentionally kept pending because they are linked to confirmed known bugs.
- Dynamic test data improved automation stability in the public ParaBank demo environment.
- Custom commands and Page Objects improved automation readability and reduced duplicated selectors.


---

## 11. Risk Assessment

| Area | Risk Level | Reason |
|---|---|---|
| Authentication | High | Authentication is a high-risk module. BUG-001 is a Critical/P0 intermittent authentication risk that requires continued monitoring. |
| Transfers | High | Transfers are a high-risk module. BUG-002 and BUG-003 are Critical/P0 defects affecting financial validation and balance integrity. |
| Accounts | Medium | Restricted access was blocked, but the error message was unclear |
| Transactions | Low | Transaction history and search behaved as expected during execution |
| Customer Profile | Medium | Invalid phone format was accepted, affecting data quality |
| Accessibility | High | Login inputs have no programmatic labels (A11Y-BUG-001), which affects screen reader users on the entry point to the application. Contrast, page language, and image text alternative defects were also found |
| Responsive | Medium | Tablet and mobile layouts remain usable but are not fully optimized for smaller screens |

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
| Accessibility smoke test executed with evidence | Met |
| Accessibility checklist mapped to WCAG 2.1 and re-tested with evidence | Met |
| Responsive smoke test executed with evidence | Met |
| Cypress structure improved with custom commands and Page Objects | Met |

---

## 13. Conclusion

The first manual functional testing cycle, Cypress UI automation cycle, first exploratory testing cycle, accessibility smoke test, and responsive smoke test for the ParaBank QA Portfolio project were completed.

The application passed most positive and standard functional scenarios. However, critical issues were found in authentication and transfer validation.

The most important concerns are:

- Authentication reliability.
- Validation of negative transfer amounts.
- Validation of insufficient balance scenarios.

The project is suitable for demonstrating manual QA, exploratory testing, accessibility smoke testing, responsive smoke testing, and UI automation skills, including test planning, test strategy, test case execution, evidence collection, bug reporting, exploratory analysis, Cypress automation, regression mapping, Page Object organization, and result analysis.

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
- Fix the accessibility defects A11Y-BUG-001 to A11Y-BUG-005, starting with the login input labels, and re-run the affected accessibility checks.


---

## 15. Future Improvements

Recommended next improvements for the project:

- Expand accessibility coverage to the remaining checklist items and authenticated pages.
- Expand responsive testing beyond the executed smoke pass.
- Add API testing in a separate future phase if stable endpoints are included.
- Expand Cypress coverage with additional input validation, exploratory, accessibility and compatibility scenarios in future cycles.
- Improve CI reporting and artifact retention for Cypress execution results.

---


## Exploratory Testing Summary

### Overview

Exploratory testing was added to complement the scripted manual test cases and Cypress automation suite.

The first exploratory testing cycle focused on the highest-risk areas of the ParaBank project:

- **EXP-001 - Authentication and Session Access**
- **EXP-003 - Transfers**

These areas were selected because authentication controls access to protected banking workflows, while transfers directly affect simulated account balances and transaction records.

### Execution Summary

| Metric | Total |
|---|---:|
| Exploratory Sessions Planned | 5 |
| Exploratory Sessions Executed | 2 |
| Exploratory Sessions Remaining Planned | 3 |
| New Confirmed Bugs Found | 0 |
| Existing Bugs Confirmed | 2 |
| Existing Bugs Not Reproduced | 1 |
| Existing Observations Confirmed | 1 |
| New Exploratory Observations Recorded | 4 |
| Linked Exploratory Impact Evidence Items | 2 |

### Executed Sessions

| Session ID | Area | Status | Main Result |
|---|---|---|---|
| EXP-001 | Authentication and Session Access | Completed | BUG-001 was not reproduced. OBS-001 was confirmed. OBS-003 was recorded. |
| EXP-003 | Transfers | Completed | BUG-002 and BUG-003 were confirmed. OBS-004 to OBS-006 were recorded. OBS-007 and OBS-008 were retained as linked impact evidence. |

### Exploratory Findings

| Finding ID | Type | Related Session | Summary |
|---|---|---|---|
| BUG-001 | Intermittent Issue | EXP-001 | Incorrect password was rejected during exploratory retest. Since the issue was previously reproduced during the manual cycle, it is treated as flaky or environment-dependent. |
| BUG-002 | Existing Bug Confirmed | EXP-003 | Negative transfer amount was accepted and processed. |
| BUG-003 | Existing Bug Confirmed | EXP-003 | Insufficient balance and very large transfers were accepted and processed. |
| OBS-001 | Existing Observation Confirmed | EXP-001 | Direct unauthenticated access was blocked with a generic internal error message. |
| OBS-003 | New Observation | EXP-001 | Browser Back after logout displayed cached account information, but protected actions required login. Classified as High / P1 risk. |
| OBS-004 | New Observation | EXP-003 | Empty and non-numeric transfer amounts displayed generic internal error messages. Classified as Medium / P2 risk. |
| OBS-005 | New Observation | EXP-003 | Zero-value transfer was accepted and processed. Classified as Medium / P2 risk. |
| OBS-006 | New Observation | EXP-003 | Same-account transfer was accepted and processed. Classified as Medium / P2 risk. |
| OBS-007 | Linked Impact Evidence | EXP-003 | Transaction history displayed records for invalid or questionable transfer attempts. This supports BUG-003 and related transfer validation impact. |
| OBS-008 | Linked Impact Evidence | EXP-003 | Final balances showed extreme negative and positive values after invalid or questionable transfer attempts. This supports BUG-003 and related transfer validation impact. |

### Evidence

Exploratory evidence is stored in:

- `evidences/screenshots/exploratory/`

Key evidence examples:

- `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png`
- `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png`
- `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png`
- `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`
- `evidences/screenshots/exploratory/EXP-003_final_balances.png`

### Impact on Overall QA Assessment

The exploratory testing cycle strengthened the portfolio by showing investigation beyond scripted test cases.

Main conclusions:

- BUG-001 was not reproduced during exploratory retest, but it was previously reproduced in the manual cycle. It is treated as an intermittent authentication risk.
- Transfer validation remains high-risk because BUG-002 and BUG-003 were confirmed.
- Additional session, usability, and validation observations were identified. Transaction history and final balance screenshots support the impact analysis for transfer validation defects.
- The exploratory results provide candidates for future manual regression cases and Cypress automation coverage.

### Recommended Follow-Up

- Consider creating future scripted test cases for:
  - empty transfer amount
  - non-numeric transfer amount
  - zero-value transfer
  - same-account transfer
  - browser Back behavior after logout
  - transaction history after invalid transfer attempts
- Keep TC-002 pending/skipped in Cypress until BUG-001 has consistent retest results and the documentation/automation strategy is updated.
- Consider automating high-value exploratory findings in Cypress after the expected behavior is agreed.
  
---

## 16. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial summary report for the first manual functional testing cycle |
| 1.1 | May 2026 | Mariana | Updated with Cypress UI automation results and full suite execution summary |
| 1.2 | May 2026 | Mariana | Updated with exploratory testing scope, consistent metrics, BUG-001 retest clarification, and refined exploratory observation classification |
| 1.3 | October 2026 | Mariana | Added WCAG 2.1 accessibility re-test results and accessibility defects; fixed merged rows in the known-bug table |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** October 2026
