import add from '../icons/add.svg';
import list from '../icons/list.svg'
import filter from '../icons/filter.svg'
import '../styles/nav.css'
function Nav(props) {
    const { selectedMenu, setSelectedMenu } = props;
    return (
        <>
            <div className='nav-container'>
                <div className='nav-button'  onClick={() => setSelectedMenu('addTodo')}>
                    <div
                        className='nav-logo'
                        >
                        <img src={add} alt='img' />
                    </div>
                    <div><p>ADD TODO</p></div>
                </div>
                <div className='nav-button'>
                    <div
                        className='nav-logo'
                        onClick={() => setSelectedMenu('list')}>
                        <img src={list} alt='img' />
                    </div>
                    <div><p>LIST TODO</p></div>
                </div>
                <div className='nav-button'>
                    <div
                        className='nav-logo'
                        onClick={() => setSelectedMenu('filter')}>
                        <img src={filter} alt='img' />
                    </div>
                    <div><p>FILTER TODOS</p></div>
                </div>
            </div>
            <div className='mob-container'>
                <div className='mob-option' onClick={() => setSelectedMenu('addTodo')}>
                    <img src={add} alt='img' />
                </div>
                <div className='mob-option'  onClick={() => setSelectedMenu('list')}>
                    <img src={list} alt='img' />
                </div>
                <div className='mob-option' onClick={() => setSelectedMenu('filter')}>
                    <img src={filter} alt='img' />
                </div>
            </div>
        </>
    )
}

export default Nav;