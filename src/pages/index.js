import Head from 'next/head';
import styles from "@/styles/index.module.css";

import Navbar from '@/components/navbar/Navbar';
import Subtitle from '@/components/tipography/subtitle/Subtitle';
import Container from '@/components/container/Container';
import SaleCard from '@/components/cards/saleCard/SaleCard';
import GameCard from '@/components/cards/gameCard/GameCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle >Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'league-of-legends.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
              />
              <SaleCard
                image={'dota-2.jpg'}
                discount='40%'
                fullPrice='299,90'
                discountPrice='109,90'
              />
              <SaleCard
                image={'valorant.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
              />
            </div>
            <div className={styles.salecontainer}>
              <SaleCard
                image={'V.jpg'}
                discount='30%'
                fullPrice='199,90'
                discountPrice='99,90'
              />
              <SaleCard
                image={'Player.jpg'}
                discount='40%'
                fullPrice='299,90'
                discountPrice='109,90'
              />
              <SaleCard
                image={'free.jpg'}
                discount='50%'
                fullPrice='399,90'
                discountPrice='209,90'
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
            />
            <GameCard
              image={'fortnite.jpg'}
              title='Fortnite'
              category='Ação, Estratégia, Multijogador'
              price='199,90'
            />
            <GameCard
              image={'minecraft.jpeg'}
              title='Counter Strike: Global Offensive'
              category='Criatividade, Estratégia, Multijogador'
              price='89,90'
            />
            <GameCard
              image={'roblox.jpg'}
              title='Roblox'
              category='Multiverso, Multijogador'
              price='109,90'
            />

          </div>
        </Container>

      </div>
    </>
  )
}
