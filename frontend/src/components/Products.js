import styled from "styled-components";
import Product from "./Product";
import {useState, useEffect} from "react"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({sort, filters, cat}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    
      const getProducts = async ()=>{
        try{
          const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")

          setProducts(res.data)
        }catch(err){

        }
      }
      getProducts()
  }, [cat])


  useEffect(()=>{
      cat && setFilteredProducts(
        products.filter(item=>
            Object.entries(filters).every(([key, value])=>
              item[key].includes(value)
            )
        )
      )
  }, [cat, filters, products])

  useEffect(()=>{
    if(sort === "newest"){
      filteredProducts.sort((a,b)=>{
        return a.createdAt - b.createdAt
      })
    }else if(sort === "asc"){
      filteredProducts.sort((a,b)=>{
        return a.price - b.price
      })
    } else{
      filteredProducts.sort((a,b)=>{
        return b.price - a.price
      })
    }

  }, [sort])
  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) : products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;