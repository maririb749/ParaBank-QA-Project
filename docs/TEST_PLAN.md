# ParaBank QA Test Plan

**Version:** 1.0  
**Last Updated:** May 2026  
**Document Type:** Test Plan  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing  
**Prepared By:** Mariana  
**Document Status:** Draft — Ready for Execution  

---

## 1. Executive Summary

This test plan defines the manual testing scope, objectives, environment, execution approach, risks, and deliverables for the ParaBank QA Portfolio project.

ParaBank is a demo online banking application used to simulate common banking workflows such as user authentication, account opening, account balance verification, fund transfers, transaction history, and customer contact information updates.

The current test cycle focuses on manual functional testing through the web user interface. The goal is to validate the most relevant user flows, document results clearly, capture evidence, and demonstrate structured QA thinking through well-written test artifacts.

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

The current test cycle covers 15 manual functional test cases across 5 modules.

| Module | Functionality | Coverage |
|---|---|---:|
| Authentication | Login, invalid login, required field validation | 3 test cases |
| Accounts | Open new account, view account balance, access control | 3 test cases |
| Transfers | Transfer funds, invalid amount, insufficient balance | 3 test cases |
| Transactions | View transaction history, search transactions, new account history state | 3 test cases |
| Customer Profile | Update contact information, invalid phone input, empty required fields | 3 test cases |

**Total Test Cases:** 15  
**Scenario Types:** Positive, Negative, Boundary, Edge Case, Access Control  

---

### 3.2 Out of Scope

The following areas are not included in the current test cycle:

- Load testing
- Stress testing
- Endurance testing
- Security penetration testing
- Full accessibility compliance testing
- Full localization testing
- Mobile native application testing
- API testing
- Database testing
- Automated test execution
- Third-party integrations outside the visible ParaBank demo application

These areas may be considered in future phases if project scope is expanded.

---

## 4. Test Types

The following test types are included in the current manual testing phase:

| Test Type | Purpose | Related Test Cases |
|---|---|---|
| Functional Testing | Validate that the application features work as expected | TC-001 to TC-015 |
| Positive Testing | Validate successful flows with valid data | TC-001, TC-004, TC-005, TC-007, TC-010, TC-011, TC-013 |
| Negative Testing | Validate system behavior with invalid data or invalid access | TC-002, TC-003, TC-006, TC-008, TC-009, TC-014, TC-015 |
| Boundary / Edge Case Testing | Validate edge conditions and unusual but possible scenarios | TC-003, TC-008, TC-009, TC-012, TC-015 |
| Access Control Testing | Validate that unauthenticated users cannot access restricted pages | TC-006 |
| Regression Candidate Testing | Identify tests suitable for future regression execution | High-priority and critical flow test cases |

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

The highest priority is given to user flows that affect authentication, account access, balances, and money movement.

High-risk areas:

- Login and authentication
- Unauthorized access to restricted pages
- Account creation
- Account balance display
- Fund transfers
- Transaction history accuracy
- Contact information updates

High-priority test cases should be executed first because failures in these flows have a higher user impact.

---

## 7. Test Environment

### 7.1 Application Under Test

- **Application Name:** ParaBank
- **Application URL:** `https://parabank.parasoft.com/parabank/index.htm`
- **Application Type:** Demo Web Banking Application
- **Observed Interface:** Web UI
- **Testing Phase:** Manual UI Testing

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
| Browser screenshots / screen recorder | Test evidence capture |

---

### 7.4 Future Tools

The following tools may be introduced in future phases:

| Tool | Purpose |
|---|---|
| Playwright or Cypress | UI test automation |
| Postman | API testing, if accessible endpoints are included |
| GitHub Actions | Automated test execution pipeline |
| SQL tool | Database validation, only if database access becomes available |

---

## 8. Test Data Requirements

The current test cycle requires controlled and reusable test data.

### Required Test Data

- One dedicated registered customer.
- Valid username and password.
- At least one active account for account balance validation.
- At least two active accounts for transfer scenarios.
- Account with existing transactions for transaction history validation.
- Contact information data for customer profile update tests.

### Recommended Test User

- **Username:** `qa_mariana_002`
- **Password:** `ValidPass123!`

### Important Notes

- If the ParaBank demo environment is reset, the test user may need to be recreated.
- Account numbers created during execution should be recorded.
- Balances should be captured before and after transfer tests.
- Test data changes should be documented in the evidence or execution notes.

---

## 9. Entry Criteria

Testing can begin when the following conditions are met:

- [x] Test plan is documented.
- [x] Functional test cases are documented.
- [ ] Dedicated test user is created and validated.
- [ ] At least two customer accounts are available for transfer scenarios.
- [ ] Test environment is accessible.
- [ ] Browser is available and working correctly.
- [ ] Evidence folders are prepared.
- [ ] Test execution status format is defined.

---

## 10. Exit Criteria

Testing is considered complete when:

- [ ] All 15 test cases are executed at least once.
- [ ] 100% of High priority test cases are executed.
- [ ] Evidence is captured for each executed test case.
- [ ] All failed tests have a documented bug report or observation.
- [ ] No Critical defect remains open without documented decision.
- [ ] No High severity defect remains open without documented decision.
- [ ] Test results are summarized in a test execution report.
- [ ] Test documentation is updated according to actual application behavior.

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
- [x] Functional Test Cases
- [ ] Bug Reports
- [ ] Test Evidence
- [ ] Test Execution Summary

---

### 14.2 Future Deliverables

- [ ] Test Strategy
- [ ] Traceability Matrix
- [ ] Automation Test Suite
- [ ] API Test Collection
- [ ] CI Pipeline
- [ ] Final Test Summary Report

---

## 15. Evidence Management

Evidence should be stored using a clear and consistent naming convention.

Recommended evidence file names:

- `TC-001_login_valid_credentials_pass.png`
- `TC-002_login_incorrect_password_fail.png`
- `TC-004_open_new_account_confirmation_pass.png`
- `TC-007_transfer_funds_before_balances.png`
- `TC-007_transfer_funds_confirmation.png`
- `TC-007_transfer_funds_after_balances.png`

Recommended evidence folders:

- `evidences/screenshots/`
- `evidences/videos/`

Each evidence file should clearly identify:

- Test case ID
- Tested functionality
- Result status
- Relevant screen or behavior

---

## 16. Traceability

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

The full mapping is maintained in the functional test cases document.

---

## 17. Maintenance Guidelines

This test plan should be reviewed and updated when:

- ParaBank behavior changes.
- A test case expected result is updated.
- New bugs or observations change the testing approach.
- New modules are added to the project.
- Automation, API, or database testing is introduced.
- Test execution results reveal coverage gaps.

Test cases should also be reviewed after each execution cycle to ensure they remain accurate and useful.

---

## 18. References

- Test Cases Document: `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- Bug Reports Document: `docs/BUG_REPORTS.md`
- Test Strategy Document: `docs/TEST_STRATEGY.md`
- Application URL: `https://parabank.parasoft.com/parabank/index.htm`
- Repository: `ParaBank-QA-Project`

---

## 19. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial test plan for 15 manual functional test cases |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026