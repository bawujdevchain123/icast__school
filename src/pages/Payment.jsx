import  { useState } from 'react'
import logo from '/images/logo.png?url'


const Payment = () => {
  const [email, setEmail] = useState("");
  const amount = 5000 * 100;
  
  const handleInput = (e) =>{
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handlepayemnt = async(e) => {
    e.preventDefault()
     const response = await fetch('http://localhost:5000/api/payment/paystack_payment',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({email, amount})
     })
     console.log(response)
     const data = await response.json()
     if(data.status){
       //Redirect to paystack for Payment
       const script = document.createElement('script')
       script.src = 'https://js.paystack.co/v1/inline.js';
       script.onload = ()=>{
        const handler = PaystackPop.setup({
          key: 'pk_test_ba8b6543330a537eff455e3ff491f53421fc2fa3',
          email: email,
          amount: amount,
          currency: 'NGN',
          callback: function(response){
            console.log('Payment successful:', response); 
            window.location.href = '/download_form'; 
          },
          onclose: function(){
            alert('Transaction was not completed, you can close window')
          }
        });
        handler.openIframe();
       };
       document.body.appendChild(script)
     }else{
       alert('payment initialization failed. Please try again')
     }
  }
  return (
    <section className='payment'>
       <div className='payment__container container'>
        <div className="logo">
            <div className="image__container">
              <img src={logo} alt="school__logo" width="100px" height="100px"/>  
            </div>
        </div>
        <h2>FORM PURCHASE</h2>
        <p>Welcome! Please complete your purchase by filling out the form below.</p>
        <form className='payment__form' onSubmit={handlepayemnt}>
            <p>Amount : #5000.00</p>
            <input type="text" name='email' placeholder='email' onChange={handleInput} />
            <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
   
  )
}

export default Payment