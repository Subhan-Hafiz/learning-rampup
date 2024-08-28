import React from 'react'
import { Box, Card, Text } from 'grommet'
import { Capacity, Plan, UserAdd, UserAdmin } from 'grommet-icons';

const ManageCard = ({card}) => {
    const {cardHeader,cardBody} = card;
    const iconMapping = {
        Capacity: <Capacity color="brand" size="medium" />,
        Plan: <Plan color="yellow" size="medium" />,
        UserAdd: <UserAdd color="brown" size="medium" />,
        UserAdmin: <UserAdmin color="green" size="medium" />,
      };
    return (
        <Card pad="small" direction='row'>
            <Box direction="row">
                <Box pad="0" alignSelf='center'>{iconMapping[card.icon]}</Box>
                <Box pad={{ top: '5px', bottom: '5px', left: '5px', right: '5px' }} direction='column'>
                    <Text size="small" weight={'bold'} >{cardHeader}</Text>
                    <Text size="xsmall">{cardBody}</Text>
                </Box>
            </Box>
        </Card>
    )
}

export default ManageCard
