import React, { Component } from 'react'
import { Menu, Segment, Button, Icon } from 'semantic-ui-react'


export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item header>GIPHT  🎁</Menu.Item>
          <Menu.Item name='HOME' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='ABOUT' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}
