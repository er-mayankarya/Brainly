import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const userData = {
            username , password
        }
        
        const response = await axios.post(BACKEND_URL + "/api/v1/signin" ,  userData)
        const jwt = response.data.token;
        localStorage.setItem("token" , jwt);
        navigate("/dashboard");

    }


    return <div  className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input refs={usernameRef} placeholder="Username" />
            <Input refs={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
            <Button onClick={signin} variant="primary" text="Signin" fullWidth={true} />
            </div>
        </div>

    </div>

}