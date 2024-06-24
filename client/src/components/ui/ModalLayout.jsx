export default function ModalLayout({ children }) {
  //   return (
    //   <div
    //     className={`${styles.main} ${
    //       modalMenuStore.isFormActive && styles.active
    //     }`}
    //   >
  //       <div
  //         className={styles.behind}
  //         onClick={() => modalMenuStore.removeClass()}
  //       ></div>
  //       <div className={styles.form}>{children}</div>
  //     </div>
  //   )

  return (
    <div
      className="hidden h-full w-full right-0 left-0 fixed justify-center items-center">
      <div
        className={styles.behind}
        onClick={() => modalMenuStore.removeClass()}
      ></div>
      <div className={styles.form}>{children}</div>
    </div>
  )
}
