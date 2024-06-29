
export const ModelY = () => {
  return (
    <>
        <div className="relative bg-modely h-screen bg-center bg-cover">
            <div
                className="flex flex-col absolute top-40 left-[50%] translate-x-[-50%]"
                >
                <h1 className="text-[40px] m-auto font-bold">Model Y</h1>
                <p className="whitespace-nowrap pt-1 text-[24px]">
                    From $31,490<sup>2</sup>

                    
                </p>
                <p className="whitespace-nowrap self-center pt-1 text-[16px] text-[#5c5d61]">
                After Est. Savings

                    
                </p>
                </div>

                <div
                className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
                >
                <button
                    className="uppercase bg-gray-800 w-96 text-white rounded-full h-10 md:w-60"
                >
                    Order Now
                </button>
                <button
                    className="mt-2 uppercase bg-slate-200 w-96 text-gray-900 rounded-full h-10 md:mt-0 md:w-60"
                >
                    Demo Drive
                </button>
            </div>
        </div>
    </>
  )
}
