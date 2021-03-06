import React, { Component } from 'react';
import { Chips } from '../../components/lib/chips/Chips';
import { ChipsDoc } from '../../components/doc/chips';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class ChipsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values1: [],
            values2: [],
            values3: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Chips Component</title>
                    <meta name="description" content="Chips is used to enter multiple values on an input field." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>
                    </div>
                    <DocActions github="chips/index.js" />
                </div>

                <div className="content-section implementation p-fluid">
                    <div className="card">
                        <h5>Basic</h5>
                        <Chips value={this.state.values1} onChange={(e) => this.setState({ values1: e.value })} />

                        <h5>Comma Separator</h5>
                        <Chips value={this.state.values2} onChange={(e) => this.setState({ values2: e.value })} separator="," />

                        <h5>Template</h5>
                        <Chips value={this.state.values3} onChange={(e) => this.setState({ values3: e.value })} max={5} itemTemplate={this.customChip}></Chips>
                    </div>
                </div>

                <ChipsDoc />
            </div>
        )
    }
}
