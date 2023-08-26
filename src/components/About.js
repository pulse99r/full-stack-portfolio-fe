import "./css/About.css";

function About() {
  const showLogin = ()=>{
    
  }
  return (
    <div className="aboutContainer">
      <div className="about">
        {/* <h1>About</h1> */}
        <p><span className="font-2em bold section-header" >About</span><br/><br/>
        
        We thought people may be tired of "in your face" ads. Wherever you go on the internet, there are ads.  Every piece of software developed, has features that presents you with ads, track your response to ads, bring you more ads.<br/><br/>
        We say, "Stop the insanity!"<br/><br/>
        <span className="bold italic">Smoke Signals</span> is an 'ad free' service!" No ads will be forced upon you.  Ever!<br/><br/>
        However, we do realize we can make money from promoting ads. So we have a section where you can search out products you yourself are looking for, and you can choose the ads you want to see. No you can't preselect them and have them delivered to you. But we have a great search feature, that allows you to search for a type of ad and save your search criteria, so that those and similar ads are available <span className="bold italic">when you visit the ad section</span><br/><br/>
        </p>
      </div>
    </div>
  );
}

export default About;