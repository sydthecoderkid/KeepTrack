import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/react";
import './TrackGame.css';
import { useState } from "react";


export default function TrackGame() {
  const [loading, changeLoading] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: "Courier New", color: "black" }}>Add a game to track!</h2>
      <div className="w-full flex flex-row flex-wrap gap-4">

        <Input class='inputField' radius="lg" placeholder="Enter a game title" className="max-w-[220px]">
        </Input>
      </div>
      <div class='button'>
        <Button disableAnimation={true} isLoading={loading} onPress={() => changeLoading(true)}>
          Find Game
        </Button>
      </div>
    </div >
  );




}



