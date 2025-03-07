import AnimatedTitle from "./animatedTitle";
import Button from "./button";


const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/images/sinister-blade.jpeg"
            clipClass="contact-clip-path-1"
          />
        </div>

        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 sm:top-1/2 sm:w-60 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/images/contact-1.jpeg"
            clipClass="contact-clip-path-2 md:scale-125"
          />
        </div>

        <div className="relative flex flex-col items-center text-center mt-20 sm:mt-0">
            <p className="mb-10 font-general text-[15px] uppercase">
                Thanks for reading
            </p>

            <p className="mb-10 font-general text-[20px] uppercase">
                This website was inspired by the "Zentry" website <br /> available below on Awwwards
            </p>
            <AnimatedTitle
                title="'<b>Fortune</b> <b>favors</b> <br /> <b>the</b> <b>fasts</b>' <br /> <b>Katarina</b>"
                className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
            />

            <Button 
                title="contact us"
                containerClass="mt-10 cursor-pointer"
                onClick={(event) => {
                    event.stopPropagation();
                    window.open("https://github.com/kkevinnsx", "_blank");
                }}    
            />
            
            <Button
                title="Inspiration" 
                containerClass="mt-10 cursor-pointer"
                onClick={(event) => {
                    event.stopPropagation();
                    window.open("https://www.awwwards.com/sites/zentry", "_blank");
                }}
            />
        </div>
      </div>
    </div>
  );
};

export default Contact;