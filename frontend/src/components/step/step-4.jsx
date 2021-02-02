import React from "react";
import axios from 'axios';


    const handleFormSubmit = (event, requestType) => {
        //event.preventDefault; 

        const is_rush = event.target.elements.is_rush.value;
        const order_type = event.target.elements.order_type.value;
        const order_date = event.target.elements.order_date.value;
        const custom_order = event.target.elements.custom_order.value;
        const give_away = event.target.elements.give_away.vale;
        const vip = event.target.elements.vip.value;
        const show_baskets = event.target.elements.show_baskets.value;


        console.log(is_rush, order_type, order_date, custom_order, give_away, vip, show_baskets);


        /* switch(requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    {
                        is_rush:props.status.is_rush,
                        is_custom :props.status.is_custom,
                        custom_order_text : props.status.custom_order_text,
                        order_date : props.status.order_date,
                        order_hour : props.status.order_hour,
                        give_aways : "10",
                        vip : "12",
                        show_baskets : "23",
                        comments : "loremp ipsum algo ",
                        delibery_type : "seee te cosa",
                        pick_up_message : "mensajito para test",
                        pick_up_company : "batres",
                        pick_up_date : "2020-01-01",
                        pick_up_hout : "20:30",
                        delivery_fname : "fname",
                        delibery_lname :"this is the name",
                        drop_off_fname : "lastname",
                        drop_off_lname : "otername",
                        drop_off_address : "hghgkjh,
                        drop_off_city : "models.CharField(max_length:100),
                        drop_off_state : "models.CharField(max_length:100),
                        drop_off_phone : "models.CharField(max_length:100),
                        fedex_off_fname : "models.CharField(max_length:100),
                        fedex_off_lname : "models.CharField(max_length:100),
                        fedex_off_address : "models.CharField(max_length:100),
                        fedex_off_city : "models.CharField(max_length:100),
                        fedex_off_state : "models.CharField(max_length:100),
                        fedex_off_phone : "models.CharField(max_length:100)
                    }
                
                })
                .then(res => console.log(res))
                .catch(error=>console.log(error));

            break; */
           
    }

     



function Step4 (props) {


    const handleFormSubmit = (event, requestType) => {
        //event.preventDefault; 

        const is_rush = props.state.is_rush;
        const order_type = props.state.is_custom;
        const custom_order_text = props.state.custom_order_text;
        const order_date = props.state.order_date;
        const hour = props.state.hour;
        const give_away = props.state.give_away;
        const vip = props.state.vip;
        const show_baskets = props.state.show_baskets;
        const full_comments = props.state.full_comments;
        const delibery_type = props.state.deliberyType;
        const pickup_message = props.state.pickup_message;
        const pickup_company = props.state.pickup_company;
        const pickup_order_date = props.state.pickup_order_date;
        const pickup_hour = props.state.pickup_hour;
        const delivery_first_name = props.state.delivery_first_name;
        const delivery_last_name = props.state.delivery_last_name;
        const dropof_first_name = props.state.dropof_first_name;
        const dropof_last_name = props.state.dropof_last_name;
        const dropof_address = props.state.dropof_address;
        const dropof_city = props.state.dropof_city;
        const dropof_state = props.state.dropof_state;
        const dropof_zip = props.state.dropof_zip;
        const dropof_phone = props.state.dropof_phone;
        const fedex_first_name = props.state.fedex_first_name;
        const fedex_last_name = props.state.fedex_last_name;
        const fedex_address = props.state.fedex_address;
        const fedex_city = props.state.fedex_city;
        const fedex_state = props.state.fedex_state;
        const fedex_zip = props.state.fedex_zip;
        const fedex_phone = props.state.fedex_phone;






        console.log(is_rush,
            order_type,
            custom_order_text,
            order_date,
            hour,
            give_away,
            vip,
            show_baskets,
            full_comments,
            delibery_type,
            pickup_message,
            pickup_company,
            pickup_order_date,
            pickup_hour,
            delivery_first_name,
            delivery_last_name,
            dropof_first_name,
            dropof_last_name,
            dropof_address,
            dropof_city,
            dropof_state,
            dropof_zip,
            dropof_phone,
            fedex_first_name,
            fedex_last_name,
            fedex_address,
            fedex_city,
            fedex_state,
            fedex_zip,
            fedex_phone);


        /* switch(requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    {
                        is_rush:props.status.is_rush,
                        is_custom :props.status.is_custom,
                        custom_order_text : props.status.custom_order_text,
                        order_date : props.status.order_date,
                        order_hour : props.status.order_hour,
                        give_aways : "10",
                        vip : "12",
                        show_baskets : "23",
                        comments : "loremp ipsum algo ",
                        delibery_type : "seee te cosa",
                        pick_up_message : "mensajito para test",
                        pick_up_company : "batres",
                        pick_up_date : "2020-01-01",
                        pick_up_hout : "20:30",
                        delivery_fname : "fname",
                        delibery_lname :"this is the name",
                        drop_off_fname : "lastname",
                        drop_off_lname : "otername",
                        drop_off_address : "hghgkjh,
                        drop_off_city : "models.CharField(max_length:100),
                        drop_off_state : "models.CharField(max_length:100),
                        drop_off_phone : "models.CharField(max_length:100),
                        fedex_off_fname : "models.CharField(max_length:100),
                        fedex_off_lname : "models.CharField(max_length:100),
                        fedex_off_address : "models.CharField(max_length:100),
                        fedex_off_city : "models.CharField(max_length:100),
                        fedex_off_state : "models.CharField(max_length:100),
                        fedex_off_phone : "models.CharField(max_length:100)
                    }
                
                })
                .then(res => console.log(res))
                .catch(error=>console.log(error));

            break; */
           
    }




        
        var typeD = props.state.deliberyType;

        switch(typeD){
            case 'pickup': 
                var nombre = props.state.pickup_company;
                break;
            
            case 'delibery':
                var nombre = props.state.delivery_first_name;
                break;

            case 'dropof':
                var nombre = props.state.dropof_first_name;
                break;

            case 'fedex':
                var nombre = props.state.fedex_first_name;
                break;
            default:
                var nombre = 'nose como es'
                break;
        }
        

    
        return (
            <div id="invoiceholder">
                <div id="headerimage2" />
                <div id="invoice" className="effect2">
                    <div id="invoice-toptitle">
                        <h1 class="shape_order"></h1>
                        <h1>Regular/Custom</h1>
                        <div>
                            <img src="http://crossmediaplus.com/s3/logo-goyah.svg" alt="Goya Baskets" />
                            { props.state.is_rush == 'true' ? <div className="rushico" />: '' }
                        </div>
                    </div>
                    <div id="invoice-top">
                        <div className="supervisor" />
                        <div className="info">
                            <h2 style={{textTransform: 'uppercase'}}>Autorized by</h2>
                            <h6 style={{textDecoration: 'underline'}}> Goya </h6>
                            <p />
                        </div>
                        {/*End Info*/}
                        <div className="title">
                            <h1 style={{fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline'}}>
                                Order No. <span className="ordernumber">#1069</span></h1>
                            <p>Issued: {props.state.order_date}<br />
                                {/* Payment Due: June 27, 2015 */}
                            </p>
                        </div>
                        {/*End Title*/}
                    </div>
                    {/*End InvoiceTop*/}
                    <div id="invoice-mid">
                        <div className="clientlogo" />
                        <div className="info">
                            <h2 style={{textTransform: 'uppercase'}}>Client Name</h2>
                            <h2 style={{textDecoration: 'underline', fontWeight: 900, color: '#1D285A'}}>{nombre}
                            </h2>
                        </div>
                        <div id="project">
                            <h2>Description</h2>
                            <p>{props.state.fedes_comments}</p>
                            
                        </div>
                    </div>
                    {/*End Invoice Mid*/}
                    <div id="invoice-bot">
                        <div id="table">
                            <table>
                                <tbody>
                                    <tr className="tabletitle">
                                        <td className="item">
                                            <h2>Description</h2>
                                        </td>
                                        <td className="Hours">
                                            <h2 />
                                        </td>
                                        <td className="Rate">
                                            <h2 />
                                        </td>
                                        <td className="subtotal">
                                            <h2>QTY</h2>
                                        </td>
                                    </tr>
                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext">Give Away (S)</p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext">{props.state.give_away}</p>
                                        </td>
                                    </tr>
                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext">V.I.P (M)</p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext">{props.state.vip}</p>
                                        </td>
                                    </tr>
                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext">Show Basket (L)</p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext">{props.state.show_baskets}</p>
                                        </td>
                                    </tr>
                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext" />
                                        </td>
                                    </tr>
                                    <tr className="tabletitle">
                                        <td />
                                        <td />
                                        <td className="Rate">
                                            <h2>TOTAL</h2>
                                        </td>
                                        <td className="payment">
                                            <h1 style={{justifyContent: 'left', textAlign: 'left'}}>{props.state.show_baskets + props.state.vip + props.state.give_away}</h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*End Table*/}
                        {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="QRZ7QTM9XRPJ6">
                            <input type="image" src="http://michaeltruong.ca/images/paypal.png" border="0" name="submit"
                                alt="PayPal - The safer, easier way to pay online!">
                        </form> */}
                        <div id="legalcopy">
                            <p className="legal"><strong>Thank you for your order!</strong></p>
                        </div>
                        <div id="invoice-reception">
                            <div className="reception" />
                            <div className="info">
                                <h2 style={{textTransform: 'uppercase'}}> GOYA RECEPTION</h2>
                                <h style={{fontWeight: 900, color: '#1D285A', fontSize: '20px'}}>Sheila Diaz
                                </h>
                            </div>
                            <div id="project">
                                <h2>NOTES</h2>
                                <p>{props.state.full_comments}</p>
                            </div>
                        </div>     
                    </div>
                    {/*End InvoiceBot*/}
                </div>
                <div className="actions">
                    <ul>
                        <li><button className="js-btn-prev" title="BACK" onClick={props.prev}>BACK <i
                                    className="fa fa-arrow-left"></i></button></li>
                        <li><button className="js-btn-next" title="NEXT" onClick={props.next}>SUBMIT <i
                                    className="fa fa-arrow-right"></i></button></li>
                    </ul>
                </div>


                <p>Rush: {props.state.is_rush}</p>
                <p>orter type {props.state.is_custom}</p>


                
            </div>

        );
    
}

export default Step4;