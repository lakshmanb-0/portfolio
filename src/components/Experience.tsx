import SectionHeading from './SectionHeading'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { IoMdAdd } from "react-icons/io";

const Experience = () => {
    const data = [{
        position: 'SDE Intern',
        company: 'Skids Health',
        startDate: 'July 2023',
        EndDate: 'Jan 2024',
        points: ["Developed interactive user interfaces using React.js, ensuring a seamless user experience.",
            "Implemented reusable components to improve code maintainability and scalability.",
            "Collaborated with the design team to translate UI/UX designs into functional components."]
    }]

    return (
        <section className='maxWidth ' id="Experience">
            <SectionHeading heading='EXPERIENCE' />
            <Accordion >
                {data?.map((el, index) => (
                    <AccordionItem
                        disableIndicatorAnimation
                        key={index}
                        aria-label={el?.position}
                        title={<h1 className='text-White'>{el?.position}</h1>}
                        subtitle={el?.company}
                        className='text-sm'
                        startContent={<IoMdAdd className='text-2xl sm:text-4xl' />}
                        indicator={<div>{el?.startDate + " - " + el?.EndDate}</div>}
                    >
                        <ul className='pl-4 sm:pl-10 text-sm sm:text-xl'>
                            {el?.points?.map(p => (
                                <li key={p} className='tracking-wider pb-1'>- {p}</li>
                            ))}
                        </ul>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Experience