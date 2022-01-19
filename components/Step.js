const Step = ({title, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-center";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className={alternate?row : rowReverse}>
          <div className="w-5/6 mx-auto lg:mx-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <p className="pb-5 text-2xl font-semibold text-center md:mx-auto text-secondary-400 lg:pb-0 lg:-mb-3 lg:text-lg underline underline-offset-auto whitespace-pre-wrap lg:font-bold">{title}</p>
            <ul className="mx-auto pb-4 text-2xl w-fit mt-4 lg:mt-8" style={{ listStyleType: "'★ '" }}>
              {description.split('\n').map(s =>
              <li className="pb-2 text-left titlefont text-slate-800 w-fit">
                {s}
              </li>
              )}
            </ul>
          </div>
          <div>
            <img src={img} alt="" className="mx-auto mb-8 lg:mx-8"/>
          </div>
        </div>
    )
}

export default Step
