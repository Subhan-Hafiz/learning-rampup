import React from 'react';
import { Box, Card, CardBody, CardHeader, Text } from 'grommet';
import { Certificate, Group, Device, Key } from 'grommet-icons';

const icons = {
    certificate: <Certificate size="large" />,
    users: <Group size="large" />,
    devices: <Device size="large" />,
    roles: <Key size="large" />,
};

const CardComponent = ({ icon, header, text }) => {
    return (
        <Card height="small" width="medium" background="light-1">
            <CardHeader pad="medium">
                {icons[icon]}
                <Text size="large" margin={{ left: 'small' }}>
                    {header}
                </Text>
            </CardHeader>
            <CardBody pad="medium">
                <Text>{text}</Text>
            </CardBody>
        </Card>
    );
};

export default CardComponent;
