import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7x1 mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4x1 font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item)=>(
            <SmallCard
            key={item.img}
            img={item.img}
            location={item.location}
            distance={item.distance} />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4x1 font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardData?.map((item) => (
              <MediumCard
              key={item.img}
              img={item.img}
              title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get inspired" />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('http://links.papareact.com/pyp')
  .then(res=>res.json());

  const cardData = await fetch('http://links.papareact.com/zp1')
  .then(res => res.json());

  return{
    props:{
      exploreData,
      cardData
    }
  }
}
