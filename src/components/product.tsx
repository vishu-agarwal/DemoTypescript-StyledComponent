import React from 'react';
import { Button, Title } from './CutsomStyledComponets';

interface proList {
  pro: { id: String; name: String; image: File }[];
  delProduct: (pid: String) => void;
  updtPro: (pid: String) => void;
}

// beacause of props give generic type to knw prop type and use interface for type
const Product: React.FC<proList> = (props) => {
  return (
    <div>
      <h1>Products List</h1>
      {props.pro.map((item, index) => (
        <div key={index}>
          <br />
          <img
            style={{ height: 100, width: 100 }}
            src={
              typeof item.image !== 'string'
                ? URL.createObjectURL(item.image)
                : item.image
            }
            alt="Product Image"
          />
          <br />
          <Title color="green">{item.name}</Title>
          <br />
          <Button
            onClick={() => {
              props.delProduct(item.id);
            }}
          >
            Delete
          </Button>
          <Button onClick={props.updtPro.bind(null, item.id)}>Update</Button>
        </div>
      ))}
    </div>
  );
};

export default Product;
