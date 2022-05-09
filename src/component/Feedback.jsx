import React, { useState } from "react";
import "./Feedback.css";

const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Sam Peters',
            title2: 'Manager Hard Rocks',
            desc: 'With CloudWare VoiceSMS, our product and services have been great and effective. VoiceSMS is well recommended',
            image: 'https://i.postimg.cc/85B7gPBV/sampeters.jpg',
        },
    },
    {
        player: {
            title: 'Mofe Davies',
            title2: 'CEO Mofe Clothings',
            desc: 'With CloudWare VoiceSMS, our product and services have been great and effective. VoiceSMS is well recommended',
            image: 'https://i.postimg.cc/44Y315jg/nigerian.jpg',
        },
    },
    {
        player: {
            title: 'Deborah Campbell',
            title2: 'CEO Stone Light',
            desc: 'With CloudWare VoiceSMS, our product and services have been great and effective. VoiceSMS is well recommended',
            image: 'https://i.postimg.cc/hGVLhnb2/woman.jpg',
        },
    },
    {
        player: {
            title: 'Theresa Winifred',
            title2: 'Product Manager Excellia',
            desc: 'With CloudWare VoiceSMS, our product and services have been great and effective. VoiceSMS is well recommended',
            image: 'https://i.postimg.cc/JnGBZWbw/woman2.jpg',
        },
    },
    {
        player: {
            title: 'Theresa Winifred',
            title2: 'Product Manager Excellia',
            desc: 'With CloudWare VoiceSMS, our product and services have been great and effective. VoiceSMS is well recommended',
            image: 'https://i.postimg.cc/JnGBZWbw/woman2.jpg',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};



const keys = Array.from(Array(_items.length).keys());

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div class="carousel__slide-item-img-link" className="flex space-y-8">
                <img src={item.player.image} alt={item.player.title}  className="rounded-full"/>
            </div>
            <div className="carousel-slide-item__body">
                <p className='bg-[#046889] text-white font-normal text-[14] pb-24 pt-24'>{item.player.desc}</p>
            </div>
            <div className="tracking-normal leading-normal">
                <h6 className='font-semibold text-left text-2xl text-gray-700 ml-2'>{item.player.title}</h6>
                <p className="ml-2">{item.player.title2}</p>
            </div>
        </li>
    );
};

const Feedback = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items]);

    return (
        <div className="w-full">
            <p className="font-semibold text-2xl text-center justify-between mb-6"> Valuable Feedbacks From Our Customers</p>
            <div className="carousel__wrap">
                <div className="carousel__inner">
                    <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                    </button>
                    <div className="carousel__container">
                        <ul className="carousel__slide-list">
                            {items.map((pos, i) => (
                            <CarouselSlideItem
                            key={i}
                            idx={i}
                            pos={pos}
                            activeIdx={activeIdx}
                            />
                            ))}
                        </ul>
                    </div>
                    <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                    </button>
                    <div className="carousel__dots">
                        {items.slice(0, length).map((pos, i) => (
                        <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
