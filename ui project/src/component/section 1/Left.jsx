import 'remixicon/fonts/remixicon.css'

const Left = () => {
  return (
    <div className='flex flex-col justify-between h-full 
                    w-full md:w-1/2 lg:w-1/4'>

      <div className='p-5'>
        <h3 className='mb-6 
                       text-2xl 
                       md:text-3xl 
                       lg:text-5xl 
                       font-bold leading-tight'>
          Prospective <br />
          <span className='text-gray-600'>Customer</span> <br />
          segmentation
        </h3>

        <p className=' w-[90%] text-base md:text-lg lg:text-xl text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro dolor esse est saepe id provident doloribus atque explicabo illum.
        </p>
      </div>

      <div className='text-4xl md:text-6xl lg:text-8xl p-5'>
        <i className="ri-arrow-right-up-line"></i>
      </div>

    </div>
  )
}

export default Left