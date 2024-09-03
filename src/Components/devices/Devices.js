import "./Devices.css";
import HeadingComponent from '../common/heading/Heading';
import { NavLink, Outlet } from "react-router-dom";
import { Box, Sidebar, Anchor } from 'grommet';

const DevicesComponent = () => {
    return (
        <Box fill pad="medium" className="devices">
            {/* Heading Common */}
            <HeadingComponent title={"Devices"}
                description={"Manage your devices and their subscriptions"} mt="none" />

            {/* Sidebar */}
            <Box fill>
                <Sidebar
                    align='start'
                    className="fixed-sidebar"
                >
                    <NavLink to={`/devices/inventory`} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        <Anchor label={"Inventory"} as="span" style={{ textDecoration: 'none' }} />
                    </NavLink>
                </Sidebar>
                {/* Right Content */}
                <Box className="content" pad={{ right: "none" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default DevicesComponent;