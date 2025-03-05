import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName }) => {
  return (
    <StyledWrapper>
      <Link to={`/${eventName.toLowerCase().replace(/\s+/g, "")}`}>
        <section className="container">
          <div className="card-container">
            <div className="card-content">
              <div className="card-body">
                <img src={imageUrl} alt="Event" className="card-image" />
              </div>
              <div className="card-footer">
                <span className="title">{eventName}</span>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    display: flex;
    margin: auto;
    aspect-ratio: 16/9;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2em;
  }

  .card-container {
    filter: drop-shadow(80px 60px 40px #4090b5)
      drop-shadow(-90px -70px 50px #9e30a9);
    animation: blinkShadowsFilter 8s ease-in infinite;
  }

  .card-content {
    display: grid;
    align-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 4em;
    margin-top: 30px;
    grid-template-rows: 0.1fr 0.7fr 0.25fr;
    background-color: hsl(296, 59%, 10%);
    width: 20em;
    aspect-ratio: 9/16;
    -webkit-clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
    clip-path: polygon(
      0 0,
      85% 0,
      100% 14%,
      100% 60%,
      92% 65%,
      93% 77%,
      99% 80%,
      99% 90%,
      89% 100%,
      0 100%
    );
  }

  .card-content::before {
    content: "";
    position: absolute;
    width: 300%;
    aspect-ratio: 1/1;
    transform-origin: center;
    background: linear-gradient(
        to bottom,
        transparent,
        transparent,
        #66e0ff,
        #66e0ff,
        #e366ff,
        #e366ff,
        transparent,
        transparent
      ),
      linear-gradient(
        to left,
        transparent,
        transparent,
        #66e0ff,
        #66e0ff,
        #e366ff,
        #e366ff,
        transparent,
        transparent
      );
    animation: rotate 5s infinite linear;
  }

  .card-content::after {
    content: "";
    position: absolute;
    top: 1%;
    left: 1%;
    width: 98%;
    height: 98%;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(64, 144, 181, 0.6) 2px,
        rgb(0, 0, 0) 5px,
        rgba(64, 144, 181, 0.3) 7px,
        #153544 6px,
        transparent 1%
      ),
      repeating-linear-gradient(
        to left,
        hsl(295, 60%, 12%) 100%,
        hsla(295, 60%, 12%, 0.99) 100%
      );
    box-shadow: inset 0px 0px 40px 50px hsl(296, 59%, 10%);
    -webkit-clip-path: inherit;
    clip-path: inherit;
    animation: backglitch 94ms linear infinite;
  }

  .card-body {
    padding-block: 1em;
    z-index: 80;
    display: flex;
    gap: 2.5em;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  .card-image {
    width: 100%; 
    height: auto; 
    max-width: 300px; 
    max-height: 450px;
    border-radius: 15px;
    padding: 15px; 
    display: block;
    margin: 0 auto;
  }

  .card-footer {
    padding-inline: 2em;
    text-align: center;
    position: relative;
    z-index: 10;
  }

  .title {
    width: 100%;
    text-align: center;
    color: hsl(192, 100%, 88%);
    font-size: 3em;
    transition: all ease-in-out 2s linear;
  }

  @keyframes backglitch {
    0% {
      box-shadow: inset 0px 30px 40px 50px hsl(296, 59%, 10%);
    }
    50% {
      box-shadow: inset 0px -30px 40px 50px hsl(296, 59%, 10.2%);
    }
    to {
      box-shadow: inset 0px 30px 40px 50px hsl(296, 59%, 10%);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(-60%, 25%);
    }
    50% {
      transform: rotate(180deg) translate(50%, 15%);
    }
    to {
      transform: rotate(360deg) translate(-60%, 25%);
    }
  }
    @keyframes blinkShadowsFilter {
    0% {
      filter: drop-shadow(92px 72px 56px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-110px -80px 56px #9e30a9);
    }

    25% {
      filter: drop-shadow(92px -72px 48px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-110px 80px 48px #9e30a9);
    }

    50% {
      filter: drop-shadow(92px 72px 60px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-110px 80px 60px rgba(159, 48, 169, 0.2941176471));
    }

    75% {
      filter: drop-shadow(40px -36px 50px rgba(64, 144, 181, 0.8980392157))
        drop-shadow(-40px 40px 50px rgba(159, 48, 169, 0.2941176471));
    }

    to {
      filter: drop-shadow(92px 72px 56px rgba(64, 144, 181, 0.3411764706))
        drop-shadow(-110px -80px 56px #9e30a9);
}
`;

export default ClgEventscard;
