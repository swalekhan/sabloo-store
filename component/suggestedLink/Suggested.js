import style from './Suggested.module.css'
import Link from 'next/link'
import { suggestedLink } from '@/utils/data/data'

const Sugggested = ({title}) => {
    return (
        <div className={style.Suggested}>
            <h3> {title}</h3>
            <ul>
                {suggestedLink.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url} className={style.item_content}>
                            <img src={item.img} alt="pic" />
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sugggested