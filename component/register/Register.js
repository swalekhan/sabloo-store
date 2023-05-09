

import style from './Register.module.css'

const Register = () => {
    return (
        <div className={style.register}>
            <img src='https://www.hippostores.com/images/home_page/resellerdesktop.webp' alt='pic' />
            <div className={style.register_content}>
                <h2>Are you a Retailer or Contractor?</h2>
                <h4>Become a bussiness member to get consistent benefits</h4>
                <div>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default Register