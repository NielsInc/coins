import React from 'react';
import * as coin from "../data/coin"
import CoinDetail from "../components/CoinDetail";

class CoinDetailPage extends React.Component {
    render() {
        const {value, ruler, currency, country, countryCode, year, imageObverse, imageReverse, history} = coin;
        const {id, prettyUrl} = this.props.match.params;
        const title = `${value} ${currency} - ${ruler}`;

        return (
            <CoinDetail
                title={title}
                country={country}
                countryCode={countryCode}
                year={year}
                history={history}
                imageObverse={imageObverse}
                imageReverse={imageReverse}/>
        );
    }
}

CoinDetailPage.propTypes = {};

export default CoinDetailPage
