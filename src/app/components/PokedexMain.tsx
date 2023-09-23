import Image from 'next/image'
import styles from './pokedexMain.module.scss'
import { useState } from 'react'
import { PokedexCard1 } from './pokemonCards/PokemonCard1'

export function PokedexMain() {
  return (
    <main className={styles.main}>
      <section className={styles.description}>
        <PokedexCard1 />
      </section>
    </main>
  )
}
