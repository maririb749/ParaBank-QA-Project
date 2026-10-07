# ParaBank Accessibility Checklist

**Project:** ParaBank QA Portfolio  
**Application Under Test:** ParaBank Demo Banking Application  
**Document Type:** Accessibility Checklist (WCAG 2.1)  
**Version:** 1.1  
**Status:** Smoke Executed + WCAG 2.1 Re-test Executed / Full Checklist Partially Executed  
**Prepared By:** Mariana  
**Last Updated:** October 2026  

---

## Purpose

This checklist defines accessibility checks for the ParaBank QA Portfolio project.

The goal is to assess basic accessibility risks around keyboard navigation, focus visibility, form usability, error messages, labels, contrast, link purpose, page language, and text alternatives.

Each check is mapped to the related WCAG 2.1 success criteria and conformance level (A or AA).

This document does not claim full WCAG compliance. It records a basic accessibility smoke execution and a targeted WCAG 2.1 re-test of the login area. It is not a full accessibility audit.

---

## Execution Details

| Field | Execution 1 — Smoke Test | Execution 2 — WCAG 2.1 Re-test |
|---|---|---|
| Execution Date | 2026-05-11 | 2026-10-07 |
| Tester | Mariana | Mariana |
| Environment | ParaBank public demo environment | ParaBank public demo environment |
| Browser | Chrome | Google Chrome 152 (DevTools 152) |
| Operating System | Windows | Windows 11 |
| Pages Tested | Public login page and visible navigation elements | `index.htm` (public login page) and `login.htm` (login error page after an invalid login) |
| Method | Manual: keyboard navigation and visual inspection | Automated: Lighthouse accessibility audit. Manual: DevTools style inspection and WebAIM Contrast Checker |
| Tools | Keyboard navigation, Chrome DevTools, visual inspection | Chrome DevTools, Lighthouse, WebAIM Contrast Checker |
| Lighthouse Runs | N/A | Navigation mode on `index.htm` at 13:19:54 and 13:33:52 (both scored 43/100). Snapshot mode on `login.htm` at 13:53:51 (6/13 audits passed). |
| Viewport | Desktop browser window | DevTools device toolbar enabled (responsive viewport, 459 px wide) |
| Evidence Folder | `evidences/screenshots/accessibility/` | `evidences/screenshots/accessibility/` |
| Related Test Documents | `docs/TEST_PLAN.md`, `docs/TEST_STRATEGY.md`, `docs/test-cases/PARABANK_15_TEST_CASES_EN.md` | `docs/TEST_SUMMARY_REPORT.md`, `docs/BUG_REPORTS.md` |

---

## Status Legend

| Status | Meaning |
|---|---|
| Not Executed | Check has not been performed |
| Passed | Check passed based on observed behavior |
| Failed | Check failed and is documented as an accessibility defect |
| Observation | Behavior is notable but not confirmed as a WCAG 2.1 AA failure |
| Not Applicable | Check does not apply to the tested page or flow |

---

## Scope

Execution 1 (May 2026) was a manual accessibility smoke test of the public login area and visible navigation elements.

Execution 2 (October 2026) re-tested the same login area against WCAG 2.1. It used a Lighthouse accessibility audit on the public login page and on the login error page, and a manual contrast verification of the login error message.

The full accessibility checklist remains available for future execution across the main ParaBank workflows already covered by the functional test suite:

- Login.
- Account overview.
- Open new account.
- Transfer funds.
- Find transactions.
- Update contact information.
- Error and validation messages.

---

## Accessibility Checklist

| Check ID | Area | Check | WCAG 2.1 Reference | Status | Result / Notes | Evidence |
|---|---|---|---|---|---|---|
| A11Y-001 | Keyboard Navigation | User can navigate the login form using only the keyboard | 2.1.1 Keyboard (A) | Passed | Login fields and submit button were reachable and the login form could be submitted using keyboard navigation. | `evidences/screenshots/accessibility/A11Y-001-login-keyboard-navigation.png` |
| A11Y-002 | Keyboard Navigation | User can reach major authenticated navigation links using only the keyboard | 2.1.1 Keyboard (A) | Not Executed | Full authenticated navigation check remains future scope. | N/A |
| A11Y-003 | Focus Visibility | Interactive elements show a visible focus indicator | 2.4.7 Focus Visible (AA) | Observation | Focus indicator is present on the Log In button during keyboard navigation, so 2.4.7 is met. The indicator is subtle and could be stronger for better visibility. | `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png` |
| A11Y-004 | Forms | Login inputs have understandable labels or accessible names | 1.3.1 Info and Relationships (A), 3.3.2 Labels or Instructions (A), 4.1.2 Name, Role, Value (A) | Failed | Re-evaluated on 2026-10-07. The visible texts "Username" and "Password" are present (3.3.2 met visually), but they are not programmatically associated with the inputs. Lighthouse reported "Form elements do not have associated labels" for both login inputs. The May 2026 result (Passed) was based on visual inspection only. See A11Y-BUG-001. | `evidences/screenshots/accessibility/A11Y-004-login-form-labels.png`, `evidences/screenshots/accessibility/A11Y-LH-002-form-labels-missing.png` |
| A11Y-005 | Forms | Transfer form fields and dropdowns have understandable labels or context | 1.3.1 (A), 3.3.2 (A), 4.1.2 (A) | Not Executed | Transfer form accessibility check remains future scope. | N/A |
| A11Y-006 | Forms | Update contact information fields have understandable labels or context | 1.3.1 (A), 3.3.2 (A), 4.1.2 (A) | Not Executed | Profile form accessibility check remains future scope. | N/A |
| A11Y-007 | Error Messages | Login validation errors are visible and understandable | 3.3.1 Error Identification (A) | Passed | Invalid login feedback was visible and described the error in text. The contrast of this message is evaluated separately in A11Y-009. | `evidences/screenshots/accessibility/A11Y-007-login-error-message.png` |
| A11Y-008 | Error Messages | Form validation messages identify the affected field or action | 3.3.1 Error Identification (A), 3.3.3 Error Suggestion (AA) | Not Executed | Full form validation accessibility check remains future scope. | N/A |
| A11Y-009 | Visual Contrast | Primary text is readable against the page background | 1.4.3 Contrast (Minimum) (AA) | Failed | Executed on 2026-10-07. The login error message (`#FF0000` on white, 13 px normal text) has a contrast ratio of 3.99:1; WCAG AA requires 4.5:1. Lighthouse also reported insufficient contrast for the slogan, the service box captions, the news date, and footer text. See A11Y-BUG-002 and A11Y-BUG-004. | `evidences/screenshots/accessibility/A11Y-DT-001-error-message-color-devtools.png`, `evidences/screenshots/accessibility/A11Y-DT-002-error-message-contrast-webaim.png`, `evidences/screenshots/accessibility/A11Y-LH-005-contrast-login-page.png`, `evidences/screenshots/accessibility/A11Y-LH-005b-contrast-login-page-continued.png`, `evidences/screenshots/accessibility/A11Y-LH-006b-error-page-contrast.png` |
| A11Y-010 | Visual Contrast | Buttons and links have enough contrast to be distinguishable | 1.4.3 Contrast (Minimum) (AA), 1.4.11 Non-text Contrast (AA) | Failed | Executed on 2026-10-07 with Lighthouse. The footer text link `www.parasoft.com` failed 1.4.3. Non-text contrast (1.4.11) of buttons and input borders was not evaluated. See A11Y-BUG-004. | `evidences/screenshots/accessibility/A11Y-LH-005b-contrast-login-page-continued.png`, `evidences/screenshots/accessibility/A11Y-LH-006b-error-page-contrast.png` |
| A11Y-011 | Structure | Headings and page sections help users understand the current page | 1.3.1 Info and Relationships (A), 2.4.6 Headings and Labels (AA) | Observation | Automated check only (Lighthouse). Heading elements are not in a sequentially-descending order and the page has no main landmark. Lighthouse lists both as best practices, not as WCAG 2.1 AA failures. A manual heading review was not executed. See A11Y-OBS-002 and A11Y-OBS-004. | `evidences/screenshots/accessibility/A11Y-LH-008-best-practices.png` |
| A11Y-012 | Tables | Account and transaction tables are understandable and readable | 1.3.1 Info and Relationships (A) | Not Executed | Table accessibility check remains future scope. | N/A |
| A11Y-013 | Zoom / Reflow | Key pages remain usable when browser zoom is increased | 1.4.4 Resize Text (AA), 1.4.10 Reflow (AA) | Not Executed | Zoom and reflow check remains future scope. | N/A |
| A11Y-014 | Link Purpose | Navigation links clearly communicate their destination or purpose | 2.4.4 Link Purpose (In Context) (A), 4.1.2 Name, Role, Value (A) | Failed | Re-evaluated on 2026-10-07. The visible text links communicate their purpose, but Lighthouse reported one link without a discernible name: the image link to `admin.htm` in the top-left corner of the page header. The May 2026 result (Passed) covered visible text links only. See A11Y-BUG-005. | `evidences/screenshots/accessibility/A11Y-014-link-purpose.png`, `evidences/screenshots/accessibility/A11Y-LH-004-links-no-discernible-name.png`, `evidences/screenshots/accessibility/A11Y-LH-004b-admin-link-no-name-element.png` |
| A11Y-015 | Error Recovery | Users can recover from validation errors without losing required context | 3.3.1 Error Identification (A), 3.3.3 Error Suggestion (AA) | Not Executed | Error recovery check remains future scope. | N/A |
| A11Y-016 | Language | The page language is defined | 3.1.1 Language of Page (A) | Failed | Added and executed on 2026-10-07. The `<html>` element has no `lang` attribute (Lighthouse). Screen readers may read the page with the wrong language rules. See A11Y-BUG-003. | `evidences/screenshots/accessibility/A11Y-LH-007-html-lang-missing.png` |
| A11Y-017 | Images | Informative images have text alternatives | 1.1.1 Non-text Content (A) | Failed | Added and executed on 2026-10-07. The image inside the link to `admin.htm` (`img.admin`) has no `alt` attribute (Lighthouse). See A11Y-BUG-005. | `evidences/screenshots/accessibility/A11Y-LH-003-images-missing-alt.png` |

---

## Results Summary

| Metric | Total |
|---|---:|
| Checks Planned | 17 |
| Checks Executed | 10 |
| Passed | 2 |
| Failed | 6 |
| Observations | 2 |
| Not Applicable | 0 |
| Not Executed / Future Scope | 7 |
| Accessibility Defects | 5 |
| Lighthouse Accessibility Score (`index.htm`) | 43/100 |

Checks A11Y-004 and A11Y-014 changed from Passed (May 2026) to Failed (October 2026) after the WCAG 2.1 re-test. A11Y-009, A11Y-010, and A11Y-011 were executed for the first time in October 2026. A11Y-016 and A11Y-017 were added in October 2026.

---

## Lighthouse Results

| Run | Page | Mode | Result | Evidence |
|---|---|---|---|---|
| 2026-10-07 13:19:54 | `index.htm` | Navigation | Accessibility score 43/100 | `evidences/screenshots/accessibility/A11Y-LH-001-login-accessibility-score.png` |
| 2026-10-07 13:33:52 | `index.htm` | Navigation | Accessibility score 43/100 (same failing audits) | `evidences/screenshots/accessibility/A11Y-LH-003-images-missing-alt.png` |
| 2026-10-07 13:53:51 | `login.htm` (error page) | Snapshot | 6/13 audits passed | `evidences/screenshots/accessibility/A11Y-LH-006-error-page-snapshot-summary.png` |

Failing Lighthouse audits on both pages:

| Lighthouse Audit | Failing Elements | WCAG 2.1 Reference | Related Check |
|---|---|---|---|
| Form elements do not have associated labels | Username and Password inputs (`input.input`) | 1.3.1 (A), 4.1.2 (A) | A11Y-004 |
| Image elements do not have `[alt]` attributes | `img.admin` | 1.1.1 (A) | A11Y-017 |
| Links do not have a discernible name | `<a href="admin.htm">` | 2.4.4 (A), 4.1.2 (A) | A11Y-014 |
| Background and foreground colors do not have a sufficient contrast ratio | `p.caption`, `li.captionone`, `li.captiontwo`, `li.captionthree`, footer `li`, `ul.visit`, footer link `a` | 1.4.3 (AA) | A11Y-009, A11Y-010 |
| `<html>` element does not have a `[lang]` attribute | `html` | 3.1.1 (A) | A11Y-016 |

Lighthouse best-practice items (not WCAG 2.1 AA failures):

- Touch targets do not have sufficient size or spacing.
- Document does not have a main landmark.
- Heading elements are not in a sequentially-descending order.

The `index.htm` report also listed 10 additional items to check manually, 5 passed audits, and 49 not applicable audits.

Automated tools detect only a subset of accessibility issues. Lighthouse and the DevTools color picker could not evaluate the contrast of the login error message because of the page background image (`images/main-bg.gif`). This contrast was therefore verified manually (see Manual Verification).

---

## Manual Verification

| Item | Method | Result | Evidence |
|---|---|---|---|
| Login error message color and size | DevTools Styles panel on `p.error` | Text color `#FF0000` (rule `.error` in `style.css`), 13 px normal Arial. DevTools showed "No contrast information available" because of the background image. | `evidences/screenshots/accessibility/A11Y-DT-001-error-message-color-devtools.png` |
| Login error message contrast | WebAIM Contrast Checker, foreground `#FF0000`, background `#FFFFFF` | Contrast ratio 3.99:1. WCAG AA normal text: Fail. WCAG AAA normal text: Fail. | `evidences/screenshots/accessibility/A11Y-DT-002-error-message-contrast-webaim.png` |

Assumption: the background behind the error message was taken as white (`#FFFFFF`), because the background image only covers the page header area.

---

## Observations

| ID | Related Check | Summary | Impact | Evidence |
|---|---|---|---|---|
| A11Y-OBS-001 | A11Y-003 | Focus indicator is present on the Log In button, but it is subtle and could be stronger. | May make keyboard navigation less clear for some users. | `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png` |
| A11Y-OBS-002 | A11Y-011 | Heading elements are not in a sequentially-descending order (Lighthouse best practice). | May make page structure harder to understand for screen reader users who navigate by headings. | `evidences/screenshots/accessibility/A11Y-LH-008-best-practices.png` |
| A11Y-OBS-003 | N/A | Touch targets do not have sufficient size or spacing (Lighthouse best practice). This relates to WCAG 2.2 criterion 2.5.8 Target Size (Minimum), which is outside the WCAG 2.1 AA scope of this checklist. | May make links and buttons harder to activate on touch screens. | `evidences/screenshots/accessibility/A11Y-LH-008-best-practices.png` |
| A11Y-OBS-004 | A11Y-011 | Document does not have a main landmark (Lighthouse best practice). | Screen reader users cannot jump directly to the main content. | `evidences/screenshots/accessibility/A11Y-LH-008-best-practices.png` |

---

## Accessibility Defects

Severity and priority follow the definitions in `docs/BUG_REPORTS.md`.

| Defect ID | Related Check | Summary | WCAG 2.1 Reference | Severity | Priority | Status | Evidence |
|---|---|---|---|---|---|---|---|
| A11Y-BUG-001 | A11Y-004 | Login inputs have visible text labels but no programmatic labels, so screen readers cannot announce which field is Username and which is Password. | 1.3.1 (A), 4.1.2 (A) | High | P1 | Open | `evidences/screenshots/accessibility/A11Y-LH-002-form-labels-missing.png` |
| A11Y-BUG-002 | A11Y-009 | Login error message has insufficient contrast (3.99:1, requires 4.5:1). | 1.4.3 (AA) | Medium | P2 | Open | `evidences/screenshots/accessibility/A11Y-DT-001-error-message-color-devtools.png`, `evidences/screenshots/accessibility/A11Y-DT-002-error-message-contrast-webaim.png` |
| A11Y-BUG-003 | A11Y-016 | The page language is not defined (`<html>` without `lang`). | 3.1.1 (A) | Medium | P2 | Open | `evidences/screenshots/accessibility/A11Y-LH-007-html-lang-missing.png` |
| A11Y-BUG-004 | A11Y-009, A11Y-010 | Slogan, service box captions, news date, and footer text and link have insufficient contrast. | 1.4.3 (AA) | Low | P3 | Open | `evidences/screenshots/accessibility/A11Y-LH-005-contrast-login-page.png`, `evidences/screenshots/accessibility/A11Y-LH-005b-contrast-login-page-continued.png`, `evidences/screenshots/accessibility/A11Y-LH-006b-error-page-contrast.png` |
| A11Y-BUG-005 | A11Y-014, A11Y-017 | The image link to `admin.htm` in the page header has no text alternative and no discernible link name. The same Admin Page destination is also available as a text link in the left menu. | 1.1.1 (A), 2.4.4 (A), 4.1.2 (A) | Low | P3 | Open | `evidences/screenshots/accessibility/A11Y-LH-003-images-missing-alt.png`, `evidences/screenshots/accessibility/A11Y-LH-004-links-no-discernible-name.png`, `evidences/screenshots/accessibility/A11Y-LH-004b-admin-link-no-name-element.png` |

---

## Evidence

Execution 1 — Smoke Test (May 2026):

- `evidences/screenshots/accessibility/A11Y-001-login-keyboard-navigation.png`
- `evidences/screenshots/accessibility/A11Y-003-focus-visibility.png`
- `evidences/screenshots/accessibility/A11Y-004-login-form-labels.png`
- `evidences/screenshots/accessibility/A11Y-007-login-error-message.png`
- `evidences/screenshots/accessibility/A11Y-014-link-purpose.png`

Execution 2 — WCAG 2.1 Re-test (October 2026), Lighthouse:

- `evidences/screenshots/accessibility/A11Y-LH-001-login-accessibility-score.png`
- `evidences/screenshots/accessibility/A11Y-LH-002-form-labels-missing.png`
- `evidences/screenshots/accessibility/A11Y-LH-003-images-missing-alt.png`
- `evidences/screenshots/accessibility/A11Y-LH-004-links-no-discernible-name.png`
- `evidences/screenshots/accessibility/A11Y-LH-004b-admin-link-no-name-element.png`
- `evidences/screenshots/accessibility/A11Y-LH-005-contrast-login-page.png`
- `evidences/screenshots/accessibility/A11Y-LH-005b-contrast-login-page-continued.png`
- `evidences/screenshots/accessibility/A11Y-LH-006-error-page-snapshot-summary.png`
- `evidences/screenshots/accessibility/A11Y-LH-006b-error-page-contrast.png`
- `evidences/screenshots/accessibility/A11Y-LH-007-html-lang-missing.png`
- `evidences/screenshots/accessibility/A11Y-LH-008-best-practices.png`

Execution 2 — WCAG 2.1 Re-test (October 2026), manual verification:

- `evidences/screenshots/accessibility/A11Y-DT-001-error-message-color-devtools.png`
- `evidences/screenshots/accessibility/A11Y-DT-002-error-message-contrast-webaim.png`

Evidence prefixes: `A11Y-` manual smoke checks, `A11Y-LH-` Lighthouse audit, `A11Y-DT-` manual DevTools and contrast verification.

---

## Notes

- This checklist is not a full WCAG compliance audit.
- Both executions were limited to the public login page, the login error page, and visible navigation elements. Authenticated pages remain future scope.
- Lighthouse checks only a subset of WCAG criteria. Its results were complemented with manual checks.
- Accessibility defects are tracked in this checklist and summarized in `docs/BUG_REPORTS.md` and `docs/TEST_SUMMARY_REPORT.md`.
- Any accessibility scenario suitable for repeatable regression can be added to future Cypress automation scope.

---

## Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Mariana | Accessibility smoke test execution on the public login area |
| 1.1 | October 2026 | Mariana | Added WCAG 2.1 mapping, Lighthouse and manual contrast re-test, re-evaluated A11Y-004 and A11Y-014, added A11Y-016 and A11Y-017, accessibility defects, and best-practice observations |
