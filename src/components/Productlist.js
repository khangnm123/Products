import React, { useState } from "react";
import dataProduct from "../Data/dataProduct";
import './Product.css'
function Productlist () {
    const [visible , setVisible ] = useState(8);
    const [api , setApi] = useState([] , 3);
    const ShowMoreItem = () =>{
        setVisible((preValue) => preValue + visible) 
    }
    return(
        <>
        <div className="big__container">
                      {dataProduct.slice(0 , visible).map((item , index) =>{     
                return(
                        <div className="content__product">
                            <div className={item.sale === 0 ? "sale__off" :"sale__on sale__content"}> 
                                <div className={item.sale === 0 ? "sale__off" :"sale__on"}>
                                        <p>{item.sale}</p>
                                </div>
                           
                                </div>
                            <div className="content-container">
                                    <div className="bg__img">
                                        <img src={item.image} alt="Hello"/>
                                 </div>
                                    
                                   
                            </div>
                            <div className="big__context">
                                 <div className="content-text">
                                    <p>{item.title}</p>
                                </div>
                                <div className="sale__list">
                                    <div className="big__contextt">
                                    <p className={item.id === 0 ? "color__bg" : " color_none"}>
                                        {item.color}
                                    </p>
                                    <p className={item.id === 1 ? "color__blue" : " color_none"}>
                                        {item.color}
                                    </p>
                                    <p className={item.id === 2 ? "color__green" : " color_none"}>
                                        {item.color}
                                    </p>
                                    <p className={item.id === 3 ? "color__pink" : " color_none"}>
                                        {item.color}
                                    </p>
                               </div>
                               <div className="total__sale">
                                    <p className={item.saleMoney === 0 ? "color__none" : "text__contist"}>{item.saleMoney}</p>
                                    <p id="one">{item.moeny}</p>
                                    
                               </div>
                                </div>
                               
                             </div>
                           
                        </div>
                )
            })}
                <div className="btn__content">
                    <button onClick={ShowMoreItem}><p>View All</p></button>
                </div>
             
        </div>
        </>
    )
}
export default Productlist;