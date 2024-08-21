import React from 'react';
import { Box, Grid } from 'grommet';
import CardComponent from '../Components/Card';

const cardData = [
    {
        icon: 'certificate',
        header: 'Manage certificates',
        text: 'Add certificate or create certificate signing request (CSR).',
    },
    {
        icon: 'devices',
        header: 'Manage devices',
        text: 'Export CSV from GreenLake Cloud Platform workspace to add devices.',
    },
    {
        icon: 'users',
        header: 'Manage users',
        text: 'Send a sign-up link to users to collaborate with your team.',
    },
    {
        icon: 'roles',
        header: 'Manage roles',
        text: 'Assign a custom role or built-in roles to your team.',
    },
];

const HomePage = () => {
    return (
        <Box pad="large">
            <Grid columns="medium" gap="large">
                {cardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        icon={card.icon}
                        header={card.header}
                        text={card.text}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default HomePage;
