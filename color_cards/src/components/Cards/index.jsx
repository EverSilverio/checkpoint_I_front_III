import styles from './Cards.module.css'

export const Cards = ({ data }) => {
    return (
        <div className={styles.cards}>
            {
                data.map((e, i) =>
                    <div key={`card-${i}`} className={styles.card} style={{ backgroundColor: e.colorCode }}>
                        <div className={styles.cardLabels}>
                            <span className={styles.labelColorName}>{e.colorName}</span>
                            <span className={styles.labelColorCode}>{e.colorCode}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


