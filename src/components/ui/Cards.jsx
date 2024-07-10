import Logo from "@/assets/pocket.png"

const Cards = ({ data, getLightBox }) => {
  return (
    <div className="relative flex min-h-[1px] xl:w-1/6 lg:w-1/4 md:1/3 sm:w-1/2" onClick={() => getLightBox(data.id, data.sprites.other.home.front_default)}>
      <div className="relative flex flex-wrap items-center content-center w-full p-[8px] m-[10px] sm:mb-[40px] cursor-pointer shadow-md bg-gray-200 float-shadow rounded-xl">
        <div className="relative w-full text-center mb-[19px]">
          <div className="transition-bbbb">
            <img className="inline-block max-w-full md:w-4/5 sm:w-full h-auto duration-0 rounded-[250px] align-middle border-none shadow-none"
            src={data.sprites.other.home.front_default} width="144" height="144" />
          </div>
        </div>
        
        <div className="relative w-full p-[0_12px]">
          <div className="transition-bbbb">
            <div className="relative flex flex-wrap items-center content-center w-full">
              <div className="relative w-full mb-[19px]">
                <div className="transition-bbbb">
                  <h2 className="text-gray-[800] text-[.9em] font-tomorrow leading-[1.3em] font-normal">
                    #{data.id.toString().padStart(4, "0")}
                  </h2>
                </div>
              </div>

              <div className="relative w-full mb-[5px]">
                <div className="transition-bbbb">
                  <h2 className="text-gray-800 text-[1.1em] font-tomorrow leading-[1.3em] font-bold">
                    {data.species.name}
                  </h2>
                </div>
              </div>

              <div className="relative w-full">
                <div className="transition-bbbb">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#5a4091] text-[.9em] font-tomorrow leading-[1.3em]">weight: {data.weight}</p>
                    <p className="text-[#aa8357] text-[.9em] font-tomorrow leading-[1.3em]">height: {data.height}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Cards