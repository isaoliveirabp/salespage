import React,{Fragment, useState, useEffect} from 'react'
import PE_1 from '../images/PE_1.png'
import PE_2 from '../images/PE_2.png'
import PE_3 from '../images/PE_3.png'


const PlanosDeEstudo = () => {

 /*  function writeToCanvas(src) {
    return new Promise((res) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')
      const img = new Image();
      img.src = src;

      img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0,0);
        canvas.toBlob((blob) =>{
          res(blob);
        }, 'image/png' )
      }
    })
  } */

  const images = ['https://i.imgur.com/xNhNBf1.png',PE_2,PE_2];

  async function copyToClipBoard(src) {
    const data = await fetch(src)
    const blob = await data.blob();

      try{
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          })
        ])
        console.log("Sucess");
      } catch(e) {
        console.log(e)
      }
  } 

  const [btnCollor, setBtnCollor] = useState ('')

 const handlebtnCollor = () =>{
    setBtnCollor(!btnCollor)
  }
 


  


  return (
    <div className='w-full pt-[5rem] px-4 max-w-[1240px] mx-auto'>
      <div className='text-[40px] text-black mb-4'>
        <h1>Planos de Estudo</h1>
      </div>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3s'>
            <div className='flex justify-between max-w-[1240px] gap-4 pl-estudos'>
                {images.map(image => <div key={image} className='grid mx-auto'>
                <img src={image} alt="/"></img>
                  <button className='btncopy' onClick={() => copyToClipBoard(image)}>{btnCollor}</button>
              </div>
              )}
          </div>
        </div>
    </div>
  )

  
}



export default PlanosDeEstudo