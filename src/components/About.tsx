import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import { Image } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.timeline({
            scrollTrigger: {
                trigger: '.aboutDiv',
                // markers: true,
                start: "top 60%",
                end: "bottom center",
                scrub: 1,
            }
        })
            .fromTo('.aboutImage', { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: 'sine.in' })
            .fromTo('.aboutPara', { y: 300, opacity: 0, }, { y: 0, opacity: 1, stagger: 1 });
    })

    return (
        <section className="maxWidth mt-10" id="About">
            <SectionHeading heading="ABOUT" />
            <div className="w-5/6 sm:w-4/6 mx-auto grid place-items-center gap-8 py-10 aboutDiv">
                <Image
                    src="/profilePic.jpg"
                    alt="profilePic"
                    className="object-cover h-[15rem] sm:h-[25rem] rounded-xl aboutImage"
                />
                <p className=" tracking-wide sm:tracking-widest relative">
                    <span className="absolute z-0 opacity-15 text-LightWhite select-none">As a Next.js/React.js developer, I focus on crafting dynamic and efficient web applications. I excel in building modular UI components, handling state effectively, and integrating APIs seamlessly. With expertise in Next.js, I optimize performance through server-side rendering. I'm adept at testing, debugging, and committed to continuous learning, ensuring the development of modern and scalable applications.</span>
                    {`As a Next.js/React.js developer, I focus on crafting dynamic and efficient web applications. I excel in building modular UI components, handling state effectively, and integrating APIs seamlessly. With expertise in Next.js, I optimize performance through server-side rendering. I'm adept at testing, debugging, and committed to continuous learning, ensuring the development of modern and scalable applications.`.split("").map((el, index) => (
                        <span className="aboutPara" key={index}>{el}</span>
                    ))}
                </p>
            </div>
        </section>
    );
};

export default About;
