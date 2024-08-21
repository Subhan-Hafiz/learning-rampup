import React from 'react'
import { Box, Card, Text } from 'grommet'

const UsersCard = ({card}) => {
const { cardHeader,cardBody,icon} = card;
    return (
        <Card direction='row'>
            <Box direction="row" width='100%' pad='small'>
                <Box pad='small' width='80%'>
                    <Text size='small'>{cardHeader}</Text>
                    <Text size='large' margin='0'>{cardBody}</Text>
                </Box>
                <Box pad='small' justify='start'>{icon}</Box>
            </Box>
        </Card>
    )
}

export default UsersCard
