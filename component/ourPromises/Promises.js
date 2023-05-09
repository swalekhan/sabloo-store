import style from './Promises.module.css'
import { ourPromisesData } from '@/data/data';  

const Promises = ({ }) => {
    return (
        <div className={style.promise}>
            <h3 className='heading'>Our Promises</h3>
            <div className={style.promise_content}>
                {ourPromisesData.map((item, i) => (
                    <div className={style.promise_item} key={i}>
                        <div className={style.promise_img}>
                            <img src={item.img} alt='pic' />
                        </div>
                        <h4>{item.orangeContent}</h4>
                        <h5>{item.blackContent}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Promises;