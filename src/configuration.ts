import {OidcConfiguration} from "@axa-fr/react-oidc";

const oidcConfig: OidcConfiguration = {
  client_id: import.meta.env.VITE_SSO_CLIENT_ID ?? "test",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }/authentication/callback`,
  scope: "openid profile email offline_access",
  authority: import.meta.env.VITE_SSO_AUTHORITY ?? "",
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${
    window.location.port ? `:${window.location.port}` : ""
  }/authentication/silent_callback`,
  service_worker_only: false,
  refresh_time_before_tokens_expiration_in_second: 10,
};

export const apiPrefix = import.meta.env.VITE_API_PREFIX;

export const SSOEnabled =
  (import.meta.env.VITE_SSO_ENABLED ?? "true") === "true";

export default oidcConfig;
