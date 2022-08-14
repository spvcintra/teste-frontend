import './styles.css'

export const UserCard = () => {
    return (
        <div className='card-container'>
            <div className='card-avatar-container'>
                <img className='card-avatar' src='https://avatars.githubusercontent.com/u/25994411?v=4'/>
                <div>
                    Daniel Cintra
                </div>
            </div>
            <div className='card-info'>
                <div>
                    info 1
                </div>
                <div>
                    info 2
                </div>
                <div>
                    info 3
                </div>
            </div>
        </div>
    )
}