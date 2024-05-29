
import data from "../data.json"

export const Footer = () => {
  const { footer } = data.infos;
  

  return (
    <div className="footer-container">
      <footer class="bg-white">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div className="name-Section">
              <div className="container">
                <div className="content">
                  <div className="content__container">
                    <p className="content__container__text">
                      Hello
                    </p>
                  
                    <ul className="content__container__list">
                      <li className="content__container__list__item">world !</li>
                      <li className="content__container__list__item">coder !</li>
                      <li className="content__container__list__item">users !</li>
                      <li className="content__container__list__item">Yacine </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ul class="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              {
                footer.map(({ Name, link, icon},i) =>(
                  <li>
                    <a
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      <span class="sr-only">{Name}</span>
                      
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
