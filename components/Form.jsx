import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>

      <div className='flex gap-4 items-center justify-center'>
        <h1 className='head_text text-left flex'>
          <span className='blue_gradient'>{type} Post</span> 
        </h1>

        <div>
          <Image src='/assets//images/beer.svg' width={100} height={100} alt='beericon' className='animate-bounce'/>
        </div>
      </div>
    
      <p className='desc text-left max-w-md'>
        {type} and share your hash-venture with hashers all over the world. Tell us how good/bad your hashing experience was, share thoughtful advice.
      </p>

      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your Hashing Experience</span>

            <textarea
              value={post.prompt}
              onChange={(e)=>setPost({ ...post, 
              prompt: e.target.value })}
              placeholder='Write your story here...'
              required
              className='form_textarea'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              {/* Tag {` `}  */}
              Hash handle
              {/* <span className='font-normal'> (#beer #run #onon #hashing #beerstop)</span> */}
            </span>

            <input
              value={post.tag}
              onChange={(e)=>setPost({ ...post, 
              tag: e.target.value })}
              // placeholder='#tag'
              placeholder='What is your Hash Handle?'
              required
              className='form_input'
            />
          </label>

          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href={'/'} className='text-gray-500 text-sm'>
                Cancle
            </Link>

            <button type='submit'
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
              {submitting ? `${type}...` : type}
            </button>

          </div>


      </form>
      
    </section>
  )
}

export default Form
