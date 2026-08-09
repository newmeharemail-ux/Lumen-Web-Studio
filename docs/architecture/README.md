# docs/architecture/ — Structure & deployment

How the code is organized and how we publish it. Code does **not exist yet** — this folder is the plan to scaffold against.

## Files

| File | What it is | Read when |
|------|-----------|-----------|
| `PROJECT-STRUCTURE.md` | Planned file/folder layout of the React app + component map. | Scaffolding or adding a section. |
| `DEPLOYMENT.md` | How to build and publish to GitHub Pages. | Pushing live or debugging the deployment. |

## Ground rules
- One page, 8 blocks, no routing. The component map mirrors the 8 blocks 1:1.
- All copy lives in one data file (`src/data/content.js`) — editing text never touches components.
- This is a GitHub Pages static deploy; no server-side anything.