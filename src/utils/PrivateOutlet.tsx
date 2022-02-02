import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateOutlet = (props: any) => {
    const { auth } = props;
    const navigate = useNavigate();
    // const lol = false;
    useEffect(() => {
        if(auth) {
            <Outlet />
        }else {
            navigate("/login")
        }
    }, [auth, navigate])
    return (
        <>
            <Outlet />
        </>
    );
}

export default PrivateOutlet;