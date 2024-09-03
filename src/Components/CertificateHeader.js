import React from 'react';
import { Box, Button } from 'grommet';

const CertificatesHeader = () => {
    return (
        <Box direction="row" justify="between" pad="small" align="center">
            <Box>
                <h2>Certificates</h2>
                <p>Manage certificates for validating system.</p>
            </Box>
            <Box direction="row" gap="small">
                <Button label="Download CA certificates" primary />
                <Button label="Add CA certificate" primary />
            </Box>
        </Box>
    );
};

export default CertificatesHeader;