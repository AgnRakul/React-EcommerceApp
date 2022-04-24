import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import react from "react";

type StyledProps = {};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: orange;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-color: #fff7f7;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
