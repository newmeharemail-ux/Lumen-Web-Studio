# docs/ — Working Documents

This folder is the **source of truth for every decision and every word** on the site. Code lives in `src/` (not created yet); docs tell us *what* to build and *why* it looks/sounds the way it does.

## What's in here

| Folder | Purpose | Rule |
|--------|---------|------|
| `brand/` | Who we are and how we look. | Brand identity is locked in `ADR-0002`. Everything visual/conversational routes back here. |
| `content/` | The exact copy for every section (`PAGE-COPY.md`). | Change page text here first, then in code. Never hard-code copy in a component twice. |
| `decisions/` | ADRs — every locked decision and the reasoning behind it. | New locked choice = new ADR. Don't restyle something and leave the reason undocumented. |
| `architecture/` | Planned code structure + GitHub Pages deployment plan. | Read `PROJECT-STRUCTURE.md` before scaffolding; `DEPLOYMENT.md` before publishing. |
| `ROADMAP.md` | Phases, current status, pre-launch checklist. | Keep updated as the build moves. |

## How to work in here

- Small, plain-English markdown files. No jargon.
- If a decision changes, update the relevant doc **and** add a `CHANGELOG.md` entry.
- If the brief and a doc disagree, the brief wins **unless** an ADR (`docs/decisions/`) overrides it. That's the rule of hierarchy.