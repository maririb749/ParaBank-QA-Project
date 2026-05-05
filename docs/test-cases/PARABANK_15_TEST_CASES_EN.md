# ParaBank QA Portfolio — Functional Test Cases

## Document Information

**Project:** ParaBank QA Portfolio
**Application Under Test:** ParaBank Demo Banking Application
**Base URL:** `https://parabank.parasoft.com/parabank/index.htm`
**Test Level:** System Testing
**Test Type:** Functional, Negative, Boundary, Access Control, Regression Candidate
**Execution Mode:** Manual Testing
**Prepared By:** Mariana
**Document Status:** Draft — Ready for Execution

---

## Test Environment

* **Environment:** Public ParaBank Demo Environment
* **Browser:** Chrome, Firefox or Edge
* **Operating System:** Windows 11
* **Network:** Stable internet connection
* **Evidence Required:** Screenshot for each executed test case

---

## Test Data Strategy

Use a dedicated QA customer instead of relying on shared demo credentials.

Recommended test user:

* **Username:** `qa_mariana_001`
* **Password:** `ValidPass123!`

Important execution notes:

* If the public demo database is reset, the QA user may need to be recreated.
* For transfer scenarios, create or use at least two active accounts.
* For financial validation, always capture balances before and after execution.
* For each executed test, save evidence using the test case ID in the file name.

---

## Execution Status Legend

* **Not Executed:** Test case has not been run yet.
* **Passed:** Actual result matches the expected result.
* **Failed:** Actual result does not match the expected result.
* **Blocked:** Test could not be executed due to dependency or environment issue.
* **Retest:** Test needs to be executed again after a fix or environment change.

---

## Test Case Summary

| ID     | Module              | Title                                                 | Priority | Scenario Type             | Status       |
| ------ | ------------------- | ----------------------------------------------------- | -------- | ------------------------- | ------------ |
| TC-001 | Authentication      | Login with valid credentials                          | High     | Positive                  | Not Executed |
| TC-002 | Authentication      | Login with incorrect password                         | High     | Negative                  | Not Executed |
| TC-003 | Authentication      | Login with empty required fields                      | High     | Negative / Validation     | Not Executed |
| TC-004 | Accounts            | Open new account with valid data                      | High     | Positive                  | Not Executed |
| TC-005 | Accounts            | View account balance                                  | High     | Positive                  | Not Executed |
| TC-006 | Accounts / Security | Access account opening without authentication         | High     | Negative / Access Control | Not Executed |
| TC-007 | Transfers           | Transfer money between own accounts                   | High     | Positive                  | Not Executed |
| TC-008 | Transfers           | Transfer with negative amount                         | Medium   | Negative / Boundary       | Not Executed |
| TC-009 | Transfers           | Transfer with insufficient balance                    | High     | Negative / Boundary       | Not Executed |
| TC-010 | Transactions        | View transaction history                              | High     | Positive                  | Not Executed |
| TC-011 | Transactions        | Search transactions by amount                         | Medium   | Positive                  | Not Executed |
| TC-012 | Transactions        | Empty transaction history for a newly created account | Medium   | Edge Case                 | Not Executed |
| TC-013 | Customer Profile    | Update contact information with valid data            | High     | Positive                  | Not Executed |
| TC-014 | Customer Profile    | Update contact information with invalid phone format  | Medium   | Negative / Validation     | Not Executed |
| TC-015 | Customer Profile    | Update contact information with empty required fields | Medium   | Negative / Validation     | Not Executed |

---

# Test Cases

---

## TC-001 — Login with Valid Credentials

**Module:** Authentication
**Title:** Registered customer can successfully log in with valid credentials
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** AUTH-001
**Status:** Not Executed

### Pre-conditions

* A registered customer exists in the system.
* The customer is not logged in.
* The browser is on the ParaBank home page.

### Test Data

* **Username:** `qa_mariana_001`
* **Password:** `ValidPass123!`

### Steps

1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Enter username `qa_mariana_001`.
3. Enter password `ValidPass123!`.
4. Click the **Log In** button.

### Expected Result

* The user is authenticated successfully.
* The authenticated area is displayed.
* The **Accounts Overview** page is displayed.
* A customer welcome message is visible.
* The **Log Out** option is visible.
* No authentication error message is displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Log out after execution.

---

## TC-002 — Login with Incorrect Password

**Module:** Authentication
**Title:** System rejects login when a registered username is used with an incorrect password
**Priority:** High
**Scenario Type:** Negative
**Test Type:** Functional / Validation
**Automation Candidate:** Yes
**Requirement Reference:** AUTH-002
**Status:** Not Executed

### Pre-conditions

* A registered customer exists in the system.
* The customer is not logged in.
* The browser is on the ParaBank home page.

### Test Data

* **Username:** `qa_mariana_001`
* **Password:** `wrong_password`

### Steps

1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Enter username `qa_mariana_001`.
3. Enter password `wrong_password`.
4. Click the **Log In** button.

### Expected Result

* The user is not authenticated.
* The system displays an authentication error message.
* The authenticated area is not displayed.
* The **Accounts Overview** page is not displayed.
* The **Log Out** option is not visible.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No authenticated session should be created.

---

## TC-003 — Login with Empty Required Fields

**Module:** Authentication
**Title:** System rejects login when username and password fields are empty
**Priority:** High
**Scenario Type:** Negative / Required Field Validation
**Test Type:** Functional / Validation
**Automation Candidate:** Yes
**Requirement Reference:** AUTH-003
**Status:** Not Executed

### Pre-conditions

* The customer is not logged in.
* The browser is on the ParaBank home page.

### Test Data

* **Username:** Empty
* **Password:** Empty

### Steps

1. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click the **Log In** button.

### Expected Result

* The user is not authenticated.
* The system displays a validation or authentication error message.
* The authenticated area is not displayed.
* The **Accounts Overview** page is not displayed.
* The **Log Out** option is not visible.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No authenticated session should be created.

---

## TC-004 — Open New Account with Valid Data

**Module:** Accounts
**Title:** Authenticated customer can successfully open a new bank account with valid data
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** ACC-001
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least one existing account available as the funding account.
* The browser is on the authenticated area.

### Test Data

* **Account Type:** Checking
* **From Account:** Existing customer account selected from the dropdown

### Steps

1. Log in with a valid registered customer.
2. Navigate to **Open New Account**.
3. Select **Checking** as the account type.
4. Select an existing account as the funding account.
5. Click the **Open New Account** button.

### Expected Result

* The new account is created successfully.
* A success confirmation message is displayed.
* The new account number is displayed.
* The new account appears in **Accounts Overview**.
* The new account balance matches the configured initial or minimum balance for the environment.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Record the newly created account number for future account and transfer tests.

---

## TC-005 — View Account Balance

**Module:** Accounts
**Title:** Authenticated customer can view account balance and account details
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** ACC-002
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least one active account.
* The browser is on the authenticated area.

### Test Data

* **Account:** Any active customer account

### Steps

1. Log in with a valid registered customer.
2. Navigate to **Accounts Overview**.
3. Click an account number from the list.

### Expected Result

* The account details page is displayed.
* The account number is visible.
* The account type is visible.
* The available balance is visible.
* The current balance is visible.
* Monetary values are displayed in currency format.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No data should be changed by this test case.

---

## TC-006 — Access Account Opening Without Authentication

**Module:** Accounts / Security
**Title:** System prevents unauthenticated access to the account opening page
**Priority:** High
**Scenario Type:** Negative / Access Control
**Test Type:** Functional / Security
**Automation Candidate:** Yes
**Requirement Reference:** SEC-001
**Status:** Not Executed

### Pre-conditions

* The customer is not logged in.
* Browser cookies and session data are cleared before execution.

### Test Data

* **Direct URL:** `https://parabank.parasoft.com/parabank/openaccount.htm`

### Steps

1. Open a new browser session or clear existing session data.
2. Access `https://parabank.parasoft.com/parabank/openaccount.htm` directly.

### Expected Result

* The unauthenticated user cannot access the account opening form.
* The system redirects the user to the login page or displays an access restriction message.
* Account type and funding account controls are not available for unauthenticated use.
* No account is created.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No authenticated session should exist after the test.

---

## TC-007 — Transfer Money Between Own Accounts

**Module:** Transfers
**Title:** Customer can successfully transfer money between their own accounts
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** TRF-001
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least two active accounts.
* The source account has sufficient balance for the transfer.
* Current balances for source and destination accounts are recorded before execution.

### Test Data

* **Source Account:** Active account with sufficient balance
* **Destination Account:** Another active account owned by the same customer
* **Amount:** `$50.00`

### Steps

1. Log in with a valid registered customer.
2. Record the current balance of the source account.
3. Record the current balance of the destination account.
4. Navigate to **Transfer Funds**.
5. Enter amount `$50.00`.
6. Select the source account.
7. Select the destination account.
8. Click the **Transfer** button.

### Expected Result

* The transfer is completed successfully.
* A transfer confirmation message is displayed.
* The confirmation shows the transferred amount, source account and destination account.
* The source account balance decreases by `$50.00`.
* The destination account balance increases by `$50.00`.
* The transfer is visible in the transaction history of the involved account or accounts.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Record the updated balances after the transfer.
* Save screenshots of the confirmation and account balances.

---

## TC-008 — Transfer with Negative Amount

**Module:** Transfers
**Title:** System rejects transfer when the amount is negative
**Priority:** Medium
**Scenario Type:** Negative / Validation
**Test Type:** Functional / Boundary
**Automation Candidate:** Yes
**Requirement Reference:** TRF-002
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least two active accounts.
* The browser is on the **Transfer Funds** page.
* Current balances for source and destination accounts are recorded before execution.

### Test Data

* **Source Account:** Any active customer account
* **Destination Account:** Another active customer account
* **Amount:** `-50.00`

### Steps

1. Navigate to **Transfer Funds**.
2. Enter amount `-50.00`.
3. Select the source account.
4. Select the destination account.
5. Click the **Transfer** button.

### Expected Result

* The transfer is not completed.
* The system displays a validation error message for invalid amount.
* The source account balance remains unchanged.
* The destination account balance remains unchanged.
* No transaction is created for the rejected transfer.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Compare account balances with the balances recorded before execution.

---

## TC-009 — Transfer with Insufficient Balance

**Module:** Transfers
**Title:** System rejects transfer when the source account balance is insufficient
**Priority:** High
**Scenario Type:** Negative / Boundary
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** TRF-003
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least two active accounts.
* The source account balance is lower than the transfer amount.
* Current balances for source and destination accounts are recorded before execution.

### Test Data

* **Source Account:** Account with balance lower than `$50.00`
* **Destination Account:** Another active customer account
* **Amount:** `$50.00`

### Steps

1. Navigate to **Transfer Funds**.
2. Enter amount `$50.00`.
3. Select the source account with insufficient balance.
4. Select the destination account.
5. Click the **Transfer** button.

### Expected Result

* The transfer is not completed.
* The system displays an insufficient funds or validation error message.
* The source account balance remains unchanged.
* The destination account balance remains unchanged.
* No transaction is created for the rejected transfer.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Compare account balances with the balances recorded before execution.

---

## TC-010 — View Transaction History

**Module:** Transactions
**Title:** Customer can view transaction history for an account
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** TXN-001
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has at least one account.
* The selected account has at least one transaction.

### Test Data

* **Account:** Account with existing transactions

### Steps

1. Log in with a valid registered customer.
2. Navigate to **Accounts Overview**.
3. Click an account number with existing transactions.
4. Review the transaction section or transaction list.

### Expected Result

* The account details page is displayed.
* The transaction history for the selected account is visible.
* Each transaction displays relevant information such as date, transaction type and amount.
* Transaction amounts are displayed in currency format.
* The page does not display transactions from unrelated accounts.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No data should be changed by this test case.

---

## TC-011 — Search Transactions by Amount

**Module:** Transactions
**Title:** Customer can search transactions by amount
**Priority:** Medium
**Scenario Type:** Positive
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** TXN-002
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer has an account with at least one transaction.
* At least one transaction with the selected amount exists for the account.

### Test Data

* **Account:** Account with known transaction amount
* **Amount:** `50.00`

### Steps

1. Log in with a valid registered customer.
2. Navigate to **Find Transactions**.
3. Select an account from the account dropdown.
4. Enter amount `50.00` in the amount search field.
5. Click the search button related to amount search.

### Expected Result

* The system displays transactions matching the searched amount for the selected account.
* Search results show relevant transaction details such as date, type and amount.
* Transactions from other accounts are not displayed.
* No application error is displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* No data should be changed by this test case.

---

## TC-012 — Empty Transaction History for a Newly Created Account

**Module:** Transactions
**Title:** Newly created account displays a valid transaction history state
**Priority:** Medium
**Scenario Type:** Edge Case
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** TXN-003
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* A new account has been created during the current test execution.
* No manual transfer or bill payment has been performed using the new account after creation.

### Test Data

* **Account:** Newly created account from TC-004 or equivalent setup

### Steps

1. Create a new account using valid data.
2. Navigate to **Accounts Overview**.
3. Click the newly created account number.
4. Review the transaction history section.

### Expected Result

* The account details page for the new account is displayed.
* The transaction history section loads without error.
* If no transactions exist, an empty state or no transaction rows are displayed.
* If the application creates an initial funding transaction, that transaction is displayed correctly.
* No unrelated account transactions are displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Record whether the environment creates an initial transaction for newly opened accounts.

---

## TC-013 — Update Contact Information with Valid Data

**Module:** Customer Profile
**Title:** Customer can successfully update contact information with valid data
**Priority:** High
**Scenario Type:** Positive / Happy Path
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** PRF-001
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer is on the authenticated area.
* Current customer contact information is recorded before execution.

### Test Data

* **First Name:** `John`
* **Last Name:** `Smith`
* **Address:** `QA Street 123`
* **City:** `Rotterdam`
* **State:** `ZH`
* **Zip Code:** `3011AA`
* **Phone:** `+31612345678`

### Steps

1. Log in with a valid registered customer.
2. Navigate to **Update Contact Info**.
3. Update the first name field with `John`.
4. Update the last name field with `Smith`.
5. Update the address field with `QA Street 123`.
6. Update the city field with `Rotterdam`.
7. Update the state field with `ZH`.
8. Update the zip code field with `3011AA`.
9. Update the phone field with `+31612345678`.
10. Click the update or submit button.

### Expected Result

* The contact information is updated successfully.
* A success confirmation message is displayed.
* Updated information is saved.
* Updated information is displayed when the customer opens the contact information page again.
* No validation error message is displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Restore the original customer contact information after execution if needed.

---

## TC-014 — Update Contact Information with Invalid Phone Format

**Module:** Customer Profile
**Title:** System validates invalid phone format when updating contact information
**Priority:** Medium
**Scenario Type:** Negative / Validation
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** PRF-002
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer is on the **Update Contact Info** page.
* Current customer contact information is recorded before execution.

### Test Data

* **Phone:** `invalid_phone`

### Steps

1. Navigate to **Update Contact Info**.
2. Replace the current phone value with `invalid_phone`.
3. Keep all other required fields filled with valid data.
4. Click the update or submit button.

### Expected Result

* If phone format validation is implemented, the update is rejected and a validation message is displayed.
* If phone format validation is not implemented, the value is saved and the behavior is documented as an application observation.
* Required customer data is not removed or corrupted.
* No application crash or server error is displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Restore the original phone value if it was saved by the application.

---

## TC-015 — Update Contact Information with Empty Required Fields

**Module:** Customer Profile
**Title:** System rejects contact information update when required fields are empty
**Priority:** Medium
**Scenario Type:** Negative / Required Field Validation
**Test Type:** Functional
**Automation Candidate:** Yes
**Requirement Reference:** PRF-003
**Status:** Not Executed

### Pre-conditions

* The customer is logged in.
* The customer is on the **Update Contact Info** page.
* Current customer contact information is recorded before execution.

### Test Data

* **First Name:** Empty
* **Last Name:** Empty
* **Address:** Valid existing value
* **City:** Valid existing value
* **State:** Valid existing value
* **Zip Code:** Valid existing value
* **Phone:** Valid existing value

### Steps

1. Navigate to **Update Contact Info**.
2. Clear the first name field.
3. Clear the last name field.
4. Keep all other required fields filled with valid values.
5. Click the update or submit button.

### Expected Result

* The contact information update is not completed.
* The system displays validation messages for the empty required fields.
* Previous customer information is retained.
* No partial update is saved.
* No application crash or server error is displayed.

### Actual Result

* Not executed.

### Evidence

* Not captured yet.

### Post-condition

* Confirm that the original first name and last name are still saved.

---

# Suggested Evidence Naming Convention

```text
TC-001_login_valid_credentials_pass.png
TC-002_login_incorrect_password_pass.png
TC-004_open_new_account_confirmation_pass.png
TC-007_transfer_funds_before_balances.png
TC-007_transfer_funds_confirmation.png
TC-007_transfer_funds_after_balances.png
```

---

# Review Notes

* Test cases are written to be clear, reproducible and suitable for manual execution.
* Expected results avoid vague alternatives where possible.
* Financial scenarios include balance verification before and after execution.
* Tests that change data include post-conditions.
* Some expected results should be refined after the first real execution against the ParaBank demo environment.
* Any mismatch between expected result and actual ParaBank behavior should be documented as a bug, limitation, observation or test case adjustment depending on the requirement.
