import React from 'react'
import {BsHeartFill} from 'react-icons/bs';
import {HiShare} from 'react-icons/hi'
import {FaCommentDots} from 'react-icons/fa'
export const CardPosts = ({title, avatar, desc}) => {
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

            <div >
              <BsHeartFill />
              <span>325</span>
            </div>
            <div >
              <FaCommentDots />
              <span>115</span>
            </div>
            <div >
              <HiShare />
              <span>47</span>
            </div>

      </div>
    </article>
  )
}
