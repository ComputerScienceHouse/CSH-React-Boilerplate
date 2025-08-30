import {
  useOidcFetch,
  // useOidc,
  // useOidcAccessToken,
  // useOidcIdToken,
} from "@axa-fr/react-oidc";
import {useEffect, useState} from "react";
import {apiPrefix} from "../configuration";
// import {Link} from "react-router-dom";
// import Authenticating from "../callbacks/Authenticating";
// import AuthenticationError from "../callbacks/AuthenticationError";
// import SessionLost from "../callbacks/SessionLost";
// import UserInfo from "../UserInfo";

const Home = () => {
  // important hooks
  // const {idToken, idTokenPayload} = useOidcIdToken(); // this is how you get the users id token
  // const {login, logout, isAuthenticated} = useOidc(); // this gets the functions to login and logout and the logout state
  // const {accessTokenPayload} = useOidcAccessToken(); // this contains the user info in raw json format
  // const userInfo = accessTokenPayload as UserInfo;

  const {fetch} = useOidcFetch();

  const [data, setData] = useState<string | null>(null);
  // Just an example of how to get data from an API!
  useEffect(() => {
    let cancelled = false;
    fetch(`${apiPrefix}/demo`)
      .then((res) => res.json())
      .then((res) => {
        if (cancelled) {
          return;
        }
        setData(res.someValue);
      });

    return () => {
      cancelled = true;
    };
  }, [fetch]);

  return (
    <div>
      <h1 className="display-3">Hello World!</h1>
      <p className="lead">
        Check out <code>src/pages/Home.tsx</code> to see how you can get
        started.
      </p>
      {data !== null && <p>Your data was: {data}</p>}
    </div>
  );
};

export default Home;
