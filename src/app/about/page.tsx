import styles from '@/styles/about.module.css'

export default function page() {
  return (
    <div className={styles.container}>
        <div className={styles.centercolumn}>
            <img src="titlegif.gif" alt="titlegif" className={styles.titlegif}/>
            <div className={styles.aboutbox}>
                <div className={styles.abouttext}>
                            shes a blog :D
                </div>
            </div> 
            <div className={styles.hamsterrow}>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="hamster-dance.gif" alt="myhamsters" />

            </div>  
        </div>
            <div className={styles.catcolumnleft}>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
            </div>
            <div className={styles.catcolumnright}>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
                <img src="catdance.gif" alt="catdance" className={styles.catdance}/>
            </div>
            <div className={styles.cloud1}>
                <img src="cloud1.gif" alt="cloud1" className={styles.cloud1properties}/>
            </div>
            <div className={styles.cloud2}>
                <a href="/blog" title='this will take you to page two'>
                    <img src="cloud2.gif" alt="cloud2" className={styles.cloud2properties} />
                </a>
            </div>
    </div>
  )
}
