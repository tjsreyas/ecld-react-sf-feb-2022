import React from "react";
import './Card.css'

const data = [
{
  image :'/images/card1.jpg',
  name : 'Dwaraka Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chinese'],
  rating : '4.5'
},
{
  image : '/images/card2.jpg',
  name : 'Rayals Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chin..'],
  rating : '4.2'
},
{
  image : '/images/card3.jpg',
  name : 'Sultans Cafe',
  cuisines : ['North Indian', 'Hyderabadi','...'], 
  rating : '4.0'
},
{
  image : '/images/card4.jpg',
  name : 'Sree Mantra Family Restaurant',
  cuisines : ['Andhra', 'Biryani', 'Chinese', '...'], 
  rating : '4.1'
},
{
  image : '/images/card5.jpg',
  name : 'Nanddana Bhavan',
  cuisines : ['North Indian', 'South Indian', 'Chinese','...'], 
  rating : '3.6'
},
{
  image : '/images/card6.jpg',
  name : 'KFC',
  cuisines : ['Burger', 'Fast Food', 'Biryani....',], 
  rating : '4.2'
},
{
  image : '/images/card7.jpg',
  name : 'Chillies Food Paradise',
  cuisines : ['North Indian', 'Chinese', 'Biry'], 
  rating : '4.1'
},
{
  image : '/images/card8.jpg',
  name : 'Karthikeya Biryani Zone',
  cuisines : ['Biryani', 'Andhra'], 
  rating : '3.2'
},
{
  image : '/images/card9.jpg',
  name : 'Dwaraka Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chinese'], 
  rating : '3.5'
},
{
  image : '/images/card10.jpg',
  name : 'Dwaraka Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chinese'], 
  rating : '3.8'
},
{
  image : '/images/card1.jpg',
  name : 'Dwaraka Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chinese'], 
  rating : '4.0'
},
{
  image : '/images/card2.jpg',
  name : 'Dwaraka Family Restaurant',
  cuisines : ['Biriyani', 'North Indian', 'Chinese'], 
  rating : '3.2'
}
]
function Card() {
  return(
    <div>
      <div className="row">
        {
          data.map(item => {
            return(
              <div className="column">
                <img src= {item.image} alt=""/>
                 <h3>{item.name}</h3>
                 <p>{item.cuisines.join(',')}<span class="fa fa-star checked">{item.rating}</span></p>
               </div>
             )
           })
        }
      </div>
    </div>
)
}

export default Card;