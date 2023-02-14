import { OidcConfiguration } from "@axa-fr/react-oidc/dist/vanilla/types"

const oidcConfig: OidcConfiguration = {
    client_id: process.env.REACT_APP_SSO_CLIENT_ID ?? 'test',
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''
        }/authentication/callback`,
    scope: 'openid profile email offline_access',
    authority: process.env.REACT_APP_SSO_AUTHORITY ?? '',
    silent_redirect_uri: `${window.location.protocol}//${window.location.hostname
        }${window.location.port ? `:${window.location.port}` : ''
        }/authentication/silent_callback`,
    service_worker_only: false,
    refresh_time_before_tokens_expiration_in_second: 10,
}

export const SSOEnabled = (process.env.REACT_APP_SSO_ENABLED ?? 'true') === 'true'

export default oidcConfig