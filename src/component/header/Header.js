import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grommet, Header, Nav, DropButton, Text, Image, Button } from 'grommet';
import { Down, Notification, AppsRounded, Help, User } from 'grommet-icons';
import "./Header.css";

const HeaderComponent = () => {
    return (
        <Grommet>
            <Header background="background" pad={{ top: "10px", bottom: "10px", left: "30px", right: "30px" }}>
                <Box
                    direction="row"
                    fill="horizontal"
                    justify="between"
                    align="center"
                    gap="medium"
                >
                    {/* Left Section: Logo and Dropdown */}
                    <Box direction="row" align="center" gap="small">
                        {/* Logo */}
                        <NavLink to="/home" className="nav-link">
                            <Image src="./logo.png" alt="Logo" width="100px" />
                        </NavLink>

                        {/* Dropdown Menu */}
                        <DropButton
                            className='dropdown-btn'
                            label={
                                <Box direction="row" align="center" gap="small">
                                    <Text>GreenLake on-prem workspace</Text>
                                    <Down />
                                </Box>
                            }
                            dropContent={
                                <Box pad={{ top: "10px", bottom: "10px", left: "10px", right: "10px" }}
                                    background="light-2">
                                    <Text>Option 1</Text>
                                    <Text>Option 2</Text>
                                    <Text>Option 3</Text>
                                </Box>
                            }
                            dropProps={{ align: { top: 'bottom', right: 'right' } }}
                        />
                    </Box>

                    {/* Center Section: Navigation Links */}
                    <Box flex direction="row" justify="center" align="center" gap="medium">
                        <Nav direction="row" gap="medium">
                            <NavLink
                                to="/home"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <Text>Home</Text>
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <Text>Services</Text>
                            </NavLink>
                            <NavLink
                                to="/devices"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <Text>Devices</Text>
                            </NavLink>
                            <NavLink
                                to="/system"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <Text>System</Text>
                            </NavLink>
                        </Nav>
                    </Box>

                    {/* Right Section: Icons */}
                    <Nav direction="row" align="center" gap="small" className='nav-icons'>
                        <NavLink to="/notifications" className='nav-link'>
                            <Notification size="16px" color="#000000" />
                        </NavLink>
                        <NavLink to="/settings" className='nav-link'>
                            <AppsRounded size="16px" color="#000000" />
                        </NavLink>
                        <NavLink to="/help" className='nav-link'>
                            <Help size="16px" color="#000000" />
                        </NavLink>

                        <DropButton
                            icon={<User size="16px" color="#000000" />}
                            dropContent={
                                <Box
                                    background="light-2" width="240px" className='user-dropdown'>
                                    <Box
                                        border={{ side: 'bottom', color: 'light-4', size: '1px' }}
                                        margin={{ bottom: 'small' }}
                                        pad={{ top: "10px", bottom: "10px", left: "10px", right: "10px" }}
                                    >
                                        <Text weight="bold">User Dev</Text>
                                        <Text size="small" color="dark-4">
                                            devmockuser@gmail.com
                                        </Text>
                                    </Box>
                                    <Box
                                        pad={{ top: "0", bottom: "10px", left: "10px", right: "10px" }} className='user-link'
                                    >
                                        <NavLink to="/account-details">
                                            <Text>HPE UserAccount Details</Text>
                                        </NavLink>
                                        <NavLink to="/preferences">
                                            <Text>HPE GreenLake Preferences</Text>
                                        </NavLink>
                                        <Button
                                            plain
                                            label="Sign out of HPE"
                                            className='sign-out'
                                            onClick={() => { /* Handle sign out action */ }}
                                            style={{ textAlign: 'left' }} // Optional: Align text to the left
                                        />
                                    </Box>
                                </Box>
                            }
                            dropProps={{
                                align: { top: 'bottom', right: 'right' },
                                margin: { top: '8px' }
                            }}
                        />
                    </Nav>
                </Box>
            </Header>
        </Grommet>
    );
}

export default HeaderComponent;