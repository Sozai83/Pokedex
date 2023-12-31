import Image from 'next/image'
import styles from './PokemonCards.module.scss'
import { useState } from 'react'
import { Clue } from '../clue/Clue';

export function PokedexCard3() {
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
        if (temp_key === "birthday") {
            setWarning("")
            setSoved(true);
        } else {
            setWarning("The password is incorrect")
        }
    }
    return (
        <>
        <main className={styles.main}>
            {!solved &&
                (
                    <main className={styles.nonSolved}>
                        <section className={styles.img}>
                            <Image
                                src="/Flareon_Silhouette.jpg"
                                width={80}
                                height={80}
                                alt="pokedex top"
                            />
                        </section>
                    <section className={styles.description}>
                            <button className={styles.clue} onClick={changeSetOpenClue}>
                                See clue
                            </button>
                        <form onSubmit={submitKeyword}>
                            <label>Password</label>
                                {warning && (<p className={styles.warning}>{warning}</p>)}
                            <input
                                onChange={changeKeyword}
                                    type="text"
                                    className={styles.textInput} />
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
                    <div className={styles.solvedChar}>し</div>
                    <div className={styles.solvedChar}>ゃ</div>
                </section>
            )}
        </main >

            {
                openClue &&
                <Clue className={styles.clueDesc} clue="clue3" setOpenClue={setOpenClue} />
            }
        </>
    )
}