
import style from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style["footer__addr"]}>
                <h1 className={style["footer__logo"]}>Something</h1>

                <h2>Contact</h2>

                <address>
                    Sabloo Marble <br/> C12 Dehgawan, Budaun <br/>
                   Call Us : 8006071188<br/>

                        <a className={style["footer__btn"]} href="mailto:swalekhan1522@gmail.com" target="_blank">Email Us</a>
                </address>
            </div>

            <ul className={style["footer__nav"]}>
                <li className={style["nav__item"]}>
                    <h2 className={style["nav__title"]}>Media</h2>

                    <ul className={style["nav__ul"]}>
                        <li>
                            <Link href="#">Online</Link>
                        </li>

                        <li>
                            <Link href="#">All Product Under One Roof</Link>
                        </li>

                        <li>
                            <Link href="#">Alternative Ads</Link>
                        </li>
                    </ul>
                </li>

                <li className={style["nav__item nav__item--extra"]}>
                    <ul className={style["nav__ul nav__ul--extra"]}>
                        <li>
                            <Link href="/categories/WoodenMaterial">Hardware Material</Link>
                        </li>

                        <li>
                            <Link href="/categories/Tiles">All Tilec and Care</Link>
                        </li>

                        <li>
                            <Link href="/categories/WoodenMaterial">All Wooden Material</Link>
                        </li>

                        <li>
                            <Link href="/categories/StructuralMaterial">Structural Material</Link>
                        </li>

                        <li>
                            <Link href="/categories/Electrical">All Electric </Link>
                        </li>

                        <li>
                            <Link href="/categories/Paints"> All Paints </Link>
                        </li>

                        <li>
                            <Link href="/categories/Bath&Fitting">Bath and Fitting</Link>
                        </li>

                    </ul>
                </li>

                <li className={style["nav__item"]}>
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Terms of Use</a>
                        </li>

                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className={style["legal"]}>
                <p>&copy; 2019 Something. All rights reserved.</p>

                <div className={style["legal__links"]}>
                    <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer