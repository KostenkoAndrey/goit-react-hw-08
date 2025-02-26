import s from "./HomePage.module.css"


const HomePage = () => {
  return (
    <div className={s.homeContainer}>
     <h2 className={s.homeTitle}>Welcome to PhoneBook</h2>
     <p className={s.text}>Keep your contacts organized and accessible anytime, anywhere.</p>
    </div>
  )
}

export default HomePage;
