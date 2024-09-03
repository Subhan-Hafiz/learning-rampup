import React, { useState, useEffect } from 'react';
import './Inventory.css';
import HeadingComponent from '../common/heading/Heading';
import BoxComponent from '../common/box/Box';
import { Box, Button, DataTable, TextInput, Layer, Text } from 'grommet';
import { Search, Trash } from 'grommet-icons';
import axios from 'axios';

const InventoryComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/inventory-items`, {
                    params: { query: searchText }
                });
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchText]);

    const onSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (itemToDelete) {
            try {
                await axios.delete(`/api/inventory-items/${itemToDelete.id}`);
                setFilteredData(filteredData.filter(item => item.id !== itemToDelete.id));
                setShowConfirm(false);
                setItemToDelete(null);
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const columns = [
        { property: 'id', header: 'ID', primary: true },
        { property: 'name', header: 'Name' },
        { property: 'category', header: 'Category' },
        { property: 'quantity', header: 'Quantity' },
        {
            property: 'action',
            header: 'Action',
            render: (datum) => (
                <Button label={<Trash/>} onClick={() => handleDeleteClick(datum)} />
            ),
        },
    ];

    return (
        <section className="inventory">
            <Box direction="row" justify="between" align="start" margin={{ bottom: 'medium' }}>
                <HeadingComponent
                    title={"Inventory"}
                    description={"View and onboard devices in your inventory. Added devices can be associated with an application."}
                />
                <Button label="Add Item" primary />
            </Box>

            {/* Four Boxes with Content */}
            <Box direction="row" justify="between" wrap margin={{ bottom: 'medium' }} gap="medium">
                <BoxComponent title={"Require App"} para={"57"} />
                <BoxComponent title={"Require Subscriptions"} para={"34"} />
                <BoxComponent title={"Assigned & Subscribed"} para={"226"} />
                <BoxComponent title={"Total Services"} para={"317"} />
            </Box>

            <Box margin={{ top: 'medium' }}>
                <Box width="medium">
                    <TextInput
                        placeholder="Search inventory..."
                        value={searchText}
                        onChange={onSearch}
                        icon={<Search />}
                        margin={{ bottom: 'small' }}
                    />
                </Box>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    sortable
                />
            </Box>

            {showConfirm && (
                <Layer
                    onEsc={() => setShowConfirm(false)}
                    onClickOutside={() => setShowConfirm(false)}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Text>Are you sure you want to delete this item?</Text>
                        <Box direction="row" gap="small" justify="end">
                            <Button label="Cancel" onClick={() => setShowConfirm(false)} />
                            <Button label="OK" onClick={confirmDelete} primary />
                        </Box>
                    </Box>
                </Layer>
            )}
        </section>
    );
};

export default InventoryComponent;