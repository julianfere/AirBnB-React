import Card from './Card'
import data from '../data.js';

export default function CardContainer(props) {
  const cards = data.map((info) => {return(<Card {...info} />)});
  return (
    <div className="card-container">
      {cards}
    </div>
  )
}