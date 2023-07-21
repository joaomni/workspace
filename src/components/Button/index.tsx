import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ icon }) {
  return (
    <div className=''>
      <a 
        className="w-[310px] h-[74px] flex items-center gap-x-4 bg-[#6cdc03] py-[20px] px-[60px] text-[22px] text-bold rounded-[2px] hvr-radial-out content-hover"
        href=''
      >
        <FontAwesomeIcon className='w-4' icon={icon} size="2xs" style={{color: "#000000",}} />
        <span>Agendar Consulta</span>
      </a>
    </div>
  )
}