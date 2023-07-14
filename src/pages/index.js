import { useState } from "react";
import Head from 'next/head';
import styles from "@/styles/index.module.css";

import Navbar from '@/components/navbar/Navbar';
import Subtitle from '@/components/tipography/subtitle/Subtitle';
import Container from '@/components/container/Container';
import SaleCard from '@/components/cards/saleCard/SaleCard';
import GameCard from '@/components/cards/gameCard/GameCard';


export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
    console.log("removeu")
  }



  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar  cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle >Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'League of Legends', price: 99.90, image: 'league-of-legends.jpg'})}
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount='40%'
                fullPrice='299,90'
                discountPrice='109,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Dota 2', price: 109.90, image: 'dota-2.jpg'})}
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Valorant', price: 209.90, image: 'valorant.jpg'})}
              />
            </div>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'V.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Grant Theft Auto', price: 99.90, image: 'V.jpg'})}
              />
              <SaleCard
                image={'Player.jpg'}
                discount='40%'
                fullPrice='299,90'
                discountPrice='109,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Playerunknowns Battlegrounds', price: 109.90, image: 'Player.jpg'})}
              />
              <SaleCard
                image={'free.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
                onAdd={() => 
                  handleAddProduct ({ name: 'Free Fire', price: 99.90, image: 'free.jpg'})}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle >Outros Jogos</Subtitle>
          </div>
          <div className={styles.gameContainer}>
            <GameCard
              image={'counter-strike.jpg'}
              title='Counter Strike: Global Offensive'
              category='Ação, Estratégia, Multijogador'
              price='99,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Counter Strike: Global Offensive', price: 99.90, image: 'counter-strike.jpg'})}
            />
            <GameCard
              image={'fortnite.jpg'}
              title='Fortnite'
              category='Ação, Estratégia, Multijogador'
              price='199,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Fortnite', price: 199.90, image: 'fortnite.jpg'})}
            />
            <GameCard
              image={'minecraft.jpeg'}
              title='Minecraft'
              category='Criatividade, Estratégia, Multijogador'
              price='89,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Minecraft', price: 89.90, image: 'minecraft.jpeg'})}
            />
            <GameCard
              image={'roblox.jpg'}
              title='Roblox'
              category='Multiverso, Multijogador'
              price='109,90'
              onAdd={() => 
                handleAddProduct ({ name: 'Roblox', price: 109.90, image: 'roblox.jpg'})}
            />

          </div>
        </Container>

      </div>
    </>
  )
}
