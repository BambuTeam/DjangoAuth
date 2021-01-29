import React from "react";

function Step3(props) {
    const handleClicPickUp = ()=>{
        var button = document.querySelector('#btn_PickUp')
        var btns = document.querySelectorAll('.bg-white')
        btns.forEach((el)=>{el.classList.remove('active')});
        button.classList.add('active');
        var secction = document.querySelector('#form_pickup');
        var oters_secction = document.querySelectorAll('.sec_pickup');
        oters_secction.forEach((forms)=>{forms.style.display='none'});
        secction.style.display='block';
    }
    const handleClicDelivery = ()=>{
        var button = document.querySelector('#btn_Delivery')
        var btns = document.querySelectorAll('.bg-white')
        btns.forEach((el)=>{el.classList.remove('active')});
        button.classList.add('active');
        var secction = document.querySelector('#fomr_Delivery');
        var oters_secction = document.querySelectorAll('.sec_pickup');
        oters_secction.forEach((forms)=>{forms.style.display='none'});
        secction.style.display='block';
    }

    const handleClicDropOf = ()=>{
        var button = document.querySelector('#btn_Drop_of')
        var btns = document.querySelectorAll('.bg-white')
        btns.forEach((el)=>{el.classList.remove('active')});
        button.classList.add('active');
        var secction = document.querySelector('#form_dropof');
        var oters_secction = document.querySelectorAll('.sec_pickup');
        oters_secction.forEach((forms)=>{forms.style.display='none'});
        secction.style.display='block';
    }
    const handleClicFedex = ()=>{
        var button = document.querySelector('#btn_Fedex')
        var btns = document.querySelectorAll('.bg-white')
        btns.forEach((el)=>{el.classList.remove('active')});
        button.classList.add('active');
        var secction = document.querySelector('#form_fedex');
        var oters_secction = document.querySelectorAll('.sec_pickup');
        oters_secction.forEach((forms)=>{forms.style.display='none'});
        secction.style.display='block';
    }



    return (
        <div className="multisteps-form__panel" data-animation="slideHorz">
            <div className="wizard-forms">
                <div className="inner pb-100 clearfix">
                    <div className="form-content pera-content col-12">
                        <div className="step-inner-content">
                            <span className="step-no ">Step 3</span>
                            <hr></hr>
                            <br></br>

                            <div className="line-letter"></div>
                            <div className="step-progress float-right">
                                <span>3 of 3 completed</span>
                                <div className="step-progress-bar">
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <h2>Pick up information</h2>
                            <p>Please select the type of handle of your basket</p>
                            <div className="budget-area">
                            <p>Optimization and Accessibility</p>
                            <div className="opti-list">
                                <ul className="d-md-flex">

                                    <button className="bg-white active" id="btn_PickUp" onClick={handleClicPickUp}>PickUp</button>
                                    <button className="bg-white" id="btn_Delivery" onClick={handleClicDelivery}> Delivery to GOYA</button>
                                    <button className="bg-white" id="btn_Drop_of" onClick={handleClicDropOf}> Drop off </button>
                                    <button className="bg-white" id="btn_Fedex" onClick={handleClicFedex}> FedEx</button>
                                
                                </ul>
                            </div>
                        </div>


                            
                        <div className="form-inner-area sec_pickup" id="form_pickup">
                            <h2>Pick Up</h2>
                            
                            <input 
                            type="text" 
                            name="pickup_message" 
                            class="form-control valid" 
                            aria-invalid="false" 
                            placeholder="Messenger"
                            value = {props.getState('pickup_message', '')}
                            onChange={props.handleChange} 
                            />
                            <input 
                            type="text" 
                            name="pickup_company" 
                            class="form-control valid" 
                            aria-invalid="false" 
                            placeholder="Company"
                            value = {props.getState('pickup_company', '')}
                            onChange={props.handleChange} 
                            />
                            <input 
                            type="date"
                            name="pickup_order_date" 
                            class="form-control valid" 
                            aria-invalid="false" 
                            placeholder="Date"
                            value = {props.getState('pickup_order_date', '')}
                            onChange={props.handleChange} 
                            />
                            <input 
                            type="time" 
                            id="hour" 
                            name="pickup_hour" 
                            min="09:00" 
                            max="24:00"
                            value = {props.getState('pickup_hour', '')}
                            onChange={props.handleChange} 
                             />
                            <div className="comment-box">
                                
                                
                            </div>
                        </div>
                        <div className="form-inner-area sec_pickup" id="fomr_Delivery" style={{display:'none'}}>
                            <h2>GOYA Reception</h2>
                            <input 
                            type="text" 
                            name="delivery_first_name" 
                            class="form-control valid" 
                            aria-invalid="false" 
                            placeholder="First Name"
                            value = {props.getState('delivery_first_name', '')}
                            onChange={props.handleChange} 
                            />
                            <input 
                            type="text" 
                            name="delivery_last_name" 
                            class="form-control valid" 
                            aria-invalid="false" 
                            placeholder="Last Name"
                            value = {props.getState('delivery_last_name', '')}
                            onChange={props.handleChange} 
                            />
                        </div>

                            
                        <div className="form-inner-area sec_pickup" id="form_dropof" style={{display:'none'}}>
                            <h2>Drop off information</h2>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <input 
                                        type="text" 
                                        name="dropof_first_name" 
                                        class="form-control valid"
                                        aria-invalid="false" 
                                        placeholder="First Name" 
                                        value = {props.getState('dropof_first_name', '')}
                                        onChange={props.handleChange} 
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input 
                                        type="text" 
                                        name="dropof_last_name" 
                                        class="form-control valid"
                                        aria-invalid="false" 
                                        placeholder="First Name" 
                                        value = {props.getState('dropof_last_name', '')}
                                        onChange={props.handleChange} 
                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <input 
                                        type="text" 
                                        name="dropof_address" 
                                        class="form-control valid" 
                                        aria-invalid="false" 
                                        placeholder="Address"
                                        value = {props.getState('dropof_address', '')}
                                        onChange={props.handleChange} 

                                        />
                                    </div>
                                    <div className="col-6">
                                        <input 
                                        type="text" 
                                        name="dropof_city" 
                                        class="form-control valid"
                                        aria-invalid="false" 
                                        placeholder="City" 
                                        value = {props.getState('dropof_city', '')}
                                        onChange={props.handleChange} 
                                        />
                                    </div>
                                </div>

                            <div>
                                    
                                    <select className="col-lg-12">
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ" selected >New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <input 
                                        name="custom_order" 
                                        type="text" 
                                        pattern="[0-9]{5}" 
                                        placeholder="Z I P"
                                        />

                                    </div>
                                    <div className="col-6">
                                        <input 
                                        type="tel" 
                                        name="custom_order" 
                                        class="form-control valid"
                                        aria-invalid="false" 
                                        placeholder="Format: 123-45-678" 
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                           


                        </div>

                        <div className="form-inner-area sec_pickup" id="form_fedex" style={{display:'none'}}>
                            <h2>FedEx INFORMATION</h2>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" name="custom_order" class="form-control valid"
                                            aria-invalid="false" placeholder="First Name" />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" name="custom_order" class="form-control valid"
                                            aria-invalid="false" placeholder="First Name" />
                                    </div>
                                </div>


                            </div>

                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" name="custom_order" class="form-control valid" aria-invalid="false" placeholder="Address" />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" name="custom_order" class="form-control valid"
                                            aria-invalid="false" placeholder="City" />
                                    </div>
                                </div>

                            <div>
                                    
                                    <select className="col-lg-12">
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ" selected>New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <input name="custom_order" type="text" pattern="[0-9]{5}" placeholder="Z I P"/>

                                    </div>
                                    <div className="col-6">
                                        <input type="tel" name="custom_order" class="form-control valid"
                                            aria-invalid="false" placeholder="Format: 123-45-678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="comment-box">
                            <p><i class="far fa-comment-alt"></i> Notes</p>
                            <textarea name="full_comments" placeholder="Write here"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actions">
                <ul>

                    <li><button className="js-btn-prev" title="BACK" onClick={props.prev}>BACK <i className="fa fa-arrow-left"></i></button></li>
                    <li><button className="js-btn-prev" title="NEXT" onClick={props.next}>NEXT <i className="fa fa-arrow-right"></i></button></li>
                </ul>
            </div>
        </div>
        </div>

    );
}

export default Step3;