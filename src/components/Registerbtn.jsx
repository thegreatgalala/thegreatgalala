import React from "react";
import styled from "styled-components";

const Registerbtn = () => {
  return (
    <StyledWrapper>
      <form action className="container">
        <input
          className="input-btn"
          type="radio"
          id="valueIs-1"
          name="valueIs-radio"
          defaultChecked
          defaultValue="valueIs-1"
        />
        <label className="neon-btn" htmlFor="valueIs-1">
          <span className="span" />
          <span className="txt">Register</span>
        </label>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 1.2em;
    display: grid;
    gap: 1em;
    place-content: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .container input[type="radio"] {
    display: none;
  }

  .input-btn:is(:checked) + .neon-btn .span {
    inset: 2px;
    background-color: #4090b5;
    background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        #4090b5 1px,
        #4090b5 3px,
        #4090b5 5px,
        #4090b5 4px,
        transparent 0.5%
      ),
      repeating-linear-gradient(
        to left,
        hsl(295, 60%, 12%) 100%,
        hsl(295, 60%, 12%) 100%
      );
    box-shadow: inset 0 40px 20px hsl(296, 59%, 10%);
  }

  .input-btn:is(:checked) + .neon-btn .txt {
    text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5,
      0 0 20px rgba(255, 255, 255, 0.616);
    color: rgb(255, 255, 255);
    animation: colorchange 0.3s ease;
  }

  .input-btn:is(:checked) + .neon-btn::before {
    animation-duration: 0.6s;
  }

  .input-btn:is(:checked) + .neon-btn::after {
    animation-duration: 0.6s;
  }

  .neon-btn {
    width: 300%;
    max-width: 200px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: transparent;
    position: relative;
    overflow: hidden;
    transition: all 2s ease-in-out;
    -webkit-clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
  }

  .neon-btn .span {
    display: flex;
    -webkit-clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    clip-path: polygon(
      6% 0,
      93% 0,
      100% 8%,
      100% 86%,
      90% 89%,
      88% 100%,
      5% 100%,
      0% 85%
    );
    position: absolute;
    inset: 1px;
    background-color: #212121;
    z-index: 1;
  }

  .neon-btn .txt {
    text-align: right;
    position: relative;
    z-index: 2;
    color: aliceblue;
    font-size: 1em;
    transition: all ease-in-out 2s linear;
    text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;
  }

  .neon-btn::before {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 20px #9e30a9;
    background-image: conic-gradient(
      #9e30a9,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      #9e30a9
    );
    animation: rotate 4s linear infinite -2s;
  }

  .neon-btn::after {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 10px #4090b5;
    background-image: conic-gradient(
      #4090b5,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      #4090b5
    );
    animation: rotate 4s linear infinite;
  }

  @media (max-width: 768px) {
    .neon-btn {
      height: 50px;
      max-width: 30px;
    }

    .neon-btn .txt {
      font-size: 1.25em;
    }
  }

  @media (max-width: 480px) {
    .container {
      width: 90%;
    }

    .neon-btn {
      height: 50px;
      max-width: 270px;
    }

    .neon-btn .txt {
      font-size: 1.1em;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes colorchange {
    0% {
      text-shadow: 0px 0px 0px #9e30a9, 0px 0px 0px #4090b5,
        0 0 0px rgba(255, 255, 255, 0.616);
    }

    50% {
      text-shadow: -6px 5px 1px #9e30a9, 5px 11px 1px #4090b5,
        0 0 20px rgba(255, 255, 255, 0.616);
    }

    to {
      text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5,
        0 0 20px rgba(255, 255, 255, 0.616);
    }
  }

  @keyframes backgroundchange {
    0% {
      background-color: transparent;
    }

    50% {
      background-color: #4090b5;
    }

    to {
      background-color: transparent;
    }
  }
`;

export default Registerbtn;
