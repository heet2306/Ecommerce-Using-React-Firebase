import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../../Components/Admin/ProductDetail';
import OrderDetail from '../../Components/Admin/OrderDetail';
import UserDetail from '../../Components/Admin/UserDetail';
export default function Admin() {
    return (
        <div>
            {/* Top */}
            <div className="top mb-5 px-5 mt-5">
                <div className=" bg-teal py-5 border  rounded-lg">
                    <h1 className=" text-center text-2xl font-bold text-white">Admin Dashboard</h1>
                </div>
            </div>

            <div className="px-5">
                {/* Mid  */}
                <div className="mid mb-5">
                    {/* main  */}
                    <div className=" bg-teal py-5 rounded-xl border ">
                        {/* image  */}
                        <div className="flex justify-center">
                        <img alt="testimonial" className=" h-40  object-cover object-center rounded-full   border-gray-200 bg-gray-100" src="./Images/av1.png" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className=" text-center text-lg text-white"><span className=" font-bold">Name :</span> HEET MODH </h1>
                            <h1 className=" text-center text-lg text-white"><span className=" font-bold">Email :</span> heet@gmail.com</h1>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center">
                            {/* Total Products */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-teal hover:bg-teal1  px-4 py-3 rounded-xl" >
                                    <div className="text-white w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-shopping-basket"
                                        >
                                            <path d="m5 11 4-7" />
                                            <path d="m19 11-4-7" />
                                            <path d="M2 11h20" />
                                            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                            <path d="m9 11 1 9" />
                                            <path d="M4.5 15.5h15" />
                                            <path d="m15 11-1 9" />
                                        </svg>

                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                    <p className=" text-white  font-bold" >Total Products</p>
                                </div>
                            </Tab>

                            {/* Total Order  */}
                            <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-teal hover:bg-teal1 px-4 py-3 rounded-xl" >
                                    <div className="text-white w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list-ordered"
                                        >
                                            <line x1={10} x2={21} y1={6} y2={6} />
                                            <line x1={10} x2={21} y1={12} y2={12} />
                                            <line x1={10} x2={21} y1={18} y2={18} />
                                            <path d="M4 6h1v4" />
                                            <path d="M4 10h2" />
                                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                    <p className=" text-white font-bold" >Total Order</p>
                                </div>
                            </Tab>

                            {/* Total User  */}
                            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                                <div className=" border bg-teal hover:bg-teal1  px-4 py-3 rounded-xl" >
                                    <div className="text-white w-12 h-12 mb-3 inline-block" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={50}
                                            height={50}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-users"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>

                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                    <p className=" text-white font-bold" >Total Order</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetail/>
                        </TabPanel>

                        <TabPanel>
                            <OrderDetail/>
                        </TabPanel>

                        <TabPanel>
                            <UserDetail/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

