import React from 'react'
import CardContainer from './CardContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardList({ dataList }) {
  return (
    <>
      <Container>
        <Row>
          {
            dataList.map((data, index) => {
              return <Col md="4">{<CardContainer key={index} data={data} />}</Col>
            })
          }
        </Row>
      </Container>
    </>
  )
}
