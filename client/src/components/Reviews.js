import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: "Mikaela Gallagher",
      text: "Very pleased to have chosen best 1 cleaning. The job was completed efficiently and the communication I received from Sam was very effective. Once completing the job Sam mentioned the house was actually classed as a 6 bedroom rather than a 5 bedroom property due to the size of the living room. However no extra charge was made which was beyond generous. An extremely friendly staff team. Thank you.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Lenita Marxsen",
      text: "Needed someone last minute and (Sam) came on Saturday, the responsiveness was excellent! I forgot my keys however and he was happy to wait. Sam really went the extra mile. I know this because I had done research and compared with other companies and found BEST ONE to be best for value and upon seeing the results (especially where I knew there were troubled areas) Sam was able to make it super clean. Very impressed. Highly recommend this company and their service.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Ryan Hamilton",
      text: "Sam was very nice and friendly. His prices were very competitive and quality of his work was very good. Highly recommend.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Cin",
      text: "Absolutely amazing carpet cleaning service. Sai was so friendly and great at his job. I would highly recommend to anyone who needs their carpets cleaned!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "Olanrewaju Akinpelu",
      text: "Responsiveness is top notch!!! The agent named SAI that did our cleaning was very polite and efficient. He was very swift with the cleaning and no complaint however little. Fantastic job. I highly recommend them. If you get SAI, then you are luckiest!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Kerri Sayers",
      text: "The fellow did a marvellous job. my original carpet cleaner let me down they fitted me in so happy about that!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=20"
    },
    {
      name: "Diana Plesnila",
      text: "Sam did a fantastic job. The carpet is clean and, as agreed, he didn't use any chemicals. Having a 10month old baby, this was very important to me and i was pleasantly surprised that the carpet smelled just clean and didn't have any fragrance. Sam was very reliable, punctual, honest, friendly and professional. Second job with him and i will definitely call him again.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=10"
    },
    {
      name: "AP F",
      text: "They helped me so much! Also, my call was an urgent request - I had 6L of water in my carpet. They got the extraction done and were so lovely and reassuring. I'm happy with the price, its on the lower end of the range for this service.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=16"
    },
    {
      name: "Kirsty Liddicoat",
      text: "I had these guys do a pest service for me at my residence they were on time and very polite and I know how persistent ants are at coming back and as a few spots in my house they did I rang and there was no argument they were so lovely and came back in a few days and on time again. Would 100% recommend these guys!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=23"
    },
    {
      name: "Julia Dyer",
      text: "Very good service. My carpet was cleaned and really well. It was dried very quickly too. Will recommend Astra Pest Control Carpet Cleaning Service.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=26"
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What Our Customers Say</h2>
          <div className="rating-badge">
            <span className="rating-number">4.9</span>
            <div className="stars">★★★★★</div>
            <span className="review-count">500+ Reviews</span>
          </div>
        </div>
      </div>
      
      <div className="reviews-scroll-container">
        <div className="reviews-scroll-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card-modern">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <img src={review.image} alt={review.name} className="author-avatar-img" />
                <div className="author-name">{review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
