import { observer } from 'mobx-react';
import Bpp from './component/Bpp';
import Cpp from './component/Cpp';
import useStores from './hook/useStores';


const App = () => {
  const test = useStores();
  console.log(test.apple.num);
  return (
    <div>
      <h1>App</h1>
      <h1>{test.apple.num}</h1>
      <button onClick = { ()=>{test.apple.increase() } } >증가</button>
      <h1>{test.banana.num2}</h1>
      <button onClick = { ()=>{test.banana.increase() } } >증가</button>
      <Bpp/>
      <Cpp/>     
    </div>
  );
}

export default observer(App);