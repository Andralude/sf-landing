import LinkButtons from './LinkButtons';

const BottomLead = ({ actionText, description, playStoreLink, loginLink, appStoreLink }) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-slate-800 lg:pt-24 lg:pb-14 lg:bg-cover lg:h-full lg:bg-action">
      <p className="p-5 font-bold leading-normal text-center text-white text-4xl lg:pt-10 titlefont">{actionText}</p>
      <p className="pl-12 pr-12 text-xl leading-6 text-center text-gray-300 lg:text-gray-200 lg:font-medium titlefont">{description}</p>
      <LinkButtons playStoreLink={playStoreLink} loginLink={loginLink} appStoreLink={appStoreLink} hero={false}/>
    </div>
  );
};

export default BottomLead;
