import  { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
export default function SiteHeader() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/categories')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    return (
        <div className="site-header">
            <Link to='/'>
                <h1>Ninja Reviews</h1>
            </Link>
            <nav className='categories'>
                <span>Filter reviews by category:</span>
                {data.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.attributes.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}