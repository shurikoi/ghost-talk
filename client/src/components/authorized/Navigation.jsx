import styles from "./Navigation.module.css"

export default function Navigation({ setNavigationItem }) {
  const items = ["CREATE SET"]
  const setOfItems = {
    "CREATE SET": {
      path: "create-set"
    }
  }

  const handleOptionClick = (item) => {
    const path = setOfItems[item].path
    setNavigationItem(path)
  }
  
  return (
    <div className={styles.main}>
      <div className={styles.options}>
        {items.map((item) => {
          return (
            <div className={styles.option} key={items.indexOf(item)} onClick={() => handleOptionClick(item)}>
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
