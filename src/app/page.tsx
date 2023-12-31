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
          height={600}
          alt="pokedex top"
          className={styles.pokedexTop}
        />
        {
          !openDex &&
          (<button
            className={styles.openPokedex}
            onClick={clickOpenDex}>
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
