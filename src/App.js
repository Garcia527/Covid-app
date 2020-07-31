import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './app.module.css';

class App extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <Cards />
                <h1> hiWWWWW</h1>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;