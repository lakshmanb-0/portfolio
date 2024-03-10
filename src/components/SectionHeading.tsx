import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'

type TData = {
    title: string,
    icon: string,
    para: string
}
const SectionHeading = ({ heading }: { heading: string }) => {
    const [data, setData] = useState<TData>()


    useEffect(() => {
        const headingNames = [{
            title: 'ABOUT',
            icon: '/about.svg',
            para: ''
        },
        {
            title: 'SKILLS',
            icon: '/skills.svg',
            para: 'My focused technologies: current areas of proficiency'
        },
        {
            title: 'PROJECTS',
            icon: '/projects.svg',
            para: 'Featured Work and Project Showcase'
        },
        {
            title: 'EXPERIENCE',
            icon: '/experience.svg',
            para: 'A Story of Growth, Learning & Professional Development'
        },
        ]
        headingNames.map(el => el.title === heading && setData(el))
    }, [heading])



    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        // scrolltrigger 
        gsap.timeline({
            scrollTrigger: {
                trigger: `.sectionHeadingDiv${heading}`,
                // markers: true,
                start: "top 90%",
                end: "bottom 30%",
                scrub: 1,
            }
        })
            .from(`.sectionHeadingTitle${heading}`, { x: 100, opacity: 0 })
            .from(`.sectionHeadingIcon${heading}`, { y: 100, opacity: 0 })
    })

    return (
        <div className={`flex justify-between items-center py-5 ${heading && `sectionHeadingDiv${heading}`}`}>
            <div className={`${!(heading === 'ABOUT' || heading === 'PROJECTS') && 'order-1'} border-1 border-transparent p-8 rounded-full sectionHeadingIcon${heading} hover:rotate-1 hover:border-Secondary`}>
                <img src={data?.icon} alt="SVG Icon" className='w-8 sm:w-28 ' />
            </div>
            <div className={`relative ${heading && `sectionHeadingTitle${heading}`}`}>
                <h1 className='text-5xl sm:text-9xl text-Secondary font-[Lexend]'>{data?.title}</h1>
                <p className='absolute bottom-4 right-0 text-LightWhite hidden sm:block max-w-[250px] tracking-wider'>{data?.para}</p>
            </div>
        </div>
    )
}

export default SectionHeading