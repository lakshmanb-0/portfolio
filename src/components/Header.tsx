import Navbar from './Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

const Header = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const text = new SplitType('#headerFirst')
        gsap.timeline()
            // navbar
            .fromTo(".NavbarLogo", { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "sine.in" })
            .fromTo(".NavbarMenu", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "sine.in" })
            .fromTo(`.NavbarLinks`, { y: -37 }, { y: 0, ease: 'sine.in', stagger: 0.3 })
            // heading title 
            .fromTo(text.chars, { y: 300, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1, stagger: 0.1, ease: 'sine.out' })

        gsap.to(".headerSecond", {
            y: -150, opacity: 1, duration: 1, scrollTrigger: {
                trigger: ".headerSecond",
                // markers: true,
                start: "-=500 top",
                end: "+=200",
                scrub: 1,
            }
        });
    })

    return (
        <section className='h-screen'>
            <Navbar />
            <section className='w-full h-full relative overflow-x-hidden' >
                <img src="/header.jpg" alt="" className='opacity-30 z-10 absolute inset-0 w-full h-full object-cover' />
                <section className='absolute inset-0 z-20 py-20'>
                    <section className='maxWidth h-full w-full flex flex-col justify-between'>
                        {/* heading section  */}
                        <h1 className='font-[Lexend] text-6xl sm:text-[10rem] w-full overflow-hidden sm:leading-[8rem]' id='headerFirst'>
                            <span className='text-Primary'>LAKSHMAN</span>
                            <span className='text-2xl sm:text-5xl'>FRONTEND DEVELOPER</span>
                        </h1>
                        {/* hi section  */}
                        <div className='text-3xl sm:text-5xl max-w-[900px] sm:pl-40 headerSecond opacity-0 '>
                            <h1>Hi,</h1>
                            <p className='text-Grey text-xl pt-3'>
                                "Hello there! I'm Lakshman, a frontend developer eager to learn and create captivating user experiences. Excited to have you explore my portfolio!"</p>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Header