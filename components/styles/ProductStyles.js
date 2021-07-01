import styled from "styled-components";

const ProductStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 50%;
    height: 200px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
  .price {
    background: var(--red);
    transform: rotate(3deg);
    color: white;
    font-weight: 600;
    padding: 5px;
    line-height: 1;
    font-size: 3rem;
    display: inline-block;
    position: absolute;
    top: -3px;
    right: -3px;
  }
`;

export default ProductStyles;
