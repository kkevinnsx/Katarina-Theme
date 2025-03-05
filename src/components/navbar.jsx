import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ['Katarina', 'Noxus', 'Prologue', 'About', 'Contact'];
const externalLinks = {
    Katarina: "https://universe.leagueoflegends.com/pt_BR/champion/katarina/",
    Noxus: "https://universe.leagueoflegends.com/pt_BR/region/noxus/",
}

const NavBar = () => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [indicatorActive, setIndicatorActive] = useState(false);
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    const toggleAudioIndicator = () => {
        setAudioPlaying((prev) => !prev);
        setIndicatorActive((prev) => !prev);
    }
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const {y: currentScrollY} = useWindowScroll();

    useEffect(() => {
        if(currentScrollY === 0){
            setNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: navVisible ? 0 : -100,
            opacity: navVisible ? 1 : 0,
            duration: 0.2,
        })
    })


    useEffect(() => {
        if(audioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [audioPlaying])

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <Button 
                            id="product-button"
                            title="Play League"
                            rightIcon={<TiLocationArrow/>}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open("https://www.leagueoflegends.com/pt-br/", "_blank");
                            }}
                        />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => {
                                const isExternal = externalLinks[item];
                                return isExternal ? (
                                    <a
                                        key={item}
                                        href={externalLinks[item]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="nav-hover-btn"
                                    >
                                        {item}
                                    </a>
                                ) : (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                        {item}
                                    </a>
                                    )
                            })}
                        </div>
                        <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                            <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
                                {[1, 2, 3, 4].map((bar) => (
                                    <div 
                                        key={bar} 
                                        className={`indicator-line ${indicatorActive ? 'active' : ''}`} 
                                        style={{ animationDelay: `${bar * 0.1}s`}}
                                    />
                                ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;