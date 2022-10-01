// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {s: 0}

  onLeftArrow = () => {
    this.setState(prevState => ({s: prevState.s - 1}))
  }

  onRightArrow = () => {
    this.setState(prevState => ({s: prevState.s + 1}))
  }

  render() {
    const {reviewsList} = this.props
    const {s} = this.state

    let testid

    return (
      <div className="reviewContainer">
        <h1 className="heading">Reviews</h1>
        <div className="subContainer">
          <div>
            <button
              type="button"
              testid="leftArrow"
              className="button"
              onClick={this.onLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="detailView">
            <img
              src={reviewsList[s].imgUrl}
              alt={reviewsList[s].username}
              className="dp"
            />
            <p className="heading2">{reviewsList[s].username}</p>
            <p className="para">{reviewsList[s].companyName}</p>
            <p className="para">{reviewsList[s].description}</p>
          </div>
          <div>
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.onRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
