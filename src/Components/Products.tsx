
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItems from "./ProductItems";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
