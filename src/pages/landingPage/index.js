import { Button, Navigation, ServiceCard } from "../../components";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <section className="navigation_section">
        <div className="landing_container">
          <Navigation />
        </div>
      </section>
      <section className="landing_banner">
        <div className="landing_container">
          <div className="banner_flex">
            <main>
              <h1>
                Naurix is an IT
                <br /> Servicing company.
              </h1>
              <p className="big_text">
                We are a reliable software development company that adopts a
                user-friendly problem-solving approach to deliver business
                solutions through cutting- edge technological services.
              </p>
              <Button label={"Get in Touch"} />
            </main>

            <aside>
              <div>
                <section style={{ marginTop: "200px", paddingRight: "20px" }}>
                  <img
                    style={{ marginLeft: "40%", paddingBottom: "20px" }}
                    src={"/assets/landingPage/banner/strokes.svg"}
                    alt={""}
                  />
                  <img
                    width={"100%"}
                    src={"/assets/landingPage/banner/2.png"}
                    alt={""}
                  />
                </section>
                <section>
                  <img
                    width={"100%"}
                    src={"/assets/landingPage/banner/1.png"}
                    alt={""}
                  />
                  <img
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                    src={"/assets/landingPage/banner/moreStrokes.svg"}
                    alt={""}
                  />
                </section>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="landing_container">
          <h1>About Us</h1>
          <p style={{ marginTop: "20px" }} className="big_text">
            We are a growing software development company seeking to collaborate
            with prospects to provide
            <br /> strategic, value-driven, & personalized IT-related services
            to foster growth. We believe collaboration &<br />
            leadership are critical for success in the future of work..
          </p>

          <div className="about_flex">
            <img
              className="about_img"
              src={"/assets/landingPage/aboutUs/1.png"}
              alt={""}
            />
            <div className="about_text">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Mission Statement</h3>
                <img src={"/assets/landingPage/aboutUs/dash.svg"} alt={""} />
              </div>
              <p className="normal_text" style={{ marginTop: "20px" }}>
                We can help you achieve all your business goals through our
                seamless and immersive user-friendly experiences.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "40px",
                }}
              >
                <h3>Unique Value Proposition</h3>
                <img src={"/assets/landingPage/aboutUs/dash.svg"} alt={""} />
              </div>
              <p className="normal_text" style={{ marginTop: "20px" }}>
                At Naurix, we combine design thinking and a personalized
                cutting-edge technological service as a problem-solving approach
                to create seamless, budget-friendly, and value-driven business
                development solutions for our partners.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "40px",
                }}
              >
                <h3>Vision Statement</h3>
                <img src={"/assets/landingPage/aboutUs/dash.svg"} alt={""} />
              </div>
              <p className="normal_text" style={{ marginTop: "20px" }}>
                Discover the limitless possibilities of collaboration with our
                business development solutions aimed at improving your quality
                of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section">
        <div className="landing_container">
          <div className="service_flex">
            <div className="service_flex_text">
              <h1>Service</h1>
              <p style={{ marginTop: "20px" }} className="big_text">
                We believe that success lies in transparency and an involvement
                in each phase of the product life cycle with our partners
                through each phase of development. Our goal is to translate your
                vision into reality by forging relationships that transcend
                code.
              </p>
              <div style={{ marginTop: "30px" }}>
                <Button label={"Download Brochure"} width={"222px"} />
              </div>
            </div>

            <aside className="service_flex_cards">
              <div className="service_containers">
                <ServiceCard
                  bg={"rgba(29, 179, 180, 1)"}
                  img={"/assets/landingPage/services/1.svg"}
                  content={"WEB DEVELOPMENT"}
                />

                <ServiceCard
                  bg={"rgba(28, 80, 156, 0.8)"}
                  img={"/assets/landingPage/services/2.svg"}
                  content={"MOBILE DEVELOPMENT"}
                />
              </div>

              <div
                className="service_containers"
                style={{ marginTop: "200px" }}
              >
                <ServiceCard
                  bg={"rgba(28, 80, 156, 0.8)"}
                  img={"/assets/landingPage/services/3.svg"}
                  content={"TECHNOLOGY INTEGRATED SERVICES"}
                />

                <ServiceCard
                  bg={"rgba(29, 179, 180, 1)"}
                  img={"/assets/landingPage/services/4.svg"}
                  content={"TECHNOLOGY INTEGRATED SERVICES"}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="landing_footer">
        <div className="landing_container">
          <div className="footer_flex">
            <main>
              <h1>Ready to develop your business idea?</h1>
              <p>Our experts are ready to work with you</p>
            </main>
            <aside>
              <h4>Address</h4>
              <p style={{ marginTop: "30px" }}>Line 1</p>
              <p>Line 2</p>
              <p>City</p>
              <p>State</p>
              <p>Country</p>
            </aside>

            <div style={{ display: "flex" }}>
              <div className="socials">
                <img
                  src={"/assets/landingPage/socials/instagram.svg"}
                  alt={""}
                />
                <p style={{ marginLeft: "20px" }}>Instagram</p>
              </div>
              <div className="socials">
                <img src={"/assets/landingPage/socials/twitter.svg"} alt={""} />
                <p style={{ marginLeft: "20px" }}>twitter</p>
              </div>
              <div className="socials">
                <img
                  src={"/assets/landingPage/socials/facebook.svg"}
                  alt={""}
                />
                <p style={{ marginLeft: "20px" }}>Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { LandingPage };
