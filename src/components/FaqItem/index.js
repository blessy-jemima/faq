import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShowAns: true}

  isButtonClicked = () => {
    this.setState(prevState => ({
      isShowAns: !prevState.isShowAns,
    }))
  }

  render() {
    const {listDetails} = this.props
    const {isShowAns} = this.state
    const {questionText, answerText} = listDetails

    return (
      <li className="list-card-container">
        <div className="qn-container">
          <h1 className="qn-heading">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.isButtonClicked}
          >
            {isShowAns ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="image"
              />
            )}
          </button>
        </div>
        {isShowAns && (
          <div>
            <hr className="hr" />
            <p className="qn-para">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
