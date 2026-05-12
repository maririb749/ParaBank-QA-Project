# ParaBank QA Test Plan

**Version:** 1.3  
**Last Updated:** May 2026  
**Document Type:** Test Plan  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing + Cypress UI Automation + Exploratory Testing  
**Prepared By:** Mariana  
**Document Status:** Completed — Manual, Cypress Automation, and First Exploratory Cycles Executed  

---

## 1. Executive Summary

This test plan defines the manual testing, Cypress UI automation, and exploratory testing scope, objectives, environment, execution approach, risks, and deliverables for the ParaBank QA Portfolio project.

ParaBank is a demo online banking application used to simulate common banking workflows such as user authentication, account opening, account balance verification, fund transfers, transaction history, and customer contact information updates.

The first test cycle focused on manual functional testing through the web user interface. After the manual cycle, Cypress UI automation was implemented to provide repeatable regression coverage mapped to the same documented test cases. A first exploratory testing cycle was then completed for authentication/session access and transfers. The goal is to validate the most relevant user flows, document results clearly, capture evidence, automate stable regression scenarios, investigate high-risk behavior, and demonstrate structured QA thinking through well-written test artifacts.

---

## 2. Test Objectives

The objectives of this test plan are to:

- Validate core ParaBank web functionality across authentication, account management, transfers, transaction history, and customer profile modules.
- Verify that critical user flows behave as expected from the user interface perspective.
- Confirm that invalid inputs and unauthorized access scenarios are handled correctly.
- Validate account balance and transaction consistency after financial operations.
- Document test execution results with clear evidence.
- Identify, document, and classify defects or observations found during testing.
- Support future regression testing by maintaining clear and reusable test cases.
- Demonstrate a structured QA process suitable for a professional portfolio.

---

## 3. Scope

### 3.1 In Scope

The current completed scope covers 15 manual functional test cases across 5 modules. Cypress UI automation was also implemented and mapped to the same 15 scenarios. Exploratory testing was completed for authentication/session access and transfers.

| Module | Functionality | Coverage |
|---|---|---:|
| Authentication | Login, invalid login, required field validation | 3 test cases |
| Accounts | Open new account, view account balance, access control | 3 test cases |
| Transfers | Transfer funds, invalid amount, insufficient balance | 3 test cases |
| Transactions | View transaction history, search transactions, new account history state | 3 test cases |
| Customer Profile | Update contact information, invalid phone input, empty required fields | 3 test cases |

**Total Test Cases:** 15  
**Scenario Types:** Positive, Negative, Boundary, Edge Case, Access Control  

**Cypress Automation Coverage:** 15 automated scenarios mapped to the manual test cases  
**Latest Cypress Result:** 12 passing, 3 pending known bugs, 0 failing  
**Automation Location:** `Automation/`  
**Exploratory Sessions Completed:** EXP-001 - Authentication and Session Access; EXP-003 - Transfers  


---

### 3.2 Out of Scope

The following areas are not included in the current test cycle:

- Load testing
- Stress testing
- Endurance testing
- Security penetration testing
- Full accessibility compliance testing
- Expanded accessibility testing beyond the executed smoke pass
- Expanded responsive testing beyond the executed smoke pass
- Full localization testing
- Mobile native application testing
- API testing
- Database testing
- Third-party integrations outside the visible ParaBank demo application

Accessibility and responsive smoke tests were executed with evidence. Expanded accessibility and responsive coverage remain future scope. API testing remains future scope.

---

## 4. Test Types

The following test types are included in the current manual, Cypress automation, and exploratory testing scope:

| Test Type | Purpose | Related Test Cases |
|---|---|---|
| Functional Testing | Validate that the application features work as expected | TC-001 to TC-015 |
| Positive Testing | Validate successful flows with valid data | TC-001, TC-004, TC-005, TC-007, TC-010, TC-011, TC-013 |
| Negative Testing | Validate system behavior with invalid data or invalid access | TC-002, TC-003, TC-006, TC-008, TC-009, TC-014, TC-015 |
| Boundary / Edge Case Testing | Validate edge conditions and unusual but possible scenarios | TC-003, TC-008, TC-009, TC-012, TC-015 |
| Access Control Testing | Validate that unauthenticated users cannot access restricted pages | TC-006 |
| Regression Candidate Testing | Identify tests suitable for repeatable regression execution | High-priority and critical flow test cases |
| Cypress UI Automation | Automate stable UI regression scenarios mapped to manual test cases | TC-001 to TC-015, with known bugs pending/skipped |
| Exploratory Testing | Investigate high-risk workflows beyond scripted checks | EXP-001, EXP-003 |

---

## 5. Test Coverage Overview

Authentication:

- TC-001: Login with valid credentials
- TC-002: Login with incorrect password
- TC-003: Login with empty required fields

Accounts:

- TC-004: Open new account with valid data
- TC-005: View account balance
- TC-006: Access account opening without authentication

Transfers:

- TC-007: Transfer money between own accounts
- TC-008: Transfer with negative amount
- TC-009: Transfer with insufficient balance

Transactions:

- TC-010: View transaction history
- TC-011: Search transactions by amount
- TC-012: Empty transaction history for a newly created account

Customer Profile:

- TC-013: Update contact information with valid data
- TC-014: Update contact information with invalid phone format
- TC-015: Update contact information with empty required fields

---

## 6. Risk-Based Prioritization

The highest priority is given to user flows that affect authentication, restricted access, balances, money movement, and transaction history.

High-risk areas:

- Login and authentication
- Unauthorized access to restricted pages
- Account balance display
- Fund transfers
- Transaction history accuracy

These areas are prioritized because failures could allow unauthorized access, expose sensitive account data, move money incorrectly, corrupt account balances or transaction records, or break customer trust.

When time is limited, execution should focus first on:

1. Login and session access, because all authenticated workflows depend on it.
2. Restricted account access, because sensitive banking functions must not be exposed.
3. Transfers and balances, because incorrect money movement creates the highest business and data-integrity risk.
4. Transaction history, because users need reliable records of account activity.
5. Customer profile and lower-risk validation checks after core banking flows are covered.

---

## 7. Test Environment

### 7.1 Application Under Test

- **Application Name:** ParaBank
- **Application URL:** `https://parabank.parasoft.com/parabank/index.htm`
- **Application Type:** Demo Web Banking Application
- **Observed Interface:** Web UI
- **Testing Phase:** Manual UI Testing, Cypress UI Automation, and First Exploratory Cycle

---

### 7.2 Testing Environment

| Element | Specification |
|---|---|
| Operating System | Windows 11 |
| Primary Browser | Google Chrome |
| Secondary Browsers | Firefox, Microsoft Edge |
| Network | Stable internet connection |
| Test Data | Dedicated QA user and customer accounts |
| Evidence Format | Screenshots and optional screen recordings |

---

### 7.3 Tools Used in Current Phase

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Repository hosting and documentation |
| Markdown | Test documentation |
| Chrome DevTools | UI inspection, console checks, debugging support |
| Browser screenshots | Manual test evidence capture |
| Cypress | UI automation and regression execution |
| Node.js / npm | Cypress dependency management and test execution scripts |
| GitHub Actions | CI workflow for Cypress regression execution |

---

### 7.4 Future Tools

The following tools may be introduced in future phases:

| Tool | Purpose |
|---|---|
| Postman | API testing, if accessible endpoints are included |
| SQL tool | Database validation, only if database access becomes available |

---

## 8. Test Data Requirements

The current test cycle requires controlled and reusable manual test data, plus dynamic test data for Cypress automation.

### Required Test Data

- One dedicated registered customer.
- Valid username and password.
- At least one active account for account balance validation.
- At least two active accounts for transfer scenarios.
- Account with existing transactions for transaction history validation.
- Contact information data for customer profile update tests.
- Dynamic QA users for Cypress automation.

### Recommended Test User

- **Username:** Dedicated QA test user created during setup
- **Password:** Valid password created during setup

### Important Notes

- If the ParaBank demo environment is reset, the test user may need to be recreated.
- Account numbers created during execution should be recorded.
- Balances should be captured before and after transfer tests.
- Test data changes should be documented in the evidence or execution notes.

### Execution Data Note

ParaBank is a public demo environment. Test data may be reset, reused, invalidated, or changed between sessions. During execution, dedicated QA users may need to be recreated. Credentials used during execution must be stored locally and must not be committed to the repository.


---

## 9. Entry Criteria

Testing can begin when the following conditions are met:

- [x] Test plan is documented.
- [x] Functional test cases are documented.
- [x] Dedicated test user was created and validated.
- [x] At least two customer accounts were available for transfer scenarios.
- [x] Test environment was accessible.
- [x] Browser was available and working correctly.
- [x] Evidence folders were prepared.
- [x] Test execution status format was defined.

---

## 10. Exit Criteria

Testing is considered complete when:

- [x] All 15 test cases were executed at least once.
- [x] 100% of High priority test cases were executed.
- [x] Evidence was captured for each executed test case.
- [x] All failed tests have a documented bug report or observation.
- [x] Critical and High severity findings were documented for portfolio review.
- [x] Test documentation was updated according to actual application behavior.
- [x] Test results are summarized in a test execution report.
- [x] Cypress UI automation suite was implemented.
- [x] Cypress full suite was executed successfully.
- [x] Known confirmed bugs are represented as pending/skipped automated scenarios.

---

## 11. Test Execution Strategy

### 11.1 Execution Order

The test cases should be executed in the following order:

1. Authentication tests
2. Account management tests
3. Transfer tests
4. Transaction history tests
5. Customer profile tests

This order is recommended because some modules depend on successful login and available accounts.

---

### 11.2 Execution Flow

For each test case:

1. Review pre-conditions.
2. Prepare required test data.
3. Execute the test steps.
4. Compare actual result with expected result.
5. Record the execution status.
6. Capture evidence.
7. Document any defect, observation, or test case adjustment.
8. Update the test case if the expected result needs refinement.

---

### 11.3 Defect Handling

If a defect is found:

1. Reproduce the issue.
2. Confirm the expected behavior.
3. Capture evidence.
4. Document the environment.
5. Write clear reproduction steps.
6. Define severity and priority.
7. Add the defect to `docs/BUG_REPORTS.md`.
8. Retest after correction or after expected behavior is clarified.

If the issue is not a bug but a mismatch between the test case and the actual expected behavior, the test case should be updated and the reason should be documented.

### 11.4 Cypress Automation Strategy

Cypress UI automation was introduced after the manual execution cycle to support repeatable regression testing.

Automation approach:

- Automated tests are mapped to the documented manual test case IDs.
- Dynamic QA users are created during Cypress execution to reduce dependency on unstable public demo data.
- Stable scenarios are active in the regression suite.
- Confirmed known bugs are represented in the suite but kept pending/skipped by default.
- Cypress tests are organized by module under `Automation/cypress/e2e/`.

Latest full Cypress suite result:

- **Spec files:** 5
- **Automated scenarios mapped:** 15
- **Passing:** 12
- **Pending known bugs:** 3
- **Failing:** 0
- **Duration:** 01:36

Known pending automated scenarios:

| Test Case | Related Bug | Reason |
|---|---|---|
| TC-002 | BUG-001 | Incorrect password authentication was reproduced during the manual cycle but was not reproduced during EXP-001. The behavior appears flaky or environment-dependent and is treated as an intermittent authentication risk. |
| TC-008 | BUG-002 | Negative transfer amount processing is a known confirmed bug |
| TC-009 | BUG-003 | Insufficient balance transfer processing is a known confirmed bug |

---

### 11.5 Exploratory Testing Strategy

Exploratory testing was added after the scripted manual cycle to investigate high-risk workflows and behavior that may not be fully covered by fixed test cases.

Completed exploratory sessions:

- EXP-001 - Authentication and Session Access
- EXP-003 - Transfers

Exploratory testing focused on authentication/session behavior, direct URL access, browser Back behavior after logout, transfer amount variations, source/destination selection, transaction history impact, and final balance impact.

Detailed exploratory results are documented in `docs/EXPLORATORY_TESTING.md`.

---

## 12. Risks and Mitigation

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Public demo environment is unavailable | Medium | High | Pause execution and document the blocker |
| Public demo data is reset | Medium | High | Recreate test user and accounts |
| Test user cannot be reused | Medium | Medium | Create a new dedicated QA user |
| Account balances change during testing | Medium | Medium | Capture balances before and after financial operations |
| Browser-specific behavior appears | Low | Medium | Re-test on Chrome, Firefox, and Edge |
| Application behavior differs from expected result | Medium | Medium | Document observation and update test case if needed |
| Insufficient time for full execution | Medium | High | Prioritize High priority test cases first |
| Future API or database testing is blocked | Low | Medium | Keep API and database testing as future scope only |
| Public demo instability affects Cypress execution | Medium | Medium | Use dynamic test data and rerun after environment stabilization |

---

## 13. Responsibilities

| Role | Responsibility |
|---|---|
| QA Engineer | Plan tests, execute test cases, capture evidence, document bugs, maintain test documentation |
| Application Provider | Provides the public ParaBank demo application |
| Portfolio Reviewer | Reviews documentation quality, test coverage, and QA reasoning |

---

## 14. Deliverables

### 14.1 Current Deliverables

- [x] Test Plan
- [x] Test Strategy
- [x] Functional Test Cases
- [x] Bug Reports
- [x] Test Evidence
- [x] Test Execution Summary
- [x] Traceability Matrix
- [x] Exploratory Testing Notes
- [x] Accessibility Checklist Template
- [x] Responsive Testing Template
- [x] Cypress Automation Test Suite
- [x] GitHub Actions CI Workflow

### 14.2 Future Deliverables

- [ ] API Test Collection
- [ ] Accessibility Execution Results
- [ ] Responsive Execution Results
- [ ] Compatibility Smoke Execution Notes
- [ ] Additional scripted regression cases from selected exploratory findings

---

## 15. Current Manual Execution Summary

The first manual execution cycle has been completed.

- **Total test cases executed:** 15
- **Passed:** 10
- **Failed:** 3
- **Passed with observation:** 2
- **Blocked:** 0
- **Confirmed bugs:** 3
- **Observations:** 2

Detailed manual execution results are documented in `docs/TEST_SUMMARY_REPORT.md`.

---

## 16. Current Cypress Automation Summary

The Cypress UI automation cycle has been completed.

- **Spec files executed:** 5
- **Automated scenarios mapped:** 15
- **Passed:** 12
- **Pending known bugs:** 3
- **Failed:** 0
- **Latest full suite duration:** 01:36

Cypress spec coverage:

| Spec File | Related Test Cases | Result |
|---|---|---|
| `authentication.cy.js` | TC-001, TC-002, TC-003 | 2 Passed, 1 Pending |
| `accounts.cy.js` | TC-004, TC-005, TC-006 | 3 Passed |
| `transfers.cy.js` | TC-007, TC-008, TC-009 | 1 Passed, 2 Pending |
| `transactions.cy.js` | TC-010, TC-011, TC-012 | 3 Passed |
| `customer-profile.cy.js` | TC-013, TC-014, TC-015 | 3 Passed |

Pending automated tests are linked to confirmed known bugs:

- TC-002 → BUG-001
- TC-008 → BUG-002
- TC-009 → BUG-003

Detailed Cypress automation results are documented in `docs/TEST_SUMMARY_REPORT.md`.

---

## 17. Current Exploratory Testing Summary

The first exploratory testing cycle has been completed for two high-risk areas.

- **Sessions planned:** 5
- **Sessions executed:** 2
- **Existing bugs confirmed:** 2
- **Existing bugs not reproduced:** 1
- **Existing observations confirmed:** 1
- **New exploratory observations recorded:** 4
- **Linked exploratory impact evidence items:** 2

Detailed exploratory testing results are documented in `docs/EXPLORATORY_TESTING.md`.

---

## 18. Evidence Management

Evidence should be stored using a clear and consistent naming convention.

Recommended evidence file names:

- `TC-001_login_valid_credentials_pass.png`
- `TC-002_login_incorrect_password_fail.png`
- `TC-004_open_new_account_confirmation_pass.png`
- `TC-007_transfer_funds_before_balances.png`
- `TC-007_transfer_funds_confirmation.png`
- `TC-007_transfer_funds_after_balances.png`

Recommended evidence folder:

- `evidences/screenshots/`
- `evidences/screenshots/exploratory/`

Each evidence file should clearly identify:

- Test case ID
- Tested functionality
- Result status
- Relevant screen or behavior

---

## 19. Traceability

Each test case is mapped to a requirement reference to support coverage analysis.

Current requirement groups:

| Requirement Group | Related Module |
|---|---|
| AUTH | Authentication |
| ACC | Accounts |
| SEC | Access Control |
| TRF | Transfers |
| TXN | Transactions |
| PRF | Customer Profile |

The full mapping is maintained in `docs/TRACEABILITY_MATRIX.md`.

---

## 20. Maintenance Guidelines

This test plan should be reviewed and updated when:

- ParaBank behavior changes.
- A test case expected result is updated.
- New bugs or observations change the testing approach.
- New modules are added to the project.
- Cypress automation, exploratory scope, or API/database testing changes.
- Test execution results reveal coverage gaps.

Test cases should also be reviewed after each execution cycle to ensure they remain accurate and useful.

---

## 21. References

- Test Cases Document: `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- Bug Reports Document: `docs/BUG_REPORTS.md`
- Test Strategy Document: `docs/TEST_STRATEGY.md`
- Test Summary Report: `docs/TEST_SUMMARY_REPORT.md`
- Traceability Matrix: `docs/TRACEABILITY_MATRIX.md`
- Exploratory Testing: `docs/EXPLORATORY_TESTING.md`
- Accessibility Checklist: `docs/ACCESSIBILITY_CHECKLIST.md`
- Responsive Testing: `docs/RESPONSIVE_TESTING.md`
- Cypress Automation: `Automation/`
- GitHub Actions Workflow: `.github/workflows/cypress.yml`
- Application URL: `https://parabank.parasoft.com/parabank/index.htm`
- Repository: `ParaBank-QA-Project`

---

## 22. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial test plan for 15 manual functional test cases |
| 1.1 | May 2026 | Mariana | Updated after first manual execution cycle |
| 1.2 | May 2026 | Mariana | Updated after Cypress UI automation implementation and full suite execution |
| 1.3 | May 2026 | Mariana | Updated portfolio scope, risk prioritization, exploratory testing, CI, and deliverable status |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026
