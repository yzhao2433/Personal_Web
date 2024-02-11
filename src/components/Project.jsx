import projects from "../data/projects.json";
import link from "../assets/img/link.svg";

const Project = () => {
  return (
    <>
      {projects.map((data, index) => (
        <div
          key={index}
          className="w-[80%] bg-[#F9FAFB] p-12 rounded-3xl shadow-xl flex flex-col space-y-5 text-base"
        >
          {index % 2 === 0 ? (
            <div className="flex flex-row sm:flex-col space-x-5 justify-start">
              <img src={data.logo} alt="project logo" className="h-64" />
              <div className="flex flex-col items-start space-y-2">
                <div>{data.name}</div>
                <div>{data.description}</div>
                <div className="flex flex-row flex-wrap space-x-3">
                  {data["tools"].map((point, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-3 bg-[#E5E7EB] rounded-3xl"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <a href="">
                  <img src={link} className="h-10" />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap sm:flex-col-reverse space-x-5">
              <div className="flex flex-col items-start space-y-2">
                <div>{data.name}</div>
                <div>{data.description}</div>
                <div className="flex flex-row space-x-3">
                  {data["tools"].map((point, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-3 bg-[#E5E7EB] rounded-3xl"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <a href="">
                  <img src={link} className="h-10" />
                </a>
              </div>
              <img src={data.logo} alt="project logo" className="h-64" />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Project;
