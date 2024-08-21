import React from 'react';
import { Box } from 'grommet';
import CertificatesHeader from '../Components/CertificatesHeader';
import InfoBar from '../Components/InfoBar';
import CertificatesTable from '../Components/CertificatesTable';

const CertificatesPage = () => {
    return (
        <Box pad="medium">
            <CertificatesHeader />
            <InfoBar />
            <CertificatesTable />
        </Box>
    );
};

export default CertificatesPage;
