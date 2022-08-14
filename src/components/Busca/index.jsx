import './styles.css'

export const Busca = ({search, setSearch}) => {
    return (
       
            <input 
                className='search-input' 
                type='text' 
                value={search}
                placeholder='Digite o nome de um usuario para buscar'
                onChange={(e) => setSearch(e.target.value)}
            />

    )
}