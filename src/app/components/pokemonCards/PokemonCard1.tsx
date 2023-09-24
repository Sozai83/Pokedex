import Image from 'next/image'
import styles from './PokemonCards.module.scss'
import { useState } from 'react'
import { Main } from 'next/document';

export function PokedexCard1() {
    const [openClue, setOpenClue] = useState(false);
    const changeSetOpenClue = () => setOpenClue(true);
    const closeClue = () => setOpenClue(false);

    const [keyword, setKeyword] = useState('');
    const [warning, setWarning] = useState('');
    const [solved, setSoved] = useState(false);

    const changeKeyword = (e: any) => {
        const key = e.target.value || "";
        setKeyword(key);
    }
    const submitKeyword = (e: any) => {
        e.preventDefault();
        const temp_key = keyword.toLowerCase().trim();
        if (temp_key === "test") {
            setWarning("")
            setSoved(true);
        } else {
            setWarning("The password is incorrect")
        }
    }
    return (
        <main className={styles.main}>
            {!solved &&
                (
                    <main className={styles.nonSolved}>
                    <section className={styles.img}>
                        <Image
                            src="/Jolteon_Silhouette.jpg"
                            width={100}
                            height={100}
                            alt="pokedex top"
                        />
                    </section>
                        <section className={styles.description}>
                            <button className={styles.clue}>See clue</button>
                            <form onSubmit={submitKeyword}>
                                <label>Password</label>
                                {warning && (<p>{warning}</p>)}
                                <input
                                    onChange={changeKeyword}
                                    type="text" />
                                <input
                                    type="submit"
                                    value="check password" />
                            </form>
                        </section>
                    </main>
                )
            }
            {solved && (
                <section className={styles.solved}>
                    <div className={styles.solvedChar}>じ</div>
                </section>
            )}
        </main >
    )
}
