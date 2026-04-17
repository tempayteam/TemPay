import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-col foot-brand">
          <a className="foot-logo" href="#">
            <div className="foot-mark">$</div>
            Tempay
          </a>
          <p className="foot-tagline">
            On-chain payments, simplified.
            <br />
            Built for the decentralized web.
          </p>
          <div className="foot-socials">
            <a
              href="https://x.com/tempay_tempo"
              target="_blank"
              rel="noreferrer"
              className="foot-social-btn"
              title="Twitter"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.861-8.17-10.639h6.17l4.271 5.64 5.495-5.64Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
           
            <a
              href="#"
              className="foot-social-btn"
              title="Discord — Coming Soon"
              aria-label="Discord"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 -28.5 256 256"
                fill="currentColor"
              >
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=team.tempay@gmail.com"
              className="foot-social-btn"
              title="Email"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="foot-col">
          <p className="foot-col-title">Product</p>
          <a href="#" className="foot-link">
            Protocol
          </a>
          <a href="#features" className="foot-link">
            Features
          </a>
          <a href="#hiw" className="foot-link">
            How it works
          </a>
          <Link to="/whitelist" className="foot-link">
            Join Whitelist
          </Link>
        </div>

        <div className="foot-col">
          <p className="foot-col-title">Developers</p>
          <span className="foot-link foot-soon-link">
            Documentation <span className="foot-soon-tag">Soon</span>
          </span>
          <span className="foot-link foot-soon-link">
            API Reference <span className="foot-soon-tag">Soon</span>
          </span>
          <span className="foot-link foot-soon-link">
            GitHub <span className="foot-soon-tag">Soon</span>
          </span>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2026 Tempay. All rights reserved.</p>
        <p className="foot-chain">
          Built on <span>Tempo</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
