# ParaBank Exploratory Testing

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Exploratory Testing Template  
**Status:** Planned / Ready for Execution  
**Prepared By:** Mariana  
**Last Updated:** May 2026  

---

## Purpose

This document defines exploratory testing charters for the ParaBank QA Portfolio project.

Exploratory testing is used to investigate risks, unexpected behavior, usability concerns, and workflow gaps that may not be fully covered by scripted test cases.

This document is currently a planned execution template. It does not claim that exploratory testing has been fully executed.

---

## Execution Details

| Field | Details |
|---|---|
| Execution Date | To be completed during execution |
| Tester | Mariana |
| Environment | ParaBank public demo environment |
| Browser | To be completed during execution |
| Operating System | To be completed during execution |
| Session Duration | To be completed during execution |
| Evidence Folder | `evidences/screenshots/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md` |

---

## Session Status Legend

| Status | Meaning |
|---|---|
| Planned | Session has not been executed yet |
| Priority for Initial Execution | Session is planned as part of the first exploratory cycle |
| In Progress | Session is currently being executed |
| Completed | Session was executed and notes were recorded |
| Blocked | Session could not be completed due to environment or data issues |


---

## Exploratory Charters

| Charter ID | Area | Mission | Risk Focus | Status |
|---|---|---|---|---|
| EXP-001 | Authentication and Session Access | Explore login, logout, direct URLs, browser back behavior, and unauthenticated access paths | Unauthorized access, confusing session state, poor error handling | Priority for Initial Execution |
| EXP-002 | Accounts and Balances | Explore account creation, account overview, account details, balance display, and navigation between accounts | Incorrect balance visibility, broken account navigation, unclear account state | Planned |
| EXP-003 | Transfers | Explore valid and invalid transfer behavior, amount input variations, source and destination selection, and balance changes | Invalid financial operations, incorrect balance changes, unclear validation | Priority for Initial Execution |
| EXP-004 | Transactions | Explore account activity, search by amount, transaction result states, and navigation from transaction results | Missing transactions, unrelated results, unclear empty states | Planned |
| EXP-005 | Customer Profile | Explore contact information editing, required fields, invalid values, persistence, and validation clarity | Data quality issues, incomplete validation, unexpected profile changes | Planned |

---

## Initial Execution Scope

The first exploratory cycle will focus on:

- EXP-001 - Authentication and Session Access
- EXP-003 - Transfers

These areas are prioritized for initial execution because they have the highest business and security risk in the current project scope. Authentication controls access to all authenticated banking workflows, while transfer behavior directly affects account balances and simulated financial operations.

These areas also already contain confirmed bugs in the documented manual testing cycle:

- BUG-001 - User is authenticated with incorrect password
- BUG-002 - Negative transfer amount is accepted and processed
- BUG-003 - Transfer with insufficient balance is accepted and creates negative balance

This section defines the planned priority for the first exploratory cycle only. It does not indicate that any exploratory session has been executed yet.

---

## Session Template

## EXP-XXX - Session Title

**Status:** Planned / In Progress / Completed / Blocked  
**Execution Date:** To be completed  
**Tester:** Mariana  
**Browser:** To be completed  
**Operating System:** To be completed  
**Session Duration:** To be completed  

### Charter

Describe the mission of the exploratory session.

### Scope

- Area or feature under exploration.
- Related user workflows.
- Related scripted test cases, if applicable.

### Test Data

- User account used.
- Account numbers used.
- Transfer amounts or profile data used.
- Any setup notes.

### Checks Performed

- Check 1.
- Check 2.
- Check 3.

### Results

| Check | Result | Notes |
|---|---|---|
| To be completed | Not Executed | To be completed during execution |

### Observations

- To be completed during execution.

### Bugs Found

| Bug ID | Summary | Severity | Priority | Evidence |
|---|---|---|---|---|
| To be completed | N/A | N/A | N/A | N/A |

### Evidence

- To be completed during execution.

### Follow-Up Ideas

- Additional scenario or risk to test.
- Potential scripted regression candidate.
- Documentation update needed.

---

## Execution Summary

| Metric | Total |
|---|---:|
| Sessions Planned | 5 |
| Sessions Executed | 0 |
| Sessions Blocked | 0 |
| Bugs Found | 0 |
| Observations Recorded | 0 |

---

## Notes

- This document should be updated only after exploratory sessions are executed.
- Any confirmed defect should be documented in `docs/BUG_REPORTS.md`.
- Any new scripted regression candidate should be added to the test backlog or future coverage notes.
