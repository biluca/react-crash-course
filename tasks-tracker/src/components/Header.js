import Button from "./Button"

const onClick = (e) => {
    console.log("EUREKA!", e.screenX)
}

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" color="green" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: "Default Tittle"
}

export default Header
