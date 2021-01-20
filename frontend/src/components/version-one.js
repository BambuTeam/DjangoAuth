
import React from 'react';
import Step1 from './step/step-1';
import Step2 from './step/step-2';
import Step3 from './step/step-3';


import svg from '../../src/assets/img/sideimg.svg';




class VersionOne extends React.Component {
    
    
    handleFormSubmit = (event, requestType) => {
        /* event.preventDefault; */

        const is_rush = event.target.elements.is_rush.value;
        const order_type = event.target.elements.order_type.value;
        const order_date = event.target.elements.order_date.value;
        const custom_order = event.target.elements.custom_order.value;
        const give_away = event.target.elements.give_away.vale;
        const vip = event.target.elements.vip.value;
        const show_baskets = event.target.elements.show_baskets.value;


        console.log(is_rush, order_type, order_date, custom_order, give_away, vip, show_baskets);



    }

    render() {
        return (

            <div className="wrapper">
                <div className="steps-area steps-area-fixed">
                    <div className="image-holder">
                        
                        <img src={svg} alt="" />
                    </div>
                    <div className="steps clearfix">
                        <ul className="tablist multisteps-form__progress">
                            <li className="multisteps-form__progress-btn js-active current">
                                <span>1</span>
                            </li>
                            <li className="multisteps-form__progress-btn">
                                <span>2</span>
                            </li>
                            <li className="multisteps-form__progress-btn">
                                <span>3</span>
                            </li>
                        
                        </ul>
                    </div>
                </div>
                <form className="multisteps-form__form" onSubmit={(event)=>this.handleFormSubmit(
                    event,
                    this.props.requestType,
                )} id="wizard" method="POST">
                    <div className="form-area position-relative">
                        <Step1 />
                        <Step2 />
                        <Step3 />
                       
                       
                    </div>
                </form>
            </div>
            
            )
    }
};


export default VersionOne;

