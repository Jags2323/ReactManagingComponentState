import { useState } from "react"
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";


const App = () => {

  const [cartItems, setCartItems] = useState(['product 1' , 'product 2' , 'product 3'])
  
  const [bugs,setBugs]=useState([
    {id:1, title:'Bug 1', fixed:false},
    {id:2, title:'Bug 2', fixed:false},
  ]);

  const handleClick = () =>{
    
    //setBugs(bugs.map(bug => bug.id === 1 ? {...bugs, fixed: true} : bugs));
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if(bug) bug.fixed=true;
    }))
  }



  return (
    <div onClick={handleClick}>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? "fixed" : "New"}</p>)}
      <button>Click Me</button>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems = {cartItems} onClear = {() => setCartItems([])}/>
    </div>
  )
}

export default App
