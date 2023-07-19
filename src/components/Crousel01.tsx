'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Driver {
    image: string;
    name: string;
    description: string;
    since: number;
}

const drivers: Driver[] = [
    {
        image: 'https://images.ctfassets.net/q8mvene1wzq4/4XI9Rg1V0ZbIZyKFoTIxuf/a42d451ac25728bc83a6d5220915532b/harold_trainer.png?w=300&q=60&fm=',
        name: "Harold",
        description: "As a student, it’s hard to balance my studies and fitness goals. I started working out more with FIT and realized it was the perfect way to stay healthy and motivated! Training with FIT gives me flexibility in my routine to focus on school, which is my main priority.",
        since: 2020
    },
    {
        image: 'https://images.ctfassets.net/q8mvene1wzq4/3Hn90lN9DlHkIX1tcsM8bK/917b4043e2a08907a8e07668821a98c8/christine_trainer.png?w=300&q=60&fm=',
        name: "Christine",
        description: "I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I train connects me to my community and gives me extra income to help make ends meet.",
        since: 2016
    },
    {
        image: 'https://images.ctfassets.net/q8mvene1wzq4/7gGtACD0jNfqxw13TG69mk/8d44ecee6eca293be979b16d2dce7b79/timothy_trainer.png?w=300&q=60&fm=',
        name: "Timothy",
        description: "Training with FIT is the perfect way to make a difference and be there for my clients’ needs. I love providing a personalized and effective workout plan for each of them. Independence is key for me, and I enjoy meeting new people while training!",
        since: 2017
    },
    {
        image: 'https://images.ctfassets.net/q8mvene1wzq4/5rz5QNSF3JN4ruKqGQBhiC/6f9196a1bcf65d6ba63470d197308e05/mary_trainer.png?w=300&q=60&fm=',
        name: "Mary",
        description: "My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat.",
        since: 2019
    }
];

interface CardProps {
    item: Driver;
    index: number;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<CardProps> = ({ item, index, active, setActive }) => {
    return (
        <div className={`flex flex-col justify-center items-center space-y-6 space-x-8 ${(index - 1 + 4) % 4 === active ? 'opacity-100' : 'opacity-50'} cursor-pointer`}>
            <div>
                <Image className={`${(index - 1 + 4) % 4 === active ? 'scale-100' : 'scale-50'} transition-all duration-150`} src={item.image} width={75} height={75} alt='profile pic' />
            </div>
            <div className='text-lg text-center'>
                “{item.description}”
            </div>
            <span>— {item.name}</span>
            <div className='italic'>Lifting with WHG since {item.since}</div>
        </div>
    );
};

const Crousel01: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <div className='py-20'>
            <Slide slidesToScroll={1} slidesToShow={3} indicators={true} transitionDuration={300} cssClass='mx-12' onChange={(from, to) => { setActive(to) }}>
                {drivers.map((item, i) => {
                    return (
                        <div key={i}>
                            <Card item={item} index={i} active={active} setActive={setActive} />
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
};

export default Crousel01;
