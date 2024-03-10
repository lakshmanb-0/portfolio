import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Link,
} from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
    const data = [
        {
            title: "GamerHead",
            description: "Embark on a gaming journey like never before with GamerHead, a cutting-edge Next.js project that seamlessly integrates the thrill of gaming with secure authentication and a user-friendly experience. This platform brings the gaming store experience to your fingertips, offering an extensive collection of titles sourced directly from the Steam API.",
            skills: ["NextJs", "TypeScript", "MongoDb", "TailwindCss", "Redux", "Stripe"],
            githubLink: "https://github.com/lakshmanb-0/gamerhead",
            siteLink: "https://gamerhead.vercel.app/",
            image: "/gamerhead.png",
        },
        {
            title: "ARTVILLE",
            description: "This site is built using Next.js 13. It consists of 4-5 pages and showcases an aesthetically pleasing design. It is a static website, meaning no functional elements have been added. The site was developed for a prominent company specializing in the construction of high-quality residential complexes and various life infrastructure projects.",
            skills: ["NextJs", "TailwindCss"],
            githubLink: "https://github.com/lakshmanb-0/artville_construction-",
            siteLink: "https://artville-construction.vercel.app/",
            image: "https://i.postimg.cc/cCSpsW-bT/screencapture-artville-construction-vercel-app-2024-03-09-19-40-19.png",
        },
        {
            title: "Flying Food",
            description: "A Simple Food Ordering website is a user-friendly online platform designed to streamline the process of ordering food from various restaurants. The primary goal of such a website is to provide a convenient and efficient way for users to browse through menus, select their favorite dishes, and place orders for delivery",
            skills: ["React", "CSS", "React Router"],
            githubLink: "https://github.com/lakshmanb-0/restaurant",
            siteLink: "https://flyingfood10.web.app/",
            image: "https://github.com/lakshmanb-0/restaurant/blob/master/assets/home.png?raw=true",
        },
        {
            title: "Eatly  ",
            description: "Eatly is a static landing page for a small food site featuring a Carousel slider and a concise food data type. It is designed with a user-friendly experience and responsive layout.",
            skills: ["React", "Sass", "TailwindCss", "SwiperJs"],
            githubLink: "https://github.com/lakshmanb-0/eatly_landing_page",
            siteLink: "https://eatly-landing-page.vercel.app/",
            image: "https://raw.githubusercontent.com/lakshmanb-0/eatly_landing_page/master/assets/Laptop.png",
        },
        {
            title: "Govcour ",
            description: "Govcour is an e-learning platform where users can watch study videos based on their skill category. The platform includes a static login and signup page without backend functionality. As a result, data is hardcoded with YouTube links, and all links are functional.",
            skills: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/lakshmanb-0/GovCour",
            siteLink: "https://govcour.web.app/",
            image: "https://i.postimg.cc/5txGnDSB/screencapture-govcour-web-app-index-html-2023-02-11-20-56-36.png",
        },
    ];

    const { contextSafe } = useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.projectCardDetails', { y: 100, opacity: 0 }, {
            y: 0, opacity: 1, scrollTrigger: {
                trigger: '.projectCard',
                // markers: true,
                start: "+=100 80%",
                end: "bottom 30% ",
                scrub: 1,
            }
        });
    })

    const handleMouseEnter = contextSafe((index: number) => {
        gsap.fromTo(`.ProjectBtn${index}`, { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(100% at 50% 50%)", duration: 0.5 });
    })

    const handleMouseLeave = contextSafe((index: number) => {
        gsap.fromTo(`.ProjectBtn${index}`, { clipPath: "circle(100% at 50% 50%)" }, { clipPath: "circle(0% at 50% 50%)", duration: 1 });
    })

    return (
        <section className="maxWidth " id="Projects">
            <SectionHeading heading="PROJECTS" />
            <div className="py-10 grid gap-10">
                {data?.map((item, index) => (
                    <Card className='bg-Secondary projectCard' key={index}>
                        <CardBody className="overflow-hidden">
                            <div className='grid sm:grid-cols-3 w-11/12 sm:w-10/12 mx-auto py-4 gap-5 projectCardDetails'>
                                <Card
                                    className={`sm:col-span-2 bg-transparent text-White ${index % 2 && 'order-1'}`}
                                    shadow={"none"}
                                >
                                    <CardHeader className=" text-4xl sm:text-6xl">
                                        <span className="text-Primary font-bold">0{index + 1}</span>{" "}
                                        <span className="pl-4 sm:pl-10">{item.title}</span>
                                    </CardHeader>
                                    <CardBody className="text-LightWhite text-sm">
                                        <p className="tracking-wide">{item?.description}</p>
                                        <div className="pt-4 flex gap-4">
                                            <p className="text-White"> Stack:</p>
                                            <p className="flex gap-2 flex-wrap">
                                                {item?.skills.map((el) => (
                                                    <span key={el}>{el}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="flex gap-4">
                                        <div className="relative"
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={() => handleMouseLeave(index)}
                                        >
                                            <Button
                                                href={item?.siteLink}
                                                as={Link}
                                                isExternal
                                                variant="bordered"
                                                className="text-Primary border-Primary rounded"
                                            >
                                                Visit site
                                            </Button>
                                            <Button
                                                href={item?.siteLink}
                                                as={Link}
                                                isExternal
                                                variant="bordered"
                                                className={`text-Secondary border-Primary bg-Primary rounded absolute inset-0 ProjectBtn${index}`}
                                                style={{ clipPath: 'circle(0% at 50% 50%)' }}
                                            >
                                                Visit site
                                            </Button>
                                        </div>

                                        <Link
                                            isExternal
                                            href={item?.githubLink}
                                            underline="hover"
                                            className="text-Primary"
                                        >
                                            Go to Github
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <div className="overflow-y-hidden h-[300px] rounded-lg bg-top bg-cover hover:bg-bottom duration-[3s] ease-in" style={{ backgroundImage: `url('${item?.image}')` }}>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
