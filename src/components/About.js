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
        <span className="bold italic">About the Developer:
        </span><br/>
        <span className="bold italic">Raymond Johnson</span> is originally from Jamaica, West Indies.  I am the first person in my family to go to college.  I am a graduate of <span className="bold italic">Udacity’s Frontend Nanodegree Program</span> as well as a Fellow at <span>Pursuit</span> where I'm studying Full Stack Software Engineering.

        I believe that computers are a tool for us to use to help humanity deal with what we have to deal with.  And there are helpful tasks that they can take on, such as forwarding messages to friends and loved ones.  

        But have you ever wanted to be able to read your messages without having to wade through a lot of spam advertisements for products and services you don’t even want? On average, I get about 10 emails a day from people I know, and want to hear from; and I get about 20 spam emails…per hour! 

        Smoke Signals, my new web app, was designed to help people deal with this problem. Once users join along with others with whom they wish to be in contact, they can send smoke signals to each other.  It’s a throwback…there were no ads or spam when the natives used smoke signals!  So there are no add allowed among the email communications.

        </p>
      </div>
    </div>
  );
}

export default About;