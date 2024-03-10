import SectionHeading from './SectionHeading'
import { Card, Image } from '@nextui-org/react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Skills = () => {
    const skills = [
        {
            title: 'NextJs',
            icon: '/next.png'
        },
        {
            title: 'ReactJs',
            icon: '/react.png'
        },
        {
            title: 'HTML',
            icon: '/html.png'
        },
        {
            title: 'TypeScript',
            icon: '/typescript.png'
        },
        {
            title: 'JavaScript',
            icon: '/javascript.png'
        },
        {
            title: 'Redux',
            icon: '/redux.png'
        },
        {
            title: 'TailwindCss',
            icon: '/tailwindCss.png'
        },
        {
            title: 'MongoDb',
            icon: '/mongodb.png'
        },
        {
            title: 'Framer Motion',
            icon: '/FramerMotion.png'
        },
        {
            title: 'Gsap',
            icon: '/gsap.png'
        },
    ]
    const { contextSafe } = useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.skillsCard', { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 1, scrollTrigger: {
                trigger: '.skillsDiv',
                // markers: true,
                start: "top 80%",
                end: "+=600 bottom",
                scrub: 1,
            }
        });
    })

    const handleMouseEnter = contextSafe((index: number) => {
        gsap.fromTo(`#skillsCard${index}`, { clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)" }, { clipPath: "polygon(100% 100%, 100% 0, 0 0, 0 100%)" });
    })
    const handleMouseLeave = contextSafe((index: number) => {
        gsap.fromTo(`#skillsCard${index}`, { clipPath: "polygon(100% 100%, 100% 0, 0 0, 0 100%)" }, { clipPath: "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)" });
    })

    return (
        <section className='maxWidth' id='Skills'>
            <SectionHeading heading='SKILLS' />
            <div className='w-5/6 mx-auto flex justify-center gap-5 flex-wrap py-10 skillsDiv '>
                {skills.map((el, index) => (
                    <Card
                        key={el?.icon}
                        radius="lg"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className='aspect-square flex justify-center items-center bg-Secondary w-32 sm:w-[150px] relative skillsCard'
                    >
                        <div
                            className='absolute w-full h-full grid place-items-center z-10 bg-Primary' id={`skillsCard${index}`}
                            style={{ clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)" }}
                        >
                            <h1 className='text-center text-Dark font-bold tracking-wider text-xl sm:text-2xl '>{el?.title}</h1>
                        </div>
                        <div className='bg-Secondary'>
                            <Image
                                alt="Skills Icons"
                                className='object-cover z-0 w-[70%] mx-auto'
                                src={el?.icon}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Skills