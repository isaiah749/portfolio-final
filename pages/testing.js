import { useState, useEffect } from 'react'
import Juno from '../components/Testing/Juno'
import JunoAgency from '../components/Testing/JunoAgency'
import JunoPlus from '../components/Testing/JunoPlus'

function Testing() {

    const [data, setData] = useState(99)
    const [content, setContent] = useState(<Juno />)

    useEffect(() => {
      if (data < 490) {
        setContent(<Juno />)
      }
      else if (data >= 490 && data <= 899) {
        setContent(<JunoPlus />)
      }
      else if (data == 900) {
        setContent(<JunoAgency />)
      }
      else {
        null
      }
    }, [data])

  return (
    <div className='bg-white h-[100vh] px-5 '>
        <section className='h-[350px] w-full max-w-7xl mx-auto pt-5  '>
           {content}
        </section>
        <div className='w-full max-w-7xl mx-auto flex items-center flex-col'>
            <input className='lg:w-[500px] lg:h-3 bg-gray-200 rounded-lg  cursor-pointer lg:range-lg  w-[350px] h-2 mb-3  accent-green-500 ' type='range' min='99' max='900' step='1' value={data} onChange={(e) => setData(e.target.value)}  />
            <h1 className='font-bold text-green-500 text-3xl'>
                {`$${data}/Month`}
                <span className={data < 900 ? 'block' : 'hidden'}>
                  {data <= 490 ? (<div>$99/Month</div>) : (<div>$490/Month</div>)}
                </span>
                <span className={data >= 900 ? 'block' : 'hidden'}>
                  <div>$900/Month</div>
                </span>
                
            </h1>
        </div>
    </div>
  )
}

export default Testing