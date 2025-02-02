
import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const userData = {
            username , password
        }
        
        await axios.post(BACKEND_URL + "/api/v1/signup" ,  userData)
        alert("You are signed up !!");
        navigate("/signin");

    }


    return <div  className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input refs={usernameRef} placeholder="Username" />
            <Input refs={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
            <Button onClick={signup} variant="primary" text="Sign Up" fullWidth={true} />
            </div>
        </div>

    </div>

}