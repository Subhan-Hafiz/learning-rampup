import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHeader, TableRow, Menu, Text } from 'grommet';

const tableData = [
    {
        name: 'Default CA',
        status: 'Active',
        expiration: '--',
        services: '--',
        type: 'CA certificate',
        sha256: 'c5c02a35907b5936d018...',
        csr: '--'
    },
    {
        name: 'PCE',
        status: 'Active',
        expiration: 'Jan 14, 2025 8:10:49 PM',
        services: 'PCE',
        type: 'Self-signed certificate',
        sha256: '086222487beb4f77707...',
        csr: '--'
    },
    {
        name: 'Web UI and API gateway',
        status: 'Active',
        expiration: 'Jan 14, 2025 6:25:51 PM',
        services: 'Web UI and API gateway',
        type: 'Self-signed certificate',
        sha256: '9f49041deef3362fd9858...',
        csr: '--'
    },
];

const CertificatesTable = () => {
    const [selected, setSelected] = useState();

    return (
        <Box pad="small">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell scope="col" border="bottom">
                            <Text>Certificate name</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>Status</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>Expiration date</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>Services</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>Type</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>SHA-256 checksum</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>CSR</Text>
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            <Text>Actions</Text>
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell scope="row">
                                <Text>{data.name}</Text>
                            </TableCell>
                            <TableCell>
                                <Box direction="row" align="center">
                                    <Box width={{ min: "16px", max: "16px" }} height={{ min: "16px", max: "16px" }} round background="status-ok" margin={{ right: 'small' }} />
                                    <Text>{data.status}</Text>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Text>{data.expiration}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{data.services}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{data.type}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{data.sha256}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{data.csr}</Text>
                            </TableCell>
                            <TableCell>
                                <Menu
                                    label="..."
                                    items={[
                                        { label: 'Replace', onClick: () => console.log('Replace') },
                                        { label: 'Delete', onClick: () => console.log('Delete') },
                                    ]}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default CertificatesTable;