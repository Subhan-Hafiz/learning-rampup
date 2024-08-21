import React from 'react';
import { Box, Text, Icon } from 'grommet';
import { CircleInformation } from 'grommet-icons';

const InfoBar = () => {
    return (
        <Box background="light-2" pad="small" direction="row" align="center" gap="small">
            <CircleInformation color="neutral-2" />
            <Text>Generate a certificate signing request (CSR) under the “...” menu to provide to your Certificate Authority (CA) of choice. This will replace the existing self-signed certificate.</Text>
        </Box>
    );
};

export default InfoBar;
