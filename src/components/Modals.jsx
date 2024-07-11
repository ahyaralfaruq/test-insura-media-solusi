import { useState, useEffect } from 'react'
import Logo from "@/assets/pocket.png"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Modals = ({ isActive, modalData, closeLightBox }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(isActive) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isActive])

  useEffect(() => {
    const endpoint = async () => {
      setLoading(true);
      try {
        const getApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${modalData.id}`)

        setData(getApi.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    endpoint()
  }, [modalData])

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data)

  return (
    <div className="fixed top-0 left-0 z-60 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,.75)] transition-all duration-[.3s]" onClick={closeLightBox}>
      <div className="relative flex items-start content-start w-full max-w-[700px] m-[10px]">
        <div className="relative flex min-h-[1px] w-full bg-gray-200 rounded-[25px] z-[100]" onClick={e => e.stopPropagation()}>
          <div className="relative flex flex-wrap items-start content-start w-full m-[10px]">

            <div className="relative w-full mb-[19px]">
              <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                <div className="relative flex items-center content-center justify-center gap-4">

                  <div className="relative">
                    <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                      <h1 className="text-gray-800 xl:text-[3em] lg:text-[2em] sm:text-[1.25em] leading-[1.3em] font-tomorrow font-bold text-center" role='nama'>
                        {data && data.species.name}
                      </h1>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]" role='id'>
                      <p className="text-gray-800 lg:text-[1.25em] sm:text-[14px] leading-[1.3em] font-tomorrow font-normal text-center">
                        #{data && data.id.toString().padStart(4, "0")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative w-full mb-[19px] text-center">
              <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                <img className="inline-block max-w-64 sm:w-full max-h-64 duration-0 rounded-[250px] align-middle border-none shadow-none"
                  src={data && data.sprites.other.home.front_default} width="144" height="144" />
              </div>
            </div>

            <div className="relative w-full mb-[19px]">
              <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                <div className="relative flex flex-wrap w-full bg-white rounded-[25px] xl:gap-0 sm:gap-2 p-[1em]">

                  <div className="relative lg:w-1/3 sm:w-full">
                    <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                      <div className="flex flex-wrap items-start content-start gap-2">

                        <div className="relative w-full">
                          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                            <div className="flex flex-wrap items-start content-start">

                              <div className="relative w-full">
                                <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                                  <p className="text-[#5a4091] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center">Weight:</p>
                                </div>
                              </div>

                              <div className="relative w-full">
                                <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                                  <p className="text-[#aa8357] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center" role='berat'>
                                    {data && data.weight}
                                  </p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="relative w-full">
                          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                            <div className="flex flex-wrap items-start content-start">

                              <div className="relative w-full">
                                <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                                  <p className="text-[#5a4091] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center">Height:</p>
                                </div>
                              </div>

                              <div className="relative w-full">
                                <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                                  <p className="text-[#aa8357] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center" role='tinggi'>
                                    {data && data.height}
                                  </p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                  
                      </div>
                    </div>
                  </div>

                  <div className="relative lg:w-2/3 sm:w-full">
                    <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                      <div className="flex flex-wrap items-start content-start gap-2">

                        <div className="relative w-full">
                          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                            <p className="text-[#5a4091] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center">Abilities:</p>
                          </div>
                        </div>

                        <div className="relative w-full">
                          <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                            <div className="flex flex-wrap items-start content-start">

                              {
                                data && data.abilities.map((ability, i) => (
                                  <div className="relative w-full" key={i}>
                                    <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                                      <p className="text-[#aa8357] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em] text-center">
                                        {ability.ability.name}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              }
                              
                            </div>
                          </div>
                        </div>
                  
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative w-full mb-[19px] p-[1em]">
              <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">

                <div className="relative w-full mb-[19px]">
                  <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                    <p className="text-[#5a4091] lg:text-[1.5em] sm:text-[.9em] font-tomorrow leading-[1.3em]">
                      Type
                    </p>
                  </div>
                </div>

                <div className="relative w-full mb-[19px]">
                  <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                    <div className="flex flex-wrap items-start content-start gap-2">

                      {
                        data && data.types.map((type, k) => (
                          <div className="bg-yellow-400 p-[10px_12px] pointer-events-none rounded-[25px]" key={k}>
                            <p className="text-white font-semibold text-[.9em] font-tomorrow leading-[1.3em]">
                              {type.type.name}
                            </p>
                          </div>
                        ))
                      }                      

                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative w-full mb-[19px] p-[1em] text-center">
              <div className="transition-[background,_border,_border-radius,_box-shadow] duration-[.3s]">
                <Link 
                  to={`https://bulbapedia.bulbagarden.net/wiki/${data && data.species.name}_(Pok%C3%A9mon)`} 
                  target='_blank' 
                  className="inline-block bg-[#5a4091] p-[10px_12px] rounded-[25px]"
                >
                  <p className="text-white font-semibold text-[.9em] font-tomorrow leading-[1.3em]">
                    {`Visit ${data && data.species.name}'s wiki!`}
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modals