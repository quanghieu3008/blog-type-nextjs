import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class ShowComment extends Component {

    render() {
        const { test } = this.props;
        return (
            <div>
                <FacebookProvider appId="437273164213634">
                    <Comments href={`http://localhost:3000/detailBlogs/${test}`} />
                </FacebookProvider>
            </div>
        );
    }
}