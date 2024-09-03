import React from 'react'
import { Box, Card, Text } from 'grommet'
import { MailOption, User, UserExpert, UserSettings } from 'grommet-icons';

const UsersCard = ({ card, onClick }) => {
    const { cardHeader, cardBody } = card;

    const iconMapping = {
        User: <User color="brand" size="medium" />,
        UserExpert: <UserExpert color="yellow" size="medium" />,
        UserSettings: <UserSettings color="brown" size="medium" />,
        MailOption: <MailOption color="green" size="medium" />,
    };
    return (
        <Card direction='row' onClick={onClick}>
            <Box direction="row" width='100%' pad='small'>
                <Box pad='small' width='80%'>
                    <Text size='small'>{cardHeader}</Text>
                    <Text size='large' margin='0'>{cardBody}</Text>
                </Box>
                <Box pad='small' justify='start'>{iconMapping[card.icon]}</Box>
            </Box>
        </Card>
    )
}

export default UsersCard
