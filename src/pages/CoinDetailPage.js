import React from 'react';
//import * as coin from "../data/coin"
import CoinDetail from "../components/CoinDetail";
import {getCoin} from "../api/numismatics.api";
import * as convert from "xml-js";
import {Skeleton} from "antd";
import {getObverseImageUrl, getReverseImageUrl} from "../util/metsUtil";

class CoinDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coinDetail: undefined};
    }

    componentDidMount() {
        const {id, prettyUrl} = this.props.match.params;
        const apiCoin = getCoin(id)
            .then((response) => {
                const jsonResponse = convert.xml2json(response.data, {compact: true, spaces: 4});
                if (!!jsonResponse) {
                    const jsonObject = JSON.parse(jsonResponse);
                    if (!!jsonObject) {
                        let geogname =  jsonObject.nuds?.descMeta?.typeDesc?.geographic?.geogname;
                        if(Array.isArray(geogname)){
                            geogname = geogname.find(g => g._attributes["xlink:role"] === 'region');
                        }
                        const formattedCoin = {
                            id: jsonObject.nuds?.descMeta?.adminDesc?.identifier?._text,
                            title: jsonObject.nuds?.descMeta?.title?._text,
                            country: geogname?._text,
                            year: jsonObject.nuds?.descMeta?.physDesc?.dateOnObject?.date?._text,
                            dateRange: {
                                from: jsonObject.nuds?.descMeta?.typeDesc?.dateRange?.fromDate?._text,
                                to: jsonObject.nuds?.descMeta?.typeDesc?.dateRange?.toDate?._text,
                            },
                            ruler: jsonObject.nuds?.descMeta?.typeDesc?.authority?.persname?._text,
                            material: jsonObject.nuds?.descMeta?.typeDesc?.material?._text,
                            value: jsonObject.nuds?.descMeta?.typeDesc?.denomination?._text,
                            weight: jsonObject.nuds?.descMeta?.physDesc?.measurementsSet?.weight?._text,
                            diameter: jsonObject.nuds?.descMeta?.physDesc?.measurementsSet?.diameter?._text,
                            obverseImage: {
                                thumbnail: getObverseImageUrl(jsonObject, 'thumbnail'),
                                reference: getObverseImageUrl(jsonObject, 'reference'),
                                archive: getObverseImageUrl(jsonObject, 'archive'),
                            },
                            reverseImage: {
                                thumbnail: getReverseImageUrl(jsonObject, 'thumbnail'),
                                reference: getReverseImageUrl(jsonObject, 'reference'),
                                archive: getReverseImageUrl(jsonObject, 'archive'),
                            },
                            history: [],
                            raw: jsonObject
                        };
                        this.setState((state) => ({coinDetail: formattedCoin}));
                    }
                }
            });

    }

    render() {
        //const {value, ruler, currency, country, countryCode, year, imageObverse, imageReverse, history} = coin;
        const {coinDetail} = this.state;
        if (coinDetail) {
            const {title, value, ruler, country, year, history, obverseImage, reverseImage, ...details} = coinDetail;
            return <CoinDetail
                title={title}
                country={country}
                value={value}
                details={details}
                ruler={ruler}
                year={year}
                history={history}
                imageObverse={obverseImage}
                imageReverse={reverseImage}/>
        } else {
            return <Skeleton active={true} loading={true}/>
        }
    }
}

CoinDetailPage.propTypes = {};

export default CoinDetailPage
