import React from 'react'


export default function About() {
  
  return (
   <>
   <section className='about my-5'>
          <div className="container">

              <div className='text-center mb-5'>

                 <h1>About <span className='colorFont'>us</span> </h1>
                 <hr className="w-25 m-auto"/>

               </div>

               <div className='row'>
                  <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
                       <h1> Know about us</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, neque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, optio.</p>
                       <button type="button" className="btn btn-success mb-5">More about us</button>


                                        <div className="accordion " id="accordionPanelsStayOpenExample" >
                            <div className="accordion-item " style={{backgroundColor:'#ced4da'}}>
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:'rgb(170 197 225)'}}>
                                            Address
                                          </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                          <div className="accordion-body">
                                            <strong>Rishikesh,uttarakhand</strong> 
                                          </div>
                                        </div>
                                </div>
                          <div className="accordion-item" style={{backgroundColor:'#ced4da'}}>
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor:'rgb(170 197 225)'}}>
                                      Email
                                      </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                      <div className="accordion-body">
                                        <strong>rohitsuyal101@gmail.com</strong>
                                      </div>
                                    </div>
                              </div>
                            <div className="accordion-item" style={{backgroundColor:'#ced4da'}}>
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"  style={{backgroundColor:'rgb(170 197 225)'}}>
                                        Phone
                                      </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                      <div className="accordion-body">
                                        <strong>7251819923</strong>
                                      </div>
                            </div>
                            </div>
                  </div>




                  </div>
              
              <div className='col-sm-12 col-md-6 col-lg-6 col-12 mt-5 text-end'>
              <img src="images/about11.jpg" className="img-fluid img-thumbnail" alt="..."/>
              </div>

         </div>



          </div>
                
   </section>
   


   <section> 
      <p >
        <div className="text-center">Copyright &copy;  www.ghomi-ghomi-travellers. All rights reserved! <strong className="text-danger">Developed by Rohit Suyal</strong></div>
     </p>
   </section>




   </>
  )
}
