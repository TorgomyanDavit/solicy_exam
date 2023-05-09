import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [data,setData] = useState([])
  
  function handleAddCard() {
    let RandomId = Math.floor(Math.random() * 100);
    let newItem = { id:RandomId }
    setData([...data,newItem])
  }

  function handleSortCard() {
    data.sort((a, b) => a.id - b.id);
    setData([...data])
  }

  function handleDeleteCard(id) {
    const sortArray = data.filter((val) => val.id !== id);
    setData(sortArray)
  }

  return (
    <div className="App">

      <div className="left_sideBar">
        <Header 
          addCard={handleAddCard} 
          sortCard={handleSortCard}
        />
        <Main data={data} deleteCard={handleDeleteCard}/>
        <Footer/>
      </div>


      <div className="right_sideBar">
        Press the "add card" button to add the new Card Use the "sort Cards"
        button to sort the Cards by the increase. Press an C ic on the to Right
        to delete them
      </div>
    </div>
  );
}

export default App;
