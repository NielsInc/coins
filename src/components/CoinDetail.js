import React from 'react';
import CoinFeatures from "./CoinFeatures";
import {Breadcrumb, Icon, PageHeader, Table} from 'antd';
import * as coinHistory from "../data/historyColumns"
import ReactImageMagnify from "react-image-magnify";
import {Link} from "react-router-dom";

class CoinDetail extends React.Component {

    render() {
        const {title, country, countryCode, year, imageObverse, imageReverse, history} = this.props;
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
                <CoinFeatures country={country} countryCode={countryCode} year={year}/>
                <div className="coin__wrapper">
                    <div className="coin-visuals">
                        <ReactImageMagnify className="coin__image coin__image-reverse"
                                           isFluidWidth={true}
                                           enlargedImageContainerClassName="coin__image--enlarged"
                                           smallImage={{src: process.env.PUBLIC_URL + imageObverse.small,}}
                                           largeImage={
                                               {
                                                   src: process.env.PUBLIC_URL + imageObverse.original,
                                                   width: imageObverse.originalWidth,
                                                   height: imageObverse.originalHeight
                                               }
                                           }/>
                        <ReactImageMagnify className="coin__image coin__image-obverse"
                                           isFluidWidth={true}
                                           enlargedImageContainerClassName="coin__image--enlarged"
                                           smallImage={{src: process.env.PUBLIC_URL + imageReverse.small}}
                                           largeImage={
                                               {
                                                   src: process.env.PUBLIC_URL + imageReverse.original,
                                                   width: imageReverse.originalWidth,
                                                   height: imageReverse.originalHeight
                                               }
                                           }/>
                    </div>
                    <div className="coin-details">
                        <h3>Details</h3>
                        <dl className="coin-specs">
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Country</dt>
                                <dd className="coin-specs__item-value">Belgium</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">King</dt>
                                <dd className="coin-specs__item-value">Leopold II</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Type</dt>
                                <dd className="coin-specs__item-value">Standard circulation coin</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Years</dt>
                                <dd className="coin-specs__item-value">1865-1868</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Value</dt>
                                <dd className="coin-specs__item-value">5 Frank (5 BEF)</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Composition</dt>
                                <dd className="coin-specs__item-value">Silver (.900)</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Weight</dt>
                                <dd className="coin-specs__item-value">25 g</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Diameter</dt>
                                <dd className="coin-specs__item-value">37 mm</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Thickness</dt>
                                <dd className="coin-specs__item-value">3 g</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Shape</dt>
                                <dd className="coin-specs__item-value">Round</dd>
                            </div>
                            <div className="coin-specs__item">
                                <dt className="coin-specs__item-title">Demonetized</dt>
                                <dd className="coin-specs__item-value">1932</dd>
                            </div>
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
