# CSH React Boilerplate

Ever wanted to create a CSH house service in React but realized that auth is hard and that react is big and scary? This boilerplate attempts to solve that issue.

This provides all the setup work needed to create a CSH React app quickly. This may not fit all use cases, and you may want to modify things heavily. Go ahead!
This is simply a starting place.

## Local Development
You're going to need [node](https://nodejs.org/en/).

### Setup with npm

```
npm install
```

### Run in development

```
npm start
```

In order to run locally, you're going to need an OIDC client, by default there's a `.env` file which defines all variables you don't want to commit to the repo directly. The default SSO variables will work for development purposes. It will only work on `http://localhost:3000`.
For more information on CSH SSO, and getting an OIDC client, talk to an RTP.


All variables need to be prepended with `REACT_APP_`

___

## Help! I don't have a CSH account or I dont want to secure the website in development!

No problem! You can disable SSO in `configuration.ts` by changing `SSOEnabled` to `'false'`, or alternatively, you can set the `REACT_APP_SSO_ENABLED` variable to false.