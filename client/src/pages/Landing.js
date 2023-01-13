import job from "../assets/images/job.svg";

import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/Index";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt='jobify' className='logo' /> */}
        <Logo />
      </nav>
      {/* info */}

      <div className='container page'>
        {" "}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby lo-fi celiac snackwave selvage slow-carb hella lumbersexual
            unicorn sriracha williamsburg try-hard skateboard thundercats. Lyft
            cold-pressed next level subway tile, normcore cardigan humblebrag
            copper mug listicle tumblr beard small batch typewriter VHS. Edison
            bulb blog selfies slow-carb marfa, JOMO beard meggings gastropub.
            Edison bulb blog tofu, adaptogen literally Brooklyn pug pabst vinyl
            migas gastropub yes plz lyft mumblecore. Neutra asymmetrical taiyaki
            la croix bitters cray letterpress disrupt flannel fixie vaporware
            tbh.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={job} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
