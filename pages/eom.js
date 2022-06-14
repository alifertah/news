
import styles from '../styles/EOM.module.css';
export const EOM = ({employee}) => {
return(
    <div className="page-container">
        <div className="main">
            <h1>Employee of the month</h1>
            <div className="employeeOfTheMonth">
                <h2>{employee.name}</h2>
                <h6>{employee.position}</h6>
                <img src="{employee.image}"/>
                <p>{employee.discription}</p>
            </div>
        </div>
    </div>
)
};


export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
      'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };

export default EOM;