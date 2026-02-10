import { useState } from "react";
import './App.css'
import Category from './components/Category';
import Card from './components/Card';
import NavBar from './components/NavBar';
import itemData from "./assets/Data.json"

function App() {

  const [search, setSearch] = useState("");

  const filterData = itemData.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <Category search={search} setSearch={setSearch} />
      <Card data={filterData} />
    </>
  )
}
export default App
