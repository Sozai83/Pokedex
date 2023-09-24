import Image from 'next/image'
import styles from './Clue.module.scss'
import { useState } from 'react'

export function Clue(props: any) {
    const { clue, setOpenClue } = props;
    const closeClue = () => setOpenClue(false);
    return (
        <main className={styles.clueDesc} id="clueContainer" onClick={closeClue}>
            {clue == 'clue1' && (
                <section className={styles.description}>
                    <figure>
                        <figcaption>Clue 1</figcaption>
                        <Image
                            src="/Clue1_1.png"
                            width={240}
                            height={240}
                            alt="pokedex top"
                        />
                    </figure>
                    <figure>
                        <figcaption>Clue 2</figcaption>
                        <Image
                            src="/Clue1_2.jpg"
                            width={240}
                            height={240}
                            alt="pokedex top"
                        />
                    </figure>
                    <button onClick={closeClue}>Close Clue</button>
                </section>
            )}
            {clue == 'clue2' && (
                <section className={styles.description}>
                    <table>
                        <thead>
                            <tr>
                                <td>Key</td>
                                <td>Number</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Eco</td>
                                <td>2.46</td>
                            </tr>
                            <tr>
                                <td>Intensive</td>
                                <td>2.50</td>
                            </tr>
                            <tr>
                                <td>Gentle</td>
                                <td>0.38</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={closeClue}>Close Clue</button>
                </section>
            )}
            {clue == 'clue3' && (
                <section className={styles.description}>
                    <p>Check behind our goals</p>
                    <button onClick={closeClue}>Close Clue</button>
                </section>
            )}
        </main>
    )
}
