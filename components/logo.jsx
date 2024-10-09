import Image from 'next/image'

export default function Logo({domain,logo}) {
  if(logo!=null && logo!=''){
    return (
        <Image 
              src={logo}
              width={300}
              height={300}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            />
    )
  }else{
    return(
      <div className="logo text-capitalize">{domain}</div>
    )
  }
}
