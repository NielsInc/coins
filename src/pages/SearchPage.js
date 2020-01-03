import React from 'react';
import {Button, Form, Input, InputNumber, Layout, Select} from 'antd';

const {Search} = Input;
const {Option} = Select;

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {advancedSearchShown: false};
    }

    handleAdvancedClick = (e) => {
        e.preventDefault();
        this.setState(state => ({
            advancedSearchShown: !state.advancedSearchShown
        }))
    };

    render() {
        return (
            <div className="search">
                <Search placeholder="Search coins" onSearch={value => console.log(value)} enterButton/>
                <div className="search__options">
                    <Button onClick={this.handleAdvancedClick} type={this.state.advancedSearchShown ? "" : "link"}>Advanced
                        search</Button>
                    {this.state.advancedSearchShown && (
                        <div className="search__advanced">
                            <Form layout="inline" onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
                                        placeholder="Country"
                                        optionFilterProp="children"
                                        //onChange={onChange}
                                        //onFocus={onFocus}
                                        //onBlur={onBlur}
                                        //onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Belgium">Belgium</Option>
                                        <Option value="France">France</Option>
                                        <Option value="USA">United States of America</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <InputNumber min={0} max={new Date().getFullYear()} placeholder="Year"/>
                                </Form.Item>
                            </Form>
                        </div>)}

                </div>
            </div>
        );
    }
}

SearchPage.propTypes = {};

export default SearchPage
