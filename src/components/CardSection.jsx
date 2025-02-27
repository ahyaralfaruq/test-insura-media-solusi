import { useState, useEffect } from "react";
import Cards from "./ui/Cards";
import axios from "axios";


const CardSection = ({ getLightBox, searchText }) => {
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const limit = 20;

  function handlePrevClick() {
    if(page <= 1) return
    
    setPage((prevPage) => prevPage - 1)
  }

  function handleNextClick() {
    if(page === Math.ceil(1302 / limit)) return

    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    
    const endpoint = async () => {
      setIsLoading(true)
      try {
        let api
        if (searchText) {
          api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`)
          setDatas([api.data])
        } else {
          api = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * limit}&limit=${limit}`)
          const { results } = api.data

          // Limit the number of concurrent requests
          const res = [];
          for (let i = 0; i < results.length; i += 5) {
            const chunk = results.slice(i, i + 5);
            const req = chunk.map((result) => axios.get(result.url))
            const waitingFinished = await Promise.all(req)
            res.push(...waitingFinished.map((p) => p.data))
          }
          setDatas(res);
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    
    endpoint()

    return () => setDatas([])
  }, [searchText, page])

  return (
    <section className="relative flex flex-wrap items-start content-start w-full">
      <div className="relative flex min-h-[1px] w-full mb-[19px]">
        <div className="relative flex flex-wrap items-center content-start w-full">
          {
            isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {
                  Array.isArray(datas) && datas.map((data, i) => (
                    <Cards key={data.id} data={data} getLightBox={getLightBox} />
                  ))
                }
              </>
            )
          }
        </div>
      </div>

      <div className="relative flex min-h-[1px] w-full">
        <div className="relative flex flex-wrap items-center content-center justify-center w-full">
          <div className="relative flex m-[10px]">
            <button
              role="prevButton"
              className={`${page <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-900 hover:bg-yellow-400"} p-[10px] rounded-md`} 
              disabled={page <= 1} 
              onClick={handlePrevClick}
            >
              <span className={`text-[.9em] leading-[1.3em] ${page <= 1 ? "text-gray-100" : "text-white"} font-bold font-tomorrow`}>Prev</span>
            </button>
          </div>

          <div className="relative flex m-[10px]">
            <p className="text-[.9em] leading-[1.3em] font-tomorrow pointer-events-none text-gray-800">
              {`${page}/${Math.ceil(1302 / limit)}`}
            </p>
          </div>

          <div className="relative flex m-[10px]">
            <button
              role="nextButton"
              className={`${page === Math.ceil(1302 / limit) ? "bg-gray-400 cursor-not-allowed" : "bg-purple-900 hover:bg-yellow-400"} p-[10px] rounded-md`} 
              disabled={page === Math.ceil(1302 / limit)} 
              onClick={handleNextClick}
            >
              <span className={`text-[.9em] leading-[1.3em] ${page === Math.ceil(1302 / limit) ? "text-gray-100" : "text-white"} font-bold font-tomorrow`}>Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection