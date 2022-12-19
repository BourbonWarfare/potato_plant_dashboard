import React from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';

import { Link, Outlet } from "react-router-dom";
import { SERVICES } from '../potato_library.js';

function StatusIcon(props) {
    if (props.alive) {
        return <CheckBoxRoundedIcon />
    } else {
        return <CheckBoxOutlineBlankRoundedIcon />
    }
}

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plant: (SERVICES[props.plant] === undefined) ? 'INVALID' : props.plant,
            plant_data: (SERVICES[props.plant] === undefined) ? SERVICES['none'] : SERVICES[props.plant],
            alive: false
        };
    }

    checkStatus() {
        let currentState = this.state;

        let request = fetch(
            window.location.protocol + '//' + window.location.host + '/' + SERVICES[this.state.plant].uri,
        {
            method: 'HEAD'
        });

        request.then(resp => {
            currentState.alive = resp.status < 500; // if no server errors, we are alive
            this.setState(currentState);
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setTimeout(
                () => this.checkStatus(),
                this.state.alive ? 10000 : 500
            );
        });
    }

    componentDidMount() {
        this.checkStatus();
    }

    componentWillUnmount() {
    }

    render() {
        const uri = this.state.plant_data.uri;
        return (
            <ListItem>
                <ListItemButton component={Link} to={ "./" + uri} disabled={ !this.state.alive } sx={{ width: '100%', maxWidth: 200}}>
                    <ListItemText primary={"potato_plant_" + this.state.plant} />
                </ListItemButton>
                <ListItemIcon>
                    <StatusIcon alive={this.state.alive} />                
                </ListItemIcon> 
            </ListItem>
        );
    }
}

export default function Dashboard() {
    let services = [];
    for (const service in SERVICES) {
        if (service === "none") {
            continue;
        }
        services.push(<Status key={service} plant={service} />);
    }

    return (
    <div id="services">
        <h1>Services</h1>
        <List dense sx={{ width: '100%', maxWidth: 360}}>
            { services }
        </List>
        <div id="service-panel">
            <Outlet />
        </div>
    </div>
    );
}


