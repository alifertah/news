import styles from '../styles/home.module.css'
import { Toolbar } from '../components/toolbar';
import { Footer } from '../components/footer';

export const Feed = () =>{
    return(
        <div>
            <Toolbar />
            <div className={styles.main}>
            <h1>hello world</h1>
            </div>
            <Footer />
        </div>
    )
};

export default Feed;