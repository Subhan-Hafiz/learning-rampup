import React, { useEffect, useState } from 'react';

import { Avatar, Box, Data, DataSearch, DataSummary, DataTable, Menu, Meter, Pagination, Text, Toolbar } from 'grommet';
import { MoreVertical } from 'grommet-icons';
import EditUserTableForm from './EditForm';
import DeleteUserTableForm from './DeleteUserTableForm';
// import { tabularData } from '../data/usersTabularData';

const defaultView = {
    page: 1,
    sort: { property: 'name', direction: 'asc' },
    step: 3,
};
const UserDataTable = ({ onCardClick }) => {
    const [tabularData, setTab] = useState([])
    const [filteredData, setFilteredData] = useState(tabularData)
    const [modalCallback, setCallback] = useState('');

    useEffect(() => {
        fetch(`/api/users/`)
            .then((res) => res.json())
            .then((data) => { setTab((data.users)); setFilteredData(data.users) });
    }, [modalCallback]);

    useEffect(() => {
        console.log(onCardClick)
        console.log(tabularData.filter(item => item.status.toLowerCase() == onCardClick))
        if (onCardClick) setFilteredData(tabularData.filter(item => item.status.toLowerCase() == onCardClick))
    }, [onCardClick])


    const [editRow, setEditRow] = useState(null);
    const [deleteRow, setDeleteRow] = useState(null);
    const onEdit = (e, rowSelect) => {
        setEditRow((rs) => { return ({ ...rs, rowSelect }) });
    }
    const onDelete = (e, rowSelect) => {
        setDeleteRow((rs) => { return ({ ...rs, rowSelect }) });
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
            render: (rowSelect) => (
                <Menu
                    icon={<MoreVertical size='small' />}
                    items={[
                        { label: 'Edit', onClick: (e) => { onEdit(e, rowSelect) } },
                        { label: 'Delete', onClick: (e) => { onDelete(e, rowSelect) } },
                    ]}
                />
            ),
        },
    ];


    const [search, setSearch] = useState('');

    return (
        <>
            {/* EDIT MODAL popup */}
            {
                (editRow !== null) && <EditUserTableForm rowSelect={editRow} callback={setCallback} />
            }
            {/* DELETE MODAL */}
            {
                (deleteRow !== null) && <DeleteUserTableForm rowSelect={deleteRow} callback={setCallback} />
            }
            <Box pad="medium">


                {/* Data Table */}
                <Data
                    data={filteredData}
                >
                    <Toolbar>
                        <DataSearch
                        />
                    </Toolbar>
                    <DataSummary />
                    <DataTable
                        columns={columns}
                        sortable
                        primaryKey="id"
                    />
                    <Pagination
                        step={3}
                    />
                </Data>
            </Box>
        </>

    );
};

export default UserDataTable;

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