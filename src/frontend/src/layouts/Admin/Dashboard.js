import React from "react";
import {Formik,Form,useFormik} from "formik";
import ProductPostService from "../../services/Admin/productPostService";
import { Button } from "semantic-ui-react";
import TextInput from "../../utilities/TextInput";
import Navi from "../../services/Admin/Navi";
export default function Dashboard({...props}) {
    let productPostService=new ProductPostService();
    const onSubmit=(values)=>{
        alert(JSON.stringify(values));
        productPostService.add(values).then(function (response){
            console.log(response);
        })
            .catch(function (error){
                console.log(error);
            });
    };
    const formik=useFormik({
        initialValues:{
            name:"",
            shortInfo:"",
            price:"",
            order:"",
            category:{
                name:""
            },
            type:{
                name:""
            }
        },validateOnBlur:true,onSubmit,
    });
    return (

        <Formik initialValues={formik.initialValues}>
            <Form className="ui form" onSubmit={formik.handleSubmit}>
                <h2>Add Product</h2>
                <TextInput
                    name="name"
                    placeholder="Product Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <TextInput
                    name="shortInfo"
                    placeholder="Product Short Info"
                    value={formik.values.shortInfo}
                    onChange={formik.handleChange}
                />
                <TextInput
                    name="price"
                    placeholder="Price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                />
                <TextInput
                    name="order"
                    placeholder="Product Order"
                    value={formik.values.order}
                    onChange={formik.handleChange}
                />
                <TextInput
                    name="category.name"
                    placeholder="Category name"
                    value={formik.values.category.name}
                    onChange={formik.handleChange}
                />
                <TextInput
                    name="type.name"
                    placeholder="Type Name"
                    value={formik.values.type.name}
                    onChange={formik.handleChange}
                />
                <Button color="green" type="submit">
                    Add
                </Button>
            </Form>
        </Formik>
    );
}