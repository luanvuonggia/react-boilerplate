<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Development workflow](#development-workflow)
  - [Development environment](#development-environment)
  - [Code Repository](#code-repository)
    - [Repository](#repository)
    - [Git branch naming](#git-branch-naming)
    - [Others branch naming](#others-branch-naming)
    - [Git Workflow](#git-workflow)
      - [Workflow:](#workflow)
      - [Git command](#git-command)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Development workflow

## Development environment

We will separate working environment into 4 environments

- Production
- Development
- Staging - This is the environment where production code is used. It contains the source-map and has debugging capabilities.
- Test - unit test, integration test, End-to-End test.

## Code Repository

### Repository

> **Note**: When assigned to the project. Access to respository permission is required. (Eg: gitlab, github, bitbucket...) Please ask leader or PM to get access to it.

### Git branch naming

- Production - master (production branch)
- Development, Staging, Test - canary (main development branch)

### Others branch naming

- Feature development branch - **feat/{issue-number}-{description}**
  - `E.g: feat/#1-initial-project`
- Fix bugs for feature branch - **fix/{issue-number}-{description}**
  - `E.g: fix/#1-structure`

### Git Workflow

For branch name, please use the issue number in gitlab, github...

- E.g: create an issue in gitlab with title `initial project`. It has an issue number of #1. Therefore, please branching using the name as `feat/#1-initial-project`

#### Workflow:

1. Create an issue in gitlab, github and assign to you. Add a tag `todo` or `doing`. You can add more tags for the issue. Eg: `FE`, `Bug` ...
2. Checkout a new feature branch from `canary` branch, E.g: `feat/#1-initial-project`
3. When the new feature branch is finished. Create a PR when you want to merge your feature branch into `canary` branch (main development branch).
4. Select option "delete branch" to close this branch once merged to keep repo clean.
5. Tag a reviewer to review for this merge request And add a tag `review` for the issue (Skip this if your team has 1 person).
6. When the reviewer is finished. The reviewer will notify to you with a message `LGTM` at end MR. It is the reviewer's responsibility to ensure functionality, code quality, and merge this branch to `canary`.
7. If bugs arise after the feature branch is merged. Please create a fix branch to fix it. E.g: `fix/#1-structure`.
8. When the feature is complete. You need close this issue. (Reopen if there are still bugs)

#### Git command

1. `git checkout canary`.
2. `git pull`.
3. `git checkout -b feat/{issue-number}-{description}`.
4. `git commit -m "feat|fix|chore|refactor|test...: {icon} {issue-number} {commit description}"`. Please follow the [git conventions](https://www.conventionalcommits.org/en/v1.0.0/) and [Icon for the commit message](https://gitmoji.dev/).
5. After finished: `git pull --rebase origin canary`.
6. Fix conflict and continue with rebase: `git rebase --continue`.
7. `git add .` or `git add {filenames}`.
8. Continue steps 5 - 6 until all conflicts are resolved.
9. If you make a mistake while merging, abort the merge to discard all changes you’ve made, effectively going back to Step 4: `git rebase --abort`.
10. When you have nothing left to merge, push changes to the remote feature branch: `git push -f`.
11. If you are asked to `squash` git commit. Please follow [this post](https://www.internalpointers.com/post/squash-commits-into-one-git).
