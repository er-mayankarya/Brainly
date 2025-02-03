import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

export function Dashboard() {
  const [modalOpen , setModalOpen] = useState(false);
  const {contents , refresh} = useContent();

  useEffect( () => {
    refresh();
  } , [modalOpen])


  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={ () => {
        setModalOpen(false);
      }}/>
      <div className="flex justify-end gap-4">
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
      ></Button>
      <Button onClick={ () => {
        setModalOpen(true);
      }}
        variant="primary"
        text="Add Content"
        startIcon={<PlusIcon />}
      ></Button>
      </div>

      <div className="flex gap-4 flex-wrap pt-10">

        {contents.map( ({title , type , link}) => <Card
        title={title}
        link={link}
        type={type}
      /> )}

      </div>
    </div>
    </div>
  );
}
