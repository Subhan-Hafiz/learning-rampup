import React, { useEffect, useState } from 'react';

import { Avatar, Box, Data, DataSearch, DataSummary, DataTable, Menu, Meter, Pagination, Text, Toolbar } from 'grommet';
import { MoreVertical } from 'grommet-icons';
// import { tabularData } from '../data/usersTabularData';

const defaultView = {
    page: 1,
    sort: { property: 'name', direction: 'asc' },
    step: 3,
};
const UserDataTable = () => {
    const [tabularData, setTab] = useState([])
    useEffect(() => {
        fetch(`/api/users/`)
          .then((res) => res.json())
          .then((data) => setTab((data.users)));
      }, []);
    const [select, setSelect] = useState([]);
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
                    icon={<MoreVertical size='small' />}
                    items={[
                        { label: 'Resend Email Invite', onClick: () => { } },
                        { label: 'Delete', onClick: () => { } },
                    ]}
                />
            ),
        },
    ];

    const [view, setView] = useState({ page: 1, step: 3 });

    const [search, setSearch] = useState('');

    // Handle search functionality
    const filteredData = tabularData.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination handling
    const paginatedData = filteredData.slice(
        (view.page - 1) * view.step,
        view.page * view.step
    );
    return (
        <Box pad="medium">
            {/* working except search
            <Data data={paginatedData}
                view={view}
                onView={setView}
                filters={filters}
                onFilters={setFilters}
                total={tabularData.length}>
                <Toolbar>
                    <DataSearch />
                </Toolbar>
                <DataSummary />
                <DataTable step={3} columns={columns} />
                <Pagination
                    summary //showing 5 of 6
                    stepOptions //items box dropdown
                    numberItems={tabularData.length}
                    pad={{ vertical: 'xsmall', left: 'small' }} />
            </Data> */}
            <Data
                data={paginatedData}
                total={filteredData.length}
                view={view}
                onView={setView}
            >
                <Toolbar>
                    <DataSearch
                        placeholder="Search..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </Toolbar>
                <DataSummary />
                <DataTable
                    columns={columns}
                    sortable
                    primaryKey="id"
                    select={select}
                    onSelect={setSelect}
                />
                <Pagination
                    page={view.page}
                    step={view.step}
                    numberItems={filteredData.length}
                    onChange={({ page, step }) => setView({ page, step })}
                    margin={{ top: 'medium' }}
                />
            </Data>
        </Box>
    );
};

export default UserDataTable;