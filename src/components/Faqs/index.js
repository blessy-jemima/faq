import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(each => (
            <FaqItem key={each.id} listDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
