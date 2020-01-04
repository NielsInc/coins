import React from 'react';
import CoinFeatures from "./CoinFeatures";
import {Breadcrumb, Icon, Table} from 'antd';
import * as coinHistory from "../data/historyColumns"
import ReactImageMagnify from "react-image-magnify";
import {Link} from "react-router-dom";

class CoinDetail extends React.Component {

    render() {
        const {title, country, ruler, details, year, imageObverse, imageReverse, history, value} = this.props;
        return (
            <div className="coin">
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item>
                        <Link to="/">
                            <Icon type="home"/>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/collection">
                            <Icon type="database"/>
                            <span>&nbsp;Collection</span>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{title}</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="coin__title">{title}</h1>
                <CoinFeatures country={country} year={year}/>
                <div className="coin__wrapper">
                    <div className="coin-visuals">
                        <ReactImageMagnify className="coin__image coin__image-reverse"
                                           isFluidWidth={true}
                                           enlargedImageContainerClassName="coin__image--enlarged"
                                           enlargedImageContainerDimensions={{
                                               width: '100%',
                                               height: '100%'
                                           }}
                                           smallImage={{
                                               src: process.env.PUBLIC_URL + imageObverse.reference, isFluidWidth: true,
                                           }}
                                           largeImage={
                                               {
                                                   src: process.env.PUBLIC_URL + imageObverse.archive,
                                                   width: 1000,
                                                   height: 1000
                                               }
                                           }/>
                        <ReactImageMagnify className="coin__image coin__image-obverse"
                                           isFluidWidth={true}
                                           enlargedImageContainerClassName="coin__image--enlarged"
                                           enlargedImageContainerDimensions={{
                                               width: '100%',
                                               height: '100%'
                                           }}
                                           smallImage={{
                                               src: process.env.PUBLIC_URL + imageReverse.reference, isFluidWidth: true,
                                           }}
                                           largeImage={
                                               {
                                                   src: process.env.PUBLIC_URL + imageReverse.archive,
                                                   width: 1000,
                                                   height: 1000
                                               }
                                           }/>
                    </div>
                    <div className="coin-details">
                        <h3>Details</h3>
                        <dl className="coin-specs">
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Country</dt>
                                <dd className="coin-specs__item-value">{country}</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Year</dt>
                                <dd className="coin-specs__item-value">{year}</dd>
                            </div>
                            {!!ruler ?
                                <div className="coin-specs__item">
                                    <dt className="coin-specs__item-title">King</dt>
                                    <dd className="coin-specs__item-value">{ruler}</dd>
                                </div> : null
                            }
                            {!!details?.dateRange?.from && !!details?.dateRange?.to ?
                                <div className="coin-specs__item">
                                    <dt className="coin-specs__item-title">Years</dt>
                                    <dd className="coin-specs__item-value">{`${details?.dateRange?.from}-${details?.dateRange?.to}`}</dd>
                                </div> : null
                            }
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Value</dt>
                                <dd className="coin-specs__item-value">{value}</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Composition</dt>
                                <dd className="coin-specs__item-value">{details.material}</dd>
                            </div>
                            {!!details?.weight ?
                                <div className="coin-specs__item">
                                    <dt className="coin-specs__item-title">Weight</dt>
                                    <dd className="coin-specs__item-value">{details.weight}</dd>
                                </div> : null
                            }


                        </dl>
                    </div>
                </div>
                <div className="coin__wrapper">
                    <Table columns={coinHistory.columns} dataSource={history} pagination={false}/>
                </div>
            </div>
        );
    }
}

CoinDetail.propTypes = {};

export default CoinDetail
