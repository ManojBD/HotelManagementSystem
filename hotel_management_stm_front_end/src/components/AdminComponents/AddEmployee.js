import React, { useState, useEffect } from 'react'
//import validateInfo from '../../../validateInfo'
import "./addEmployee.css"
import axios from "axios";
import EmployeesData from './EmployeesData';
//import AdminNavbar from '../../AdminNavbar';
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const defaultImage = 'https:/icon-library.com/images/no-image-icon/no-image-icon-0.jpg'

const initialFieldValues = {
    employeeID:0,
    employeeNumber:'',
    firstName:'',
    lastName:'',
    // phoneNumber:'',
    imageName:'',
    imageSrc: defaultImage ,
    imageFile:null
}
//abc

export default function AddEmployee(props) {
    
  const { addOrEdit, recordForEdit} = props

  const [values, setValues] = useState(initialFieldValues)
  const [errors, setErrors] = useState({})

  useEffect(()=>{
        if(recordForEdit != null)
            setValues(recordForEdit);
  }, [recordForEdit])

  const handleInputChange = e =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]:value
        })
  }

  const showPreview = e =>{
    if (e.target.files && e.target.files[0]){
        let imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = x => {
        
            setValues({
                ...values,
                imageFile,
                imageSrc: x.target.result
            })
        }
        reader.readAsDataURL(imageFile)
        console.log(values);
    }
    else{
        setValues({
            ...values,
            imageFile:null,
            imageSrc: defaultImage
        })
    }
  }

  const validate =()=>{
    let temp={}
    temp.employeeNumber = values.employeeNumber==""?false:true;
    temp.firstName = values.firstName==""?false:true;
    temp.lastName = values.lastName==""?false:true;
    // temp.phoneNumber = values.phoneNumber==""?false:true;
    temp.imageSrc = values.imageSrc==defaultImage?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x==true)

  }

  const resetForm = () =>{
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    if(validate()){
        const formData = new FormData()
        formData.append('employeeID', values.employeeID)
        formData.append('employeeNumber', values.employeeNumber)
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        // formData.append('phoneNumber', values.phoneNumber)
        formData.append('imageFile', values.imageFile)
        addOrEdit(formData, resetForm)
    }
  }

  const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

  return (
    <>
        <div className="addEmployee">
            <div className="newContainer">
            <div className="top" >
                    <h1 style={{ color:'gray', fontSize:"20px" }}>Add New Employee</h1>
            </div>
                <form  autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                    <div className="bottom">
                        <div className="left">
                            <img 
                                className='image' 
                                src={values.imageSrc}
                            />
                        </div>
                        <div className="right">
                            <div className='container1'>
                                <div className="formInput">
                                    <input 
                                        accept='image/*' 
                                        type="file" 
                                        className={"form-control-file"+ applyErrorClass('imageSrc')}
                                        onChange={showPreview} 
                                        id="image-uploader"
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Employee Number</label>
                                    <input 
                                        className={"form-control"+ applyErrorClass('employeeNumber')}
                                        type="number" 
                                        name='employeeNumber' 
                                        value={values.employeeNumber}
                                        onChange={handleInputChange}   
                                    />
                                </div> 
                                <div className="formInput">
                                    <label>First Name</label>
                                    <input 
                                        className={"form-control"+ applyErrorClass('firstName')}
                                        //type="number" 
                                        name='firstName' 
                                        value={values.firstName}
                                        onChange={handleInputChange}   
                                    />
                                </div> 
                                <div className="formInput">
                                    <label>Last Name</label>
                                    <input 
                                        className={"form-control"+ applyErrorClass('lastName')}
                                        //type="number" 
                                        name='lastName' 
                                        value={values.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <div className="formInput">
                                     <label>Category</label>
                                     <select
                                        className={"form-control"+ applyErrorClass('category')}
                                        name='category' 
                                        value={values.category}
                                        onChange={handleInputChange}
                                        
                                    > 
                                        <option hidden >-Select-</option>
                                        <option>Standered Suit</option>
                                        <option>Luxury Suit</option>
                                        <option>Honeymoon Suit</option>
                                        <option>Presidential Suit</option>
                                    </select>
                                    
                                </div> */}

                                {/* <div className="formInput">
                                    <label>Phone Number</label>
                                    <input 
                                        className={"form-control"+ applyErrorClass('phoneNumber')}
                                        type="number" 
                                        name='phoneNumber' 
                                        value={values.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div> */}

                                <div className='col-md-12'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    </>

    )
}