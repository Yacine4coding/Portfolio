import React from 'react'

export const McLogo = ( { color } ) => {
    const [text,list] = ['content__container__text', 'content__container__list'];
  return (
    <div className="max-w-screen-xl space-y-8 lg:space-y-16 p-0">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="name-Section">
            <div className="container">
            <div className="content">
                <div className="content__container ">
                <p className={`${text} ${color}`} >
                    Hello
                </p>
                
                <ul className={`${list} ${color}`}>
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
  )
}
