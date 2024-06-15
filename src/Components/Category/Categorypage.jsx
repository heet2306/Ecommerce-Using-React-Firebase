import React from 'react'
// category 
const category = [
  {
    image: './Images/1.png',
    name: 'fashion'
  },
  {
    image: './Images/2.png',
    name: 'shirt'
  },
  {
    image: './Images/3.png',
    name: 'jacket'
  },
  {
    image: './Images/4.png',
    name: 'mobile'
  },
  {
    image: './Images/5.png',
    name: 'laptop'
  },
  {
    image: './Images/6.png',
    name: 'shoes'
  },
  {
    image: './Images/7.png',
    name: 'home'
  },
  {
    image: './Images/8.png',
    name: 'books'
  }
]
export default function Categorypage() {
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-teal transition-all hover:bg-teal1 cursor-pointer mb-1 " >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
    </div>
  )
}

