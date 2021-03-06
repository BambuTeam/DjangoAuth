import React from "react";






function Step4 (props) {
        
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