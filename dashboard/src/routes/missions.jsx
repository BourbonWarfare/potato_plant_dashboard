import React from "react";
import { SERVICES } from '../potato_library.js';
import { DenseTable } from '../potato_components.jsx';

class Missions extends React.Component {
    getMissionHistory() {
        const url = window.location.protocol + '//' + window.location.hostname + "/" + SERVICES["missions"].uri + "/history/last_missions/";

        const request = new Request(url);
        fetch(request)
            .then((response) => response.json())
            .then((blob) => {
                console.log(blob)
            });

        return 0

    }


    render() {
        return (
            <div id="missions">
            {
                this.getMissionHistory()
            }
            </div>
        )
    }
}

export default Missions;

