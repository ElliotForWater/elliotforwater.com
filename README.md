# Elliot For Water V4

Elliot for Water is a search Engine which collecting through user click's collects revenue used to build water wells wheres needed in the world.

## How to start

This project is built with `Reactjs`, `Nextjs`, `Typescript`, `Storybook` and `Jest`.
To run the project you need to have install on your machine:

- `Nodejs > 8`
- `npm`

Once you clone the repo go ahead and install all the packages:

- `npm i` must be run from `root`
- `npm run dev` to run in development environment
- `npm start` to run in production mode
- `npm run storybook` to run storybook and check the UI
- `npm run test` to run test coverage

Please have a look at `package.json` to discover more scripts you can run.

## Current workflow

- Trello ticket is assigned to a Developer
- Developer creates a new branch from `develop`.
- Developer writes some code and some tests.
- Developer ensures project builds and all tests are passing.
- Developer creates a Pull Request against `develop`.
- Pull Request should includes all developers for code review and "close branch" checkbox should be checked.
- Developer wait for Pull Request review approval and then merges the branch to "develop". (Not enforced as currently we are only 2 part time developers)
- Developer merge branch with `squash and merge` option and leave only the commits as description.
- Developer creates a Pull Request from `develop` to `master` and includes the Tester to review.
- Developer moves the Trello ticket to the testing lane.
- Tester reviews the website
  - If OK Tester merges to master and moves ticket to completed lane.
  - If changes are needed comments are left on the ticket and and ticket is re-assigned back to the developer.

## Staging

Here you can find the current staging branch.
Please review your code there once it gets merge in `develop` branch. Check all the possible part of the application that are involve in the merged changes.
[https://elliotforwaterdevelopment.azurewebsites.net](https://elliotforwaterdevelopment.azurewebsites.net)

## Best Practice

- Commit your work relatively often, as we are multiple developers on the same project.
- Merge from "develop" as often as possible especially if working on a long running feature to help avoid large merge conflicts.
- Try to review other pull requests when you can to improve understanding of the project, please comment on the code if you have a question or see an issue.
- Feel free to open a work-in-progress PR to start to get early feedbacks. You can append the prefix `WIP` to your PR so other devs knows it shouldn't be merged yet.
- Each PR must have a test. A PR without test will not be approved
- If you are working on UI component, a story for this UI element is expected in the PR in order to be approved.

## PR and commits naming convention

A branch and commit message must have a meaningful name/title that describe which changes are applied.
This is very important in the case we need to revert some changes, fix git history or extract a buggy commit.

Branch name must follow these conventions:

- **feat**: new feature
- **fix**: a bug fix or a quick fix to the code
- **chore**: Regular code maintenance
- **refactor**: code refactoring

i.e. `feat-edit-profile-page` i.e. `fix-undefined-empty-users-list`

Same convention is used for git commits:
`<type>: <verb in present-tense> <rest of message (max 80 char)>`

i.e. `feat: fetch user data and display in profile page`

## Tests

Test are covered with `Jest`.
you can run tests with `npm run test`

If you are working on test is better to run `npm run test:watch`. In this way each changes will be detected and the test will run again.

The main idea is to not test everything but what makes most sense.
Unit Test are very welcome.
Please use snapshot just when makes sense.

=======================

If you encounter any problem in the installation, please open an issue.
