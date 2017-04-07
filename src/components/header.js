import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'


export default class Header extends Component {

  handleTabChange(){

  }

  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item header>GIPHT  🎁</Menu.Item>
          <Menu.Item name='HOME' active={this.props.active === 'HOME'} onClick={this.props.tabChanger} />
          <Menu.Item name='ABOUT' active={this.props.active === 'ABOUT'} onClick={this.props.tabChanger} />
        </Menu>
      </Segment>
    )
  }
}
