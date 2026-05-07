# ParaBank Bug Reports

**Version:** 1.3  
**Last Updated:** May 2026  
**Document Type:** Bug Reports  
**Application Under Test:** ParaBank Demo Banking Application  
**Execution Mode:** Manual Testing + Cypress UI Automation + Exploratory Testing  
**Prepared By:** Mariana  
**Document Status:** Completed — Manual Findings, Cypress Known Bug Mapping, and Exploratory Retest Notes  

---

## 1. Purpose

This document records confirmed bugs and relevant observations found during the manual and exploratory testing phases of the ParaBank QA Portfolio project. It also documents how confirmed bugs are represented in the Cypress automation suite.

The goal is to document issues clearly, consistently, and professionally, including reproduction steps, expected result, actual result, severity, priority, environment, impact, and screenshot evidence.

This document supports the following project artifacts:

- `docs/TEST_PLAN.md`
- `docs/TEST_STRATEGY.md`
- `docs/test-cases/PARABANK_15_TEST_CASES_EN.md`
- `docs/TEST_SUMMARY_REPORT.md`
- `Automation/`

---

## 2. Current Bug Status

The first manual execution cycle identified confirmed bugs and observations. Later exploratory testing sessions provided additional retest context for existing bugs and recorded new observations.

### Summary

- **Manual Bugs:** 3
- **Manual Observations:** 2
- **Exploratory Observations:** 4
- **Total Observations:** 6
- **Existing Bugs Confirmed by Exploratory Testing:** 2
- **Existing Bugs Not Reproduced by Exploratory Testing:** 1
- **Linked Exploratory Impact Evidence Items:** 2
- **Critical Bugs:** 3
- **High Bugs:** 0
- **Medium Bugs:** 0
- **Low Bugs:** 0

### Confirmed Bugs

| Bug ID | Related Test Case | Module | Severity | Priority | Status |
|---|---|---|---|---|---|
| BUG-001 | TC-002 | Authentication | Critical | P0 | Needs Retest |
| BUG-002 | TC-008 | Transfers | Critical | P0 | Open |
| BUG-003 | TC-009 | Transfers | Critical | P0 | Open |

### Observations

| Observation ID | Source | Related Test Case / Session | Module | Risk / Priority | Status |
|---|---|---|---|---|---|
| OBS-001 | Manual + Exploratory | TC-006 / EXP-001 | Accounts / Security | Low / P2 | Observation Confirmed |
| OBS-002 | Manual | TC-014 | Customer Profile | Low / P3 | Observation |
| OBS-003 | Exploratory | EXP-001 | Authentication / Session | High / P1 | New Observation |
| OBS-004 | Exploratory | EXP-003 | Transfers / Validation | Medium / P2 | New Observation |
| OBS-005 | Exploratory | EXP-003 | Transfers / Validation | Medium / P2 | New Observation |
| OBS-006 | Exploratory | EXP-003 | Transfers / Validation | Medium / P2 | New Observation |

### Linked Exploratory Impact Evidence

The following EXP-003 findings are treated as impact evidence linked to BUG-003 and related transfer validation issues, not as separate standalone observations in the project metrics.

| Evidence ID | Related Session | Related Issue | Module | Evidence |
|---|---|---|---|---|
| OBS-007 | EXP-003 | BUG-003 / transfer validation impact | Transactions / Transfer History | `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png` |
| OBS-008 | EXP-003 | BUG-003 / transfer validation impact | Accounts / Balance Consistency | `evidences/screenshots/exploratory/EXP-003_final_balances.png` |

### Cypress Known Bug Mapping

The Cypress automation suite maps the confirmed bugs from the manual cycle as pending/skipped known-bug scenarios. This keeps the regression suite stable while preserving coverage visibility for the known defects.

BUG-001 was reproduced during the manual cycle and was not reproduced during exploratory session EXP-001. Its status remains `Needs Retest` until the behavior is consistently retested. TC-002 remains a pending/skipped known-bug Cypress scenario until the documentation and automation strategy are updated after consistent retest results.

Latest full Cypress suite result:

- **Automated scenarios mapped:** 15
- **Passing:** 12
- **Pending known bugs:** 3
- **Failing:** 0

| Test Case | Related Bug | Cypress Spec | Automation Status |
|---|---|---|---|
| TC-002 | BUG-001 | `authentication.cy.js` | Pending / Skipped Known Bug |
| TC-008 | BUG-002 | `transfers.cy.js` | Pending / Skipped Known Bug |
| TC-009 | BUG-003 | `transfers.cy.js` | Pending / Skipped Known Bug |

No new confirmed bugs were identified during the Cypress automation cycle.

### Exploratory Retest Summary

Exploratory testing added retest context for existing bugs and identified new observations.

| Finding | Exploratory Session | Result | Evidence |
|---|---|---|---|
| BUG-001 | EXP-001 | Not reproduced. Incorrect password was rejected as expected. | `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png` |
| BUG-002 | EXP-003 | Confirmed. Negative transfer amount was accepted and processed. | `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png` |
| BUG-003 | EXP-003 | Confirmed. Insufficient balance and very large transfers were accepted and processed. | `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png`, `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png` |
| OBS-001 | EXP-001 | Confirmed. Direct unauthenticated access was blocked with a generic internal error message. | `evidences/screenshots/exploratory/EXP-001_direct_url_access_obs001.png` |

EXP-003 also produced transaction-history and final-balance evidence showing the impact of invalid transfer processing. These are linked to BUG-003 and related transfer validation issues rather than counted as separate standalone observations.


---

## 3. Bug Reporting Guidelines

A bug should be documented when the actual behavior differs from the expected behavior defined in the test case or from reasonable application behavior.

Before creating a bug report:

- Reproduce the issue at least once.
- Confirm the test data used.
- Confirm the test environment.
- Capture screenshot evidence.
- Check whether the issue is a real bug, a test data issue, an environment issue, or a test case expectation that needs to be updated.

If the behavior is unclear, document it as an observation until it can be confirmed.

---

## 4. Severity Levels

Severity describes the impact of the issue on the application or user flow.

| Severity | Definition | Example |
|---|---|---|
| Critical | Core functionality is blocked, restricted access fails, or simulated financial data becomes inconsistent | Incorrect password authenticates a user |
| High | Major functionality fails with significant user impact | Balance is not updated after a valid transfer |
| Medium | Feature partially fails, validation is unclear, or user flow is affected but not blocked | Required field error message is missing |
| Low | Minor usability, wording, or cosmetic issue | Label is unclear or layout is slightly misaligned |

---

## 5. Priority Levels

Priority describes how urgently the issue should be addressed.

| Priority | Definition | Example |
|---|---|---|
| P0 | Must be addressed immediately because it blocks a critical flow or creates high risk | Authentication bypass |
| P1 | Should be addressed before final reporting or release decision | Incorrect account balance after transfer |
| P2 | Should be addressed in a normal improvement cycle | Search result message is unclear |
| P3 | Can be addressed when time allows | Minor visual inconsistency |

---

## 6. Bug Status Legend

| Status | Meaning |
|---|---|
| New | Bug has been identified and documented |
| Open | Bug is confirmed and still unresolved |
| In Review | Bug requires clarification or additional investigation |
| Retest | Bug is ready to be tested again after a fix or clarification |
| Needs Retest | Bug was previously reproduced, but the latest exploratory retest did not reproduce it consistently |
| Closed | Bug is resolved, accepted, or no longer reproducible |
| Not a Bug | Behavior is expected after review |
| Observation | Behavior is notable but not confirmed as a defect |
| Observation Confirmed | Previously documented observation was confirmed during exploratory testing |
| New Observation | New notable behavior was identified during exploratory testing |

---

## 7. Bug Report Template

Use the following structure for each confirmed bug.

## BUG-XXX — Short bug title

**Related Test Case:** TC-XXX  
**Module:** Module name  
**Severity:** Critical / High / Medium / Low  
**Priority:** P0 / P1 / P2 / P3  
**Status:** New / Open / In Review / Retest / Closed / Not a Bug / Observation  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Briefly describe the issue and the user impact.

### Pre-conditions

- Pre-condition 1
- Pre-condition 2
- Pre-condition 3

### Test Data

- Test data used during execution.
- Do not include real or reusable passwords in versioned documentation.

### Steps to Reproduce

1. Step one.
2. Step two.
3. Step three.
4. Step four.

### Expected Result

Describe what should happen.

### Actual Result

Describe what actually happened.

### Evidence

- Screenshot: `evidences/screenshots/BUG-XXX_short_description.png`

### Impact

Explain how this issue affects the user, business flow, data integrity, or test execution.

### Notes

Add any additional context, investigation notes, browser console information, or uncertainty.

---

## 8. Confirmed Bugs

---

## BUG-001 — User is authenticated with incorrect password

**Related Test Case:** TC-002  
**Module:** Authentication  
**Severity:** Critical  
**Priority:** P0  
**Status:** Needs Retest  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome Incognito Mode, ParaBank Demo Web Application  

### Summary

The system authenticates a registered user even when an incorrect password is provided. This allows access to the authenticated account area without valid credentials.

### Pre-conditions

- The user is not logged in.
- Browser is opened in incognito mode.
- The ParaBank login page is displayed.
- A valid registered username exists.

### Test Data

- **Username:** Valid registered username
- **Password:** Incorrect password

### Steps to Reproduce

1. Open Chrome in incognito mode.
2. Navigate to `https://parabank.parasoft.com/parabank/index.htm`.
3. Enter a valid registered username.
4. Enter an incorrect password.
5. Click the **Log In** button.

### Expected Result

- The user should not be authenticated.
- The system should display an authentication error message.
- The authenticated account services area should not be displayed.
- The `Accounts Overview` page should not be displayed.
- The `Log Out` option should not be visible.

### Actual Result

- The user was authenticated even with an incorrect password.
- The authenticated account services area was displayed.
- The `Accounts Overview` page was displayed.
- The welcome message was visible.
- The `Log Out` option was visible.
- No authentication error message was displayed.

### Evidence

- Screenshot: `evidences/screenshots/TC-002_login_incorrect_password_fail.png`

### Impact

This issue affects authentication reliability. If a user can access the system with an incorrect password, restricted account information may be exposed and the login validation flow cannot be trusted.

### Notes

The issue was reproduced in Chrome incognito mode, reducing the likelihood that the result was caused by an existing authenticated browser session.

---

### Retest Notes

| Retest ID | Related Session | Date | Result | Evidence | Notes |
|---|---|---|---|---|---|
| RT-001 | EXP-001 - Authentication and Session Access | May 2026 | Not Reproduced | `evidences/screenshots/exploratory/EXP-001_wrong_password_rejected.png` | During exploratory session EXP-001, the incorrect password scenario was not reproduced. The system rejected the invalid password as expected. |
---

## BUG-002 — Negative transfer amount is accepted and processed

**Related Test Case:** TC-008  
**Module:** Transfers  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system accepts and processes a negative transfer amount. Instead of rejecting the invalid amount, the application completes the transfer and updates both account balances.

### Pre-conditions

- The user is logged in.
- The user has at least two active accounts.
- Source and destination account balances are recorded before execution.

### Test Data

- **Source Account:** `14565`
- **Destination Account:** `15009`
- **Amount:** `-50.00`

### Steps to Reproduce

1. Log in with a valid customer.
2. Navigate to **Accounts Overview**.
3. Record the balances for accounts `14565` and `15009`.
4. Navigate to **Transfer Funds**.
5. Enter `-50.00` in the amount field.
6. Select account `14565` as the source account.
7. Select account `15009` as the destination account.
8. Click the **Transfer** button.
9. Return to **Accounts Overview** and compare the balances.

### Expected Result

- The transfer should not be completed.
- A validation error message should be displayed for the invalid amount.
- The source account balance should remain unchanged.
- The destination account balance should remain unchanged.
- No transaction should be created for the rejected transfer.

### Actual Result

- The transfer was completed successfully.
- The confirmation message `Transfer Complete!` was displayed.
- The system displayed `-$50.00 has been transferred from account #14565 to account #15009.`
- The source account balance changed from `$49750.00` to `$49800.00`.
- The destination account balance changed from `$250.00` to `$200.00`.
- No validation error message was displayed.

### Evidence

- Screenshot: `evidences/screenshots/TC-008_negative_transfer_before_balances.png`
- Screenshot: `evidences/screenshots/TC-008_negative_transfer_validation.png`
- Screenshot: `evidences/screenshots/TC-008_negative_transfer_after_balances.png`

### Impact

This issue affects the reliability of the transfer flow. Negative amounts should not be accepted because they can reverse the expected debit and credit behavior, causing incorrect account balance changes.

### Notes

This bug is classified as Critical because it affects simulated financial transaction logic and balance consistency.

---

### Exploratory Retest Notes

| Retest ID | Related Session | Date | Result | Evidence | Notes |
|---|---|---|---|---|---|
| RT-002 | EXP-003 - Transfers | May 2026 | Confirmed | `evidences/screenshots/exploratory/EXP-003_negative_amount_bug002.png` | During exploratory session EXP-003, a negative transfer amount of `-$10.00` was accepted and processed instead of being rejected. |

---

## BUG-003 — Transfer with insufficient balance is accepted and creates negative balance

**Related Test Case:** TC-009  
**Module:** Transfers  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system allows a transfer to be completed even when the source account does not have sufficient balance. As a result, the source account balance becomes negative.

### Pre-conditions

- The user is logged in.
- The user has at least two active accounts.
- Source and destination account balances are recorded before execution.
- Source account balance is lower than the transfer amount.

### Test Data

- **Source Account:** `15009`
- **Source Balance Before:** `$700.00`
- **Destination Account:** `14565`
- **Destination Balance Before:** `$49300.00`
- **Amount:** `$1000.00`

### Steps to Reproduce

1. Log in with a valid customer.
2. Navigate to **Accounts Overview**.
3. Confirm that account `15009` has a balance of `$700.00`.
4. Confirm that account `14565` has a balance of `$49300.00`.
5. Navigate to **Transfer Funds**.
6. Enter `1000.00` in the amount field.
7. Select account `15009` as the source account.
8. Select account `14565` as the destination account.
9. Click the **Transfer** button.
10. Return to **Accounts Overview** and compare the balances.

### Expected Result

- The transfer should not be completed.
- The system should display an insufficient funds or validation error message.
- The source account balance should remain `$700.00`.
- The destination account balance should remain `$49300.00`.
- No transaction should be created for the rejected transfer.

### Actual Result

- The transfer was completed successfully.
- The source account balance changed from `$700.00` to `-$300.00`.
- The destination account balance changed from `$49300.00` to `$50300.00`.
- No insufficient funds validation message was displayed.
- The system allowed the source account to become negative.

### Evidence

- Screenshot: `evidences/screenshots/TC-009_insufficient_balance_validation.png`
- Screenshot: `evidences/screenshots/TC-009_insufficient_balance_after_balances.png`

### Impact

This issue affects the reliability of the transfer flow. The system should prevent transfers that exceed the available source account balance. Allowing this operation creates incorrect financial behavior and negative account balances.

### Notes

This bug is classified as Critical because it affects simulated financial transaction validation and account balance integrity.

### Exploratory Retest Notes

| Retest ID | Related Session | Date | Result | Evidence | Notes |
|---|---|---|---|---|---|
| RT-003 | EXP-003 - Transfers | May 2026 | Confirmed | `evidences/screenshots/exploratory/EXP-003_insufficient_balance_bug003.png` | During exploratory session EXP-003, a transfer with insufficient balance was accepted instead of being rejected. |
| RT-004 | EXP-003 - Transfers | May 2026 | Confirmed | `evidences/screenshots/exploratory/EXP-003_large_amount_bug003.png` | During exploratory session EXP-003, a very large transfer amount was accepted instead of being rejected for insufficient balance. |

---

## 9. Observations

---

## OBS-001 — Restricted page access shows generic internal error message

**Related Test Case:** TC-006  
**Module:** Accounts / Security  
**Status:** Observation  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome Incognito Mode, ParaBank Demo Web Application  

### Summary

When an unauthenticated user accesses the Open New Account page directly, the system blocks access correctly, but displays the message `An internal error has occurred and has been logged.` instead of showing a clearer access restriction message or redirecting the user cleanly to the login page.

### Pre-conditions

- The user is not logged in.
- Browser is opened in incognito mode.
- The ParaBank login page is accessible.
- No authenticated session exists.

### Test Data

- **Direct URL:** `https://parabank.parasoft.com/parabank/openaccount.htm`

### Steps to Reproduce

1. Open Chrome in incognito mode.
2. Navigate directly to `https://parabank.parasoft.com/parabank/openaccount.htm`.
3. Observe the page displayed by the application.

### Expected Result

- The unauthenticated user should not access the account opening form.
- The system should redirect the user to the login page or display a clear access restriction message.
- No account creation controls should be available.
- No account should be created.

### Actual Result

- The unauthenticated user could not access the account opening form.
- The system displayed the message `An internal error has occurred and has been logged.`
- The login form remained visible.
- No account creation controls were available.
- No account was created.

### Evidence

- Screenshot: `evidences/screenshots/TC-006_access_open_account_without_authentication_pass.png`

### Impact

The access control behavior worked correctly because the restricted form was not exposed. However, the generic internal error message may confuse users and does not clearly explain that authentication is required.

### Notes

This is documented as an observation instead of a confirmed bug because the core access control expectation was met. The issue is related to error message clarity and user experience.

---

## OBS-002 — Invalid phone format is accepted during contact information update

**Related Test Case:** TC-014  
**Module:** Customer Profile  
**Status:** Observation  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system accepts the value `invalid_phone` in the phone field during contact information update. The profile update is completed successfully and no validation error message is displayed.

### Pre-conditions

- The user is logged in.
- The user is on the `Update Contact Info` page.
- All required fields are filled with valid data except the phone field.

### Test Data

- **Phone:** `invalid_phone`

### Steps to Reproduce

1. Log in with a valid customer.
2. Navigate to **Update Contact Info**.
3. Replace the current phone value with `invalid_phone`.
4. Keep all other required fields filled with valid data.
5. Click the update button.

### Expected Result

- If phone format validation is implemented, the system should reject the invalid phone format and display a validation message.
- If phone format validation is not implemented, the value may be saved and the behavior should be documented as an observation.
- Required customer data should not be removed or corrupted.
- No application crash or server error should be displayed.

### Actual Result

- The invalid phone value `invalid_phone` was accepted.
- The profile update was completed successfully.
- The success message `Profile Updated` was displayed.
- No validation error message was displayed.

### Evidence

- Screenshot: `evidences/screenshots/TC-014_invalid_phone_format_observation.png`

### Impact

The application allows non-phone text to be saved in the phone field. This may reduce contact data quality, but it does not block the user flow or cause an application error.

### Notes

This is documented as an observation instead of a confirmed bug because the current test case allows this behavior to be recorded when phone format validation is not implemented.

---

## OBS-003 — Browser Back after logout displays cached authenticated account information

**Related Session:** EXP-001  
**Module:** Authentication / Session  
**Status:** New Observation  
**Risk Level:** High  
**Priority:** P1  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

After logout, using the browser Back button displayed a cached authenticated Accounts Overview page with account balance and Account Services visible. However, attempting to access a protected action requested login, indicating the active session was not restored.

### Expected Result

- After logout, the user should not be able to view cached authenticated account information.
- Sensitive account data should not remain visible through browser Back navigation.
- Protected actions should require authentication.

### Actual Result

- The cached Accounts Overview page was displayed after using the browser Back button.
- Account balance and Account Services were visible.
- Protected actions requested login, indicating that the active session was not restored.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-001_browser_back_after_logout.png`

### Impact

This behavior may expose sensitive account information through cached browser content after logout. Although protected actions required authentication, account data visibility after logout is still a security and privacy concern.

### Notes

This is documented as an observation because the active session was not restored and protected actions required login.

---

## OBS-004 — Invalid transfer amount inputs display generic internal error messages

**Related Session:** EXP-003  
**Module:** Transfers / Validation  
**Status:** New Observation  
**Risk Level:** Medium  
**Priority:** P2  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Empty and non-numeric transfer amount inputs were not processed, but the system displayed a generic internal error message instead of a clear validation message.

### Expected Result

- Empty amount should be rejected with a clear validation message.
- Non-numeric amount should be rejected with a clear validation message.
- The message should explain the affected field or action.

### Actual Result

- Empty amount was rejected with the message `An internal error has occurred and has been logged.`
- Non-numeric amount was rejected with the same generic internal error message.
- The message did not clearly identify the amount field or the validation issue.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-003_empty_amount.png`
- Screenshot: `evidences/screenshots/exploratory/EXP-003_non_numeric_amount.png`

### Impact

The transfer was not processed, which protects the financial operation. However, the generic internal error message may confuse users and does not provide clear guidance for correcting the input.

---

## OBS-005 — Zero-value transfer is accepted and processed

**Related Session:** EXP-003  
**Module:** Transfers / Validation  
**Status:** New Observation  
**Risk Level:** Medium  
**Priority:** P2  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system accepted and processed a zero-value transfer.

### Expected Result

- A zero-value transfer should be rejected or clearly explained as not allowed.
- The system should prevent transactions that do not move monetary value.

### Actual Result

- The transfer of `$0.00` was accepted and processed.
- The system displayed a transfer confirmation message.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-003_zero_amount.png`

### Impact

This behavior does not directly change the monetary balance, but it may create unnecessary transaction records and indicates weak validation around transfer amount rules.

---

## OBS-006 — Same-account transfer is accepted and processed

**Related Session:** EXP-003  
**Module:** Transfers / Validation  
**Status:** New Observation  
**Risk Level:** Medium  
**Priority:** P2  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

The system accepted and processed a transfer where the source and destination account were the same.

### Expected Result

- The system should prevent or reject transfers where the source and destination account are the same.
- A clear validation message should explain the issue.

### Actual Result

- A transfer to the same account was accepted and processed.
- The system displayed a transfer confirmation message.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-003_same_account_transfer.png`

### Impact

Same-account transfers do not provide meaningful financial value and may create unnecessary or confusing transaction records. This indicates weak validation in the transfer flow.

---

## OBS-007 — Linked impact evidence: transaction history displays records for invalid or questionable transfer attempts

**Related Session:** EXP-003  
**Module:** Transactions / Transfer History  
**Status:** Linked Impact Evidence  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Transaction history displayed records for invalid or questionable transfer attempts, including zero-value, very large, and same-account transfers. This is tracked as impact evidence linked to BUG-003 and related transfer validation issues, not as a separate standalone observation in the project metrics.

### Expected Result

- Invalid transfer attempts should not be recorded as successful transactions.
- Questionable transactions should be prevented or clearly validated before appearing in account activity.

### Actual Result

- Transaction history displayed records related to invalid or questionable transfer attempts performed during the exploratory session.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-003_transaction_history_after_invalid_attempts.png`

### Impact

The transaction history may become unreliable if invalid or questionable operations are recorded as successful activity. This supports the impact analysis for BUG-003 and related transfer validation weaknesses.

---

## OBS-008 — Linked impact evidence: final balances show extreme values after invalid transfer attempts

**Related Session:** EXP-003  
**Module:** Accounts / Balance Consistency  
**Status:** Linked Impact Evidence  
**Reported By:** Mariana  
**Reported Date:** May 2026  
**Environment:** Windows 11, Chrome, ParaBank Demo Web Application  

### Summary

Final account balances showed extreme negative and positive values after invalid or questionable transfer attempts were processed. This is tracked as impact evidence linked to BUG-003 and related transfer validation issues, not as a separate standalone observation in the project metrics.

### Expected Result

- Invalid or questionable transfers should not create unrealistic account balances.
- Final balances should remain consistent with valid transactions only.

### Actual Result

- One account displayed an extreme negative balance.
- Another account displayed an extreme positive balance.
- The total balance remained `$515.00`, but individual account balances became unrealistic.

### Evidence

- Screenshot: `evidences/screenshots/exploratory/EXP-003_final_balances.png`

### Impact

Extreme account balances indicate that invalid or questionable transfer attempts affected individual account state. This reinforces the risk already identified in BUG-003 and related transfer validation weaknesses.

---

## 10. Evidence Naming Convention

Recommended file naming pattern:

- `TC-002_login_incorrect_password_fail.png`
- `TC-006_access_open_account_without_authentication_pass.png`
- `TC-008_negative_transfer_validation.png`
- `TC-009_insufficient_balance_validation.png`
- `TC-014_invalid_phone_format_observation.png`

Recommended folder:

- `evidences/screenshots/`

---

## 11. Bug Review Checklist

Before marking a bug as confirmed, verify:

- [x] The issue is reproducible.
- [x] The related test case is identified.
- [x] The expected result is clear.
- [x] The actual result is documented.
- [x] Severity is assigned.
- [x] Priority is assigned.
- [x] Environment is documented.
- [x] Evidence is attached or referenced.
- [x] The issue is not caused by incorrect test data.
- [x] The issue is not caused by an outdated test case expectation.

---

## 12. Retest Checklist

When retesting a bug:

- [ ] Re-run the original steps to reproduce.
- [ ] Use the same or equivalent test data.
- [ ] Confirm whether the actual result now matches the expected result.
- [ ] Capture new evidence.
- [ ] Update the bug status.
- [ ] Run related regression tests if needed.
- [ ] Update affected test cases if the expected behavior changed.

---

## 13. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Initial bug reports document with template, severity, priority, examples, and evidence guidelines |
| 1.1 | May 2026 | Mariana | Updated after first manual execution cycle with confirmed bugs and observations |
| 1.2 | May 2026 | Mariana | Added Cypress known bug mapping for confirmed manual defects |
| 1.3 | May 2026 | Mariana | Refined exploratory metrics, BUG-001 retest status, observation risk classification, and linked impact evidence for EXP-003 |

---

**Document Classification:** QA Portfolio Documentation  
**Audience:** QA Engineers, Technical Reviewers, Hiring Managers  
**Last Review:** May 2026
