# 세 수 앞 · HARD

Buildless browser strategy puzzle. No package installation is needed.

## Run locally

```sh
git clone https://github.com/ericlee0303/wall-chess.git
cd wall-chess
npm start
```

Open http://localhost:4173. Alternatively, open `dist/index.html` directly.

## Static hosting

Publish the `dist/` directory with any static hosting service. There is no build step, backend, API key, or required environment variable. The existing private playable version is https://three-moves-tactics.seonjin0303.chatgpt.site.


## Play

White moves one piece, then black chooses one move using deterministic two-ply minimax (black move, best white reply). Evaluation weighs king safety, material, immediate threats, distance, and mobility. This is a local search AI, not a recorded move list or an LLM. The black king remains stationary. No forecast or hint UI is exposed.

Ten 6×6 stages have strict 9–12-turn deadlines. All target counts were verified against the same production AI. Eight stages have one successful opening action at that deadline; two have two. The boards and objectives differ. Progress uses a new `three-moves-hard-v2` localStorage key so old easy-mode wins do not mark these stages complete.

Click a white piece to select it; click a destination to move. Click any non-destination piece or right-click any piece for its rules. Touch users can toggle the description mode. Undo: Z. Restart: R. Escape clears the selection. Undo is unlimited.

## Verification

`node test.cjs` replays all solutions, searches for shorter wins, tests deadlines, immutable transitions, jumping, pushing, terminal outcomes, and AI adaptation. `search.cjs` and the candidate/validation JSON files are development-only; only `dist/` is served. Solutions are not shipped in the browser assets.

## Limits

Two-ply heuristic minimax is reactive, not an unbeatable chess engine. The shortest-path guarantees are against this deterministic policy, not every theoretically possible black move. Difficulty is based on narrow solutions and strict deadlines; human difficulty remains subjective.
