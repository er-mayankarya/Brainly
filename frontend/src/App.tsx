import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

export default function App() {
  const [modalOpen , setModalOpen] = useState(false);
  return (
    <div className="p-4">
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
  );
}
