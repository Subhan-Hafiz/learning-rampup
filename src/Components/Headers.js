import { Anchor, Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Header, Heading, ResponsiveContext, Text } from 'grommet'
import React, { useContext } from 'react'
import { Star, Plan, UserAdmin, UserAdd, Capacity, Notification, Help, User, AppsRounded } from 'grommet-icons';
import { Avatar, Nav } from 'grommet';
const items = [
  { label: 'HTML', href: '#',icon: <Notification/> },
  { label: 'JS', href: '#',icon: <AppsRounded/> },
  { label: 'CSS', href: '#',icon: <Help/> },
  { label: 'REACT', href: '#',icon: <User/> },
];
const gravatarSrc =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  
const Headers = () => {
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
          <Button label='Home' primary  onClick={() => { }} />
          <Button label='Services'primary  onClick={() => { }} />
          <Button label='Devices' primary  onClick={() => { }} />
          <Button label='System' primary  onClick={() => { }} />
        </Box>
        <Nav direction="row" gap="0" size="xsmall">
          {items.map((item) => (
            <Anchor href={item.href} icon={item.icon} key={item.label} />
          ))}
        </Nav>
      </Header>
      
    </div>
  )
}

export default Headers
