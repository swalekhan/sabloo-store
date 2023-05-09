

import style from './OurStore.module.css';
import { ImLocation } from 'react-icons/im'
import {BiTime} from 'react-icons/Bi'

const OurStore = ({ items, title }) => {
    return (
        <div className={style.ourStore}>
            <h2 className='heading'>How Can You Buy From Sabloo Stores?</h2>
                <div className={style.OurStore_content}>
                    <ImLocation/>
                    <div className={style.OurStore_left}>
                        <h2>Sabloo Store, Dehgawan</h2>
                        <p>Main Market Near By Friday Market, Dehgawan 243638</p>
                        <a href='/'>Get directions</a>
                    </div>
                </div>
                
                <div className={style.OurStore_content}>
                    <ImLocation/>
                    <div className={style.OurStore_left}>
                        <h2>Sabloo Store, Sahaswan </h2>
                        <p>Char No. Chaurah Near By Petrol Pump, Sahaswan 243638</p>
                        <a href='/'>Get directions</a>
                    </div>
                </div>

                <div className={style.OurStore_content}>
                    <BiTime/>
                    <div className={style.OurStore_left}>
                        <h2>Store Timings</h2>
                        <p>Open All Days 10AM to 8PM</p>
                    </div>
                </div>

                <div className={style.OurStore_content}>
                    <ImLocation/>
                    <div className={style.OurStore_left}>
                        <h2>Call Us</h2>
                        <p>Sabloo Call Centre: 8006071188</p>
                    </div>
                </div>
        </div>
    )
}

export default OurStore;