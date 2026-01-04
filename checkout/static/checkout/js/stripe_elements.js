var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
// gets the key from the block in the html file and slices off hte quotation signs 

var stripe = Stripe(stripe_public_key);
// used to set up Stripe

var  elements = stripe.elements();
// used to create a instance of stripe Elements

var style = {
    base: {
        color: '#000',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545'
    }
};

var card = elements.create('card');
// used to create a card Element

card.mount('#card-element');
//  used to mount the card to the div 



