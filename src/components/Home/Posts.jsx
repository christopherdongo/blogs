import React from 'react'
import {CardPosts} from './CardPosts';
import {posts} from '../../data/index'
export const Posts = () => {
  return (
    <section className='home__posts'>
      <h4>Post</h4>
      <div className='home__posts__card'>
      {
          posts.map((item, index) => (
            <CardPosts {...item} key={index} />
          ))
        }
      </div>
    </section>
  )
}
