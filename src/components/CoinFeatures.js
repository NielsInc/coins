import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Flag from "react-flagkit";
import {Divider} from "antd";
import {getCountryCode} from "../util/countryUtil";


class CoinFeatures extends React.Component {
    render() {
        const {country, year} = this.props;
        let countryCode = "US";
        const cc = getCountryCode(country);

        if(!!cc){
            countryCode = cc;
        }

        return (
            <div className="coin-features">
                <Link to={`/search?country=${country}`} className="coin-features__country">
                    <Flag country={countryCode}/>
                    {country}
                </Link>
                <Divider type="vertical"/>
                <Link to={`/search?year=${year}`} className="coin-features__year">
                    {year}
                </Link>
            </div>
        );
    }
}

CoinFeatures.propTypes = {
    country: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default CoinFeatures;
