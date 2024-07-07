import { AppBar, Toolbar, styled } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

// Styled AppBar component with a custom background color
const Header = styled(AppBar)`
    background: #000000;
`;

// Styled 'p' element with custom font size and margin
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 30px;
    color:inherit;
    text-decoration:none
`;

export default function Navbar() {
    return (
        // Use the custom Header component instead of the default AppBar
        <Header position="static">
            <Toolbar>
                {/* Box component to apply flex display on Toolbar content */}
                <Box display="flex">
                    {/* Custom Tabs components with the styled 'p' element */}
                    <Tabs to="/">Lets code</Tabs>
                    <Tabs to="/add">Add User</Tabs>
                    <Tabs to="/all">All User</Tabs>
                </Box>
            </Toolbar>
        </Header>
    );
}
