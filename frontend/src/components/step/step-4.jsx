import React from "react";

function Step4 (props) {
    
        return (
            <div id="invoiceholder">
                <div id="headerimage2" />
                <div id="invoice" className="effect2">
                    <div id="invoice-toptitle">
                        <h1 class="shape_order"></h1>
                        <h1>Regular/Custom</h1>
                        <div>
                            <img src="http://crossmediaplus.com/s3/logo-goyah.svg" alt="Goya Baskets" />
                            <div className="rushico" />
                        </div>
                    </div>
                    <div id="invoice-top">
                        <div className="supervisor" />
                        <div className="info">
                            <h2 style={{textTransform: 'uppercase'}}>Isabel Comp</h2>
                            <h6 style={{textDecoration: 'underline'}}> Authorized By </h6>
                            <p />
                        </div>
                        {/*End Info*/}
                        <div className="title">
                            <h1 style={{fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline'}}>
                                Order No. <span className="ordernumber">#1069</span></h1>
                            <p>Issued: May 27, 2015<br />
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
                            <h style={{textDecoration: 'underline', fontWeight: 900, color: '#1D285A'}}>Sheila Diaz
                            </h>
                        </div>
                        <div id="project">
                            <h2>Description</h2>
                            <p>Proin cursus, dui non tincidunt elementum, tortor ex feugiat enim, at elementum enim quam
                                vel purus.
                                Curabitur semper malesuada urna ut suscipit.</p>
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
                                            <p className="itemtext">10</p>
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
                                            <p className="itemtext">10</p>
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
                                            <p className="itemtext">10</p>
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
                                            <h1 style={{justifyContent: 'left', textAlign: 'left'}}> 30 </h1>
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
                                <p>Proin cursus, dui non tincidunt elementum, tortor ex feugiat enim, at elementum enim
                                    quam vel purus.
                                    Curabitur semper malesuada urna ut suscipit.</p>
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
                {/*End Invoice*/}
            </div>

        );
    
}

export default Step4;