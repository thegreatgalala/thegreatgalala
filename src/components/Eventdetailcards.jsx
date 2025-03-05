import React from "react";
import styled from "styled-components";
import Registerbtn from "./Registerbtn";

const Eventdetailscard = ({ image, title, date, price, time, content }) => {
  return (
    <StyledWrapper>
      <form action className="container">
        <div className="input-container">
          <div className="input-content">
            <div className="input-dist">
              <div className="image-holder">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="row">
                <span className="left">{title}</span>
                <span className="right">{date}</span>
              </div>
              <div className="row">
                <span className="left">{price}</span>
                <span className="right">{time}</span>
              </div>
              <p className="content">{content}</p>
              <Registerbtn eventTitle={title} />
            </div>
          </div>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    max-width: 1000px;
    width: 90%;
  }

  .input-container {
    filter: drop-shadow(46px 36px 24px #4090b5)
      drop-shadow(-55px -40px 25px #9e30a9);
    animation: blinkShadowsFilter 8s ease-in infinite;
  }

  .input-content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding-inline: 1em;
  }

  .input-content::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(40px);
    -webkit-clip-path: polygon(
      26% 0,
      66% 0,
      92% 0,
      100% 8%,
      100% 89%,
      91% 100%,
      7% 100%,
      0 92%,
      0 0
    );
    clip-path: polygon(
      26% 0,
      66% 0,
      92% 0,
      100% 8%,
      100% 89%,
      91% 100%,
      7% 100%,
      0 92%,
      0 0
    );
    background: rgba(122, 251, 255, 0.5568627451);
    transition: all 1s ease-in-out;
  }

  .input-content::after {
    content: "";
    position: absolute;
    width: 98%;
    height: 98%;
    box-shadow: inset 0px 0px 20px 20px #212121;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(64, 144, 181, 0.6) 1px,
        rgb(0, 0, 0) 3px,
        hsl(295, 60%, 12%) 5px,
        #153544 4px,
        transparent 0.5%
      ),
      repeating-linear-gradient(
        to left,
        hsl(295, 60%, 12%) 100%,
        hsla(295, 60%, 12%, 0.99) 100%
      );
    -webkit-clip-path: polygon(
      26% 0,
      31% 5%,
      61% 5%,
      66% 0,
      92% 0,
      100% 8%,
      100% 89%,
      91% 100%,
      7% 100%,
      0 92%,
      0 0
    );
    clip-path: polygon(
      26% 0,
      31% 5%,
      61% 5%,
      66% 0,
      92% 0,
      100% 8%,
      100% 89%,
      91% 100%,
      7% 100%,
      0 92%,
      0 0
    );
    animation: backglitch 50ms linear infinite;
  }

  .input-dist {
    z-index: 80;
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    padding-inline: 1em;
    padding-block: 1.2em;
    grid-template-columns: 1fr;
  }

  .input-type {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    font-size: 1.1rem;
    background-color: transparent;
    width: 100%;
    border: none;
  }

  .image-holder img {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #ff00ff;
    margin-top: 50px;
    max-height: 400px;
    object-fit: cover;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: bold;
    margin-top: 15px;
  }

  .left {
    text-align: left;
    flex: 1;
    color: #ff00ff;
  }

  .right {
    text-align: right;
    flex: 1;
    color: #00ffff;
  }

  .content {
    font-size: clamp(1rem, 1.5vw, 1.8rem);
    color: #cccccc;
    text-align: center;
    margin: 15px 0;
  }

  .input-content:focus-within::before {
    transition: all 1s ease-in-out;
    background: hsla(0, 0%, 100%, 0.814);
  }

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 20px 20px 30px #212121;
    }

    50% {
      box-shadow: inset 0px -20px 20px 30px hsl(297, 42%, 10%);
    }

    to {
      box-shadow: inset 0px 20px 20px 30px #212121;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-50%, 20%);
    }

    50% {
      transform: rotate(180deg) translate(40%, 10%);
    }

    to {
      transform: rotate(360deg) translate(-50%, 20%);
    }
  }

  @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-55px -40px 28px #9e30a9);
    }

    25% {
      filter: drop-shadow(46px -36px 24px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-55px 40px 24px #9e30a9);
    }

    50% {
      filter: drop-shadow(46px 36px 30px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-55px 40px 30px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(20px -18px 25px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-20px 20px 25px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(46px 36px 28px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-55px -40px 28px #9e30a9);
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 80%;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 90%;
    }

    .row {
      font-size: clamp(0.9rem, 2vw, 1.5rem);
    }

    .content {
      font-size: clamp(0.8rem, 1.2vw, 1.5rem);
    }
  }

  @media (max-width: 480px) {
    .row {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .left,
    .right {
      text-align: center;
    }

    .content {
      font-size: 1rem;
    }
  }
`;

export default React.memo(Eventdetailscard);
