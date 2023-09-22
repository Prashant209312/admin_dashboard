import { useState } from "react";

import { Avatar, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";



const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box maxWidth={240} sx={{ bgcolor: "ActiveCaption", py: 3 }}>

            <Avatar sx={{ ml: 'auto', mr: 'auto', mb: 1 }}>H</Avatar>
            <Typography textAlign='center' >Ed Roh</Typography>
            <Typography textAlign='center' >Prashant Sachan Admin</Typography>


            <List dense>
                <ListItem disablePadding>
                    <ListItemButton dense>
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: "inherit" }}>
                        Data
                    </ListSubheader>
                }
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contacts Information" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ReceiptOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Invoices Balances" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: 'inherit' }}>
                        Pages
                    </ListSubheader>
                }
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile Form" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarTodayOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calander" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HelpOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ Pages" />
                    </ListItemButton>
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: 'inherit' }} >
                        Charts
                    </ListSubheader>
                }
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BarChartOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bar Chart" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PieChartOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pie Chart" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <TimelineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Line Charts" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Geography Charts" />
                    </ListItemButton>
                </ListItem>

            </List>

        </Box>
    );
};

export default Sidebar;