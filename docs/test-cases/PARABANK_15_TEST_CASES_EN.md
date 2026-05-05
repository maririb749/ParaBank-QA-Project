

--- TC-001: Login with Valid Credentials ---



ID: TC-001

Title: User can successfully log in with valid credentials

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is registered in the system

- User is not logged in

- Browser is on login page



Test Data:

del- Username: parabank

- Password: parabank



Steps:

1. Navigate to https://parabank.parasoft.com

2. Enter username: parabank

3. Enter password: parabank

4. Click "Log In" button



Expected Result:

- Login is successful

- User is redirected to authenticated dashboard

- User name appears in top navigation bar

- "Log Out" option is visible



Status: Not executed

Actual Result: -



---



--- TC-002: Login with Incorrect Password ---



ID: TC-002

Title: System rejects login with incorrect password

Priority: High

Scenario: Negative



Pre-conditions:

- User is registered in the system

- User is not logged in

- Browser is on login page



Test Data:

- Username: parabank

- Password: wrong_password



Steps:

1. Navigate to https://parabank.parasoft.com

2. Enter username: parabank

3. Enter password: wrong_password

4. Click "Log In" button



Expected Result:

- Login is rejected

- Error message is displayed: "The username and password could not be verified."

- User remains on login page

- Password field is cleared



Status: Not executed

Actual Result: -



---



--- TC-003: Login with Empty Required Fields ---



ID: TC-003

Title: System rejects login with empty required fields

Priority: High

Scenario: Edge Case (Boundary)



Pre-conditions:

- User is not logged in

- Browser is on login page



Test Data:

- Username: (empty)

- Password: (empty)



Steps:

1. Navigate to https://parabank.parasoft.com

2. Leave "Username" field empty

3. Leave "Password" field empty

4. Click "Log In" button



Expected Result:

- Login is rejected

- Validation message appears for required fields

- Or generic error message is displayed

- User remains on login page



Status: Not executed

Actual Result: -



---



--- TC-004: Open New Account with Valid Data ---



ID: TC-004

Title: User can successfully open a new bank account with valid data

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User is on "Open New Account" page



Test Data:

- Account Type: Checking

- From Account: (auto-selected)



Steps:

1. Log in with valid credentials (TC-001)

2. Navigate to "Services" → "Open New Account"

3. Select "Checking" as account type

4. Select source account (if applicable)

5. Click "Open New Account" button



Expected Result:

- New account is created successfully

- Success message appears: "Congratulations, your account is now open."

- New account number is displayed

- Account appears in user's account list

- Initial balance is $0 or default value



Status: Not executed

Actual Result: -



---



--- TC-005: View Account Balance ---



ID: TC-005

Title: User can view account balance

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User has at least one account



Test Data:

- N/A



Steps:

1. Log in with valid credentials (TC-001)

2. Navigate to "Accounts Overview"

3. Click on an account from the list



Expected Result:

- Account details page is displayed

- Current balance is visible

- Balance is displayed in currency format (e.g., $1,234.56)

- Account type is shown

- Account number is shown



Status: Not executed

Actual Result: -



---



--- TC-006: Access Account Opening Without Authentication ---



ID: TC-006

Title: System redirects to login when accessing account opening without authentication

Priority: Medium

Scenario: Negative



Pre-conditions:

- User is not logged in

- User attempts to access "Open New Account" URL directly



Test Data:

- URL: https://parabank.parasoft.com/parabank/openaccount.htm



Steps:

1. Do not log in

2. Access URL directly: https://parabank.parasoft.com/parabank/openaccount.htm



Expected Result:

- User is redirected to login page

- Or message "Please log in" is displayed

- User cannot access the account opening form



Status: Not executed

Actual Result: -



---



COPY THIS ENTIRE BLOCK FOR JIRA DESCRIPTION:



--- TC-007: Transfer Money Between Accounts ---



ID: TC-007

Title: User can successfully transfer money between their accounts

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User has at least 2 accounts

- Source account has sufficient balance (> $100)



Test Data:

- Source Account: (account with balance)

- Destination Account: (another user account)

- Amount: $50.00



Steps:

1. Log in with valid credentials (TC-001)

2. Navigate to "Services" → "Transfer Funds"

3. Select source account (with balance)

4. Enter amount: $50.00

5. Select destination account

6. Click "Transfer" button



Expected Result:

- Transfer is successful

- Confirmation message appears with transaction ID

- Source account balance is reduced by $50.00

- Destination account balance is increased by $50.00

- Transaction appears in both accounts' history



Status: Not executed

Actual Result: -



---



--- TC-008: Transfer with Negative Amount ---



ID: TC-008

Title: System rejects transfer with negative amount

Priority: Medium

Scenario: Negative



Pre-conditions:

- User is logged in

- User has at least 2 accounts

- User is on "Transfer Funds" page



Test Data:

- Source Account: (any account)

- Amount: -$50.00

- Destination Account: (another account)



Steps:

1. Log in (TC-001)

2. Navigate to "Services" → "Transfer Funds"

3. Select source account

4. Enter amount: -50 (or -$50.00)

5. Select destination account

6. Click "Transfer" button



Expected Result:

- Transfer is rejected

- Error message is displayed: "Please enter a valid amount"

- Or: "Amount must be positive"

- Account balances remain unchanged

- Transaction does not appear in history



Status: Not executed

Actual Result: -



---



--- TC-009: Transfer with Insufficient Balance ---



ID: TC-009

Title: System rejects transfer when balance is insufficient

Priority: High

Scenario: Edge Case (Boundary)



Pre-conditions:

- User is logged in

- User has at least 2 accounts

- Source account has low balance ($10.00)



Test Data:

- Source Account: (account with balance = $10.00)

- Amount: $50.00

- Destination Account: (another account)



Steps:

1. Log in (TC-001)

2. Navigate to "Services" → "Transfer Funds"

3. Select source account (with $10.00)

4. Enter amount: $50.00

5. Select destination account

6. Click "Transfer" button



Expected Result:

- Transfer is rejected

- Error message is displayed: "Insufficient funds"

- Account balances remain unchanged

- Transaction does not appear in history



Status: Not executed

Actual Result: -



---



COPY THIS ENTIRE BLOCK FOR JIRA DESCRIPTION:



--- TC-010: View Transaction History ---



ID: TC-010

Title: User can view transaction history

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User has an account with transactions



Test Data:

- N/A



Steps:

1. Log in (TC-001)

2. Navigate to "Accounts Overview"

3. Click on an account

4. Click "View Transaction Details" or open history



Expected Result:

- Transaction history is displayed

- List shows all account transactions

- Each transaction shows: Date, Type, Amount, Balance

- Transactions are in chronological order (most recent first)

- Dates are in correct format (MM/DD/YYYY)



Status: Not executed

Actual Result: -



---



--- TC-011: Filter Transaction History by Type ---



ID: TC-011

Title: User can filter transaction history by type

Priority: Medium

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User has an account with multiple transaction types

- User is viewing transaction history



Test Data:

- Filter: "Debit" or "Credit"



Steps:

1. Log in (TC-001)

2. Navigate to transaction history

3. Click on "Transaction Type" filter

4. Select "Debit"

5. Apply filter



Expected Result:

- Only debit transactions are displayed

- Credit transactions are hidden

- Total transaction count updates correctly

- Filter remains active until removed



Status: Not executed

Actual Result: -



---



--- TC-012: Empty Transaction History for New Account ---



ID: TC-012

Title: New account shows empty transaction history

Priority: Medium

Scenario: Edge Case (Boundary)



Pre-conditions:

- User is logged in

- User just opened a new account (TC-004)



Test Data:

- N/A



Steps:

1. Log in (TC-001)

2. Open new account (TC-004)

3. Navigate to "Accounts Overview"

4. Click on the newly created account

5. Try to view transaction history



Expected Result:

- Transaction history page is displayed

- Message "No transactions found" or empty list appears

- No errors or crashes occur

- Transaction filters do not cause errors



Status: Not executed

Actual Result: -



---





--- TC-013: Update Personal Information ---



ID: TC-013

Title: User can successfully update personal information

Priority: High

Scenario: Positive (Happy Path)



Pre-conditions:

- User is logged in

- User is on "Profile" page



Test Data:

- First Name: "John"

- Last Name: "Smith"

- Phone: "+31 6 12345678"

- Email: "john.smith@example.com"



Steps:

1. Log in (TC-001)

2. Navigate to "Services" → "Update Profile" or "My Profile"

3. Enter First Name: "John"

4. Enter Last Name: "Smith"

5. Enter Phone: "+31 6 12345678"

6. Enter Email: "john.smith@example.com"

7. Click "Update Profile" button



Expected Result:

- Profile is updated successfully

- Confirmation message appears: "Profile updated successfully"

- Updated information appears in future profile views

- Email and phone are saved correctly



Status: Not executed

Actual Result: -



---



--- TC-014: Invalid Email in Profile Update ---



ID: TC-014

Title: System rejects invalid email format in profile update

Priority: Medium

Scenario: Negative



Pre-conditions:

- User is logged in

- User is on "Update Profile" page



Test Data:

- Email: "invalid_email" (missing @)

- Email: "email@" (missing domain)

- Email: "@example.com" (missing user)



Steps:

1. Log in (TC-001)

2. Navigate to "Services" → "Update Profile"

3. Enter Email: "invalid_email"

4. Click "Update Profile" button



Expected Result:

- Update is rejected

- Validation message appears: "Please enter a valid email address"

- Profile is not updated

- Previous email is retained



Status: Not executed

Actual Result: -



---



--- TC-015: Update Profile with Empty Required Fields ---



ID: TC-015

Title: System rejects profile update with empty required fields

Priority: Medium

Scenario: Edge Case (Boundary)



Pre-conditions:

- User is logged in

- User is on "Update Profile" page



Test Data:

- First Name: (empty)

- Last Name: (empty)



Steps:

1. Log in (TC-001)

2. Navigate to "Services" → "Update Profile"

3. Clear "First Name" field

4. Clear "Last Name" field

5. Fill in other fields correctly

6. Click "Update Profile" button



Expected Result:

- Update is rejected

- Validation message appears for required fields

- Profile is not updated

- Previous information is retained



Status: Not executed

Actual Result: -





