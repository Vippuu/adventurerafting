import React from 'react'
import Popover from './Popover';

import Card1 from './HomeComponents/Card1';
export default function Home() {
  return (
    <>
   <section className='bg-light'>
          <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#homeCarousel"  data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#homeCarousel"  data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#homeCarousel"  data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#homeCarousel"  data-bs-slide-to="4" aria-label="Slide 5"></button>
                      <button type="button" data-bs-target="#homeCarousel"  data-bs-slide-to="5" aria-label="Slide 6"></button>
                  </div>
                  <div className="carousel-inner">
                  <div className="carousel-inner">
                        <div className="carousel-item active c-item">
                                <img src="images/1.jpg" className="d-block w-100 c-img" alt="..."/>                           
                               
                                <div className="carousel-caption top-0 mt-4 ">
                                    <p className='text-uppercase animate__animated animate__bounce animate__delay-1s'>Feel the adventure this summer</p>                          
                                    <h2>Rishikesh River Rafting</h2> 
                                    <Popover/>
                                </div>                                      
                        </div>
                                
                        <div className="carousel-item c-item">
                                <img src="images/2.jpg" className="d-block w-100 c-img" alt="..."/>
                              
                                <div className="carousel-caption top-0 mt-4 ">
                                    <p className='text-uppercase  animate__animated animate__bounce animate__delay-1s'>Feel the adventure this summer</p>
                                    <h2>Rishikesh River Rafting</h2>
                                    <Popover/>
                                </div>
                        </div>
                        <div className="carousel-item c-item">
                                 <img src="images/3.jpg" className="d-block w-100 c-img" alt="..."/>
                        
                                 <div className="carousel-caption top-0 mt-4 ">
                                    <p className='text-uppercase  animate__animated animate__bounce animate__delay-1s'>Feel the adventure this summer</p>
                                    <h2>Rishikesh River Rafting</h2>
                                    <Popover/>
                                 </div>
                        </div>       
                        <div className="carousel-item c-item">
                                  <img src="images/4.jpg" className="d-block w-100 c-img" alt="..."/>
                        
                                  <div className="carousel-caption top-0 mt-4 ">
                                        <p className='text-uppercase animate__animated animate__bounce animate__delay-1s '>Feel the adventure this summer</p>
                                        <h2>Rishikesh River Rafting</h2>                                       
                                        <Popover/>
                                   </div>
                            
                        </div>
                        <div className="carousel-item c-item">
                                   <img src="images/5.jpg" className="d-block w-100 c-img" alt="..."/>
                        
                                   <div className="carousel-caption top-0 mt-4 ">
                                        <p className='text-uppercase animate__animated animate__bounce  animate__delay-1s'>Feel the adventure this summer</p>
                                        <h2>Rishikesh River Rafting</h2>
                                        <Popover/>
                                   </div>
                        </div>         
                        <div className="carousel-item c-item">
                                   <img src="images/6.jpg" className="d-block w-100 c-img" alt="..."/>
                    
                                   <div className="carousel-caption top-0 mt-4 ">
                                        <p className='text-uppercase animate__animated animate__bounce animate__delay-1s '>Feel the adventure this summer</p>
                                        <h2>Rishikesh River Rafting</h2>
                                        <Popover/>
                                   </div>
                        </div>
                  </div>
                  </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                    </button>
         </div>

</section>

<section className='bg-light'>
         <div className="container">
              <div className='text-center my-5 animate__animated animate__bounce  animate__delay-1s' >

                  <h1>Experience the  <span className='colorFont'> thrill in Rishikesh</span></h1>

                  <hr className="w-25 m-auto"/>

              </div>
              <div className='row'>
                  <div className='col-sm-12 mb-3 col-md-4 mb-3 col-lg-4 col-12  mb-3 ' >
                    
                            <Card1
                            Card1H="10 Km Rafting in Rishikesh"
                            From="Barahmpuri " To="Shivpuri"
                            CardP="Duration: 90 mintues"
                            
                            />
                          
                     
                  </div>
                  <div className='col-sm-12 mb-3 col-md-4  mb-3 col-lg-4 col-12  mb-3' >
                       
                       <Card1
                            Card1H="16 Km Rafting in Rishikesh"
                            From="Shivpuri " To="Nim Beach"
                            CardP="Duration: 2 Hrs"
                            />
                      
                  </div>
                  <div className='col-sm-12  col-md-4 col-lg-4 col-12 mb-3' >
                       
                       <Card1
                            Card1H="26 Km Rafting in Rishikesh"
                            From="Marine Drive " To="Nim Beach"
                            CardP="Duration: 2.5 to 3 Hrs"
                            />
                      
                  </div>

              </div>
         </div>



</section>

 <section id='homeCard' className='bg-light'  >
          <div className="container">
              <div className='text-center my-5 animate__animated animate__bounce '>

                  <h1>Activities in <span className='colorFont'>Rishikesh</span></h1>

                  <hr className="w-25 m-auto"/>

              </div>
          </div>
              




 <div className='row ' >
     <div className=' col-sm-12 mb-3  col-md-4 mb-3 col-lg-4  col-12 mb-3 ' >
         <div className="card text-center bg-light shadow-lg p-3 mb-5 bg-body rounded">
             <img src="images/card1.jpg" className="card-img-top img-fluid" alt="..." />
             <div className="card-body ">
                 <h2>River Rafting in Rishikesh</h2>
                 <p className="card-text">Rishikesh is famous for its serene landscapes, religious significance as well as various thrilling adventure activities like bungee jumping, river rafting, and many more. If you want to try on something adventurous and exciting, then you must not miss out on this white-water river rafting experience in Rishikesh. Gush through the sturdy rapids as well as admire breathtaking landscapes of mountains & greenery as you raft through the clear waters. The river rafting in Rishikesh takes you on a 9 km and 16 km course of adventure!</p>
     

             </div>
         </div>
     </div>
     <div className=' col-sm-12 mb-3  col-md-4 mb-3  col-lg-4 col-12 mb-3 '>
         <div className="card text-center bg-light  shadow-lg p-3 mb-5 bg-body rounded ">
             <img src="images/card2.jpg" className="card-img-top img-fluid" alt="..." />
             <div className="card-body  ">
              <h2>Bungee Jumping Rishikesh</h2>
                
                 <p className="card-text">Grab this exciting opportunity to enjoy bungee jumping from the highest point in India. Rishikesh is one of the biggest tourist hubs in India, it is famous for its beautiful surroundings and stunning landscapes. It also has various activities and sports that you can choose from. This bungee jumping experience is one of its kind, as it allows you to jump from a height of 83 meters amidst the lush greenery of Rishikesh. Book tickets for this activity and spend a fun-filled day with your loved ones.</p>
              
             </div>
         </div>
     </div>
     <div className='col-sm-12 mb-3 col-md-4 mb-3 col-lg-4 col-12 mb-3'>
         <div className="card text-center  bg-light  shadow-lg p-3 mb-5 bg-body rounded">
             <img src="images/card3.jpg" className="card-img-top img-fluid" alt="..."/>
             <div className="card-body">
              <h2>Camping In Rishikesh</h2>
                 <p className="card-text">When you are in Rishikesh, there can be no adventure more fascinating than hiking in the foothills of the Himalayas and camping on the bank of River Ganga. A perfect combination of thrilling and rejuvenating experiences, camping and hiking in Rishikesh is a matchless treat for anyone seeking a holistic healing over the weekend. River Ganga is the major attraction in Rishikesh, and camping on the white sand by its blue water stream is surely going to have a soothing effect on your senses.
 </p>

             </div>
         </div>
     </div>
 </div>

</section>
<section className='bg-light'>
          <div className="container " >
              <div className='text-center my-5'>

                  <h1>Our Office <span className='colorFont'>Location</span></h1>

                  <hr className="w-25 m-auto"/>

              </div>
          </div>
              
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3451.203677586077!2d78.30182611511685!3d30.11698478185602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA3JzAxLjIiTiA3OMKwMTgnMTQuNSJF!5e0!3m2!1sen!2sin!4v1678628060232!5m2!1sen!2sin"
 width="100%" height="350" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</section>


     <section className='my-5 bg-light' id='contact'>   
             <div className="container">
                                  <div className='text-center mb-5'>
                                    <h1>Contact <span className='colorFont'>us</span> </h1>
                                    <hr className="w-25 m-auto"/>
                                 </div>
                               
                        <div className="row">
                                  <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
                                        <div className="contact-form-card">
                                                 <h4 className="contact-title">Send a message</h4>
                                                 <form  action="https://formspree.io/f/xdovlopw" method="POST">
                                                        <div className="form-group">
                                                           <input  className="form-control"  name="name" autoComplete='off' type="text" placeholder="Name *" required/>
                                                        </div>
                                                        <div className="form-group">
                                                           <input className="form-control"  name="email" autoComplete='off' type="email" placeholder="Email *" required/>
                                                        </div>
                                                        <div className="form-group">
                                                           <textarea className="form-control" name="message" autoComplete='off'  id="" placeholder="Message * " rows="7" required></textarea>
                                                        </div>
                                                        <div className="form-group ">
                                                           <button type="submit" className="form-control btn btn-primary" >Send Message</button>
                                                       </div>
                                                 </form>
                                         </div>
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
                                        <div className="contact-info-card">
                                                    <h4 className="contact-title">Get in touch</h4>

                                                    <div className="row mb-2">
                                                        <div className="col-1 pt-1 mr-1">
                                                             <i className="bi bi-phone-flip"></i>
                                                        </div>
                                                        <div className="col-10 ">
                                                            <h6 className="d-inline">Phone : <br/> <span className="text-muted">+ (123) 456-789</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-1 pt-1 mr-1">
                                                            <i className="bi bi-geo-alt"></i>
                                                        </div>
                                                        <div className="col-10">
                                                            <h6 className="d-inline">Address :<br/> <span className="text-muted">12345 Fake ST NoWhere AB Country.</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-1 pt-1 mr-1">
                                                            <i className="bi bi-envelope-at"></i>
                                                        </div>
                                                        <div className="col-10">
                                                            <h6 className="d-inline">Email :<br/> <span className="text-muted">info@website.com</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className='mt-4 ms-4'>
                                                        <div className='social d-inline me-3'>
                                                            <a className="social-link text-dark" href="https://www.facebook.com/rohit.suyal.71/" target={'_blank'}><img src="images/facebook.jpg" className="img-responsive" alt='facebook'/></a>
                                                        </div>

                                                        <div className='social d-inline' >
                                                            <a className="social-link text-dark" href="www.instagram.com" target={'_blank'}><img src="images/insta.jpg" className="img-responsive" alt='instagram'/></a>
                                                        </div>
                                                    </div>
                                                    
                                        </div>
                                    </div>
                     </div>

               </div>
        
        </section>                


<section id='homeFooter'> 
      
        <div className="text-center">Copyright &copy;  www.ghomi-ghomi-travellers.com. All rights reserved! <strong className="text-danger">Developed by Rohit Suyal</strong></div>
    
</section>

</>

  )
}
