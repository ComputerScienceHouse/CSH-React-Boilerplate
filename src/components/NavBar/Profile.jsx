import React from 'react'
import PropTypes from 'prop-types'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    if (!this.props.name || !this.props.username) return null

    const { name, username } = this.props

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="navbar-user">
          <img
            className="rounded-circle"
            src={`https://profiles.csh.rit.edu/image/${username}`}
            alt=""
            aria-hidden={true}
            width={32}
            height={32}
          />
          {name} ({username})
          <span className="caret"/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
                        Dashboard
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>
                        Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string
}

export default Profile
