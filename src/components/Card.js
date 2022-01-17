
export default function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {

  return (
    <section className="card-body">
      <img src={imageUrl} alt={title} className="card-image"/>
      <article className="card-info">
        <h5 className="location"><i class="fas fa-map-marker-alt"></i><span>{location}</span><a href={googleMapsUrl} className="maps-link">View on Google Maps</a></h5>
        <h2 className="location-name">{title}</h2>
        <h6 className="dates">{`${startDate} - ${endDate}`}</h6>
        <p className="description">{description}</p>
      </article>
    </section>
  )
}
