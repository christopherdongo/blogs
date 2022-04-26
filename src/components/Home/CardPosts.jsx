import React from 'react'
import avatar from '../../assets/images/avatar.png'
export const CardPosts = ({title, desc,social}) => {
  return (
    <article className='posts__card'>
    
      <div className='posts__card__body'>
      <img alt="title" src={avatar} />
      <h4>{title}</h4>
      <p>
        {desc}
      </p>
      </div>
      <div className='posts__card__footer'>
        {
          social.map((item, index) => (
            <div key={index}>
              <item.Icon />
              <span>{item.cant}</span>
            </div>
          ))
        }
      </div>
    </article>
  )
}
