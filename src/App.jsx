import { useState } from "react"
import Header from "@/components/Header"
import CardSection from "@/components/CardSection"
import Backdrop from "@/components/Backdrop"
import Modals from "@/components/Modals"


function App() {
  const [getSearch, setGetSearch] = useState("")
  const [openLightBox, setOpenLightBox] = useState(true)
  const [modal, setModal] = useState(null);

  const closeLightBox = () => setOpenLightBox(false)
  const getLightBox = (id, image) => {
    setOpenLightBox(true)
    setModal({id, image})
  }

  return (
    <>
      <Header onSearch={setGetSearch} />
      <main className="relative transition-[background,_border,_border-radius,_box-shadow] duration-[.3s] xl:p-[3em_0]">
        <article className="relative flex flex-wrap mx-auto max-w-[1500px]">
          <CardSection />
        </article>
      </main>

      {
        openLightBox && <Modals isActive={openLightBox} modalData={modal} closeLightBox={closeLightBox} />
      }
    </>
  )
}

export default App
