import React from "react";
import Container from "../components/Container/index";
import SearchForm from "../components/SearchInput/searchInput";
import Table from "../components/Table/table"
import Row from "../components/Row/index";
import Col from "../components/Col";


export default function Main() {
    return(
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                        <SearchForm />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Table />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}