import data from "../../data/index.json";
import React, { useState } from "react";
import "../../App.css"; 

function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const findServiceName = (serviceId) => {
    const service = data.services.find(service => service.id === serviceId);
    return service ? service.title : "Service inexistant";
  };


  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="title">Projects Réalisés</h2>
        </div>
      </div>

      <div className="portfolio--section--container project-container">
        {data?.projets?.map((item, index) => (
          <div
            key={index}
            className="testimonial--section--card"
            onClick={() => openModal(item)}
          >
            <div className="project-image">
              <img
                src={item.src}
                alt={item.title}
                className="zoom" 
              />
            </div>
            <div className="project-title">
              <h3>{item.title}</h3>
              {/* <p>Service: {findServiceName(item.service_id)}</p> */}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image">
              <img src={selectedProject.src} alt={selectedProject.title} />
            </div>
            <div className="modal-details">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <p><strong>Service: </strong>{findServiceName(selectedProject.service_id)}</p>
            </div>
            <button className="modal-close" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projets;
