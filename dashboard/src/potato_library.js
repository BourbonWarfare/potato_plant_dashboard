// potato_library.js
// common functions needed for multiple routes
import Missions from "./routes/missions.jsx";
import Replay from "./routes/replay.jsx";

const SERVICES = {
    'none': { 
        uri: '404',
        component: <div id="404">Cannot find service</div>
    },
    'missions': { 
        uri: 'missions/',
        component: <Missions />
    },
    'replay': { 
        uri: 'replay/',
        component: <div id="re">Fuck you</div>
    }
};

export default SERVICES;
export {
    SERVICES
}


