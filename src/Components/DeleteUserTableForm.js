import React, { useEffect, useState } from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';
import axios from 'axios';

const DeleteUserTableForm = ({ rowSelect, callback }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        openModal();
    }, [rowSelect])

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const handleDelete = async () => {
        try {
            let res = await axios.delete(`/api/users/${rowSelect.rowSelect.id}`);
            closeModal();
           await callback(rowSelect);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <Box align="center" justify="center" pad="large">
            {showModal && (
                <Layer
                    onEsc={closeModal}
                    onClickOutside={closeModal}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Box direction="row" align="center" justify="between">
                            <Text>Modal Title</Text>
                            <Button icon={<Close />} onClick={closeModal} />
                        </Box>
                        <Text>Do you really want to Delete the record ?</Text>
                        <Box direction="row" gap="small" justify="end">
                            <Button label="Cancel" onClick={closeModal} />
                            <Button label="Yes" primary onClick={handleDelete} />
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

export default DeleteUserTableForm;

