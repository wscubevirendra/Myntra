import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseItemQty, decreaseItemQty, selectTotalPrice } from '../redux/slices/cart';
import Product_Data from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cart() {
    const notify = (msg, type) => {
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
    };

    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart.cartItems);
    const totalPay = useSelector(selectTotalPrice);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const filteredItems = Product_Data.filter(product => cart.some(item => item.pId === product.id));
        setItems(filteredItems);
    }, [cart]);

    const handleRemoveItem = (pId) => {
        dispatch(removeFromCart({ pId }));
    };

    const handleIncreaseQty = (pId) => {
        dispatch(increaseItemQty({ pId }));
    };

    const handleDecreaseQty = (pId) => {
        dispatch(decreaseItemQty({ pId }));
    };

    return (
       
            <div className='px-10 mb-6'>

            <h1 className='text-center w-full my-4 font-bold text-lg underline'>Total-Pay: Rs.{totalPay}</h1>
            <div className='grid grid-cols-4 gap-10'>
                {items.map((item, index) => (
                    <CartBox item={item} notify={notify} cart={cart} handleDecreaseQty={handleDecreaseQty} handleIncreaseQty={handleIncreaseQty} handleRemoveItem={handleRemoveItem} key={index} />
                ))}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
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

       
       

    );
}





function CartBox(
    { item, handleDecreaseQty, notify, handleIncreaseQty, handleRemoveItem, cart }
) {
    return (
        <>
            <div className='myset cursor-pointer'>
                <img src={item.image} className='h-[250px]  w-full' alt='product' />
                <div className='p-2  relative'>
                    <h1 className='capitalize'>{item.brand}</h1>
                    <div className='flex gap-2 font-bold'>
                        <span>Rs.{item.Price}</span>
                        <span className='text-sm font-thin line-through'>Rs.200</span>
                        <span className='text-sm text-[#ff905a] font-thin'>(66% OFF)</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button

                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                        onClick={() => {
                            notify("Card Item Removed", "success")
                            handleRemoveItem(item.id)
                        }}
                    >
                        Remove
                    </button>
                    <div className="flex justify-center items-center">
                        <button
                            className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'
                            onClick={() => {
                                handleDecreaseQty(item.id)
                                notify("Cart Updated", "success")
                            }
                            }
                        >
                            -
                        </button>
                        <span className="mx-2">{cart.find(cartItem => cartItem.pId === item.id)?.qty}</span>
                        <button
                            className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'
                            onClick={() => {
                                handleIncreaseQty(item.id)
                                notify("Cart Updated", "success")
                            }

                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

