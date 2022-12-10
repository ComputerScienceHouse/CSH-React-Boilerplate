
// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users, 
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
const trustedDomains = {
    default: ["https://sso.csh.rit.edu/auth/realms/csh", "https://sso.csh.rit.edu/auth/realms/csh/protocol/openid-connect/token", "https://sso.csh.rit.edu/auth/"]
};
