import './styles.css'
import {useState} from 'react'
import { Busca } from '../../components/Busca/index'
import { UserCard } from '../../components/UserCard'

export const Home = () => {
    let [search, setSearch] = useState('')

    return (
        <div className='github-container'>
            <Busca search={search} setSearch={setSearch}/>
            <br/>
            <UserCard />
        </div>
    )
}

