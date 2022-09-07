import React ,{useEffect} from 'react'
import Head from '../../header/Head'
import "./team.css"
import team1 from "../../../assets/1.jpg"
import team2 from "../../../assets/2.jpg"
import team3 from "../../../assets/3.jpg"
import team4 from "../../../assets/4.jpg"
export default function Team() {
    useEffect(() => {
   
        const team = Array.from(
          document.getElementsByClassName('team-member')
        );
        const teamDiv=Array.from(
            document.getElementsByClassName('team-desc')
        );
        team.forEach((i,z)=>{
            i.onmouseenter=()=>{
                teamDiv[z].style.display="block"
            }
            i.onmouseleave=()=>{
                teamDiv[z].style.display="none"
            }
        })
  
      }, []);
    
    return (
        <div className="team-section container my-5" id="team-s">
            <div className="head-team ">
                <Head head="team" span="Our Team" hDesc="Meet Our" sDesc="Amazing Team"/>
            </div>
            <div className="team-images row flex-wrap d-flex">
                <div className="team-member  py-3 col-lg-3 col-md-6 col-sm-12 text-center" >
                    <img src={team1} alt="team-member" />
                    <div className="team-desc" >
                        <h5>founder</h5>
                        <h2>Alaxis D. Dowson</h2>
                        <div className="team-soacial">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="team-member py-3 col-lg-3 col-md-6 col-sm-12 text-center" >
                    <img src={team2} alt="team-member" />
                    <div className="team-desc">
                        <h5>founder</h5>
                        <h2>Alaxis D. Dowson</h2>
                        <div className="team-soacial">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="team-member py-3 col-lg-3 col-md-6 col-sm-12 text-center" >
                    <img src={team3} alt="team-member" />
                    <div className="team-desc">
                        <h5>founder</h5>
                        <h2>Alaxis D. Dowson</h2>
                        <div className="team-soacial">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="team-member py-3 col-lg-3 col-md-6 col-sm-12 text-center">
                    <img src={team4} alt="team-member" />
                    <div className="team-desc">
                        <h5>founder</h5>
                        <h2>Alaxis D. Dowson</h2>
                        <div className="team-soacial">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
