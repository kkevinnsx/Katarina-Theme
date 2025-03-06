import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./button";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Champion = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(0);
    const totalVideo = 4;
    const nextVideoRef = useRef(null);

    const handleVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideo) + 1);
    };

    const handleVideoLoaded = () => {
        setLoadedVideo((prev) => prev + 1);
    };

    useEffect(() => {
        if(loadedVideo === totalVideo - 1) {
            setIsLoading(true);
        }
    }, [loadedVideo])

    useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
            visibility: "invisible", 
            opacity: 1,
            scale: 0.25,    
        });

        gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut",
            onStart: () => nextVideoRef.current.play(),
        });
        
        gsap.from("#current-video", {
            transformOrigin: "center center",
            opacity: 0,
            scale: 1,
            duration: 4,
            ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );
    
  useGSAP(() => {
    gsap.set('#video-frame', {
        clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
        borderRadius: '0 0 40% 10%'
    })

    gsap.from('#video-frame', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius: '0 0 0 0',
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#video-frame',
            start: 'center center',
            end: 'bottom center',
            scrub: true,
        }
    })
  })


    const getVideoSource = (index) => `videos/champion-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {/* {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )} */}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <video
                        src={getVideoSource(currentIndex)}
                        autoPlay
                        loop
                        muted
                        id="next-video"
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />

                    <div 
                        className="absolute inset-0 flex items-center justify-center z-40 cursor-pointer"
                        onClick={handleVideoClick}
                    >
                        <div className="mask-clip-path size-64 overflow-hidden rounded-lg">
                            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                                <video  
                                    ref={nextVideoRef}
                                    src={getVideoSource((currentIndex % totalVideo) + 1)}
                                    loop
                                    muted
                                    id="current-video"
                                    className="size-64 origin-center scale-150 object-cover object-center"
                                    onLoadedData={handleVideoLoaded}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="special-font champion-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    <b>Blade</b>
                </h1>
                <div className="absolute left-0 top-0 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font champion-heading text-blue-100"><b>Sinister</b></h1>
                        <p className="mb-5 max-w-64 font-robertRegular text-blue-100">Decisive and lethal in combat <br /> Katarina is Noxus greatest assassin.</p>
                    
                        <Button 
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow/>}
                            containerClass="!bg-red-200 flex-center z-50 gap-1 text-blue-50"
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open("https://www.youtube.com/watch?v=I76wvt0aEE4", "_blank");
                            }}     
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font champion-heading absolute bottom-5 right-5 text-black">
                    <b>Blade</b>
            </h1>
        </div>
    );
};

export default Champion;
