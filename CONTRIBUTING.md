# Contributing to Canvas

On behalf of the Canvas team, thank you so much for your contribution to this project and being a
part of the community. Before you contribute, please take a moment and look through the following
sections:

- [Contributing Guidelines](#contributing-guidelines)
  - [Code of Conduct](#code-of-conduct)
  - [Contributor License Agreement](#contributor-license-agreement)
  - [How to Contribute](#how-to-contribute)
  - [Git Guidelines](#git-guidelines)
- [Getting Started](#getting-started)
  - [Creating a Module](#creating-a-module)
  - [Exporting a Module](#exporting-a-module)
  - [Building Modules](#building-modules)
  - [Testing Modules](#testing-modules)
  - [Code Style Guide](#code-style-guide)
  - [Editors](#editors)

## Contributing Guidelines

### Code of Conduct

At Workday, we are committed to a culture of integrity, innovation, and fun. That culture extends to
the community that we are building here through Canvas. By participating in it, you are expected to
uphold this [code of conduct](./CODE_OF_CONDUCT.md) and agree to our CLA.

### Contributor License Agreement

Each Contributor (“You”) represents that such You are legally entitled to submit any Contributions
in accordance with these terms and by posting a Contribution, you represent that each of Your
Contribution is Your original creation.

You are not expected to provide support for Your Contributions, except to the extent You desire to
provide support. You may provide support for free, for a fee, or not at all. Unless required by
applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any
warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR
PURPOSE.

### How to Contribute

**Don't hesitate to contribute!** Canvas Kit thrives on open discussion and contribution by anyone
in the Workday community. Contribution doesn't have to be code-based. Anyone can suggest changes
things like documentation, processes, and use cases.

If you are contributing code, please take a look at the following sections to familiarize yourself
with how the Canvas Kit repo is organized and run. This will help streamline the pull request
process.

#### Commit Message Format

Canvas Kit relies on the
[conventional-commit format specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification).
By formalizing our commit message format, this allows us to easily generate changelogs and scan
through the commit history. It also automates [semantic versioning](http://semver.org/).

#### Commit Descriptions

> **DO**

- Explain the additions/edits/fixes made in your staged changes. If you cannot describe it within
  ~50 characters, you should be breaking it into multiple commits
- Use the imperative mood (e.g. "fixed", not "fix")
- Start with a verb
- Use the body of the commit if more context is needed
- If you have similar/identical commits one after another (i.e. snapshot updates), consider using
  `--amend` or squashing.

> **DON'T**

- Don't use generic messages (e.g. "fix: Clean up code", "fix: Address review feedback", etc.)
- Don't describe the problem that was being solved (e.g. "fix: State was broken")
- Don't be too brief. Avoid one word descriptions. Anyone with context should have a good idea of
  what your commit does without having to look at it.
- Don't end with a period

#### Automation on Commit

Upon commit, [lint-staged](https://github.com/okonet/lint-staged) will run your staged code through
[Prettier](https://prettier.io) and [tslint](https://palantir.github.io/tslint/).

#### Storybook

Canvas Kit utilizes [Storybook](https://storybook.js.org/) for the component development
environment.

#### Yarn and Workspaces

Canvas Kit utilizes Yarn for package management and takes advantage of its support for
[Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to connect all of its different modules
within a single repository.

#### Testing

Canvas Kit uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to test our React
components. Each and every component requires at least 97% unit test coverage and a thorough set of
snapshot tests.

### Git Guidelines

#### Branches

- Create branches for each feature you develop
- Branch names should be a description of the feature being implemented/bug being fixed (i.e.
  `my-feature`).
- Prefer dashes over camelCasing in branch names.

#### Rebasing

We have a few guidelines to follow to ensure the git tree history will always look as clean as
possible.

- Always rebase to pull in another branch's changes: either rebase on top of the other branch (if
  it's still in development), or rebase on top of `master` once the other branch has been merged.
  **Never merge the `master` branch into another branch.**
- A branch should always be rebased on the _latest_ version of `master` before being merged or
  opening a pull request.
- Before rebasing, run `git fetch` to ensure you have the lastest version of the remote branch.
- If you have been pushing to `origin/your-branch`, you will have to force push after rebasing:
  `git push origin/your-branch --force-with-lease`.

## Getting Started

1.  Clone the respository and run `yarn`
2.  Run `yarn build`
3.  Run `yarn start` to start [Storybook](https://storybook.js.org/)
4.  Visit [http://localhost:9001/](http://localhost:9001/)

### Creating a module

1.  Run `yarn create-module`
2.  Enter in a module name, description and author
3.  (optional) Add any required dependencies on other modules
4.  (optional) If you added any extra dependencies, run `yarn`
5.  Start Storybook `yarn start`
6.  Navigate to [http://localhost:9001/](http://localhost:9001/) and find your new module's story
7.  Begin editing your new React component in `modules/canvas-kit-react-<NAME>/index.js`!

### Exporting a Module

#### React

1. If your module's `index.ts` has a default export, make sure it is available as a named export as
   well. This allows for greater flexibility in how developers consume your module.
2. Add your module as a dependency in `modules/_canvas-kit-react/package.json`.
3. Add `export * from '@workday/canvas-kit-react-<NAME>'` to `modules/_canvas-kit-react/index.ts` so
   that consumers of our bundle module (`@workday/canvas-kit-react`) can use your module too.

#### CSS

1. Add your module as a dependency in `modules/_canvas-kit-css/package.json`.
2. Import your module in `modules/_canvas-kit-css/index.scss`.

### Building Modules

**`yarn build`**

This will build all modules' CSS and JS.

### Testing Modules

**`yarn test`**

This will start the unit tests and run code coverage.

**`yarn updateSnaps`**

If you know you've made a breaking visual change, use this command to update your snapshot tests.
This will add files to your workspace that you'll need to commit.

### Code Style Guide

Refer to the [API & Pattern Guidelines](API_PATTERN_GUIDELINES.md).

Rules are enforced using [TSLint](https://palantir.github.io/tslint/) and code formatting is
provided through [Prettier](https://prettier.io).

To lint using TSLint, use `yarn lint`. To format and lint your code (careful - this can rewrite
files), use `yarn format`.

Code formatting will occur automatically before `git commit` for files staged using `git add`.

### Editors

Install the Prettier and TSLint plugins for your respective editors for quicker and easier
formatting.

#### Visual Studio Code

Install [prettier-vscode](https://github.com/prettier/prettier-vscode) and
[vscode-tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

Consider adding the following options:

- [Format on save](https://github.com/prettier/prettier-vscode#format-on-save)

#### Atom

Install [prettier-atom](https://github.com/prettier/prettier-atom) and
[linter-tslint](https://github.com/AtomLinter/linter-tslint)

#### Emacs

Install [prettier-emacs](https://github.com/prettier/prettier-emacs) and
[Flycheck](http://www.flycheck.org/)

#### Other Editors

Check [Prettier](https://prettier.io/docs/en/editors.html) and
[TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) documentation for additional
editor plugins.
