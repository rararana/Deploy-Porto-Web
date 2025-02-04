import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-[url("/bgrepeat.png")] bg-repeat bg-[length:365px_250px] bg-opacity-50 cursor-[url("/new.png"),_auto]'>
      <div className='flex items-center'>
      <h1 className='font-semibold text-xs text-[#4572D2] p-3 sm:text-base sm:p-4 lg:text-lg lg:p-5'>rararana</h1>
      <h1 className='font-semibold text-xs text-[#4572D2] p-3 ml-auto sm:text-base sm:p-4 lg:text-lg lg:p-5'>OTHER STUFF</h1>
      </div>
      <div className='relative h-screen flex items-center justify-center pb-16'>
      {/* Window 1 */}
      <div className='absolute top-[150px] left-6 mt-6 mr-6 w-52 sm:w-[350px] sm:mt-8 sm:left-12 md:w-[400px] md:left-11 lg:left-20 lg:w-[650px] lg:mt-28 lg:border-2 bg-[#FFFFFE] border-[1px] border-[#B63857] rounded-lg lg:rounded-xl shadow-[1.5px_1.5px_0_#B63857] lg:shadow-[2px_2px_0_#B63857] overflow-hidden animate-fadeInDown' style={{ animationDelay: "0.1s" }}>
        <div className='flex items-center justify-between bg-[#FFCBD8] p-1 border-b-[1px] lg:border-b-2 border-[#B63857] lg:py-2'>
          <div className='flex gap-[2px] sm:gap-1 sm:pl-1 lg:pl-2'>
            <span className='w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#B63857]'></span>
            <span className='w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#B63857]'></span>
            <span className='w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#B63857]'></span>
          </div>
          <div className='flex items-center ml-auto mr-[76px] sm:gap-1 md:mr-16 lg:gap-2 lg:mr-24'>
          <h1 className='font-semibold text-[10px] text-[#D04671] p-0.5 sm:text-sm lg:text-lg'>FILE</h1>
          <h1 className='font-semibold text-[10px] text-[#D04671] p-0.5 sm:text-sm lg:text-lg'>EDIT</h1>
          </div>
        </div>
        <div className='p-3 sm:p-5 lg:p-12'>
          <h1 className='text-[#D04671] mb-1 sm:text-lg md:text-xl lg:text-3xl'>Stuff I've Done</h1>
          <p className='text-[#D04671] text-[9px] leading-tight text-justify sm:text-xs lg:text-base lg:mt-3'>
          In high school, competing in the <span className='underline decoration-1 font-bold'>National Informatics Olympiad</span> sparked my love for 
          competitive programming. Beyond that, I'm passionate about game development, and my 
          friends and I from the GIM student organization created <span className='underline decoration-1 font-bold'>Kil's Adventure</span>, a project I'm incredibly proud of.
          <br /><br />
          I've also had a knack for design since childhood, which led me to become <span className='underline decoration-1 font-bold'>Head of the Design Division for ITB JTR 2025.</span>
          <br /><br />
          Alongside my creative pursuits, I enjoy teaching and have worked as a <span className='underline decoration-1 font-bold'>tutor</span> for introductory computing and a <span className='underline decoration-1 font-bold'>practicum assistant</span> for
           computational thinking practicums. I thrive on exploring diverse passions and challenges!
          </p>
        </div>
      </div>
      {/* Window 2 */}
      <div className='absolute top-1 right-0 mt-6 mr-6 w-36 sm:w-64 sm:right-8 md:w-72 md:mt-9 md:right-[75px] lg:w-[400px] lg:mt-5 lg:right-[275px] bg-[#FFFFFE] border-[1px] lg:border-2 border-[#37569A] rounded-lg lg:rounded-xl shadow-[1.5px_1.5px_0_#37569A] lg:shadow-[2px_2px_0_#37569A] overflow-hidden animate-fadeInDown' style={{ animationDelay: "0s" }}>
        <div className='flex items-center justify-between bg-[#7398E7] p-1 md:py-2 md:gap-1 lg:py-3 border-b-[1px] lg:border-b-2 border-[#37569A]'>
          <div className='flex gap-[2px] lg:px-1'>
            <span className='w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#37569A]'></span>
            <span className='w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#37569A]'></span>
            <span className='w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#37569A]'></span>
          </div>
          <div className='flex-1 mx-0.5 px-1.5 py-0.5 bg-[#FFFFFE] border-[1px] lg:border-2 border-[#37569A] text-[#365eb6] rounded text-[8px] lg:text-xs'>https://about.me</div>
          <div className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px] border lg:border-2 border-[#37569A] rounded bg-[#FFFFFE] flex justify-center items-center">
          <img src="/restartblue.png" className="w-3 h-3 md:w-[14px] md:h-[14px] lg:w-4 lg:h-4" />
          </div>
        </div>
        <div className='p-3 sm:p-5 lg:p-10'>
          <h1 className='text-[#365eb6] font-semibold text-sm mb-1 sm:text-lg md:text-xl lg:text-3xl'>ABOUT ME</h1>
          <p className='text-[#365eb6] text-[9px] leading-tight text-justify sm:text-xs lg:text-base'>
            My name is Rana. I am currently pursuing a degree in Computer Science 
            at Institut Teknologi Bandung. I am passionate about diving into diverse 
            fields and constantly seeking opportunities to grow and refine my skills.
          </p>
        </div>
      </div>
      {/* Window 3 */}
      <div className='absolute top-[465px] right-0 mt-6 mr-6 w-44 sm:w-52 sm:top-[525px] sm:mr-8 md:w-64 md:mr-11 md:top-96 lg:w-[425px] lg:mr-20 lg:top-[450px] bg-[#FFFFFE] border-[1px] lg:border-2 border-[#9B1A53] rounded-lg lg:rounded-xl shadow-[1.5px_1.5px_0_#9B1A53] lg:shadow-[2px_2px_0_#9B1A53] overflow-hidden animate-fadeInDown' style={{ animationDelay: "0.2s" }}>
        <div className='flex items-center justify-between bg-[#FFA6BC] p-1 border-b-[1px] lg:border-b-2 border-[#9B1A53] lg:py-2'>
          <div className='flex gap-[2px] lg:gap-1 lg:pl-2'>
            <span className='w-[8px] h-[8px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#9B1A53]'></span>
            <span className='w-[8px] h-[8px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#9B1A53]'></span>
            <span className='w-[8px] h-[8px] lg:w-4 lg:h-4 rounded-full bg-[#FFFFFE] border-[1px] lg:border-2 border-[#9B1A53]'></span>
          </div>
          <div className='flex items-center mr-16 sm:mr-20 md:mr-[100px] lg:mr-44'>
          <h1 className='font-semibold text-[10px] text-[#C12E5C] p-0.5 sm:text-xs lg:text-lg'>LINKS</h1>
          </div>
        </div>
        <div className='p-3 sm:p-5 lg:p-10'>
          <h1 className='text-[#C12E5C] mb-1 sm:text-lg md:text-xl lg:text-3xl'>Me, elsewhere</h1>
          <p className='text-[#C12E5C] text-[9px] leading-tight text-justify sm:text-xs lg:text-base'>
          If you're looking for me on other platforms or social media, just follow the link below. Let's connect!
          </p>
          <div className='flex gap-2 mt-2 lg:mt-6'>
            <a href='https://www.instagram.com/ranashr_/' target='_blank'><div><img src='/insta.png' className='bg-[#FF98B1] hover:bg-[#FFAEC2] rounded-[5px] w-5 h-5 md:w-6 md:h-6 md:rounded-md lg:w-8 lg:h-8 lg:rounded-lg'/></div></a>
            <a href='https://x.com/ritesaph' target='_blank'><div><img src='/twit.png' className='bg-[#FF98B1] hover:bg-[#FFAEC2] rounded-[4.5px] w-5 h-5 md:w-6 md:h-6 md:rounded-[5.5px] lg:w-8 lg:h-8 lg:rounded-[7px]'/></div></a>
            <a href='https://www.linkedin.com/in/ranashahira-reztaputri-1bb0a8283/' target='_blank'><div><img src='/link.png' className='bg-[#FF98B1] hover:bg-[#FFAEC2] rounded-[5px] w-[21px] h-[21px] md:w-[25px] md:h-[25px] md:rounded-md lg:w-[33px] lg:h-[33px] lg:rounded-lg'/></div></a>
            <a href='mailto:ranashahira.rez@gmail.com'><div><img src='/mail.png' className='bg-[#FF98B1] hover:bg-[#FFAEC2] rounded-[4.6px] w-5 h-5 md:w-6 md:h-6 md:rounded-[5.6px] lg:w-8 lg:h-8 lg:rounded-[7.2px]'/></div></a>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-32 sm:mt-60 md:mt-32 lg:mt-56 bottom-0 left-0 w-full overflow-hidden whitespace-nowrap border-y-2 border-[#6F9CF1] bg-[#B3CDFE] h-fit py-[1px] lg:py-1 hover:bg-[#6F9CF1]">
      <div className="inline-block animate-marquee text-xs lg:text-base text-[#5e8bdf] hover:text-[#c4d9ff]">
        • LISTENING TO: THE GOOD WHALE, FROM SERIAL PRODUCTIONS AND THE NEW YORK TIMES • PLAYING: STARDEW VALLEY, BALDUR'S GATE 3, THE SIMS 4 •
      </div>
      </div>
    </div>
  )
}

export default HomePage
