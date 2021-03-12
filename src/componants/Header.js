
import Button from './Buttton'
const Header = ({showtog,showadd}) => {
    
    return (
        <header className='header'>
            <h1>Task traker</h1>
            <Button text={showadd ? 'Close' : 'Add'} color={showadd ? 'red' : 'Green'} onClick={showtog} ></Button>
           
        </header>
    )
}

export default Header