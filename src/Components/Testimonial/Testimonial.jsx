import React from 'react'

export default function Testimonial() {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-teal'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./Images/av1.png" />
                                <p className="leading-relaxed text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eligendi expedita maiores sunt autem saepe, mollitia rem quidem illo laboriosam omnis beatae necessitatibus quia itaque culpa. Minus animi tenetur quod serffdsfr dgffd sds.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">HEET MODH </h2>
                                <p className="text-gray-500">CEO</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./Images/av2.png" />
                                <p className="leading-relaxed text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sed possimus ea placeat nam est nostrum blanditiis odit, facilis reprehenderit ut tenetur consequuntur aperiam maiores veritatis quos voluptates harum labore!</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">ALIEN  </h2>
                                <p className="text-gray-500">UI/UX </p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./Images/av3.jfif" />
                                <p className="leading-relaxed text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis aut laudantium sed, provident impedit nesciunt est magni odio consequuntur obcaecati harum, expedita, repellat quaerat delectus aliquam cupiditate iusto distinctio.</p>
                                <span className="inline-block h-1 w-10 rounded bg-teal mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">BUDDY</h2>
                                <p className="text-gray-500">MERN     </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


