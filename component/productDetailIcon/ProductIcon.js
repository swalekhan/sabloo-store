

import style from "./ProductIcon.module.css"



const ProductIcon = ({imgUrl,title}) => {
    return (
        <div className={style.ProductIcon}>
          <img src={imgUrl} alt="pic"/>
          <p>{title}</p>
        </div>
    )
}

export default ProductIcon;