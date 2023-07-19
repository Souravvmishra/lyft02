'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CardProps {
    item: {
        title: string;
        image: string;
        svg1: React.FC;
        svg2: React.FC;
        text1: string;
        text2: string;
    };
}

const BudgetSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M8 1C4.155 1 1 4.1 1 8s3.155 7 7 7 7-3.1 7-7c-.099-3.9-3.254-7-7-7Zm2.86 9.1c-.297.7-.987 1.4-2.268 1.6v.9H7.31v-.9c-1.085-.2-1.775-.6-2.07-1l.985-.8c.198.2.79.6 1.972.6.888 0 1.38-.4 1.48-.8.098-.3 0-.5-.1-.7-.394-.3-1.084-.4-1.774-.5-.888-.1-1.676-.2-2.268-.7-.591-.5-.69-1.4-.394-2.1.296-.9 1.183-1.4 2.267-1.5v-.9h1.184v.9c1.084.2 1.676.6 2.07 1l-.986.8c-.296-.2-.789-.6-1.972-.6-.789 0-1.281.3-1.479.7-.098.3-.098.6.099.7.296.3.986.3 1.577.4.888.1 1.775.2 2.465.8.592.6.789 1.4.493 2.1Z" />
        </svg>
    );
};

const PrivateSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M7.577 4.308c1.271.293 2.347-.783 2.054-2.054a1.624 1.624 0 0 0-1.206-1.206A1.704 1.704 0 0 0 6.37 3.1c.13.587.62 1.076 1.206 1.207zm2.445 1.336c-.424-.13-1.434-.26-2.021-.26-.62 0-1.597.162-2.054.293-.945.26-1.662 1.075-2.347 4.27h1.271c.49-2.184.946-2.803 1.24-3.032L6.663 15h2.478l.75-8.117c.293.163.75.717 1.271 3.032h1.239c-.685-3.163-1.402-3.978-2.38-4.27z" />
        </svg>
    );
};

const EcoSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M7.336 4.47C5.815 2.126 1.828 1 1.828 1-.09 6.265 1.645 9.157 3.775 9.765v-.06c.03-2.405 1.279-4.17 3.561-5.235Z" />
            <path d="M5.023 9.735c0 .943.213 1.765.609 2.435-.578.882-1.065 1.826-1.37 2.83H5.42c.243-.67.578-1.309.943-1.917 2.648 2.373 8.248.821 8.613-8.279 0-.03-I apologize for the incomplete response. Here's the remaining code for the `EcoSvg` component:

```tsx
9.89-1.217-9.952 4.93Z" />
        </svg>
    );
};

const PremiumSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M14.556 7.543a1.08 1.08 0 0 0-.632-1.951h-2.961a1.077 1.077 0 0 1-1.024-.743l-.914-2.815a1.08 1.08 0 0 0-2.05 0L6.06 4.85a1.082 1.082 0 0 1-1.027.743H2.076a1.08 1.08 0 0 0-.632 1.951l2.393 1.739a1.076 1.076 0 0 1 .391 1.203l-.913 2.816a1.08 1.08 0 0 0 1.656 1.206l2.393-1.74a1.074 1.074 0 0 1 1.267 0l2.393 1.74A1.079 1.079 0 0 0 12.68 13.3l-.914-2.816a1.076 1.076 0 0 1 .392-1.203l2.398-1.739Z" />
        </svg>
    );
};

const EfficientSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M12.4 6.7H8.9V1L3.6 9.3h3.5V15l5.3-8.3Z" />
        </svg>
    );
};

const RoomSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M14.95 9.686c.056-.693.076-1.4 0-1.808-.207-1.013-.606-1.398-1.03-1.804l-.3-.297h1.04v-.996h-1.55l-.58-1.61a2.27 2.27 0 0 0-1.938-1.333c-3.195-.192-5.13 0-5.218 0a2.35 2.35 0 0 0-1.927 1.368l-.564 1.577H1.33v.996h1.037l-.337.332c-.418.39-.848.789-.995 1.797-.052.63-.046 1.263.02 1.892v.022c.042.544.102 1.078.157 1.49l.22 1.995a.988.988 0 0 0 .987.946h.7a.99.99 0 0 0 .989-.99v-.63c.988.034 2.286.064 3.879.064s2.892-.03 3.879-.065v.63a.991.991 0 0 0 .99.99h.699a.981.981 0 0 0 .986-.909l.243-2.16c.052-.376.12-.92.165-1.486l.002-.01zM5.854 8.73a.83.83 0 0 1-.825.797H3.742a.787.787 0 0 1-.788-.797.815.815 0 0 1 .788-.789h1.325a.788.788 0 0 1 .786.789zm7.17 0a.84.84 0 0 1-.837.797h-1.281a.787.787 0 0 1-.788-.797.815.815 0 0 1 .788-.789h1.325a.787.787 0 0 1 .792.789zM4.356 3.583a1.354 1.354 0 0 1 1.103-.752c.018 0 1.944-.184 5.052 0a1.26 1.26 0 0 1 1.076.714l.788 2.183a37.75 37.75 0 0 1-4.396.197 37.602 37.602 0 0 1-4.435-.201l.812-2.14z" />
        </svg>
    );
};

const TopSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M14.556 7.543a1.08 1.08 0 0 0-.632-1.951h-2.961a1.077 1.077 0 0 1-1.024-.743l-.914-2.815a1.08 1.08 0 0 0-2.05 0L6.06 4.85a1.082 1.082 0 0 1-1.027.743H2.076a1.08 1.08 0 0 0-.632 1.951l2.393 1.739a1.076 1.076 0 0 1 .391 1.203l-.913 2.816a1.08 1.08 0 0 0 1.656 1.206l2.393-1.74a1.074 1.074 0 0 1 1.267 0l2.393 1.74A1.079 1.079 0 0 0 12.68 13.3l-.914-2.816a1.076 1.076 0 0 1 .392-1.203l2.398-1.739Z" />
        </svg>
    );
};

const ExtraSvg: React.FC = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M4.301 5.473c.948 0 1.712-.764 1.712-1.711 0-.948-.764-1.712-1.712-1.712a1.71 1.71 0 0 0-1.712 1.712 1.71 1.71 0 0 0 1.712 1.711Zm7.428 0a1.71 1.71 0 0 0 1.712-1.711 1.71 1.71 0 0 0-1.712-1.712c-.948 0-1.712.764-1.712 1.712 0 .947.764 1.711 1.712 1.711ZM8 9.294c-1.865 0-2.63.795-2.63 2.69v1.956h5.228v-1.956c0-1.895-.825-2.69-2.598-2.69Zm0-1.07c.856 0 1.528-.672 1.528-1.528S8.856 5.168 8 5.168s-1.53.672-1.53 1.528S7.144 8.224 8 8.224ZM5.463 6.696v-.092c-.337-.091-.734-.122-1.162-.122C1.947 6.482 1 7.491 1 9.875v2.904h3.118v-.795c0-2.109.886-3.148 1.987-3.607a2.495 2.495 0 0 1-.642-1.68Zm6.266-.214c-.459 0-.856.061-1.223.122v.092a2.51 2.51 0 0 1-.672 1.712c1.283.55 1.986 1.773 1.986 3.576v.795H15V9.875c.03-2.384-1.01-3.393-3.271-3.393Z" />
        </svg>
    );
};

const data = [
    {
        title: 'Wait & Save',
        image: 'http://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=',
        svg1: BudgetSvg,
        svg2: PrivateSvg,
        text1: 'Budget-Friendly',
        text2: 'Private',
    },
    {
        title: 'Lyft',
        image: 'https://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=',
        svg1: EfficientSvg,
        svg2: PrivateSvg,
        text1: 'Efficient',
        text2: 'Private',
    },
    {
        title: 'Bikes & Scooter',
        image: 'https://images.ctfassets.net/q8mvene1wzq4/54zBNZxHpcSOwmg4YXPlA6/d4efb0f4c50c3627ee2718bce66da8cd/watson_scooter_icons_2x.png?w=&q=60&fm=',
        svg1: EfficientSvg,
        svg2: EcoSvg,
        text1: 'Efficient',
        text2: 'Eco-friendly',
    },
    {
        title: 'Priority Pickup',
        image: 'http://images.ctfassets.net/q8mvene1wzq4/6uhGufB2Lt55HbAx6M4TbY/679d658220366795d4e3ac967796ec20/transit_icon_2x.png?w=&q=60&fm=',
        svg1: EfficientSvg,
        svg2: PrivateSvg,
        text1: 'Efficient',
        text2: 'Private',
    },
    {
        title: 'Preferred Mode',
        image: 'http://images.ctfassets.net/q8mvene1wzq4/6uhGufB2Lt55HbAx6M4TbY/679d658220366795d4e3ac967796ec20/transit_icon_2x.png?w=&q=60&fm=',
        svg1: RoomSvg,
        svg2: TopSvg,
        text1: 'Roomier cars',
        text2: 'Top Drivers',
    },
    {
        title: 'lyft XL',
        image: 'https://images.ctfassets.net/q8mvene1wzq4/2HtCyRlopxqoxhbHCuEiqn/3e837bec9c7a45e2e70fea5b175973fe/xtra_seats_icon_2x.png?w=&q=60&fm=',
        svg1: ExtraSvg,
        svg2: PrivateSvg,
        text1: 'Extra seats',
        text2: 'Private',
    },
    {
        title: 'Lyft Lux',
        image: 'http://images.ctfassets.net/q8mvene1wzq4/2AtXOCguvjUEhNmgrWlWlF/cd201b0f49037eec6ca6c0be2c0e309a/lux_icon_2x.png?w=&q=60&fm=',
        svg1: EfficientSvg,
        svg2: PremiumSvg,
        text1: 'Efficient',
        text2: 'Premium',
    },
    {
        title: 'Transit',
        image: 'http://images.ctfassets.net/q8mvene1wzq4/6uhGufB2Lt55HbAx6M4TbY/679d658220366795d4e3ac967796ec20/transit_icon_2x.png?w=&q=60&fm=',
        svg1: BudgetSvg,
        svg2: EcoSvg,
        text1: 'Budget-Friendly',
        text2: 'Eco-friendly',
    },
];

const Card: React.FC<{ item: typeof data[0] }> = ({ item }) => {
    return (
        <div className="text-black border flex flex-col w-72 h-72 px-6 rounded-xl items-center justify-center space-y-4 shadow-md cursor-pointer  ">
            <div className="font-semibold text-xl">{item.title}</div>
            <Image src={item.image}
                width={150}
                height={175}
                alt="gaaadi"
            />
            <div className="flex flex-col text-sm text-slate-500 space-y-1">
                <div className="flex space-x-1">
                    {<item.svg1 />}
                    <span>{item.text1}</span>
                </div>
                <div className="flex space-x-1">
                    {<item.svg2 />}
                    <span>{item.text2}</span>
                </div>
            </div>
        </div>
    );
};

const Section5: React.FC = () => {
    const [right, setRight] = useState(0);

    const move = () => {
        if (right <= -18) {
            setRight(0);
        }
        if (right >= 5 * 18) {
            setRight(5 * 18);
        }
        const crousel = window.document.getElementById('crousel');
        crousel.style.right = right + 'rem';
    };

    useEffect(() => {
        move();
    }, [right]);

    return (
        <div className="xl:px-28 px-4  py-20 overflow-clip">
            <div className="flex xl:justify-between xl:flex-row flex-col items-center justify-center space-y-4">
                <div>
                    <div className="text-3xl font-semibold">
                        <div>Ride. Bike. Scoot. Go bananas.</div>
                    </div>
                    <div>
                        We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.
                    </div>
                </div>
                <div className="flex space-x-6">
                    <button
                        className="rounded-full scale-90 p-4"
                        onClick={() => setRight((r) => r - 18)}
                    >
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="m12.843 25.836 1.585-1.608L7.32 17.12H29v-2.256H7.321l7.107-7.13-1.585-1.585L3 15.993l9.843 9.843Z"></path>
                        </svg>
                    </button>

                    <button
                        className="bg-[#523BE4] hover:bg-[#6854de] rounded-[100%]  text-white px-4 scale-90 p-4"
                        onClick={() => setRight((r) => r + 18)}
                    >
                        <svg
                            fill="currentColor"
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="m19.157 6.15-1.584 1.608 7.106 7.107H3v2.256h21.679l-7.106 7.13 1.584 1.585L29 15.993 19.157 6.15Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                id="crousel"
                className={`relative right-0 flex w-[300vw] xl:-mx-20 space-x-4 overflow-auto py-20 transition-all duration-200 mx-20`}
            >
                {data.map((item) => {
                    return <Card item={item} key={item.title} />;
                })}
            </div>
            <div className="text-xs opacity-80 ">
                *Availability of bikes, scooters, rentals, ride types, and transit information varies by region.
            </div>
        </div>
    );
};

export default Section5;
