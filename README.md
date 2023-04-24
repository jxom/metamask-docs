# MetaMask developer documentation

This is the new MetaMask developer documentation repository.
It's built on [Docusaurus](https://docusaurus.io/), a static site generator purpose-built for
technical documentation.

All documentation content is located in the `wallet` and `snaps` directories.

## Contribution workflow

The MetaMask documentation contribution workflow involves proposing changes by creating
[branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
and
[pull requests (PRs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
on this repository.
This facilitates open contributions, testing, and peer review.

To contribute changes:

1. Search for an [existing issue](https://github.com/MetaMask/metamask-docs/issues) to work on, or
    [create a new issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)
    describing the content issue you'd like to address.
    Make sure no one else is assigned to the issue, and assign yourself to it.
    If you don't have permission to assign yourself to it, leave a comment on the issue.

2. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
    this repository to your computer.

    ```bash
    git clone https://github.com/MetaMask/metamask-docs.git
    ```

3. [Create and checkout a topic branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging),
    naming it appropriately.
    We recommend including the issue number and a short description in the branch name (for example,
    `183-doc-cli-option`), which is a reminder to fix only one issue in a PR.

    ```bash
    git checkout -b <ISSUE-NUM>-<ISSUE-DESC>
    ```

    > **Tip:** You can use a Git client such as [Fork](https://fork.dev/) instead of the command line.

4. Open this repository in a text editor of your choice (for example,
    [VS Code](https://code.visualstudio.com/)) and make your changes.
    Refer to the [style guide](#style-guide) and [Markdown guide](#markdown-guide) when making
    documentation changes.

    > **Notes:**
    > - If you add a new documentation page, make sure to edit `wallet-sidebar.js` or
        `snaps-sidebar.js` to [add the page to the sidebar](https://docusaurus.io/docs/sidebar/items).
    > - If you delete or rename a documentation file, make sure to add a redirect to the
        [redirect plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)
        in `docusaurus.config.js`.

5. [Preview your changes locally](#preview-locally) to check that the changes render correctly.

6. Add and commit your changes, briefly describing your changes in the commit message.
    Push your changes to the remote origin.

    ```bash
    git add *
    git commit -m "<COMMIT-MESSAGE>"
    git push origin
    ```

7. On [this repository on GitHub](https://github.com/MetaMask/metamask-docs), you’ll see a banner
    prompting you to create a PR with your recent changes.
    Create a PR, describing your changes in detail.
    [Link the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
    that your PR fixes by adding `fixes #<ISSUE-NUM>` to the PR description.

8. Specific reviewers are automatically requested when you submit a PR.
    You can request additional reviewers in the right sidebar of your PR – for example, the original
    issue raiser.
    Make any required changes to your PR based on reviewer feedback, repeating steps 4–6.

9. After your PR is approved by two reviewers, all checks have passed, and your branch has no
    conflicts with the main branch, you can merge your PR.
    If you don't have merge access, a maintainer will merge your PR for you.
    You can delete the topic branch after your PR is merged.

### Preview locally

As a prerequisite, make sure you have the following installed:

- [Node.js](https://nodejs.org) version 16+
  - If you're using [nvm](https://github.com/creationix/nvm#installation) (recommended), running
    `nvm use` automatically chooses the right Node.js version for you.
- [Yarn](https://yarnpkg.com/getting-started/install) version 3
  - Run `yarn install` to install dependencies and run any required post-install scripts.

Preview your changes locally by running `yarn start` in the documentation repository.

> **Note:** If you make changes to the
[redirects](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects), you can
preview them by running `yarn build && yarn serve`.

## Style guide

The MetaMask documentation follows the
[ConsenSys documentation style guide](https://docs-template.consensys.net/getting-started/style-guide)
and the [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/).
Refer to those guides for any questions on writing style.

## Markdown guide

Docusaurus is powered by [MDX](https://mdxjs.com/), an extension to
[Markdown](https://www.markdownguide.org/) that allows you to use JavaScript in your documentation content.
See the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features) on how to use its
Markdown and MDX features.

> **Tip:** [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions),
[tabs](https://docusaurus.io/docs/markdown-features/tabs), and
[code blocks](https://docusaurus.io/docs/markdown-features/code-blocks) are frequently used in the
MetaMask documentation.

The following sections describe features that aren't documented in the Docusaurus documentation.

### Simplified tabs

The [`remark-docusaurus-tabs`](https://github.com/mccleanp/remark-docusaurus-tabs) plugin allows you
to add content in [tabs](https://docusaurus.io/docs/markdown-features/tabs) using simplified syntax.

For example, add code blocks to tabs as follows:

````jsx
<!--tabs-->

# HTML

```html
<!-- HTML code block -->
```

# JavaScript

```javascript
// JavaScript code block
```

# Markdown

- This is an example Markdown list.
- This is **bold** and *italicized* text.

<!--/tabs-->
````

### Live code blocks

The [`remark-codesandbox`](https://github.com/kevin940726/remark-codesandbox/) plugin allows you to
define a code block to be loaded live in a CodeSandbox iframe.
This enhances the documentation by keeping the code blocks versioned and in the codebase, while
using CodeSandbox to showcase any example with any dependency.

Define a live code block by adding a `codesandbox` key to the code block.
For example:

````jsx
```javascript codesandbox=vanilla
// JavaScript live code block
```
````

`remark-codesandbox` allows for simple code blocks where the content of the block replaces the
CodeSandbox entry point, and more complex code blocks that can be loaded directly from the
filesystem.
See the
[`remark-codesandbox` documentation](https://github.com/kevin940726/remark-codesandbox/#documentation)
for more information.


### Updating api-specs and regenerating api reference

Reference documentation is generated from [the docusaurus-openrpc plugin](https://github.com/MetaMask/docusaurus-openrpc) using [api-specs](https://github.com/MetaMask/api-specs/) as the OpenRPC document source. In order to update these docs, follow the following steps:

1. Clone [api-specs](https://github.com/MetaMask/api-specs/)
  1. `cd api-specs`
  2. `yarn`
  3. `yarn build:watch`
2. Inside metamask-docs/docusaurus.config.js:
  1. update the reference to the built openrpc doc under the key 'openrpcDocument'. It should point to whereever you have the api-specs repo cloned. ex: `openrpcDocument: "../api-specs/dist/build/openrpc.json"`
  2. `yarn start`
