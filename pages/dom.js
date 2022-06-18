import styles from '../styles/Dom.module.css';

const DOM = ({ developer }) => {

    return (
        <div className={styles.main}>
            <h1>Developer of the month</h1>
            <div className={styles.developerOfTheMonth}>
                <h3>{developer.name}</h3>
                <h6>{developer.position}</h6>
                <img src={developer.image} alt="developer" />
                <p>{developer.description}</p>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    
    const developer = {
        "name": "Ali Fertah",
        "position": "Software engineer",
        "image": "https://cdn.intra.42.fr/users/alfertah.jpg",
        "description": "Web developer, Author, Tech Blogger",
    };

    return {
        props: {
            developer,
        },
    };
};

export default DOM
