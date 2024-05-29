import { Link } from 'react-router-dom'
import styles from './StartPage.module.css'
import CreateSetBtn from '../ui/buttons/CreateSetBtn'
import AllSets from './AllSets'
import SetsSections from './SetsSections'

export default function StartPage() {
  return (
    <div className={styles.main}>
      <div className={styles.buttonsContainer}>
        <Link to="/create-set" className={`link ${styles.link}`}>
          <CreateSetBtn
            title="Create set"
            description="And fill it with your own materials"
            imageName="quill"
          />
        </Link>
        <Link to="/create-set-by-source" className={`link ${styles.link}`}>
          <CreateSetBtn
            title="Create set by source"
            description="Just by providing us text or link"
            imageName="chip"
          />
        </Link>
      </div>
      <SetsSections />
    </div>
  )
}
