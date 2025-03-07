import { useRef } from "react"
import AnimatedTitle from "./animatedTitle";
import gsap from "gsap";
import RoundedCorners from "./roundedCorners";
import Button from "./Button";

const Story = () => {
    const frameRef = useRef('null');
    const handleMouseLeave = () => {

    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        
        if (!element) return;

        const rect = element.getBoundingClientRect();
        
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        
        const centerX = rect.width /2;
        const centerY = rect.height /2;
        
        const rotateY = ((y - centerY) / centerY) * -10;
        const rotateX = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })

    }

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Universe of Runeterra    
                </p>
                <div className="relative size-full">
                    <AnimatedTitle 
                        title="<b>the</b> <b>story</b> <b>of</b> <b>noxus</b> <br /> <b>greatest</b> <b>assassin</b>"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    src="/images/entranceT.jpg"
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    alt="entrance"
                                    className="object-contai"
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>    
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
                        ''Never question my loyalty. You will never know what I endure for it.'' <br /><br />
                        ~ Katarina
                        </p>
                        <Button 
                            id="realm-button" 
                            title="Read Biography"
                            containerClass="mt-5"
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open("https://universe.leagueoflegends.com/pt_BR/champion/katarina/", "_blank");
                            }}
                        />
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Story;