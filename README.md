# Problem

In `StrictMode`, `useSyncExternalStore` will do hydration twice. But in second hydration proceed, it seems that useSES does not use the result of `getServerSnapshot` as initial state, which will cause hydration error.


## Reproduce steps

* pnpm install
* pnpm dev

Then you will see the error in console.

## Repro Link

[stackblitz](https://stackblitz.com/github/promer94/uses-hydrate-problem?file=README.md)
