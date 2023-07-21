import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card({ icon, title, text, className }) {
  return (
    <>
      <div className={`w-full flex items-center flex-col justify-between gap-y-6 text-center rounded-3xl border-2 border-[#6cdc03] pt-16 px-[50px] pb-6 ${className} hvr-bounce-out`}>
        <div className="bg-[#6cdc03] p-3 rounded-xl icon">
          <FontAwesomeIcon className="w-[58px]" icon={icon} style={{color: "#000000",}} />
        </div>

        <h1 className="text-[27px] font-extrabold leading-[33px]">{title}</h1>

        <p className="text-[18px] font-medium leading-[27px]">{text}</p>

        <a className="text-[16px] font-medium leading-[24px] border-2 border-[#6cdc03] py-[15px] px-[50px] hvr-shutter-out-vertical" href="#" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
      </div>
    </>
  )
}