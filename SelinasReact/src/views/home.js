import React from 'react'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>SELINAS Online Store</title>
        <meta property="og:title" content="SELINAS Online Store" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-container01"></div>
            <div className="home-middle">
              <div className="home-left">
                <span className="navbar-link">SHOP</span>
                <span className="navbar-link">RARCMX</span>
              </div>
              <span className="navbar-logo-title">
                <span>SELINAS</span>
                <br></br>
              </span>
              <div className="home-right">
                <span className="navbar-link">ABOUT</span>
                <span className="navbar-link">CONTACT</span>
              </div>
            </div>
            <div className="home-icons">
              <img
                alt="iconsbxscart3271299"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                className="home-image"
              />
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image1"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image2"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container02">
                <span className="home-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <span className="home-text06">SHOP</span>
                <span className="home-text07">LOOKBOOK</span>
                <span className="home-text08">SPECIAL</span>
                <span className="home-text09">ABOUT</span>
                <span className="home-text10">BLOG</span>
                <span className="home-text11">CONTACT</span>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container03">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image3"
                  />
                  <span className="home-text12">
                    <span>Streetwear</span>
                    <br></br>
                    <span>trends - 2023</span>
                  </span>
                </div>
                <h1 className="home-text16 Heading-1">SeleCTS</h1>
                <div className="home-container04">
                  <span className="home-text17">FROM</span>
                  <span className="home-text18">$99</span>
                </div>
                <div className="home-btn-group">
                  <button className="button">API PRODUCTS</button>
                </div>
              </div>
              <img
                alt="image23271449"
                src="https://images.unsplash.com/photo-1628030328071-538b251a4455?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxzdHJlZXR3ZWFyfGVufDB8fHx8MTY4MjcxMDYxMA&amp;ixlib=rb-4.0.3&amp;w=600"
                className="home-image4"
              />
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                image_src="https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGhvb2RpZXxlbnwwfHx8fDE2ODI3MTE1NTA&amp;ixlib=rb-4.0.3&amp;w=1100"
                category_img="https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGhvb2RpZXxlbnwwfHx8fDE2ODI3MTE1NTA&amp;ixlib=rb-4.0.3&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Pants"
                category_img="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Fcargo-pant%2Fcargo-pant-png-transparent-image--0.png&amp;tbnid=McI5lN_Dr5h5DM&amp;vet=12ahUKEwj8x8ScrM3-AhUdKN4AHYfdC3gQMygEegUIARDAAQ..i&amp;imgrefurl=https%3A%2F%2Fwww.transparentpng.com%2Fcats%2Fcargo-pant-119.html&amp;docid=uFOgY18t4UqnVM&amp;w=400&amp;h=533&amp;q=pants%20png&amp;ved=2ahUKEwj8x8ScrM3-AhUdKN4AHYfdC3gQMygEegUIARDAAQ"
              ></CategoryCard>
              <CategoryCard
                name="Shorts"
                category_img="https://images.unsplash.com/photo-1573469635233-7974cb21a915?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxsYW1wc3xlbnwwfHx8fDE2NTI4MjIwMTY&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard>
              <CategoryCard
                name="Shoes"
                category_img="https://images.unsplash.com/photo-1558882224-dda166733046?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGRlY29yYXRpb258ZW58MHx8fHwxNjUyODIyMDkx&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard>
              <CategoryCard
                name="Caps"
                category_img="https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjb2xsZWN0aW9uc3xlbnwwfHx8fDE2NTI4MjIxMTE&amp;ixlib=rb-1.2.1&amp;h=200"
              ></CategoryCard>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container05">
              <h3 className="home-text19">
                <span>RARCS SPECIALS</span>
                <br></br>
              </h3>
              <span className="home-text22">hoodies</span>
            </div>
          </div>
          <div className="home-container06 max-width-container">
            <div className="home-container07">
              <span className="home-text23">
                <span>
                  Welcome to Selinas, the shop where you can find the most
                  unique and modern furniture, designer-made home decoration
                  items, and exceptional product quality since 1997. Our legacy
                  guarantees special prices for all of our product line-up.
                  Lorem ipsum, consectetur adipiscing elit duis tristique
                  sollicitudin nibh sit amet commodo nulla facilisi nullam
                  vehicula ipsum a arcu cursus vitae congue. Consectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet
                  commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                  vitae congue. Come and explore our amazing collection at
                  Selinas!
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="M3271427"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                className="home-svg"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading></SectionHeading>
            <div className="home-gallery">
              <div className="home-left1">
                <ItemCard
                  name="RARCS HOOD"
                  value="99"
                  image_src="https://images.unsplash.com/photo-1633292750937-120a94f5c2bb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxob29kaWV8ZW58MHx8fHwxNjgyNzExNTUw&amp;ixlib=rb-4.0.3&amp;w=1500"
                  rootClassName="rootClassName4"
                ></ItemCard>
              </div>
              <div className="home-right1">
                <div className="home-top">
                  <div className="home-left2">
                    <ItemCard
                      name="CHACHA'S SIZE"
                      value="350"
                      image_src="https://images.unsplash.com/photo-1624939461074-0a9592490d95?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxqb3JkYW5zfGVufDB8fHx8MTY4MjcxMTYzOQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                      rootClassName="rootClassName2"
                    ></ItemCard>
                  </div>
                  <div className="home-right2">
                    <ItemCard
                      name="REALG CAP"
                      value="25"
                      image_src="https://images.unsplash.com/photo-1527813972756-2890936000e9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGNhcHN8ZW58MHx8fHwxNjgyNzExNjYz&amp;ixlib=rb-4.0.3&amp;w=1500"
                      rootClassName="rootClassName3"
                    ></ItemCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container08">
              <h3 className="home-text26 Heading-3">SELINAS</h3>
              <span className="home-text27">
                <span>4517 Washington Ave. Manchester, Kentucky 39495,</span>
                <br></br>
                <span>United States</span>
              </span>
              <span className="home-text30">contact@selinas.com</span>
            </div>
            <div className="home-links-container">
              <div className="home-container09">
                <span className="home-text31">Categories</span>
                <span className="home-text32">Hoodies</span>
                <span className="home-text33">Caps</span>
                <span className="home-text34">Pants</span>
                <span className="home-text344">Shorts</span>
                <span className="home-text35">Shoes</span>
              </div>
              <div className="home-container10">
                <span className="home-text36">Company</span>
                <span className="home-text37">Shop</span>
                <span className="home-text38">Specials</span>
              </div>
              <div className="home-container11">
                <span className="home-text39">Resources</span>
                <span className="home-text40">Contact us</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
