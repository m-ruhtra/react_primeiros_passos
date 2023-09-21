import logo from "../../assets/logo.svg"
import style from "./style.module.css"

export const Header = () => {
    return (
        <header className={style.flexbox}>
            <img src={logo} alt="Logo do Site" />
        </header>
    )
}

