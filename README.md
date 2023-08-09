#### Github

https://github.com/arnosolo/blog

#### Deploy page

https://arnosolo.github.io/blog/

#### Dev

1. Install deps
  ```bash
  pnpm i
  ```

2. Start dev server
  ```bash
  pnpm docs:dev
  ```

#### Deploy

Each git push will trigger an `Github Action` which will automatically build and publish static dist files (js, html, css)
