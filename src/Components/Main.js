import React, { useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '../router';
import { auth } from "../../firebase/config";


const Main = () => {
    const [user, setUser] = useState(null);
    
    const state = useSelector((state) => state);
    
    auth.onAuthStateChanged((user) => setUser(user));
// const routing = useRoute({});
// const routing = useRoute(null);
    const routing = useRoute(user);
    useEffect(() => { }, []);

    return <NavigationContainer>
        {routing}
        <StatusBar style="auto" />
    </NavigationContainer>;
};

export default Main;