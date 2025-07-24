import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="">
        <h2 className="text-center lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra mt-40">
          Where to Find Us
        </h2>
        <div className="content lg:ml-35 -mt-40">
          <div className="">
            <div className="mb-5">
              <h3>Visit Our Cafe</h3>
              <p>
                Exodus, Blk. 4, East bank road, <br />
                Floodway, Sta. Ana, Cainta, 1920 Rizal
              </p>
            </div>

            <div className="mb-5">
              <h3>Contact Us</h3>
              <p>09555335909</p>
              <p>zenbuckscafe@gmail.com</p>
            </div>

            <div className="mb-5">
              <h3>Open Every Day</h3>
              {openingHours.map((time) => (
                <p key={time.day}>
                  {time.day} : {time.time}
                </p>
              ))}
            </div>

            <div>
              <h3>Socials</h3>

              <div className="flex-center gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <img src={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:mt-8">
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.451942988717!2d121.11814509999999!3d14.552982600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c742aac42f23%3A0xc57d80d32bc5a1e5!2sZENBUCKS%20CAFE!5e0!3m2!1sen!2sph!4v1753351084548!5m2!1sen!2sph"
                width="600"
                height="490"
                style={{ border: 0, position: "relative", zIndex: 100 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
