import React, { useEffect, useState } from 'react';
import { Grommet, Box, Button, Layer, Text, TextInput, Menu, Form } from 'grommet';
import { Close } from 'grommet-icons';
import axios from 'axios';

const EditUserTableForm = ({ rowSelect, callback }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        verificationStatus: 'Unverified',
    });
    useEffect(() => {
        // console.log(rowSelect);
        setFormData(formData => {
            return {
                ...formData,
                name: rowSelect.rowSelect.name,
                email: rowSelect.rowSelect.email
            }
        });
        openModal();
    }, [rowSelect]);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMenuChange = (option) => {
        setFormData({ ...formData, verificationStatus: option });
    };

    const handleSubmit = async () => {
        try {
            let res = await  axios.patch(`/api/users/${rowSelect.rowSelect.id}`,formData);
            closeModal();
           await callback(res.data);
        }
        catch(err) {
            console.log(err);
        }
    };

    return (
        <Box align="center" justify="center" pad="large">
            {showModal && (
                <Layer onEsc={closeModal} onClickOutside={closeModal}>
                    <Box pad="medium" gap="small" width="medium">
                        <Box direction="row" align="center" justify="between">
                            <Text>Form Modal</Text>
                            <Button icon={<Close />} onClick={closeModal} />
                        </Box>
                        <Form>
                            <Box gap="small">
                                <TextInput
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                                <TextInput
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    name="email"
                                    onChange={handleChange}
                                />
                                {/* <Menu
                                    label={formData.verificationStatus}
                                    items={['Verified', 'Unverified'].map((option) => ({
                                        label: option,
                                        onClick: () => handleMenuChange(option),
                                    }))}
                                /> */}
                            </Box>
                        </Form>
                        <Box direction="row" gap="small" justify="end" margin={{ top: 'medium' }}>
                            <Button label="Cancel" onClick={closeModal} />
                            <Button label="Submit" primary onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

export default EditUserTableForm;
