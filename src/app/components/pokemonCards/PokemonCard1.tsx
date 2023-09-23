import Image from 'next/image'
import styles from './PokemonCards.module.scss'
import { useState } from 'react'

export function PokedexCard1() {
    return (
        <main className={styles.main}>
            <section className={styles.img}>
                <Image
                    src="/pokedex_top.jpg"
                    width={100}
                    height={100}
                    alt="pokedex top"
                />
            </section>
            <section>clue</section>
        </main >
    )
}
