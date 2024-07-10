import { useEffect } from 'react'

const Backdrop = ({ isActive, closeLightBox }) => {

  useEffect(() => {
    console.log(isActive)
    if(isActive) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isActive])

  return (
    <div
      className="fixed top-0 left-0 z-60 w-full h-screen bg-[rgba(0,0,0,.75)]"
      onClick={closeLightBox}></div>
  )
}

export default Backdrop