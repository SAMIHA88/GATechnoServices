import data from "../../data/index.json";
import '../../App.css'; 

export default function Services() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="title">Services</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.services?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" className="zoom" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}