# Agents

Working on diagrams in this repo — see `DESIGN.md` for the design system (pi.dev skin).

## Formatting

Format all HTML/MD/YAML files with Prettier before committing:

```sh
bunx prettier --write <file>
```

A pre-commit hook in `.githooks/pre-commit` runs this automatically if hooks are
installed (see below).

## First-time setup (once per clone)

```sh
git config core.hooksPath .githooks
```

## Workflow

1. Add a diagram as `name.html` in the root, or a subfolder for related diagrams
   (subfolders group on the index; a subfolder `index.html` links the heading).
2. Verify tokens against `DESIGN.md` — no ad-hoc colors.
3. Commit & push. `index.html` regenerates automatically via the `update-index`
   GitHub Action — never hand-edit it (changes will be overwritten).
