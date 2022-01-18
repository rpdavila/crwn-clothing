import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJIb0IDtMr6sGDs7KAa7t2aNngK4WlbOq1BHyvju0eRm9IB03Gzd2lY2HhBKAev7mPL0eFxLtutdwCWRl1R2YEr00sKBaRVzq'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;