import React from 'react'
import { Link } from 'react-router-dom';
import profilePc from "../Assets/profilePc.jpg";
import {FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import "./User.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Logo from "../Assets/logo.png"
import eater2 from "../Assets/eater2.png"
import eater3 from "../Assets/eater3.png"
import eater4 from "../Assets/eater4.png"
import eater1 from "../Assets/eater1.png"
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';




const User = () => {
  return (
    <div >

      <div className="conatainer">
        <div className="navbar">
            <nav>
               

                <ul>
                    <h2 style={{color:"orangered", marginTop:"20px",background:"white"}}>RECIPE</h2>
                    <Link to="/recipe">
                    <li>Find Recipes</li>
                    </Link>
                    <li>Inspiration</li>

                    <Link to='/'>
                    <li>Home</li>
                    </Link>

                    <li>courses</li>
                </ul>

                <div style={{background:"white"}}>
                    <input type="search"placeholder='search' style={{width: "250px", height: "40px", borderRadius: "20px", background:"rgb(220, 215, 215)", border: "none",  padding: "20px", marginRight:"150px"}}/>
                 
                    <Link to="/signin">
                        <button className='button1'>sign in</button>
                    </Link>
                
                    <Link to= "/signup">
                        <button className='button2'>sign up</button>
                    </Link>
                </div>

            </nav>
        </div>

        <div className="profile">
            <h1 className='profile-h1'>User profile | Recipe Place</h1>

            <div className='pics'>
                <img src={profilePc} alt=""/>

                <div style={{lineHeight:"12px"}}>
                <span>Dmitry Sergio</span ><br/>
                <p style={{color:"grey", overflow:"hidden"}}><span style={{color:"green", fontSize:"12px", marginLeft:"30px"}}>Available to work</span> follow</p>
                </div>
                
                < FavoriteBorderOutlinedIcon style={{marginLeft:"650px", marginRight:"20px", marginTop:"10px"}}/>
                < BookmarkBorderOutlinedIcon style={{marginLeft:"20px", marginRight:"20px", marginTop:"10px"}}/>

                <Link to="/contact">
                <button className='button3'>Get intouch</button>
                </Link>
            </div>

            {/* ------------menu list--------- */}

    
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className="banner">
         

 {/*------------------------------------- PARENT-BOX-------------------------------------------------------- */}          
          <div style={{display:"flex", alignItems:'center', justifyContent:'center', border:'5px solid skyblue', borderRadius:"20px 20px 0px 0px", width:"900px", flexDirection:"column"}}>
  
 {/*------------------------------------- PARENT-BOX-IMAGE------------------------------------------------------- */}

            <div style={{width:"100%", height:"200px", backgroundImage:"url(https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=)", backgroundSize:"cover",  borderRadius:"15px 15px 0px 0px", marginBottom:"50px", overflowY:'hidden'}}>

               {/*------------------------------------- NAVBAR------------------------------------------------------- */}
  
            <div style={{display:"flex", margin:"40px", color:"grey", alignItems:"center" }}>
                <span style={{padding:"5px", background:"black", borderRadius:"20px", color:"white"}}>Recipes</span>
                <span   style={{padding:"5px", background:"black", borderRadius:"20px", color:"white"}}>Health</span>
                <span  style={{padding:"5px", background:"black", borderRadius:"20px", color:"white"}}>cooks</span>
                <span style={{padding:"5px", background:"black", borderRadius:"20px", color:"white"}}>followers</span>
                </div>
            </div>

             {/*------------------------------------- BOX-LIST------------------------------------------------------- */}
  
           <div style={{display:"flex", justifyContent:"center",  }}>
  
 {/*------------------------------------- PROFILE-BOX------------------------------------------------------- */}

           <div style={{direction:"flex", alignItems:"center", textAlign:"center", justifyContent:"center", flexDirection:"column", width:"200px", margin:"10px", marginRight:"30px"}}>
              <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" style={{width:"60px", height:"60px", borderRadius:"50%", backgroundSize:"cover"}} />
              <h4>Rachel Chiamaka</h4>
                <h5 style={{color:"purple"}}>Executive Chef</h5>
                <h6 style={{color:"grey", margin:"20px", fontSize:"10px"}}>Tuck into quick healthy meals that you can make in under 30 minutes. We have got plenty of tasty salads, soups and mains to leave you ...</h6>

                 {/*------------------------------------- SOCIAL MEDIA ICON------------------------------------------------------- */}

                <div style={{display:"flex",marginLeft:"25px" }}>
  
               <a href="http://youtube.com">
                <GrYoutube style={{margin:"10px", color:"grey"}} />
               </a>
  
             <a href="http://twitter.com">
              <FaTwitter style={{margin:"10px", color:"grey"}}/>
             </a>
             
             <a href="http://instagram.com">
              < FaInstagram  style={{margin:"10px", color:"grey"}}/>
             </a>
  
             <a href="http://m.facebook.com">
             <FaFacebook  style={{margin:"10px", color:"grey"}}/>
             </a>
            </div>
  
 {/*------------------------------------- BOX-ONE------------------------------------------------------- */}
           </div>
  
            <div style={{display:"flex", flexDirection:"column", margin:"10px", alignItems:"center", justifyContent:"center",borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{ moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",
    webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",
    boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", width:"170px", height:"170px",borderRadius:"5px",  marginBottom:"50px",backgroundSize:'cover'}}/>

    < FaAlignJustify />
     <h4 style={{color:"grey",padding:"10px", overflow:"hidden", textAlign:"center"}}>Healthy Meal For You</h4>
    </div>

    {/*------------------------------------- BOX-TWO------------------------------------------------------- */}
  
            <div  style={{display:"flex", margin:"10px", flexDirection:"column", alignItems:"center", justifyContent:"center",borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  style={{ 
    boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", width:"170px", height:"170px",borderRadius:"5px", marginBottom:"50px", backgroundSize:'cover'}}/>
     < FaAlignJustify />
     <h4 style={{color:"grey",padding:"10px", overflow:"hidden", textAlign:"center"}}>Healthy Meal For You</h4>
    </div>
  
  {/*------------------------------------- BOX-THREE------------------------------------------------------- */}

             <div style={{display:"flex", margin:"10px", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{  width:"170px", borderRadius:"5px", height:"170px", marginBottom:"50px", backgroundSize:'cover'}} />
              < FaAlignJustify />
              <h4 style={{color:"grey",padding:"10px", overflow:"hidden", textAlign:"center"}}>Healthy Meal For You</h4>
            </div>
            </div>
          </div>
          
        </div>
        
  
  
      </div>
        </div>

      </div>
      
      <h2 className='header'>
         I'm available for new project! Drop me a line at:  multibrand@gmail.com<br/> My social Behance | Dribbble | Facebook | Instagram | Linkedin | Medium</h2>
    <hr />
     <div className='header2'>
     <img src={profilePc} alt=""/>
     <h2>Dmitry Sergushkin</h2>
     
     <span style={{fontSize:"14px", color:"grey"}}>✨ Crafting Useful Experiences for Digital Products ⤵</span>
       <Link to="/contact">
     <button>Get in touch</button>
     </Link>
     
     </div>

     <div className='box-parent-head'>
     <Link>
     <h3 className='box-parent-h3'>More by Dmitry Owen</h3>
     </Link>
      {/*-------------------- To do ------------------------*/}
     <Link>
     <h4>View Profile</h4>
     </Link>
     </div>

     <div className='box-parent'>
           
            <div className="other-boxes">
            <Link>
              <img src={eater1} alt="" />
              </Link>
              </div>
           
            <div className="other-boxes">
               <Link>
              <img src={eater2} alt="" />
              </Link>
              </div>
            
            <div className="other-boxes">
            <Link>
              <img src={eater3} alt=""/>
              </Link>
              </div>
          
            <div className="other-boxes">
               <Link>
            <img src={eater4} alt="" />
            </Link>
            </div>
        </div>

        <div className="under-boxes">
         
          <div className="words-box">
          <Link to="/contact">
            <img src={Logo} alt="" />
          </Link>
          </div>
          <Link>
          <div className="words-box">For cookings</div>
          </Link>
          <Link>
          <div className="words-box">Hire Talents</div>
          </Link>
          <Link>
          <div className="words-box">Inspiration</div>
          </Link>
          <Link>
          <div className="words-box">Advertising</div>
          </Link>
          <Link>
          <div className="words-box">Blog</div>
          </Link>
          <Link to="/contact">
          <div className="words-box">About</div>
          </Link>
          <Link>
          <div className="words-box">Careers</div>
          </Link>
          <Link>
          <div className="words-box">Support</div>
          </Link>
            {/*-------------------------------------Link TO DO ------------------------------------------------*/}
          <div className="words-box">
          <Link to={"http://youtube.com"}>
          < YouTube/>
          </Link>

          <Link to={"http://twitter.com"}>
            < Twitter/>
            </Link>
            <Link to={"http://instagram.com"}>
            < Instagram/>
            </Link>

            <Link to={"http://m.facebook.com"}>
            < Facebook/>
            </Link>
          </div>

            </div>
             
            <div className='footer'>
              <div style={{display:"flex", marginLeft:"100px"}}>
              <Link>
                 <div className="foot">© 2024 Dribbble</div>
                 </Link>
                 <Link>
                 <div className="foot">Terms</div>
                 </Link>
                 <Link>
                 <div className="foot">Privacy</div>
                 </Link>
                 <Link>
                 <div className="foot">Cookies</div>
                 </Link>
              </div>
              <div style={{display:"flex", marginLeft:"400px"}}>
                 <Link>
                 <div className="foots">Jobs</div>
                 </Link>
                 <Link>
                 <div className="foots">Designers</div>
                 </Link>
                 <Link>
                 <div className="foots">Freelancers</div>
                 </Link>
                 <Link>
                 <div className="foots">Tags</div>
                 </Link>
                 <Link>
                 <div className="foots">Places</div>
                 </Link>
                 <Link>
                 <div className="foots">Resources</div>
                 </Link>
              </div>

        </div>

    </div>
  )
}

export default User
