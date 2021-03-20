# CSH React Boilerplate

Ever wanted to create a CSH house service in React but realized that auth is hard and that react is big and scary? This boilerplate attempts to solve that issue.

This provides all the setup work needed to create a CSH React app quickly. This may not fit all use cases, and you may want to modify things heavily. Go ahead!
This is simply a starting place.

## Local Development
You're going to need [node](https://nodejs.org/en/) and ideally use [nvm](https://github.com/nvm-sh/nvm).
This template uses [yarn](https://yarnpkg.com/) as a package manager.

### Setup with nvm

```
nvm install
nvm use
yarn
```

### Run in development

```
yarn start
```

In order to run locally, you're going to need an OIDC client, by default there's a `.env` file which defines all variables you don't want to commit to the repo directly. The default SSO variables will work for development purposes. It will only work on `http://localhost:3000`.

You can create a `.env.local` to modify and add new variables for local development.

All variables need to be prepended with `REACT_APP_`
