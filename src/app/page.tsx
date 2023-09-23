"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import { PokedexMain } from './components/PokedexMain'
import { useState } from 'react'

export default function Home() {
  const [openDex, setOpenDex] = useState(false);
  const clickOpenDex = () => setOpenDex(true);
  return (
    <main className={styles.main}>
      <section className={styles.description}>
        <Image
          src="/pokedex_top.jpg"
          width={400}
          height={700}
          alt="pokedex top"
          className={styles.pokedexTop}
        />
        {
          !openDex &&
          (<button onClick={clickOpenDex}>
          Open Pokedex
          </button>)
        }
        {
          openDex &&
          <PokedexMain />
        }
      </section>
    </main>
  )
}
