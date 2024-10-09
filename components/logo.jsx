import Image from 'next/image'

export default function Logo({domain,logo}) {
  if(logo!=null && logo!=''){
    return (
        <Image 
              src={logo}
              width={200}
              height={200}
              alt=""
              className='d-inline-flex img-fluid'
            />
    )
  }else{
    return(
      <div className="logo text-capitalize">{domain}</div>
    )
  }
}
