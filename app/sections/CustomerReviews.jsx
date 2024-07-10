import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h2 className="text-4xl font-bold font-palanquin text-center">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h2>
            
            <p className="font-montserrat leading-7 text-slate-gray text-lg text-center mt-4 max-w-lg mx-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      
            <div className="flex max-lg:flex-col justify-evenly items-center gap-14 mt-24">
            {reviews.map((review)=>{
                return(
                    <ReviewCard key={review.customerName}
                        {...review}
                    />
                )
            })}
            </div>
            
        </section>
    )
}
export default CustomerReviews;