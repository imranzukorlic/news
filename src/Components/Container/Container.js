import React from "react";
import { Card, Col, Text } from "@nextui-org/react";

const Card5 = ({ author, title, urlToImage }) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {author}
        </Text>
        <Text h3 color="white">
          {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={urlToImage}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
  </Card>
);

export default Card5;
