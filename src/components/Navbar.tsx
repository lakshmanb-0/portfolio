import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll';
import { useState } from 'react'
import { CgClose, CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const data = ['About', 'Skills', 'Projects', 'Experience']
    const locomotiveScroll = new LocomotiveScroll();

    const { contextSafe } = useGSAP(() => {
        if (mobileNav) {
            gsap.timeline()
                .to('.NavbarMobile', { width: '100vw', height: '100vh', opacity: 1, ease: 'power1.in' })
                .to('.NavbarDiv', { padding: '0', ease: 'power1.in' })
                .fromTo('.NavbarLinksMobile', { x: 200, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5, ease: 'sine.in' })
        }
        else {
            gsap.to('.NavbarDiv', { padding: '1rem', ease: 'power1.in' });
        }
    }, [mobileNav])

    const handleMouseEnter = contextSafe((index: number) => {
        gsap.to(`#navbarLi${index}`, { y: -37, duration: 0.5, ease: 'sine.in' })
    })

    const handleMouseLeave = contextSafe((index: number) => {
        gsap.to(`#navbarLi${index}`, { y: 0, duration: 0.5, ease: 'sine.out' })
    })

    const handleScroll = (params: string) => {
        let target = document.getElementById(params)
        locomotiveScroll.scrollTo(target!);
    }

    return (
        <section className={`flex justify-between py-4 maxWidth px-4 relative NavbarDiv`}  >
            {/* logo  */}
            <h1 className='text-Primary text-2xl font-bold NavbarLogo'>L.dev</h1>
            <ul className='items-center h-7 overflow-hidden hidden sm:flex'>
                {data?.map((el, index) => (
                    <li className="flex flex-col px-3 pt-8 cursor-pointer NavbarLinks"
                        id={`navbarLi${index}`}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}>
                        <span onClick={() => handleScroll(el)}
                            className='text-White text-xl'
                        >{el}</span>
                        <span onClick={() => handleScroll(el)}
                            className='pt-2 text-Primary text-xl'
                        >{el}</span>
                    </li>
                ))}
            </ul>
            <CgMenuLeftAlt className='block sm:hidden text-3xl NavbarMenu' onClick={() => setMobileNav(true)} />
            {mobileNav && <ul className='flex flex-col items-center gap-10 overflow-hidden fixed right-0 w-0 h-0 pt-20 bg-Dark z-[100] NavbarMobile'>
                {data?.map((el, index) => (
                    <li className="flex flex-col px-3 pt-8 cursor-pointer NavbarLinks NavbarLinksMobile"
                        id={`navbarLi${index}`}
                        key={index}>
                        <span
                            className='text-White text-2xl'
                            onClick={() => { setMobileNav(false); handleScroll(el) }}
                        >{el}</span>
                    </li>
                ))}
                <CgClose className='absolute top-2 right-2 text-5xl' onClick={() => setMobileNav(false)} />
            </ul>}
        </section>
    )
}

export default Navbar