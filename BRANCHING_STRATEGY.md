# AngularPractice - Branching Strategy

## Branch Types

### Main Branch

```text
main
```

Purpose:

* Production-ready learning repository.
* Contains only completed and reviewed weekly learning topics.
* Updated only through Pull Requests from weekly branches.

---

### Weekly Release Branch

Example:

```text
WEEK-14062026
```

Purpose:

* Collect all learning completed during the week.
* Acts like a release branch in enterprise projects.
* Receives Pull Requests from daily branches.

Example Flow:

```text
SUN-14062026
MON-15062026
TUE-16062026
      ↓
WEEK-14062026
```

At the end of the week:

```text
WEEK-14062026
      ↓
main
```

---

### Daily Learning Branch

Examples:

```text
SUN-14062026
MON-15062026
TUE-16062026
```

Purpose:

* Daily Angular learning and hands-on practice.
* All commits for a particular day are pushed here.
* Pull Request raised to the corresponding weekly branch.

---

## Workflow

### 1. Start Learning Day

Create daily branch from weekly branch:

```bash
git checkout WEEK-14062026
git pull origin WEEK-14062026

git checkout -b SUN-14062026
```

---

### 2. Commit Changes

Examples:

```bash
git commit -m "feat(standalone): implemented standalone components"

git commit -m "feat(input-output): parent child communication"

git commit -m "feat(viewchild): practiced ViewChild examples"
```

Push changes:

```bash
git push -u origin SUN-14062026
```

---

### 3. Create Pull Request

```text
SUN-14062026
        ↓
WEEK-14062026
```

Merge after review.

---

### 4. Continue Next Day

Create next branch from weekly branch:

```bash
git checkout WEEK-14062026
git pull origin WEEK-14062026

git checkout -b MON-15062026
```

Create PR:

```text
MON-15062026
        ↓
WEEK-14062026
```

---

### 5. Weekly Release

At the end of the week:

```text
WEEK-14062026
        ↓
main
```

Create Pull Request and merge.

---

## Commit Message Standard

Format:

```text
<type>(<scope>): <description>
```

Examples:

```text
feat(standalone): implemented standalone components
feat(viewchild): practiced ViewChild examples
fix(forms): fixed validation issue
refactor(component): simplified component structure
docs(notes): added angular learning notes
chore(commitlint): configured commitlint
```

---

## Benefits

* Mimics enterprise Git workflow.
* Maintains daily learning history.
* Preserves weekly release milestones.
* Keeps main branch clean.
* Creates a structured Angular learning roadmap.
