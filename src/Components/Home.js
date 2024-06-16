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
                                    <p className='text-uppercase animate__animated animate__bounce animate__delay-1s'>Feel the adventure on this summer</p>                          
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

                  <h1>Discover the <span className='colorFont'>Adventure in Rishikesh</span></h1>

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
                 <p className="card-text">Rishikesh, nestled in the foothills of the Himalayas, is renowned for its serene landscapes, religious significance, and a plethora of thrilling adventure activities, including bungee jumping and river rafting. Among these, white-water river rafting stands out as a must-try experience for those seeking adventure and excitement.
                 Embarking on a river rafting expedition in Rishikesh is an exhilarating journey. You will navigate through the powerful rapids of the Ganges River, experiencing the rush of the water while surrounded by breathtaking landscapes of mountains and lush greenery. The clear waters of the Ganges provide a pristine environment for this adventure.</p>
     

             </div>
         </div>
     </div>
     <div className=' col-sm-12 mb-3  col-md-4 mb-3  col-lg-4 col-12 mb-3 '>
         <div className="card text-center bg-light  shadow-lg p-3 mb-5 bg-body rounded ">
             <img src="images/card2.jpg" className="card-img-top img-fluid" alt="..." />
             <div className="card-body  ">
              <h2>Bungee Jumping In Rishikesh</h2>
                
                 <p className="card-text">Seize the thrilling opportunity to experience bungee jumping from the highest point in India! Rishikesh, one of the premier tourist destinations in India, is renowned for its breathtaking surroundings and stunning landscapes. The city offers a plethora of activities and sports to choose from, but the bungee jumping experience stands out. Leap from a height of 83 meters, surrounded by the lush greenery of Rishikesh, for an adventure like no other. Book your tickets now and enjoy a fun-filled day with your loved ones!</p>
              
             </div>
         </div>
     </div>
     <div className='col-sm-12 mb-3 col-md-4 mb-3 col-lg-4 col-12 mb-3'>
         <div className="card text-center  bg-light  shadow-lg p-3 mb-5 bg-body rounded">
             <img src="images/card3.jpg" className="card-img-top img-fluid" alt="..."/>
             <div className="card-body">
              <h2>Camping In Rishikesh</h2>
                 <p className="card-text">When in Rishikesh, there’s no adventure more captivating than hiking in the foothills of the Himalayas and camping along the banks of the River Ganga. Combining thrilling and rejuvenating experiences, camping and hiking in Rishikesh offer a unique treat for anyone seeking a holistic getaway over the weekend. The River Ganga, a major attraction in Rishikesh, provides a stunning backdrop with its blue waters and white sandy banks, ensuring a soothing effect on your senses. Don't miss out on this unparalleled experience in nature's embrace.
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
                                                            <h6 className="d-inline">Phone : <br/> <span className="text-muted">+91 8448071982</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-1 pt-1 mr-1">
                                                            <i className="bi bi-geo-alt"></i>
                                                        </div>
                                                        <div className="col-10">
                                                            <h6 className="d-inline">Address :<br/> <span className="text-muted">Tapovan Rishikesh Uttarakhand.</span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-1 pt-1 mr-1">
                                                            <i className="bi bi-envelope-at"></i>
                                                        </div>
                                                        <div className="col-10">
                                                            <h6 className="d-inline">Email :<br/> <span className="text-muted">Vipinaswal@gmail.com</span></h6>
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
      
        <div className="text-center">Copyright &copy;  www.pahadi.com. All rights reserved! <strong className="text-danger">Developed by Vipin Singh</strong></div>
    
</section>

</>

  )
}
