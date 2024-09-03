import { Anchor, Box, Button, Header } from 'grommet'
import React from 'react'
import { Notification, Help, User, AppsRounded } from 'grommet-icons';
import { Avatar, Nav } from 'grommet';
import { useNavigate } from 'react-router-dom';
const items = [
  { label: 'HTML', href: '#', icon: <Notification /> },
  { label: 'JS', href: '#', icon: <AppsRounded /> },
  { label: 'CSS', href: '#', icon: <Help /> },
  { label: 'REACT', href: '#', icon: <User /> },
];
const gravatarSrc =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

const Headers = () => {
  const navigate = useNavigate(); // Hook to handle route changes
  return (
    <div>
      <Header background="brand" pad="small">
        <Box direction="row" align="center" gap="small">
          <Avatar src={gravatarSrc} />
          <Anchor color="white" href="https://github.com/ShimiSun">
            ShimiSun
          </Anchor>
        </Box>
        <Box round="full" direction='row' gap="small">
          <Button label='Home' primary onClick={() => { navigate('/') }} />
          <Button label='Services' primary onClick={() => { navigate('/users') }} />
          <Button label='Devices' primary onClick={() => { navigate('/') }} />
        </Box>
        <Nav direction="row" gap="0" size="xsmall">
          {items.map((item) => (
            <Anchor href={item.href} color='white' icon={item.icon} key={item.label} />
          ))}
        </Nav>
      </Header>

    </div>
  )
}

export default Headers
