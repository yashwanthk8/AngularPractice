# Commit Message Guide

## Format

```text
<type>(<scope>): <short description>
```

### Examples

```text
feat(standalone): implemented standalone components
fix(viewchild): fixed undefined ViewChild reference
refactor(component): simplified component structure
docs(notes): added content projection notes
test(service): added unit tests for user service
```

---

## Commit Types

### feat

Use when adding a new feature, concept, or functionality.

Examples:

```text
feat(input-output): implemented parent child communication
feat(routing): added lazy loaded routes
```

---

### fix

Use when fixing a bug or incorrect behavior.

Examples:

```text
fix(forms): fixed validation issue
fix(http): handled API error response
```

---

### refactor

Use when improving code structure without changing behavior.

Examples:

```text
refactor(component): extracted reusable logic
refactor(service): simplified API handling
```

---

### docs

Use when updating documentation, notes, README, or learning material.

Examples:

```text
docs(notes): added standalone component notes
docs(readme): updated project setup instructions
```

---

### test

Use when adding or updating tests.

Examples:

```text
test(component): added unit tests for dashboard
test(service): improved API service coverage
```

---

### style

Use for formatting-only changes.

Examples:

```text
style(component): formatted code
style(global): fixed indentation
```

---

### chore

Use for maintenance, tooling, or configuration changes.

Examples:

```text
chore(init): initial angular project setup
chore(commitlint): configured commitlint
chore(husky): added git hooks
```

---

### perf

Use when improving performance.

Examples:

```text
perf(component): optimized change detection
perf(http): reduced unnecessary API calls
```

---

### build

Use for build-related changes.

Examples:

```text
build(angular): updated build configuration
```

---

### ci

Use for CI/CD pipeline changes.

Examples:

```text
ci(github-actions): added commit validation workflow
```

---

## Angular Learning Scopes

Recommended scopes:

```text
standalone
input-output
content-projection
viewchild
host-binding
host-listener
signals
rxjs
routing
forms
http
service
directive
pipe
guard
interceptor
state-management
mini-project
notes
```
