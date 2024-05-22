import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from '../redux/slices/cart';
import { useDispatch } from 'react-redux';
import Product_Data from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card() {

    const notify = (msg,type) =>{
        switch (type) {
            case 'success':
              toast.success(msg);
              break;
            case 'error':
              toast.error(msg);
              break;
            default:
              toast(msg);
              break;
          }
    } ;
    const dispatch = useDispatch();
    return (
        <div className='w-full px-2 col-span-3'>
            <div className='grid gap-12 grid-cols-4'>
                {
                    Product_Data.map((item, index) => (
                        <CardBox notify={notify} key={index} item={item} dispatch={dispatch} />
                    ))}

            </div>
            <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    )
}


function CardBox({ item, dispatch ,notify}) {
    return (
        <div className='myset  relative cursor-pointer'>
            <img src={item.image} alt='' className='w-full h-[220px]' />
            <div className='p-1 w-full relative'>
                <h1 className='capitalize'>{item.brand}</h1>
                <div className='flex gap-1 font-bold'>
                    <span>Rs.{item.Price}</span>
                    <span className='text-sm font-thin line-through'>Rs.200</span>
                    <span className='text-sm text-[#ff905a] font-thin'>(66% OFF)</span>
                </div>
            </div>
            <div className="my-absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 bg-black bg-opacity-50 hover:opacity-100">
                <button
                    onClick={() =>{ 
                        notify("Item Add Succesfully","success")
                        dispatch(addToCart({ pId: item.id, qty: 1 }))
                }}
                    className='py-2 flex gap-2 text-md px-6 bg-white text-black font-bold border border-black rounded-lg transition duration-300 transform hover:bg-black hover:text-white hover:scale-110'
                >
                    <FaCartPlus /> Add To Cart
                </button>
            </div>
        </div>
    )
}{}
