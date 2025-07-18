import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import NoItem from "./components/NoItem";
import FilterButtons from "./components/FilterButtons.jsx";
import ListItems from "./components/ListItems.jsx";
import ClearButton from "./components/ClearButton.jsx";
import { useState } from "react";

const urunler = [
  { id: 1, name: "yumurta", completed: true },
  { id: 2, name: "peynir", completed: false },
  { id: 3, name: "zeytin", completed: true },
  { id: 4, name: "et", completed: false },
  { id: 5, name: "süt", completed: true },
];

export default function App() {

  const [items, setItems] = useState(urunler);
  function handleAddItem(item){
    setItems((items)=>[...items,item])
  }

  function handleDeleteItem(id){
        setItems(items=> items.filter(i=> i.id != id))
  }

  function handleUpdateItem(id){
    const updatedItems = items => items.map((item)=> item.id == id ? {...item, completed: !item.completed} : item);

    setItems(updatedItems);
  }

  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />

      <FilterButtons />

      <ListItems urunler={items} onDeleteItem ={handleDeleteItem} onUpdateItem ={handleUpdateItem}/>

      <ClearButton />
    </div>
  );
}
