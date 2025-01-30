import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen , setModalOpen] = useState(false);
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

      <div className="flex gap-4">
      <Card
        title="First Tweet"
        link="https://x.com/kirat_tw/status/1882072313719578789"
        type="twitter"
      />

      <Card
        title="First Video"
        link="https://www.youtube.com/watch?v=Bj2ly9PMdPI"
        type="youtube"
      />
      </div>
    </div>
    </div>
  );
}
