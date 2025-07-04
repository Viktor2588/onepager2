import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Maschinen & Fahrzeuge',
      description: 'Professionelle Verwertung von Industriemaschinen und Fahrzeugen'
    },
    {
      title: 'Verwertung & Recycling',
      description: 'Nachhaltige Verwertung und umweltgerechtes Recycling'
    },
    {
      title: 'Demontage & Abbrüche',
      description: 'Fachgerechte Demontage und Abbrucharbeiten'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h3>Unsere Leistungen</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;