import React, { useEffect, useState } from 'react';
import { Box, Data, DataSearch, DataTable, Pagination, Toolbar, Menu, Text, Avatar, DataSummary } from 'grommet';
import InfoBar from '../Components/Infobar';
import CertificatesHeader from '../Components/CertificateHeader';
import axios from 'axios';

const CertificatesPage = () => {
    const [certs, setCerts] = useState([])
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch("/api/certificates")
            .then((response) => response.json())
            .then((data) => setCerts(data.certs));
    }
    const columns = [
        {
            property: 'name',
            header: <Text size='small'>Name</Text>,
            render: datum => (
                <Box direction="row" align="center" gap="small">
                    <Avatar size='medium' round='full' background="brand"><Text size='small'>{datum.initials}</Text></Avatar>
                    <Text size='small'>{datum.name}</Text>
                </Box>
            ),
            primary: true
        },
        {
            property: 'email',
            header: <Text size='small'>Email</Text>,
            render: text => (
                <Text size='small'>{text.email}</Text>
            ),
        },
        {
            property: 'status',
            header: <Text size='small'>Status</Text>,
            render: text => (
                <Text size='small'>{text.status}</Text>
            )
        },
        {
            property: 'role',
            header: <Text size='small'>Platform role</Text>,
            render: text => (
                <Text size='small'>{text.role}</Text>
            )
        },
        {
            property: 'lastLogin',
            header: <Text size='small'>Last login</Text>,
            render: text => (
                <Text size='small'>{text.lastLogin}</Text>
            )
        },
        {
            property: 'actions',
            header: <Text size='small'>Actions</Text>,
            render: (cert) => (
                <Menu
                    items={[
                        { label: 'Resend Email Invite', onClick: () => { } },
                        { label: 'Delete', onClick: () => { debugger; axios.delete(`api/certificates/${cert.id}`); fetchData() } },
                    ]}
                />
            ),
        },
    ];
    return (
        <Box pad="medium">
            <CertificatesHeader />
            <InfoBar />
            <Box pad="medium">
                <Data
                    data={certs}
                >
                    <Toolbar><DataSearch /></Toolbar>
                    <DataSummary />

                    <DataTable
                        columns={columns}
                        sortable
                    />
                    <Pagination step={3} />
                </Data>
            </Box>
        </Box>
    );
};

export default CertificatesPage;