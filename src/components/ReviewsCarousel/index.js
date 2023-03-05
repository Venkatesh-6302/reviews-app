// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {indexOfUser: 0}

  onClickLeftArrow = () => {
    const {indexOfUser} = this.state
    if (indexOfUser >= 1) {
      this.setState(prevStat => ({indexOfUser: prevStat.indexOfUser - 1}))
    }
  }

  onClickRightArrow = () => {
    const {indexOfUser} = this.state
    const {reviewsList} = this.props
    const lengthOfReviewList = reviewsList.length
    if (indexOfUser < lengthOfReviewList - 1) {
      this.setState(prevStat => ({indexOfUser: prevStat.indexOfUser + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexOfUser} = this.state
    const userObj = reviewsList[indexOfUser]
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <img src={userObj.imgUrl} alt={userObj.username} />
          <div className="arrow-name-container">
            <button
              type="button"
              onClick={this.onClickLeftArrow}
              className="btn"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="user-name">{userObj.username}</p>
            <button
              data-testid="rightArrow"
              type="button"
              onClick={this.onClickRightArrow}
              className="btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{userObj.companyName}</p>
          <p className="description">{userObj.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
