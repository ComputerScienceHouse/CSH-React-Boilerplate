import { useReactOidc } from "@axa-fr/react-oidc-context";
import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const Profile: React.FunctionComponent = () => {
  const { oidcUser, logout } = useReactOidc();

  if (!oidcUser) return null;

  const {
    profile: { name, preferred_username },
  } = oidcUser;

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret className="navbar-user">
        <img
          className="rounded-circle"
          src={`https://profiles.csh.rit.edu/image/${preferred_username}`}
          alt=""
          aria-hidden={true}
          width={32}
          height={32}
        />
        {name} ({preferred_username})
        <span className="caret" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Profile;
