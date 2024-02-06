import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function useEffectLocation(effect) {
    const location = useLocation();
    const [CLocation, setCLocation] = useState(location);//--> Current Location

    useEffect(() => {

        if (location.pathname === CLocation.pathname)
            return;
        setCLocation(location);
        return effect(location);

    }, [location]);// eslint-disable-line react-hooks/exhaustive-deps

    return location
}

export default useEffectLocation;