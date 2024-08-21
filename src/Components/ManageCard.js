import React from 'react'
import { Box, Card, Text } from 'grommet'

const ManageCard = ({card}) => {
    const {cardHeader,cardBody,icon} = card;
    return (
        <Card pad="small" direction='row'>
            <Box direction="row">
                <Box pad="0" alignSelf='center'>{icon}</Box>
                <Box pad={{ top: '5px', bottom: '5px', left: '5px', right: '5px' }} direction='column'>
                    <Text size="small" weight={'bold'} >{cardHeader}</Text>
                    <Text size="xsmall">{cardBody}</Text>
                </Box>
            </Box>
        </Card>
    )
}

export default ManageCard
