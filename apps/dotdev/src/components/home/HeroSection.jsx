import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-wrapper flex flex-col items-center mt-6'>
      <h1 className='slogan text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide text-neutral-700 dark:text-neutral-300'>deptDot Build Tools
        <br />
        <span className='bg-gradient-to-r from-indigo-300 to-indigo-800  text-transparent bg-clip-text'>for Developers</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eos nihil id dolor, fuga nam error delectus odio est voluptates fugit modi tenetur ipsum sequi facere ratione laboriosam iure deserunt.</p>
    </div>
  )
}

export default HeroSection
