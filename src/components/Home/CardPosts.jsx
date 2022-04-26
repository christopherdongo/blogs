import React from 'react'
import avatar from '../../assets/images/avatar.png'
import articlephoto from '../../assets/images/Rectangle5.png'

const styles = 'linear-gradient(180deg, rgba(47, 24, 147, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%)';
export const CardPosts = ({title, desc,social}) => {
  return (
    <article className='posts__card' style={{

      backgroundImage:`${styles}, url(${articlephoto})`
    }}>
    
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
