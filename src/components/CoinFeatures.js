import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Flag from "react-flagkit";
import {Divider} from "antd";


class CoinFeatures extends React.Component {
    render() {
        const {country, countryCode, year} = this.props;
        return (
            <div className="coin-features">
                <Link to={`/search?country=${country}`}  className="coin-features__country">
                    <Flag country={countryCode}/>
                    {country}
                </Link>
                <Divider type="vertical"/>
                <Link to={`/search?year=${year}`}  className="coin-features__year">
                    {year}
                </Link>
            </div>
        );
    }
}

CoinFeatures.propTypes = {
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default CoinFeatures;
