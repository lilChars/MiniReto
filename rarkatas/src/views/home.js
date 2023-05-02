import React from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import './home.css'

function callApi() {
  axios.get('http://localhost:3001/api/products')
    .then(response => {
      console.log(response)
      const productsContainer = document.getElementById('products-container');
      productsContainer.innerHTML = JSON.stringify(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function callApi2() {
  const table = document.querySelector('.input').value;
  axios.get(`http://localhost:3001/api/products/${table}`)
    .then(response => {
      console.log(response);
      const productsContainer = document.getElementById('products-container2');
      productsContainer.innerHTML = JSON.stringify(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}


function callApi3() {
  const table = document.getElementById('type').value;
  const size = document.getElementById('size').value;
  const color = document.getElementById('color').value;
  const quantity = document.getElementById('quantity').value;
  const description = document.getElementById('description').value;
  
  const url = `http://localhost:3001/api/products/${table}`;

  axios.post(url, {size, color, quantity, description})
    .then(response => {
      console.log(response.data);
      alert('Product added successfully');
    })
    .catch(error => {
      console.error(error);
      alert('Error adding product');
    });
}

function callApi4() {
  const table = document.getElementById('type2').value;
  const id = document.getElementById('id2').value;
  const quantity = document.getElementById('quantity2').value;

  const url = `http://localhost:3001/api/products/${table}/${id}`;

  axios.put(url, { quantity })
    .then(response => {
      console.log(response.data);
      alert('Quantity updated successfully');
    })
    .catch(error => {
      console.error(error);
      alert('Error updating quantity');
    });
}

function callApi5() {
  const table = document.getElementById('type3').value;
  const id = document.getElementById('id3').value;
  
  const url = `http://localhost:3001/api/products/${table}/${id}`;

  axios.delete(url)
    .then(response => {
      console.log(response.data);
      alert('Product deleted successfully');
    })
    .catch(error => {
      console.error(error);
      alert('Error deleting product');
    });
}


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marketing Event Page</title>
        <meta property="og:title" content="Marketing Event Page" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">RARKATAS</h1>
              <span className="home-text01">GET YOUR RIZZ</span>
              <button className="home-primary button-primary button-lg button">
                GO TO HOME

              </button>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-speakers-container">
              <h1 className="home-text02">HOODIES</h1>
              <SpeakerCard
                lastName="Buy"
                firstName="CACHS"
                image_src="https://images.unsplash.com/photo-1454793781512-0fafb38dce83?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxob29kaWVzfGVufDB8fHx8MTY4Mjg5OTIzOA&amp;ixlib=rb-4.0.3&amp;h=300"
                role="VP OF Marketing @ BUZZFEED"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                firstName="RARQUI"
                image_src="https://images.unsplash.com/photo-1573742262768-2693bc5b65e1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxob29kaWVzfGVufDB8fHx8MTY4Mjg5OTM3MQ&amp;ixlib=rb-4.0.3&amp;h=300"
                lastName="Buy"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="Buy"
                firstName="SLDOS"
                image_src="https://images.unsplash.com/photo-1509946458702-4378df1e2560?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxob29kaWVzfGVufDB8fHx8MTY4Mjg5OTIzOA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <h1 className="home-text03">CAps</h1>
              <SpeakerCard
                role="marketing officer @ salesforce"
                lastName="Buy"
                firstName="CAPAS"
                image_src="https://images.unsplash.com/photo-1619184324666-a2912be71bad?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjYXBzfGVufDB8fHx8MTY4Mjg5OTY3MA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="social media manager @ vodafone"
                lastName="buy"
                firstName="CASH"
                image_src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGNhcHN8ZW58MHx8fHwxNjgyODk5Njcw&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="creative director @ BBDO"
                lastName="buy"
                firstName="RILLOVSKY"
                image_src="https://images.unsplash.com/photo-1533603531139-2c4d04df8f16?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxjYXBzfGVufDB8fHx8MTY4Mjg5OTY3MA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <h1 className="home-text04">Pants</h1>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="KOOL"
                image_src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBhbnRzfGVufDB8fHx8MTY4Mjg5OTY5NA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="AID"
                image_src="https://images.unsplash.com/photo-1602573991155-21f0143bb45c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxwYW50c3xlbnwwfHx8fDE2ODI4OTk2OTQ&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="MANIACS"
                image_src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHBhbnRzfGVufDB8fHx8MTY4Mjg5OTY5NA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <h1 className="home-text05">Shorts</h1>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="SHORTY"
                image_src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHNob3J0c3xlbnwwfHx8fDE2ODI5MDAwMzA&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="STD SHORT"
                image_src="https://images.unsplash.com/photo-1598522325074-042db73aa4e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHNob3J0c3xlbnwwfHx8fDE2ODI5MDAwMzE&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="S SHORT"
                image_src="https://images.unsplash.com/photo-1602132664379-dd392de2854e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxzaG9ydHN8ZW58MHx8fHwxNjgyOTAwMDMx&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <h1 className="home-text06">SHOES</h1>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="TRIZZ"
                image_src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxzaG9lc3xlbnwwfHx8fDE2ODI5MDAwNTY&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="C SHOES"
                image_src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHNob2VzfGVufDB8fHx8MTY4MjkwMDA1Ng&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="BUY"
                firstName="JAYJAYS"
                image_src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxzaG9lc3xlbnwwfHx8fDE2ODI5MDAwNTY&amp;ixlib=rb-4.0.3&amp;h=300"
              ></SpeakerCard>
            </div>
          </div>
        </div>

      </main>
      <h1 className="home-text08">Products</h1>
      <button className="home-primary button-primary button-lg button"onClick={callApi}>see full list
      <div id="products-container"></div>
 
      </button>

      <h1 className="home-text07">SEE PRODUCT TYPES:</h1>
      <div className="home-container1">
      <input type="text" placeholder="type:" className="input" />
      </div>
      <button className="home-primary button-primary button-lg button"onClick={callApi2}>See Product types
      <div id="products-container2"></div>
      </button>
      
      <h1 className="home-text08">ADD PRODUCT</h1>
      <div className="home-container1">
      <input type="text" placeholder="product type:" className="input" id='type' />
      <input type="text" placeholder="size:" className="input" id='size'/>
      <input type="text" placeholder="color:" className="input" id='color' />
      <input type="text" placeholder="quantity:" className="input" id='quantity'/>
      <input type="text" placeholder="description:" className="input" id='description' />
      </div>
      <button className="home-primary button-primary button-lg button" onClick={callApi3}>DO</button>

      <h1 className="home-text09">ADD NEW QUANTITY OF PRODUCT</h1>
      <input type="text" placeholder="product type:" className="input" id='type2' />
      <input type="text" placeholder="id:" className="input" id='id2' />
      <input type="text" placeholder="quantity:" className="input" id='quantity2' />
      <button className="home-primary button-primary button-lg button"onClick={callApi4}>DO</button>

      <h1 className="home-text07">DELETE PRODUCT</h1>
      <div className="home-container1">
      <input type="text" placeholder="product type:" className="input" id='type3' />
      <input type="text" placeholder="id:" className="input" id='id3' />
      </div>
      <button className="home-primary button-primary button-lg button" onClick={callApi5}>DO</button>

      
    </div>


  )
}

export default Home
