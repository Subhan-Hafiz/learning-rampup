import "./Devices.css";
import HeadingComponent from '../common/heading/Heading';
import { NavLink, Outlet } from "react-router-dom";
import { Box, Sidebar, Anchor } from 'grommet';

const DevicesComponent = () => {
    return (
        <section className="devices">
            {/* Heading Common */}
            <HeadingComponent title={"Devices"}
                description={"Manage your devices and their subscriptions"} mt="0"/>

            {/* Sidebar */}
            <Box fill>
                <Sidebar
                    align='start'
                    className="fixed-sidebar"
                    margin={{top: "15px"}}
                >
                    <NavLink to={`/devices/inventory`} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        <Anchor label={"Inventory"} as="span" margin={{ left: '5px' }} style={{ textDecoration: 'none' }} />
                    </NavLink>
                </Sidebar>
                {/* Right Content */}
                <Box className="content" pad={{right: "0"}}>
                    <Outlet />
                </Box>
            </Box>
        </section>
    )
}

export default DevicesComponent;