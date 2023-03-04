import Button from "./Button"

const Header = ({ title, onAdd, showAddButton, addButtonText, addButtonColor }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {showAddButton
                ?
                <Button text={addButtonText} color={addButtonColor} onClick={onAdd} />
                :
                <></>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Default Tittle"
}

export default Header
