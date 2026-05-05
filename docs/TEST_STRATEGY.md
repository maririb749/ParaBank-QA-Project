# ParaBank QA Test Strategy

**Version:** 1.0  
**Last Updated:** May 2026  
**Document Type:** Test Strategy  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing  
**Prepared By:** Mariana  
**Document Status:** Draft — Ready for Execution  

---

## 1. Introduction

This document defines the testing strategy for the ParaBank QA Portfolio project.

The purpose of this strategy is to explain how the application will be tested, how scenarios were selected, how risks are prioritized, how evidence will be collected, and how defects or observations will be documented.

This strategy supports the test scope defined in `docs/TEST_PLAN.md` and aligns with the functional test cases documented in `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`.

The current phase focuses on manual functional testing through the web user interface. API testing, database testing, automation, performance testing, and full accessibility testing are not part of the current execution scope and may be introduced in future phases.

---

## 2. Testing Philosophy

### 2.1 Core Testing Principles

The testing approach for this project follows these principles:

- **Think like a user:** Test scenarios should reflect realistic user workflows.
- **Prioritize risk:** Critical flows such as login, access control, account balance, transfers, and transaction history should be tested first.
- **Cover meaningful paths:** Each module includes positive, negative, and edge or boundary scenarios where applicable.
- **Quality over quantity:** A focused set of well-designed test cases is more valuable than a large number of generic scenarios.
- **Document clearly:** Test steps, expected results, actual results, evidence, bugs, and observations should be easy to understand.
- **Maintain consistency:** Test strategy, test plan, test cases, and bug reports should use consistent terminology and scope.
- **Be honest about scope:** Only the functionality that can be verified in the current project phase should be included as active testing scope.

---

### 2.2 Scenario Design Approach

Each module is covered with a balanced set of scenarios.

The current portfolio version uses three test cases per module to keep the project focused, readable, and maintainable.

Scenario types used:

- **Positive scenario:** Validates the expected successful flow.
- **Negative scenario:** Validates error handling, invalid input, or restricted access.
- **Edge or boundary scenario:** Validates unusual, empty, limited, or sensitive conditions.

This does not mean every real-world feature should always have exactly three test cases. In a professional project, test coverage should be adjusted based on risk, business impact, complexity, and available time.

---

## 3. Current Testing Scope

The current strategy covers 15 manual test cases across 5 modules:

- Authentication
- Accounts
- Transfers
- Transactions
- Customer Profile

Out of scope for the current phase:

- API testing
- Database testing
- Automated testing
- Load testing
- Stress testing
- Security penetration testing
- Full accessibility compliance testing
- Full localization testing
- Native mobile testing

---

## 4. Module-by-Module Testing Strategy

---

## 4.1 Authentication Module

### Objective

Validate that registered users can access the application with valid credentials and that invalid login attempts are rejected.

### Strategy

Authentication is treated as a high-risk area because most other test scenarios depend on successful login.

The strategy focuses on:

- Successful login with valid credentials.
- Rejection of incorrect password.
- Rejection of empty required fields.
- Verification that unauthenticated users do not reach the authenticated area.

### Test Case Mapping

| Test Case | Scenario | Type | Purpose |
|---|---|---|---|
| TC-001 | Login with valid credentials | Positive | Validate successful login |
| TC-002 | Login with incorrect password | Negative | Validate authentication error handling |
| TC-003 | Login with empty required fields | Negative / Validation | Validate required field behavior |

### Test Approach

#### TC-001 — Login with Valid Credentials

Purpose:

- Confirm that a registered customer can log in successfully.

Verification points:

- User is authenticated.
- Authenticated area is displayed.
- `Accounts Overview` page is displayed.
- Customer welcome message is visible.
- `Log Out` option is visible.
- No authentication error is displayed.

Risk if it fails:

- User cannot access the system.
- All authenticated workflows become blocked.

Priority:

- Critical.

---

#### TC-002 — Login with Incorrect Password

Purpose:

- Confirm that the system rejects invalid credentials.

Verification points:

- User is not authenticated.
- Error message is displayed.
- Authenticated area is not displayed.
- `Log Out` option is not visible.

Risk if it fails:

- Invalid users may gain access.
- Authentication trust is compromised.

Priority:

- High.

---

#### TC-003 — Login with Empty Required Fields

Purpose:

- Confirm that login cannot be completed with empty username and password fields.

Verification points:

- User is not authenticated.
- Validation or authentication error is displayed.
- Authenticated area is not displayed.
- No server error is shown.

Risk if it fails:

- Poor validation behavior.
- Confusing user experience.

Priority:

- Medium.

### Additional Future Coverage

The following scenarios may be added in future cycles:

- Username only empty.
- Password only empty.
- Very long username.
- Special characters in username.
- Session timeout.
- Multiple failed login attempts.
- Concurrent sessions.

---

## 4.2 Accounts Module

### Objective

Validate that authenticated customers can open new accounts, view account details, and that restricted account pages are not available to unauthenticated users.

### Strategy

Account functionality is treated as a high-risk area because it affects account visibility and banking workflow continuity.

The strategy focuses on:

- Opening a new account with valid data.
- Viewing account balance and account details.
- Blocking unauthenticated access to account opening.

### Test Case Mapping

| Test Case | Scenario | Type | Purpose |
|---|---|---|---|
| TC-004 | Open new account with valid data | Positive | Validate account creation flow |
| TC-005 | View account balance | Positive | Validate account details and balance display |
| TC-006 | Access account opening without authentication | Negative / Access Control | Validate restricted page protection |

### Test Approach

#### TC-004 — Open New Account with Valid Data

Purpose:

- Confirm that an authenticated customer can create a new account.

Verification points:

- Account creation request is submitted.
- Success confirmation message is displayed.
- New account number is displayed.
- New account appears in `Accounts Overview`.
- New account balance matches the configured initial or minimum balance for the environment.

Risk if it fails:

- User cannot complete a core account workflow.
- Future transfer and transaction tests may be blocked.

Priority:

- High.

---

#### TC-005 — View Account Balance

Purpose:

- Confirm that a customer can view account details and balances.

Verification points:

- Account details page is displayed.
- Account number is visible.
- Account type is visible.
- Available balance is visible.
- Current balance is visible.
- Monetary values are displayed in currency format.

Risk if it fails:

- User cannot verify account status.
- Balance visibility becomes unreliable.

Priority:

- High.

---

#### TC-006 — Access Account Opening Without Authentication

Purpose:

- Confirm that restricted account pages cannot be accessed without authentication.

Verification points:

- Unauthenticated user cannot access the account opening form.
- User is redirected to login page or receives an access restriction message.
- No account creation controls are available.
- No account is created.

Risk if it fails:

- Restricted functionality may be exposed to unauthenticated users.

Priority:

- Critical.

### Additional Future Coverage

The following scenarios may be added in future cycles:

- Savings account creation.
- Multiple account creation.
- Account dropdown behavior.
- Invalid direct URLs.
- Session expiration while opening an account.
- Browser back button after logout.

---

## 4.3 Transfers Module

### Objective

Validate that customers can transfer funds between their own accounts and that invalid transfer attempts are rejected.

### Strategy

Transfers are treated as one of the highest-risk areas because they affect simulated account balances and transaction records.

The strategy focuses on:

- Successful transfer between two customer accounts.
- Rejection of negative transfer amount.
- Rejection of transfer when the source balance is insufficient.
- UI-level balance consistency before and after transfer.

### Test Case Mapping

| Test Case | Scenario | Type | Purpose |
|---|---|---|---|
| TC-007 | Transfer money between own accounts | Positive | Validate successful transfer |
| TC-008 | Transfer with negative amount | Negative / Boundary | Validate invalid amount handling |
| TC-009 | Transfer with insufficient balance | Negative / Boundary | Validate insufficient funds handling |

### Test Approach

#### TC-007 — Transfer Money Between Own Accounts

Purpose:

- Confirm that a customer can transfer money between their own accounts.

Verification points:

- Transfer confirmation message is displayed.
- Transferred amount is shown correctly.
- Source account is shown correctly.
- Destination account is shown correctly.
- Source account balance decreases by the transferred amount.
- Destination account balance increases by the transferred amount.
- Transfer appears in transaction history when available.

Risk if it fails:

- Simulated funds may be moved incorrectly.
- Account balances may become inconsistent.

Priority:

- Critical.

---

#### TC-008 — Transfer with Negative Amount

Purpose:

- Confirm that negative transfer amounts are rejected.

Verification points:

- Transfer is not completed.
- Validation error message is displayed.
- Source account balance remains unchanged.
- Destination account balance remains unchanged.
- No transaction is created for the rejected transfer.

Risk if it fails:

- Invalid financial transactions may be accepted.

Priority:

- Medium.

---

#### TC-009 — Transfer with Insufficient Balance

Purpose:

- Confirm that the system rejects transfers when the source account does not have enough balance.

Verification points:

- Transfer is not completed.
- Insufficient funds or validation message is displayed.
- Source account balance remains unchanged.
- Destination account balance remains unchanged.
- No transaction is created for the rejected transfer.

Risk if it fails:

- Account balance may become negative.
- Transfer logic may be unreliable.

Priority:

- High.

### UI-Level Data Consistency

For transfer scenarios, consistency is verified through the user interface.

The tester should record:

- Source account balance before transfer.
- Destination account balance before transfer.
- Transfer amount.
- Source account balance after transfer.
- Destination account balance after transfer.
- Transaction history evidence, when available.

### Additional Future Coverage

The following scenarios may be added in future cycles:

- Transfer amount equal to zero.
- Transfer amount equal to exact available balance.
- Transfer amount slightly above available balance.
- Decimal precision validation.
- Self-transfer behavior.
- Rapid repeated transfers.
- Session expiration during transfer.

---

## 4.4 Transactions Module

### Objective

Validate that customers can view and search transaction history for their accounts.

### Strategy

Transaction history is important because it allows users to verify account activity after operations such as transfers or account creation.

The strategy focuses on:

- Viewing transaction history.
- Searching transactions by amount.
- Handling transaction history state for newly created accounts.

### Test Case Mapping

| Test Case | Scenario | Type | Purpose |
|---|---|---|---|
| TC-010 | View transaction history | Positive | Validate transaction list visibility |
| TC-011 | Search transactions by amount | Positive | Validate transaction search by amount |
| TC-012 | Empty transaction history for a newly created account | Edge Case | Validate new account transaction state |

### Test Approach

#### TC-010 — View Transaction History

Purpose:

- Confirm that a customer can view account transactions.

Verification points:

- Account details page is displayed.
- Transaction history section is visible.
- Transactions display relevant information such as date, type, and amount.
- Transaction amounts are displayed in currency format.
- Transactions from unrelated accounts are not displayed.

Risk if it fails:

- User cannot verify account activity.

Priority:

- High.

---

#### TC-011 — Search Transactions by Amount

Purpose:

- Confirm that a customer can search transactions by amount.

Verification points:

- Transaction search page is displayed.
- Account can be selected.
- Amount can be entered.
- Matching transactions are displayed.
- Results belong to the selected account.
- No application error is displayed.

Risk if it fails:

- User may have difficulty finding specific transactions.

Priority:

- Medium.

---

#### TC-012 — Empty Transaction History for a Newly Created Account

Purpose:

- Confirm that transaction history behaves correctly for a newly created account.

Verification points:

- Account details page loads successfully.
- Transaction history section loads without error.
- If no transactions exist, empty state or no transaction rows are displayed.
- If the application creates an initial funding transaction, it is displayed correctly.
- No unrelated transactions are displayed.

Risk if it fails:

- New account experience may be confusing.
- Transaction history state may be unclear.

Priority:

- Low.

### Additional Future Coverage

The following scenarios may be added in future cycles:

- Search by date.
- Search by transaction ID.
- Search by date range.
- Search with no matching results.
- Search with invalid amount format.
- Large transaction history lists.
- Pagination, if available.

---

## 4.5 Customer Profile Module

### Objective

Validate that authenticated customers can update contact information and that invalid or incomplete input is handled properly.

### Strategy

Customer profile testing focuses on data update behavior, required fields, and invalid phone input handling.

The strategy focuses on:

- Updating contact information with valid data.
- Testing invalid phone format.
- Testing empty required fields.
- Confirming that previous data is preserved when updates are rejected.

### Test Case Mapping

| Test Case | Scenario | Type | Purpose |
|---|---|---|---|
| TC-013 | Update contact information with valid data | Positive | Validate successful contact update |
| TC-014 | Update contact information with invalid phone format | Negative / Validation | Validate invalid phone behavior |
| TC-015 | Update contact information with empty required fields | Negative / Validation | Validate required field protection |

### Test Approach

#### TC-013 — Update Contact Information with Valid Data

Purpose:

- Confirm that a customer can update contact information.

Verification points:

- Contact information form is displayed.
- Valid data is accepted.
- Success confirmation message is displayed.
- Updated data is saved.
- Updated data appears again when the page is reopened.

Risk if it fails:

- Customer information cannot be updated.

Priority:

- Medium.

---

#### TC-014 — Update Contact Information with Invalid Phone Format

Purpose:

- Observe how the application handles invalid phone input.

Verification points:

- If phone validation is implemented, invalid input is rejected.
- If phone validation is not implemented, the behavior is documented as an observation.
- Required customer data is not removed or corrupted.
- No application crash or server error is displayed.

Risk if it fails:

- Invalid contact information may be saved.
- Form validation may be incomplete.

Priority:

- Low.

---

#### TC-015 — Update Contact Information with Empty Required Fields

Purpose:

- Confirm that required fields cannot be submitted empty.

Verification points:

- Update is not completed.
- Validation messages are displayed.
- Previous customer information is retained.
- No partial update is saved.
- No application crash or server error is displayed.

Risk if it fails:

- Required customer information may become incomplete.

Priority:

- Medium.

### Additional Future Coverage

The following scenarios may be added in future cycles:

- Minimum and maximum field length.
- Special characters in name and address.
- Unicode characters.
- Empty phone field.
- Invalid zip code format.
- Data persistence after logout and login.
- Browser refresh after update.

---

## 5. Cross-Cutting Testing Considerations

---

## 5.1 UI-Level Data Consistency

The current phase validates data consistency from the user interface perspective only.

Database and API validation are not included in the current execution scope.

UI-level consistency checks include:

- Account appears after successful account creation.
- Balances are visible and formatted correctly.
- Transfer amount is reflected in account balances.
- Transaction history shows relevant account activity.
- Contact information changes persist after saving.

Future phases may include API or database validation if stable endpoints or database access become available.

---

## 5.2 Error Message Validation

For negative test cases, error messages should be reviewed for clarity and usefulness.

A good error message should:

- Clearly explain what went wrong.
- Help the user correct the issue.
- Avoid technical jargon.
- Avoid exposing sensitive technical details.
- Appear near the relevant form or action when possible.

Examples of clear behavior:

- Login error appears when credentials are invalid.
- Required field validation appears when mandatory fields are empty.
- Transfer validation appears when amount is invalid or balance is insufficient.

---

## 5.3 Evidence-Based Testing

Each executed test case should include evidence.

Evidence should help prove:

- What was tested.
- Which data was used.
- What result was observed.
- Whether the result passed, failed, or needs clarification.

For failed tests or unclear behavior, video evidence is preferred when possible.

---

## 5.4 Test Data Control

Test data should be prepared and documented before execution.

Current test data strategy:

- Use a dedicated QA user.
- Record account numbers created during execution.
- Record balances before and after transfer tests.
- Avoid relying on shared or unstable demo data when possible.
- Recreate test data if the public demo environment is reset.

---

## 5.5 Scope Control

The current test strategy avoids including validations that cannot be executed or verified reliably in this phase.

The following are intentionally excluded from current execution:

- Direct database verification.
- API response validation.
- Automated test scripts.
- Performance benchmarks.
- Penetration testing.
- Full WCAG compliance testing.
- Full localization testing.

These may be planned separately in future phases.

---

## 6. Priority and Risk-Based Testing

### 6.1 Test Priority

Test priority is based on business impact, user impact, and dependency between modules.

| Priority | Test Cases | Reason |
|---|---|---|
| P0 - Critical | TC-001, TC-006, TC-007 | Login, access control, and transfers are critical flows |
| P1 - High | TC-004, TC-005, TC-009, TC-010 | Account creation, balance visibility, insufficient funds handling, and transaction history |
| P2 - Medium | TC-002, TC-003, TC-008, TC-011, TC-013, TC-015 | Validation scenarios and important user workflows |
| P3 - Low | TC-012, TC-014 | Lower-risk edge or observation scenarios |

---

### 6.2 Recommended Execution Order

The recommended execution order is:

1. TC-001 — Login with valid credentials
2. TC-006 — Access account opening without authentication
3. TC-004 — Open new account with valid data
4. TC-005 — View account balance
5. TC-007 — Transfer money between own accounts
6. TC-009 — Transfer with insufficient balance
7. TC-008 — Transfer with negative amount
8. TC-010 — View transaction history
9. TC-011 — Search transactions by amount
10. TC-012 — Empty transaction history for a newly created account
11. TC-013 — Update contact information with valid data
12. TC-015 — Update contact information with empty required fields
13. TC-014 — Update contact information with invalid phone format
14. TC-002 — Login with incorrect password
15. TC-003 — Login with empty required fields

Execution can be adjusted if test data dependencies require a different order.

---

## 7. Defect Classification and Reporting

When bugs are found, they should be classified by severity and priority.

---

### 7.1 Severity

Severity describes the technical or user impact of the issue.

| Severity | Definition | Example |
|---|---|---|
| Critical | Core workflow is blocked, restricted access fails, or simulated financial data is inconsistent | Unauthenticated user can access restricted account page |
| High | Major functionality fails with significant user impact | Transfer confirmation is shown but balances do not update |
| Medium | Feature partially fails or validation is unclear | Required field message is missing |
| Low | Minor usability, cosmetic, or documentation issue | Button alignment issue or unclear label |

---

### 7.2 Priority

Priority describes how urgently the issue should be addressed.

| Priority | Definition | Example |
|---|---|---|
| P0 | Must be addressed immediately | Authentication bypass |
| P1 | Should be addressed before release or final reporting | Transfer or balance issue |
| P2 | Should be addressed in a normal improvement cycle | Search behavior issue |
| P3 | Can be addressed when time allows | Minor visual issue |

---

### 7.3 Bug Report Expectations

Each bug report should include:

- Bug ID.
- Clear title.
- Environment.
- Pre-conditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity.
- Priority.
- Evidence.
- Notes or observations.

All confirmed defects and observations should be documented in `docs/BUG_REPORTS.md`.

---

## 8. Regression Testing Strategy

### 8.1 Purpose

Regression testing ensures that existing functionality continues to work after a fix, update, or behavior change.

In this project, regression testing is planned as a future repeatable execution activity based on the 15 documented functional test cases.

---

### 8.2 When to Run Regression Tests

Regression testing should be considered when:

- A bug is fixed.
- A test case expected result is updated.
- A module behavior changes.
- A new feature is added in a future phase.
- Automation is introduced.
- The public demo environment is reset.

---

### 8.3 Regression Scope Levels

Regression scope should be selected based on impact, risk, and available time.

Minimum regression:

- Re-run the test case that found the original issue.

Module regression:

- Re-run all test cases in the affected module.

Risk-based regression:

- Re-run high-priority flows that may be affected by the change.

Full regression:

- Re-run all 15 test cases.

---

### 8.4 Regression Selection Criteria

Regression scope should be selected based on:

- Area affected by the change.
- Business or user impact.
- Severity of the defect.
- Dependencies between modules.
- Time available for execution.
- Risk of introducing new issues.

Example:

If a transfer bug is found and corrected, the minimum regression should include:

- TC-007 — Transfer money between own accounts
- TC-008 — Transfer with negative amount
- TC-009 — Transfer with insufficient balance
- TC-010 — View transaction history

---

## 9. Test Evidence Requirements

### 9.1 Minimum Evidence

For each executed test case, evidence should include:

- Screenshot of the final result.
- Test case ID.
- Test status.
- Relevant test data.
- Browser used.
- Execution date.
- Any relevant notes.

---

### 9.2 Failure Evidence

For failed tests, evidence should include:

- Screenshot of the issue.
- Screen recording when useful.
- Exact steps performed.
- Actual result.
- Expected result.
- Browser and operating system.
- Console errors from Chrome DevTools, if relevant.

---

### 9.3 Suggested Evidence Naming Convention

Recommended file names:

- `TC-001_login_valid_credentials_pass.png`
- `TC-002_login_incorrect_password_fail.png`
- `TC-004_open_new_account_confirmation_pass.png`
- `TC-007_transfer_funds_before_balances.png`
- `TC-007_transfer_funds_confirmation.png`
- `TC-007_transfer_funds_after_balances.png`

Recommended folders:

- `evidences/screenshots/`
- `evidences/videos/`

---

## 10. Success Criteria

Testing is considered successful when:

- All 15 test cases are executed at least once.
- High-priority test cases are executed.
- Evidence is captured for each executed test case.
- Failed tests are documented as bugs or observations.
- Critical and High severity issues are clearly documented.
- Test cases are updated if actual ParaBank behavior differs from the original expected result.
- Test execution results are summarized.
- The documentation remains consistent across the project.

---

## 11. Alignment with Other Documents

### 11.1 Document Relationship

This document works together with the other project documents:

- `TEST_PLAN.md` defines what will be tested, scope, objectives, risks, and deliverables.
- `TEST_STRATEGY.md` defines how testing will be approached and prioritized.
- `PARABANK_15_TEST_CASES_EN.md` contains the detailed executable test cases.
- `BUG_REPORTS.md` documents confirmed bugs and observations.
- Future test execution reports will summarize execution results.

---

### 11.2 Documentation Flow

Recommended documentation flow:

1. Define scope and objectives in `TEST_PLAN.md`.
2. Define approach and prioritization in `TEST_STRATEGY.md`.
3. Execute detailed scenarios from `PARABANK_15_TEST_CASES_EN.md`.
4. Document defects and observations in `BUG_REPORTS.md`.
5. Summarize results in a future test execution report.

---

## 12. Future Improvements

The following improvements may be added in future project phases:

- UI automation with Playwright or Cypress.
- API testing with Postman if stable endpoints are included.
- CI execution with GitHub Actions.
- Traceability matrix.
- Test summary report.
- Accessibility checklist.
- Responsive testing checklist.
- Exploratory testing notes.
- Additional regression scenarios.
- Expanded transaction search coverage.

---

## 13. References

- Test Plan: `docs/TEST_PLAN.md`
- Test Cases: `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- Bug Reports: `docs/BUG_REPORTS.md`
- Application URL: `https://parabank.parasoft.com/parabank/index.htm`
- Repository: `ParaBank-QA-Project`

---

## 14. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial test strategy aligned with 15 manual functional test cases |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026