import React from "react";
import NavBar from './NavBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import { Typography } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index && <Container component="div" Width="md"  border={9}  borderColor="black" m> {children}</Container>}
        </div>
    );
}

export default function App() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <NavBar
                method={"logout"} />

            <Tabs value={value}
                textColor="secondary"
                indicatorColor="secondary"
                onChange={handleChange}>
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label=" Contact-Us" />
            </Tabs>

            <TabPanel value={value} index={0} >
                <Typography variant="h4" component="h4">
                   Home
                </Typography>
                <img src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img"></img>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant="h4" component="h4">
                   About
                </Typography>
                <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img"></img>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Typography variant="h4" component="h4">
                   Countact-US
                </Typography>
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img"></img>
            </TabPanel>
        </>
    );
}