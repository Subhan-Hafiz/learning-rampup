import { Anchor, Box, Button, Card, CardBody, CardFooter, CardHeader, Grid, Header, Heading, ResponsiveContext, Text } from 'grommet'
import React, { useContext } from 'react'
import Headers from '../Components/Headers';

import { manageCardData } from '../cardData';
import { MailOption, User, UserExpert, UserSettings } from 'grommet-icons';
import UsersCard from '../Components/UsersCard';
import ManageCard from '../Components/ManageCard';

export const usersData = [
  {
    icon: <User color='plain' size='medium' pad='' />,
    cardHeader: 'Total users',
    cardBody: '532'
  },
  {
    icon: <UserExpert color='plain' size='medium' pad='' />,
    cardHeader: 'Active users',
    cardBody: '266'
  },
  {
    icon: <UserSettings color='plain' size='medium' pad='' />,
    cardHeader: 'Inactive users',
    cardBody: '267'
  },
  {
    icon: <MailOption color='plain' size='medium' pad='' />,
    cardHeader: 'Unverified users',
    cardBody: '95'
  }
]
const ManageCardPage = () => {
  const size = useContext(ResponsiveContext);
  return (
    <div>
      <Headers />
      {/* Table implementation */}
      <Box pad="large" height="100%">
        <Grid columns={{ count: 'fit', size: 'small' }} gap='small'>
          {
            usersData.map((card, index) => (
              <UsersCard key={index} card={card} />
            ))
          }
        </Grid>
      </Box>
      {/* body */}
      <Header pad="small">
        Getting Started
        <Anchor href='#' color="black" weight={'lighter'} size='small' textDecoration='underline' label='Dismiss' alignSelf='end'></Anchor>
      </Header>

      <Box pad="small">
        <Grid columns="1/2" gap="small">
          {manageCardData.map((card, index) => (
            <ManageCard key={index} card={card} />
          ))} 
        </Grid>
      </Box>
    </div>
  )
}

export default ManageCardPage
