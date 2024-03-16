import "./App.css";
import wicclogo from "/src/img/wicc_logo.png";
import githublogo from "/src/img/github.svg";
import instalogo from "/src/img/instagram.svg";
import figmalogo from "/src/img/figma.svg";
import location from "/src/img/location.svg";
import linkedinlogo from "/src/img/linkedin.svg";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
import headshot from "./src/img/headshot.jpg";


function App() {
  return (
    <>
      <section className="h-screen w-[80%] flex mx-auto items-center">
        <div className="h-auto flex flex-row sm:flex-col-reverse space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center space-y-5 text-base w-full">
            {/* TODO 1: Edit the content of these tags!*/}
            <h1>Hi! I'm Ying Lin</h1>
            <p>
              As a person who is enchanted by the stories numbers tell, I currently study Information Science and Statistical Science at Cornell University. Using knowledge from my courses and my time at the Community Foundation at Tompkins County, I can use various programming languages and Excel to fine-tune my ability to understand large amounts of data and create comprehensive visuals to help me tell the story. My experience leading teams in planning large events for students and working with children has taught me a lot about communication, leadership, and problem-solving. With these skills I have acquired, I hope to continue mastering the art of data analytics to construct a bigger and clearer picture for others.
            </p>
            <div className="flex flex-row items-center space-x-2">
              <img src={location} />
              <p>Ithaca, United States</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <p>Avaliable for new projects</p>
            </div>

            {/* TODO 2: Change the links of these tags to link to your socials! */}
            <div className="flex flex-row h-10 space-x-2">
              <a href="https://github.com/yzhao2433">
                <img src={githublogo} />
              </a>
              <a href="https://www.instagram.com/svt_caratying/">
                <img src={instalogo} />
              </a>
              <a href="">
                <img src={figmalogo} />
              </a>
              <a href="https://www.linkedin.com/in/yinglinzhao/">
                <img src={linkedinlogo} />
              </a>
            </div>
          </div>
          <div className="flex justify-center ">
            {/* TODO 3: Change this to a custom image! */}
            <img
              src={headshot}
              alt="Headshot"
              className="object-contain sm:p-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#9CE2D3] min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Experience</div>
          {/* TODO 4: Add your work experience here by editing the json files in src/data/experiences.json */}
          <div className="text-base">
            Here is a quick summary of my most recent experiences:
          </div>
          <Experience className="w-full" />
        </div>
      </section>
      <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Selected Projects</div>
          {/* TODO 5: Add your projects here by editing the json files in src/data/projects.json */}
          <div className="text-base">Here are some projects I have built:</div>
          <Project className="w-full" />
        </div>
      </section>
      {/* TODO 6: Change the email and phone number to your own in the footer component */}
      <Footer />
    </>
  );
}

export default App;
