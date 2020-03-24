import React from "react";
import Helmet from "react-helmet";

import { Row, Col } from "reactstrap";

import Nav from "../../organisms/Nav";

import { } from "./Home.module.scss";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
            </Helmet>
            <main role="main">
                <Row>
                    <Col>
                        <Row>
                            <Col
                                xs="2"
                                sm="2"
                                md="2"
                                lg="2"
                                xl="2"
                            >
                                <Nav/>
                            </Col>
                            <Col
                                xs="10"
                                sm="10"
                                md="10"
                                lg="10"
                                xl="10"
                            >
                                hello
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </main>
        </>
    );
};