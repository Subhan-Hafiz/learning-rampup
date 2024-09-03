import React, { useEffect, useState } from 'react'
import UsersCard from '../Components/UsersCard'
import { Box, Grid } from 'grommet'
import Headers from '../Components/Headers'
import { usersData } from '../data/usersCardData'
import UserDataTable from '../Components/UsersDataTable'

const UsersPage = () => {
  const [cards, setCards] = useState([]);
  const [cardIndexClicked, setCardIndexClicked] = useState("");

  useEffect(() => {
    fetch("/api/user-list-cards")
      .then((response) => response.json())
      .then((data) => setCards(data.userListCards));
  }, []);

  const onClickOf = (i) => {
    setCardIndexClicked(i)
  }

  return (
    <div>
      {/* /users */}
      <Box pad="medium" height="100%">
        <Grid columns={{ count: 'fit', size: 'small' }} gap='small'>
          {
            cards.map((card, index) => (
              <UsersCard key={index} card={card} onClick={() => { onClickOf(card.status) }} />
            ))
          }
        </Grid>
      </Box>
      <UserDataTable onCardClick={cardIndexClicked} />
    </div>
  )
}

export default UsersPage
