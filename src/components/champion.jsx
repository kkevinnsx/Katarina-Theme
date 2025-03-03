import React, { useRef, useState } from "react";

const Champion = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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

    const getVideoSource = (index) => `videos/champion-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <video
                        src={getVideoSource(currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />

                    <div 
                        className="absolute inset-0 flex items-center justify-center z-50 cursor-pointer"
                        onClick={handleVideoClick}
                    >
                        <div className="mask-clip-path size-64 overflow-hidden rounded-lg">
                            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                                <video  
                                    ref={nextVideoRef}
                                    src={getVideoSource((currentIndex % totalVideo) + 1)}
                                    loop
                                    muted
                                    className="size-64 origin-center scale-150 object-cover object-center"
                                    onLoadedData={handleVideoLoaded}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Champion;
