import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx' 

function App() {
  const slides = [
    {url: 'https://images.unsplash.com/photo-1671173488124-70749eb5396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'}, 
    {url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80'}, 
    {url: 'https://images.unsplash.com/photo-1671050578787-e271e550ba0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}, 
    {url: 'https://plus.unsplash.com/premium_photo-1669833449026-124965aa4d26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'},
    {url: 'https://images.unsplash.com/photo-1671119904316-3e7b29f954f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2333&q=80'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0; 
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; 
    setCurrentIndex(newIndex)
  } 

  // eslint-disable-next-line 
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1 
    setCurrentIndex(newIndex)
  } 

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] relative m-auto px-4 py-16 group">
      <div style={{backgroundImage: `url(${slides[currentIndex].url}`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      
      {/* Left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
        
      {/* Right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>

      <div className='flex top-4 justify-center py-2'>
        {
          slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={()=>{goToSlide(slideIndex)}} className='text-2xl cursor-pointer'><RxDotFilled/></div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
