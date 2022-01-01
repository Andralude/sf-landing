import LinkButtons from "./LinkButtons";


const Hero = ({appType, tagLine, description, playStoreLink, loginLink, appStoreLink}) => {
  return (
    <div id="product">
      <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
        <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
        </div>
        <div>
          <p className="p-2 text-4xl font-bold text-center text-slate-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>
        <div>
          <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">
            {description}
          </p>
        </div>
        
        <LinkButtons playStoreLink={playStoreLink} loginLink={loginLink} appStoreLink={appStoreLink} hero={true}/>
        
      </div>
      <div className="z-0 flex flex-row items-start justify-center w-screen h-[45rem] pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-12 lg:w-full md:h-96 lg:pt-0">
          <img className="absolute left-8 sm:left-16 lg:left-auto md:-mt-96 lg:-mt-64 lg:ml-16" src='/assets/Rectangle_1.png' alt=""/>
          <img className="absolute right-8 sm:right-16 lg:right-auto lg:ml-24 lg:-mt-16 md:-mt-64" src='/assets/Rectangle_2.png' alt=""/>
        </div>
    </div>
  );
};

export default Hero;
