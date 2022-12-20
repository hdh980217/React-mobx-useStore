import { observer } from "mobx-react";
import useStores from "../hook/useStores";

const Bpp = () => { 
    const test = useStores();
    console.log(test.apple.num);
    return (
    <>
      <h1>Bpp</h1>
      <h1>{test.apple.num}</h1>
      <button onClick = { ()=>{test.apple.increase() } } >증가</button>
      <h1>{test.banana.num2}</h1>
      <button onClick = { ()=>{test.banana.increase() } } >증가</button>
    </>
  )}

  export default observer(Bpp);