import React from "react";
import styled from "styled-components";
import Registerbtn from "./Registerbtn";

const Eventdetailscard = ({ image, title, url }) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="input-container">
          <div className="input-content">
            <div className="input-dist">
              <div className="image-holder">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h2 className="title">{title}</h2>
              <Registerbtn eventurl={url} />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0px;

  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    max-width: 400px;
    min-width:400px /* Fixed width */
    width: 100%;
  }

  .input-container {
    filter: drop-shadow(10px 10px 15px #4090b5)
      drop-shadow(-10px -10px 15px #9e30a9);
    animation: blinkShadowsFilter 8s ease-in infinite;
  }

  .input-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1em;
  }

  .input-dist {
    z-index: 80;
    display: grid;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 1em;
  }

  .image-holder img {
    width: 100%;
    max-width: 350px;
    height: 250px; /* Fixed height */
    border-radius: 10px;
    border: 2px solid #ff00ff;
    object-fit: cover; /* Prevents stretching */
  }

  .title {
    font-size: 1.5rem;
    color: #ffff;
    margin-top: 0px;
    font-family:LexendDecaRegular 

  }

  @keyframes blinkShadowsFilter {
    0%,
    100% {
      filter: drop-shadow(10px 10px 15px rgba(64, 144, 181, 0.5))
        drop-shadow(-10px -10px 15px #9e30a9);
    }
    50% {
      filter: drop-shadow(10px -10px 15px rgba(64, 144, 181, 0.9))
        drop-shadow(-10px 10px 15px #9e30a9);
    }
  }
`;

export default React.memo(Eventdetailscard);
