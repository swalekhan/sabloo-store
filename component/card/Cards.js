import style from './Card.module.css'
import Card from './card'
import { useDispatch } from 'react-redux'
import { addItem } from '@/store/cartSlice'
import Alert from '../alert/Alert'
import { useState } from 'react'

const Cards = ({ items }) => {
    const [showAlert, setShowAlert] = useState(false)
    const dispatch = useDispatch()

    const addCartHandler = (data) => {
        dispatch(addItem(data))

        if (!showAlert) { // alert..............
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 1500)
        }
    }

    return (
        <div className={style.card}>
            {showAlert && <Alert showAlert={showAlert} />}
            {items.map((item, i) => (
                <Card addCartHandler={addCartHandler} {...item} key={i} />
            ))}
        </div >
    )
}

export default Cards