import { useState } from "react"
import Header from "@/components/Header"


function App() {
  const [getSearch, setGetSearch] = useState("")

  console.log(getSearch)

  return (
    <>
      <Header onSearch={setGetSearch} />
    </>
  )
}

export default App
