import { IoMdAdd } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { Link } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SplitType from "split-type";

const Footer = () => {
    const ref = useRef(null)
    const mouseHover = useRef(null)
    const isInView = useInView(ref, { once: true })

    const links = [
        {
            Icon: <FiGithub className="hover:text-4xl duration-400 ease-in-out" />,
            link: 'https://github.com/lakshmanb-0'
        },
        {
            Icon: <FaLinkedinIn className="hover:text-4xl duration-400 ease-in-out" />,
            link: 'https://www.linkedin.com/in/lakshman-bhambhu/'
        },
        {
            Icon: <MdEmail className="hover:text-4xl duration-400 ease-in-out" />,
            link: 'mailto:lakshmanram2259@email.com'
        },
    ]
    const { contextSafe } = useGSAP(() => {
        if (isInView) {
            const text = new SplitType('#FooterTitle')
            gsap.fromTo(text.chars, { y: 0, x: 300, opacity: 0 }, { x: 0, y: 0, opacity: 1, stagger: 0.1, ease: 'sine.out' });
        }
    }, [isInView])

    // create Animation 
    const handleMouseEnter = contextSafe(() => {
        gsap.timeline()
            .to('.footerIconsDiv', { width: "11rem" })
            .to('.footerIcons0', { y: -60, opacity: 1, })
            .to('.footerIcons1', { y: 35, x: 50, opacity: 1 })
            .to('.footerIcons2', { y: 35, x: -50, opacity: 1 })
    })

    // remove Animation 
    const handleMouseLeave = contextSafe(() => {
        gsap.timeline()
            .to('.footerIconsDiv', { width: "4rem" })
            .to('.footerIcons0', { x: 0, y: 0, opacity: 0 })
            .to('.footerIcons1', { x: 0, y: 0, opacity: 0 })
            .to('.footerIcons2', { y: 0, x: 0, opacity: 0, })
    })

    return (
        <section className="maxWidth">
            <div>
                <img src='/comment.svg' alt="Comment Icon" className="w-10 sm:w-28" />
            </div>
            <div className="grid sm:grid-cols-3 items-center gap-4 py-10">
                <h1 className="font-[Lexend] text-5xl sm:text-9xl text-Primary col-span-2 order-1 sm:order-first" id="FooterTitle" ref={ref}>
                    LET'S WORK TOGETHER
                </h1>
                <div className="relative w-[4rem] aspect-square border-1 border-Primary rounded-full grid  place-items-center footerIconsDiv place-self-center"
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                    ref={mouseHover}
                >
                    <IoMdAdd className="text-Primary rounded-full bg-Secondary text-5xl cursor-pointer z-10" />
                    {links?.map((el, index) => (
                        <Link
                            isExternal
                            key={index}
                            showAnchorIcon
                            href={el?.link}
                            anchorIcon={el?.Icon}
                            className={`text-Primary absolute text-2xl cursor-pointer footerIcons${index}`}
                        >
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer