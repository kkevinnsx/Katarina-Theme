import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './animatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
    
        clipAnimation.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      });

    return (
        <div id="about" className="min-h-screen w-scree">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    <b>Welcome to  Noxus</b>
                </p>
                    <AnimatedTitle 
                        title="<b>Are</b> <b>you</b> <b>ready</b> <b>for</b> <b>the</b> <br /> <b>challenges</b> <b>of</b> <b>Noxus</b>?"
                        containerClass="mt-5 !text-black text-center"    
                    /> 

                <div className="about-subtext">
                    <p>
                        <b>Champion in the Spotlight- Katarina "The Sinister Blade"</b>
                    </p>
                    <p className='text-gray-500'>
                        <b>Keep your friends close and your enemies guessing</b>
                    </p>
                </div>
            </div>

            <div className='h-dvh w-screen relative' id="clip">
                <div className='mask-clip-path about-image relative h-full w-full'>
                    <img
                        src='images/about.jpeg'
                        alt='background'
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        />
                </div>
            </div>
        </div>
    )
}

export default About