import styled from "styled-components";
import BannerImg from "@img/banner.png"
import BannerCard from "@img/banner-card.png"

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0;

  height: 507px;
  background-image: url(${BannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: inset 0px 8px 28px -15px #2271D1;
  `;

const StyledCallToAction = styled.div`
    width: 40%;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
  & button {
    padding: 1.5rem 2rem;
    font-size: 40px;
    font-weight: 900;
    color: #FFFFFF;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #6BD1FF;
  }
  & h2 {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 0;
  }
  & p {
    font-size: 16px;
  }
`;

const StyledBannerCard = styled.img`
  width: 647px;
  height: 333px;
`;

const Banner = () =>{

  return(
    <StyledBanner>
      <StyledCallToAction>
        <button>FRONT END</button>
        <h2>Challenge React</h2>
        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
      </StyledCallToAction>
      <StyledBannerCard src={BannerCard} />
    </StyledBanner>
  )
};

export default Banner;