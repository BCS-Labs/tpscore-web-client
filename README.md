<h1 align="center">
  TPScore
</h1>

![GitHub](https://img.shields.io/github/license/BCS-Labs/tpscore-web-client)
![nycrc config on GitHub](https://img.shields.io/nycrc/BCS-Labs/tpscore-web-client)

<hr>
<h2>How to run project in dev mode</h2>

1. Install dependencies
```bash
yarn install
```
2. Add database credentials inside `.env.local`.
```
DB_HOST=db_host
DB_USER=db_admin
DB_PASSWORD=db_admin_password
DB_NAME=db_name
```
3. Run project
```bash
yarn dev
```

<h2>Lint the project</h2>

```bash
yarn lint
```

<h2>Run all unit tests</h2>

```bash
yarn test
```

<h2>Check test coverage</h2>

```bash
yarn coverage
```

<h2>Build the project for production</h2>

```bash
yarn build
```

<h2>Run the project in production mode</h2>

```bash
yarn start
```