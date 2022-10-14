import React,{useState,useEffect}from "react";
import ProductService from "../services/productService";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

export default function Drink(){
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        let productService=new ProductService();
        productService.getProducts()
            .then((result)=>setProducts(result.data))
            .catch(function (error){
                console.log(error)
            })
    });
    return(
        <div>
            <h2>Sıcak</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.shortInfo}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}