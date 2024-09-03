import { Avatar, Box, Data, DataSearch, DataTable, Menu, Pagination, Text, Toolbar } from "grommet"

const R = () => {
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
            render: () => (
                <Menu
                    items={[
                        { label: 'Resend Email Invite', onClick: () => { } },
                        { label: 'Delete', onClick: () => { } },
                    ]}
                />
            ),
        },
    ];


    return (
        <Data
            data={tableData}
        >
            <Toolbar><DataSearch /></Toolbar>
            <DataTable columns={columns} />
            <Pagination step={3} />
        </Data>
    )
}

export default R