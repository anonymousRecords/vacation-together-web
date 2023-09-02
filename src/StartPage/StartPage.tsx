import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return <Styled>

  <div className="wrap">
      <div className="inner">
        <img className="main_logo"
          src="/assets/image/logo-light-green.png"
          style={{ width: "86px", height: "102px" }}
        />
          <h1 className="main_title_box">
              <span className="sub_title">9월의 늦은 얼레벌레</span>
              <p className="main_title">바캉스 계약서</p>
          </h1>
          <div className="button_box">
              <button onClick={() => { navigate("/enter"); }} className="btn_link_type01">바캉스 입장하기</button>
          </div>
          
          <div className="info_box">
              <span className="info_txt">아직 바캉스가 없으신가요?</span>
              <button onClick={() => { navigate("/create"); }} className="btn_link_type03">바캉스 생성하기</button>
          </div>
      </div>
      <div className="copyright">
        <button onClick={() => { navigate("/copyright"); }} className="btn_link_type04">함께한 사람들</button>
      </div>
  </div>
  </Styled>
};

export default StartPage;


const Styled = styled.div`

    .wrap {
        position: relative;
        min-width: 360px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000;
        margin: 0 auto;
        box-sizing: border-box;
        
    }
    .inner {
        margin: 0 auto;
    }

    .main_logo {
      display: block;
      margin: 0 auto;
      
    }

    .main_title_box {
        position: relative;
        margin : 0;
        
    }

    .sub_title {
        display: block;
        padding-top: 68px;
        font-size: 22px;
        color: #fff;
        text-align: center;
    } 

    .main_title {
        margin: 5px auto 0;
        font-weight: bold;
        font-size: 34px;
        line-height: 1.4;
        text-align: center;
        color: #fff;
    }

    .button_box {
        margin-top : 56px;
    }
    
    .button_box .btn_link_type01 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 50px;
        margin : 0 auto;
        background-color: #33FF00;
        border-radius: 8px;
        font-weight: bold;
        text-align: center;
        color: #000;
    }

    .info_box {
        margin-top: 12px;
        padding: 0 70px;
        box-sizing: border-box;
        font-size: 0;
    }

    .info_box .info_txt {
        display: inline-block;
        font-weight: 600;
        font-size: 12px;
        color: #fff;
    }

    .info_box .btn_link_type03 {
        margin-left : 5px;
        display: inline-block;
        font-weight: normal;
        font-size: 12px;
        color: #fff;
        border-bottom: 1px solid #fff;
    }
    .copyright {
      display: block;
      position: absolute;
      bottom: 0;
      width: 280px;
      text-align: center;
    }
    .copyright .btn_link_type04 {
        display: inline-block;
        margin-bottom: 30px;
        font-weight: normal;
        font-size: 12px;
        color: #999;
        text-align: center;
        border-bottom: 1px solid #999;
    }
`