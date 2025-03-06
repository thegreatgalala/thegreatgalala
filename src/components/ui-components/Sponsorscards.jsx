import React from "react";
import styled from "styled-components";

const images = [
  { title: "Image 1", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 2", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 3", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 4", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 5", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 6", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 7", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 8", src: "https://wallpaperaccess.com/full/809523.jpg" },
  { title: "Image 9", src: "https://wallpaperaccess.com/full/809523.jpg" },
];

const Sponsorscards = () => {
  return (
    <StyledWrapper>
      <div
        className="slider"
        style={{
          "--width": "200px",
          "--height": "200px",
          "--quantity": images.length,
        }}
      >
        <div className="list">
          {images.map((img, index) => (
            <div
              className="item"
              style={{ "--position": index + 1 }}
              key={index}
            >
              <div className="image-container">
                <img src={img.src} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slider {
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider .list {
    display: flex;
    gap: 80px;
    animation: autoRun 25s linear infinite;
  }

  .slider .list .item {
    flex: 0 0 200px;
    height: 200px;
    opacity: 0.7;
    transition: opacity 0.5s;
    padding: 10px;
  }

  .slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes autoRun {
    from {
      transform: translateX(0);
    }
    50% {
      opacity: 1;
    }
    to {
      transform: translateX(-50%);
    }
  }

  .slider:hover .list {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    .slider .list {
      animation: autoRunResponsive 10s linear infinite;
    }

    @keyframes autoRunResponsive {
      from {
        transform: translateX(0);
      }
      50% {
        opacity: 1;
      }
      to {
        transform: translateX(-50%);
      }
    }
  }
`;

export default Sponsorscards;
