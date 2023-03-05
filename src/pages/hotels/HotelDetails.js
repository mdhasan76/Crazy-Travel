import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { ImShare2 } from 'react-icons/im';
import { FcRating } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import HotelDetailsBanner from './HotelDetailsBanner';
import OurPromise from './OurPromise';

const HotelDetails = () => {

    const data = {
        "id": 9,
        "name": "Single Room",
        "img": "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-1-750x500.jpg",
        "banner": "https://dtora.wpengine.com/wp-content/uploads/2019/05/breadcrumb-bg3.jpg",
        "bannerSlid": ["https://dtora.wpengine.com/wp-content/uploads/2019/03/room-6-1000x1000.jpg?1678030121638", "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-9-1000x1000.jpg?1678030131398", "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-2-1000x1000.jpg?1678030118235"],
        "capacity": "1",
        "ratings": "4.09",
        "locate": "France",
        "price": "17.5",
        "street": "8127 Myrtle Street, Muncie, IN 47302",
        "des": "Vivamus lectus turpis, consectetur at fermentum a, consectetur quis orci. Donec porta lorem vitae elit iaculis facilisis. Donec turpis nulla, porttitor sit amet placerat aliquam, ullamcorper in erat. Pellentesque eget tempor mi. Proin vehicula mi sed lorem lacinia, ac tincidunt dolor efficitur. Proin metus mi, rhoncus non purus nec, fringilla ullamcorper orci. Pellentesque in purus nulla. Suspendisse pulvinar nibh vel turpis sodales molestie. Quisque ipsum risus, facilisis nec venenatis sit amet, consectetur et lorem. Curabitur quis volutpat felis, sed varius enim. Pellentesque faucibus turpis vel enim imperdiet gravida. Phasellus nec odio vulputate, interdum lorem a, feugiat libero. Aliquam convallis in est vel posuere. Etiam vitae bibendum tellus. Fusce ullamcorper lectus scelerisque orci interdum maximus. Pellentesque placerat egestas ante in laoreet.",
        "facility": [
            {
                "title": "FULLY FURNISHED",
                "des": "With LED TV’s & Sofas"
            },
            {
                "title": "CUSTOM FOOD",
                "des": "Free Morning Breakfast"
            },
            {
                "title": "MODERN BATHROOM",
                "des": "Enjoy your world as you like"
            },
            {
                "title": "FREE WI-FI OPTION",
                "des": "Enjoy your world as you like"
            },
            {
                "title": "SWIMMIN POOL ACCESS",
                "des": "Full Day time access"
            },
            {
                "title": "FREE LOCAL COMMUTE",
                "des": "Enjoy your world as you like"
            }
        ]
    }

    // useEffect(() =>{
    //     setInterval(() => {
    //         console.log("hellow")
    //     )
    // })

    return (
        <div>
            <HotelDetailsBanner bannerImg={data.banner} name={data.name} />
            <div className='max-w-6xl mx-auto container'>
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    {data.bannerSlid.map((item, index) => (
                        <PhotoView key={index} src={item}>
                            {index < 1 ? <img src={item} alt="" className="imgClass cursor-pointer duration-300 w-full max-h-[450px] my-7 object-cover" /> : undefined}
                        </PhotoView>
                    ))}
                </PhotoProvider>
                <div className='flex justify-between items-end'>
                    <div>
                        <div>
                            <h1 className='text-2xl text-[#003a6c] font-bold mb-3'>Single Room <span className='text-base font-normal'> London</span></h1>

                        </div>
                        <div className='flex items-end mb-2'>
                            <p className='mr-3'>from</p>
                            <p className='text-[#01abff] text-2xl font-bold mr-3'>${"22.0"}</p>
                            <p className='mr-3'>/ night</p>
                            <p ><FcRating className='inline-block' /> 4.5</p>
                        </div>
                        <p > <GoLocation className='inline-block' /> {data.street}</p>
                    </div>
                    <div className='flex items-center text-lg'>
                        <p className='border-r-2 px-2'><AiOutlineHeart className='inline-block' /> <span>2</span></p>
                        <p className='px-2'><ImShare2 className='mr-1' /></p>
                    </div>
                </div>
                <hr className='my-8' />
                <p style={{ lineHeight: "30px" }} className='mb-8 text-justify'>{data.des}</p>

                <div className='px-7 mb-8'>
                    <OurPromise title={"The best of all the Goodness"} text={"Not to get ot only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"} />
                    <OurPromise title={"Hospatility like your home"} text={"Making the best it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                    <OurPromise title={"The best of all the Goodness"} text={"We are making the It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;