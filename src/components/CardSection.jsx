import Cards from "./ui/Cards";


const CardSection = ({ getLightBox }) => {
  const datas = [1,2,3,4,5,6,7,8,9,10]
  const disabled = true

  return (
    <section className="relative flex flex-wrap items-start content-start w-full">
      <div className="relative flex min-h-[1px] w-full mb-[19px]">
        <div className="relative flex flex-wrap items-center content-start w-full">
          {
            datas.map((data, i) => (
              <Cards key={i} data={data} getLightBox={getLightBox} />
            ))
          }
        </div>
      </div>

      <div className="relative flex min-h-[1px] w-full">
        <div className="relative flex flex-wrap items-center content-center justify-center w-full">
          <div className="relative flex m-[10px]">
            <button className={`${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-900 hover:bg-yellow-400"} p-[10px] rounded-md`} disabled={true}>
              <span className={`text-[.9em] leading-[1.3em] ${disabled ? "text-gray-100" : "text-white"} font-bold font-tomorrow`}>Prev</span>
            </button>
          </div>

          <div className="relative flex m-[10px]">
            <p className="text-[.9em] leading-[1.3em] font-tomorrow pointer-events-none text-gray-800">
              1/11
            </p>
          </div>

          <div className="relative flex m-[10px]">
            <button className={`${! disabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-900 hover:bg-yellow-400"} p-[10px] rounded-md`} disabled={false}>
              <span className="text-[.9em] leading-[1.3em] text-white font-bold font-tomorrow">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection