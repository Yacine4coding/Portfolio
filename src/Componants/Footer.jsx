
import data from "../data.json"

export const Footer = () => {
  const { footer } = data.infos;
  

  return (
    <div className="footer-container">
      <footer class="bg-black text-white h-32 flex items-center justify-between">
        <div class="max-w-screen-xl space-y-8 lg:space-y-16 p-0">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div className="name-Section">
              <div className="container">
                <div className="content">
                  <div className="content__container ">
                    <p className="content__container__text text-white">
                      Hello
                    </p>
                  
                    <ul className="content__container__list text-white">
                      <li className="content__container__list__item">world !</li>
                      <li className="content__container__list__item">coder !</li>
                      <li className="content__container__list__item">users !</li>
                      <li className="content__container__list__item">Yacine </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <ul class="mt-8 flex justify-center items-center gap-10 sm:mt-0 sm:justify-end px-10">
              {
                footer.map(({ Name, link, icon},i) =>(
                  <li key={i}>
                    <a
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                      class="text-white transition hover:opacity-75"
                    >
                    <span class="sr-only">{Name}</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }}>
                      
                    </svg>
                    </a>
                  </li>
                ))
              }
            </ul>
      </footer>
    </div>
  )
}
