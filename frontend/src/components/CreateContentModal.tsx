import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

//Contrl Component
export function CreateContentModal({ open, onClose } : {
  open : any;
  onClose : any;
}) {

  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>()

  function addContent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;


  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-80 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                    </div>
                    </div>
                    <div>
                        <Input refs={titleRef} placeholder={"Title"} />
                        <Input refs={linkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center">
                    <Button onClick={addContent} variant="primary" text="Submit" />
                    </div>
                </span>
        </div>
        </div>
      )}
    </div>
  );
}


