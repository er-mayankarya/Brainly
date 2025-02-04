import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

//Contrl Component
export function CreateContentModal({
  open,
  onClose,
}: {
  open: any;
  onClose: any;
}) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/content` , {
      link,
      title,
      type
    } , {
      headers : {
        "Authorization" : localStorage.getItem("token")
      }
    })

    onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-700 fixed top-0 left-0 opacity-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
             <div>
            
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer ">
                  <CrossIcon />
                </div>
              </div>
              </div>
              <div>
                <Input refs={titleRef} placeholder={"Title"} />
                <Input refs={linkRef} placeholder={"Link"} />
              </div>
              <div className="ml-4 pb-4 pt-2">
                <h1 className="pb-2"> Type : </h1>
                <input type="radio" name="type" onClick={ () => {
                  setType(ContentType.Youtube);
                }} /> Youtube
                <br></br>
                <input type="radio" name="type" onClick={ () => {
                  setType(ContentType.Twitter);
                }} /> Twitter
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
