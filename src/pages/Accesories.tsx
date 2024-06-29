

export const Accesories = () => {
  return (
    <>
        <div className="relative bg-accessories h-screen bg-center bg-cover">
            <div
                className="flex flex-col absolute top-40 left-[50%] translate-x-[-50%]"
                >
                <h1 className="text-[40px] m-auto font-bold">Accesories</h1>
                
                </div>

                <div
                className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row"
                >
                
                <button
                    className="mt-2 uppercase bg-slate-200 w-96 text-gray-900 rounded-full h-10 md:mt-0 md:w-60"
                >
                    shop Now
                </button>
            </div>
        </div>
    </>
  )
}
