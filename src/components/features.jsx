import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";
import { useRef } from "react";

const ChampionTilt = ({children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;
        const {left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top)  / height;
        const tiltX     = (relativeX - 0.5) * 5;
        const tiltY     = (relativeY - 0.5) * 5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

        setTransformStyle(newTransform)
    }
 
    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    
    return(
        <div 
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const ChampionCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description} </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="special-font bento-title text-blue-50">
                        <h1><b>Katarina in the game</b></h1>
                    </p>
                    <p className="max-w-256 font-circular text-blue-50 text-3xl">
                    Katarina is renowned for her efficient assassinations against 
                    unsuspecting enemies. Her burning ambition has led her to seek 
                    out highly protected targets, even at the risk of putting her allies 
                    in harm's way
                    </p>
                </div>

                <ChampionTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <ChampionCard 
                        src="videos/feature-1.mp4"
                        title={<b>ASSASSIN</b>}
                        description="Katarina is capable of causing all sorts 
                        of twists and turns in battles, deciding the fate of the game."
                    />
                </ChampionTilt>

                <div className="rounded-md grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <ChampionTilt className="border-hsla rounded-md row-span-2">
                        <ChampionCard 
                            src="videos/feature-2.mp4"
                            title={<b>Chosen wolf</b>}
                            description="The Wolf's Chosen is a new line of skins 
                            from Riot Games where Katarina was one of the protagonists"
                        />
                    </ChampionTilt>

                    <ChampionTilt className="row-span-1">
                        <ChampionCard 
                            src="videos/feature-3.mp4"
                            title={<b>NOXUS</b>}
                            description="The Noxus region is known for being violent and
                            ruthless in war."
                        />
                    </ChampionTilt>

                    <ChampionTilt className="row-span-1">
                        <ChampionCard 
                            src="videos/feature-4.mp4"
                            title={<b>Chibi</b>}
                            description="Katarina also received skin animations in the TFT game"
                        />
                    </ChampionTilt>

                    <ChampionTilt className="bg-red-200 flex size-full flex-col justify-between p-5 text-blue-50">
                        <h1 className="bento-title special-font max-w-64"><b>More coming soon!</b></h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </ChampionTilt>

                    <ChampionTilt className="row-span-1">
                        <video
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </ChampionTilt>
                </div>
            </div>
        </section>
    );
};

export default Features;
