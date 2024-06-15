
import { FormControl, InputLabel, Input } from '@mui/material';

export default function TrackGame() {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: "Courier New", color: "white" }}>Hmm.. No games yet. Add one to track!</h1>
      <FormControl>
        <InputLabel shrink>Name:</InputLabel>
        <Input id="name" />
      </FormControl>

      <FormControl style={{ marginLeft: 5 }}>
        <InputLabel size="normal" focused>Age:</InputLabel>
        <Input id="age" type='number' />
      </FormControl>

    </div>
  );
}