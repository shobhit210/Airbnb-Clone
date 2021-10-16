import React, {useState} from 'react'
import Header from '../Components/Header'
import {useRouter} from 'next/dist/client/router'
import InfoCard from '../Components/InfoCard'

function search({searchResults}) {

    const [filterResult, setFilterResult] = useState("")
    const router = useRouter()
    const { location } = router.query;

    return (
        <div>
            <Header placeholder={location} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <h1 className="text-3x1 font-semibold mt-2 mb-6">{`Stays in ${location}`}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                    <div className="flex items-center h-20 w-full px-2 rounded-md py-2 shadow-md">
                        <input className="flex-grow outline-none ml-2 text-gray-500" 
                        type="text" 
                        placeholder="Filter by price" 
                        value={filterResult} 
                        onChange={(e) => setFilterResult(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        {searchResults.filter((item) => {
                            if (filterResult === "") {
                                return item
                            }
                            else if (item.price.toLowerCase().includes(filterResult.toLowerCase())) {
                                return item
                            }
                        }).map(item => (
                            <InfoCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default search


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())
    return {
        props: {
            searchResults
        }
    }
}
