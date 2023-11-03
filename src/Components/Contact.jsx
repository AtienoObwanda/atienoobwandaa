import React , { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/988f4be0-73ca-11ee-a03a-39e472c5760d"



const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Form response was not ok');
      }

      setSubmitted(true);
    })
    .catch((err) => {
      e.target.submit();
    });
};

if (submitted) {
  return (
    alert("Thank You! Your message has been sent successfully!")
    // <>
    // <div className='ml-[-18em] shadow-2xl rounded  w-460px p-[5em]'>
    // <div className="text-2xl text-dark dark:text-white">Thank you!</div>
    //   <div className="text-md text-dark dark:text-white">I will be in touch soon.</div>
    // </div>
    
    // </>
  );
}



  return (
    <div className="mt-[6em] mb-[6em] ">
    <div className="ml-[-18em]  sm:ml-[-0.1em]">
    <h1 className='text-6xl mb-[1em] text-center text-dark dark:text-white font-newyork leading-normal'> Let's Connect</h1>

    </div>
<div className="flex">
   {/* form */}
   <div className="w-1/4"></div>
   <div className="w-1/2">
   <form
      action={FORM_ENDPOINT}
      method="post" 
      accept-charset="UTF-8"
      onSubmit={sendEmail} className='shadow-2xl rounded  w-460px p-[5em]'>

<div className="pt-0 mb-[2em] w-[460px]">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:border-orange relative w-full px-3 py-3 text-sm text-dark dark:text-white placeholder-gray-400 bg-transparent border-[2px] border-white rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-[2em] w-[460px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:border-orange relative w-full px-3 py-3 text-sm text-dark dark:text-white placeholder-gray-400 bg-transparent border-[2px] border-white rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-[2em] w-[460px] h-[160px]">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:border-orange relative w-full h-full px-3 py-3 text-sm text-dark dark:text-white placeholder-gray-400 bg-transparent border-[2px] border:orange dark:border-white rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-[2em] w-[360px]">
        <button
          className="active:bg-orange hover:shadow-lg focus:outline-none px-6 py-6 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-orange rounded-full shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>

    </form>
   </div>
   <div className="w-1/4"></div>
   
    
   

  
</div>
 

</div>
  )
}

export default Contact