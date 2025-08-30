// if your app requires SSO you can delete this page
import UserInfo from "./UserInfo";
import {useOidc, useOidcAccessToken} from "@axa-fr/react-oidc";
import {SSOEnabled} from "./configuration";

export const useOidcNoSSO = () => {
  return {
    login: () => alert("SSO Disabled, you can change this in configuration.ts"),
    logout: () =>
      alert("SSO Disabled, you can change this in configuration.ts"),
    isAuthenticated: false,
  };
};

export const useOidcAccessTokenNoSSO = () => {
  return {accessTokenPayload: ""};
};

export const NoSSOUserInfo: UserInfo = {
  exp: 0,
  auth_time: 0,
  jti: "",
  iss: "",
  aud: "",
  sub: "",
  typ: "",
  azp: "",
  nonce: "",
  session_state: "",
  acr: "",
  allowed_origins: [],
  realm_access: {
    roles: [],
  },
  resource_access: {},
  scope: "",
  sid: "",
  email_verified: false,
  name: "Foo Bar",
  groups: [],
  preferred_username: "foolish",
  given_name: "Foo",
  family_name: "Bar",
  email: "baz@csh.rit.edu",
  uuid: "",
};

export const NoSSOProfilePicture =
  "https://cdn.discordapp.com/attachments/719366780606480384/1035722437049982986/csh.png";

export const getUseOidcHook = () => {
  return SSOEnabled ? useOidc : useOidcNoSSO;
};

export const getUseOidcAccessToken = () => {
  return SSOEnabled ? useOidcAccessToken : useOidcAccessTokenNoSSO;
};
