import browserView from "../../images/browserView.png"
const Ads = () => {
  return (
    <div className="browserView">
        <div className="text">
            <h1>Let's take you on a wonderful <span>Journey</span></h1>
            <button>Get started now</button>
        </div>
        <div className="image">
        <img src={browserView} alt="" />
        </div>
    </div>
  )
}

export default Ads