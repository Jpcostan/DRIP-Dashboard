import Image from 'next/image'


let imgs = {"DOGS": "/dogs_icon.png", "PIGS": "/pigs_icon.png", "DRIP":"/drip_logo.svg", "REV": "/rev_icon.png", "GRIM": "/grim_icon.png", "BR3AP": "/grim_icon.png"};

export default function Prices({token_info}){
  return(
    <>
      <div  className='price-box'>
        <div  className='box-row'>
          <h2 className='token-name'>${token_info.name}</h2>
        </div>
        <div  className='box-row'>
          <div>
            {
              // These need keys, else the build will auto reject it!
              Object.keys(imgs).map(key =>(token_info.name == key ? (<Image src={imgs[key]} width={19} height={23} alt="Token Icon" />) :
              console.log("Pass")))
            }
          </div>
          {token_info.price_change > 0 ? (<h3 className='token-percent'>{token_info.price_change}%</h3>) : (
            <h3 className='token-percent negative'>{token_info.price_change}%</h3>
          )}
        </div>
        <div  className='box-row token-price'>
          <h2>${token_info.price}</h2>
        </div>
      </div>
    </>
  )
}
