

const ServiseCard = (  services  ) => {
    const { icon, name, description} = services.service;
    console.table(services.service);

  return (
    
    <a href="#" id="tamp" className="group relative block h-64 sm:h-80 lg:h-56">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        {/* <img src={services.service.icon} alt="" /> */}
        <div
            className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
            
            <div
            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
            >
                
            
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">{name}</h2>
            </div>

            <div
            className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
            >
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">{name}</h3>

                <p className="mt-4 text-sm sm:text-base">
                    {description}
                </p>

                <p className="mt-8 font-bold">Read more</p>
                
            </div>

            
        </div>
    </a>
  )
}

export default ServiseCard;