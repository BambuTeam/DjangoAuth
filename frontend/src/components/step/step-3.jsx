import React from "react";
import { StepComponentProps } from "react-step-builder";





function Step3(props) {




const handleClicPickUp = ()=>{
var button = document.getElementById('btn_PickUp')
var otros_botones = document.getElementsByClassName('btn_white')
otros_botones.removeClass('');
button.addClass('button');


var secction = document.getElementById('sec_pickup');
var oters_secction = document.getElementsByClassName('sec_pickup');
oters_secction.style.display('none');
/* secction.style.display(block); */

}
const handleClicDelivery = ()=>{
var op = document.getElementById('miBoton')
op.style.display = "none";
}
const handleClicDropOf = ()=>{
var op = document.getElementById('miBoton')
op.style.display = "none";
}
const handleClicFedex = ()=>{
var op = document.getElementById('miBoton')
op.style.display = "none";
}



return (
<div className="multisteps-form__panel" data-animation="slideHorz">
<div className="wizard-forms">
<div className="inner pb-100 clearfix">
<div className="form-content pera-content col-12">
<div className="step-inner-content">
<span className="step-no bottom-line">Step 3</span>
<div className="step-progress float-right">
<span>3 of 3 completed</span>
<div className="step-progress-bar">
<div className="progress">
<div className="progress-bar" style={{width: '80%' }}></div>
</div>
</div>
</div>

<h2>Pick up information</h2>
<p>Please select the type of handle of your basket</p>
<div className="budget-area">
<p>Optimization and Accessibility</p>
<div className="opti-list">
<ul className="d-md-flex">

<button className="bg-white" id="btn_PickUp" onClick={handleClicPickUp}>PickUp</button>
<button className="bg-white" id="btn_Delivery" onClick={handleClicDelivery}> no un mensaje</button>
<button className="bg-white" id="btn_Drop_of" onClick={handleClicDropOf}> no un mensaje</button>
<button className="bg-white" id="btn_Fedex" onClick={handleClicFedex}> no un mensaje</button>

</ul>

</div>
</div>


<h2>Pick Up</h2>
<div className="form-inner-area" id="form_pickup">
<input type="text" name="custom_order" class="form-control valid" aria-invalid="false" placeholder="Description of Order"/>
<input type="date" name="order_date"/>
<input type="time" id="hour" name="hour" min="09:00" max="24:00" />
<div className="comment-box">
<div>
<p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
</div>
<div className="row">
<div className="col-4">
<input
type="number"
id="give_away"
name="give_away"
min="0"
max="100"
placeholder="Give Away (S)"
/>
</div>
<div className="col-4">
<input type="number" id="vip" name="vip" min="0" max="100"
placeholder="V.I.P. (M)" />
</div>
<div className="col-4">
<input type="number" id="show_baskets" name="show_baskets" min="0" max="100"
placeholder="Show Basket (L)" /> </div>
</div>
</div>
</div>


<h2>Delivery</h2>
<div className="form-inner-area" id="fomr_Delivery">
<input type="text" name="custom_order" class="form-control valid" aria-invalid="false" placeholder="Description of Order"/>
<input type="date" name="order_date"/>
<input type="time" id="hour" name="hour" min="09:00" max="24:00" />
<div className="comment-box">
<div>
<p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
</div>
<div className="row">
<div className="col-4">
<input
type="number"
id="give_away"
name="give_away"
min="0"
max="100"
placeholder="Give Away (S)"
/>
</div>
<div className="col-4">
<input type="number" id="vip" name="vip" min="0" max="100"
placeholder="V.I.P. (M)" />
</div>
<div className="col-4">
<input type="number" id="show_baskets" name="show_baskets" min="0" max="100"
placeholder="Show Basket (L)" /> </div>
</div>
</div>
</div>

<h2>Drop Of</h2>
<div className="form-inner-area" id="form_dropof">
<input type="text" name="custom_order" class="form-control valid" aria-invalid="false" placeholder="Description of Order"/>
<input type="date" name="order_date"/>
<input type="time" id="hour" name="hour" min="09:00" max="24:00" />
<div className="comment-box">
<div>
<p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
</div>
<div className="row">
<div className="col-4">
<input
type="number"
id="give_away"
name="give_away"
min="0"
max="100"
placeholder="Give Away (S)"
/>
</div>
<div className="col-4">
<input type="number" id="vip" name="vip" min="0" max="100"
placeholder="V.I.P. (M)" />
</div>
<div className="col-4">
<input type="number" id="show_baskets" name="show_baskets" min="0" max="100"
placeholder="Show Basket (L)" /> </div>
</div>
</div>
</div>


<h2>Fedex</h2>
<div className="form-inner-area" id="form_fedex">
<input type="text" name="custom_order" class="form-control valid" aria-invalid="false" placeholder="Description of Order"/>
<input type="date" name="order_date"/>
<input type="time" id="hour" name="hour" min="09:00" max="24:00" />
<div className="comment-box">
<div>
<p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
</div>
<div className="row">
<div className="col-4">
<input
type="number"
id="give_away"
name="give_away"
min="0"
max="100"
placeholder="Give Away (S)"
/>
</div>
<div className="col-4">
<input type="number" id="vip" name="vip" min="0" max="100"
placeholder="V.I.P. (M)" />
</div>
<div className="col-4">
<input type="number" id="show_baskets" name="show_baskets" min="0" max="100"
placeholder="Show Basket (L)" /> </div>
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
</div>

<div className="actions">
<ul>

<li><button className="js-btn-prev" title="BACK" onClick={props.prev}>BACK <i className="fa fa-arrow-left"></i></button></li>
<li><button className="js-btn-prev" title="NEXT" onClick={props.next}>NEXT <i className="fa fa-arrow-right"></i></button></li>






</ul>
</div>
</div>

);
}




// Este enlace es necesario para hacer que `this` funcione en el callback this.handleClick = this.handleClick.bind(this); }







export default Step3;