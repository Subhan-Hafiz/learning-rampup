import { Anchor, Box, Grid, Header, ResponsiveContext } from 'grommet'
import React, { useContext, useEffect, useState } from 'react'
import Headers from '../Components/Headers';

import { manageCardData } from '../data/manageCardData';

import ManageCard from '../Components/ManageCard';

const HomePage = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/manage-cards")
      .then((response) => response.json())
      .then((data) => setCards(data.manageCards));
  }, []);

  return (
    <div>
      <Header pad="small">
        Getting Started
        <Anchor href='#' color="black" weight={'lighter'} size='small' textDecoration='underline' label='Dismiss' alignSelf='end'></Anchor>
      </Header>

      <Box pad="small">
        <Grid columns="1/2" gap="small">
          {cards.map((card, index) => (
            <ManageCard key={index} card={card} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default HomePage
