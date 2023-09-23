import Image from 'next/image'
import styles from './pokedexMain.module.scss'
import { useState } from 'react'
import { PokedexCard1 } from './pokemonCards/PokemonCard1'
import { PokedexCard2 } from './pokemonCards/PokemonCard2'
import { PokedexCard3 } from './pokemonCards/PokemonCard3'

export function PokedexMain() {
  return (
    <main className={styles.main}>
      <section className={styles.description}>
        <PokedexCard1 />
        <PokedexCard2 />
        <PokedexCard3 />
      </section>
    </main>
  )
}
