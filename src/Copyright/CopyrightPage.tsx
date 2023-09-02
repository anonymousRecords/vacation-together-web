import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CopyrightPage = () => {
  const navigate = useNavigate();

  return <Styled>

  <div className="wrap">
        <div className="inner">
            <img className="main_logo"
            src="/assets/image/img-copyright.png"
            style={{ width: "38px", height: "42px" }}
            />
            <h1 className="main_title_box">
                <p className="main_title">바캉스 계약서를 <br/>만든 사람들</p>
            </h1>
            <strong className="sub_title">같이가조</strong>
            <dl className="info_box">
                <dt className="info_title">기획</dt>
                <dd className="info_txt">한예진</dd>
            </dl>
            <dl className="info_box">
                <dt className="info_title">퍼블리싱</dt>
                <dd className="info_txt">조혜진</dd>
            </dl>
            <dl className="info_box">
                <dt className="info_title">프론트엔드</dt>
                <dd className="info_txt">강혜정</dd>
                <dd className="info_txt">민세림</dd>
            </dl>
            <dl className="info_box">
                <dt className="info_title">백엔드</dt>
                <dd className="info_txt">나은혜</dd>
                <dd className="info_txt">박재민</dd>
            </dl>
        </div>
    <div className="button_box">
        <button onClick={() => { navigate("/"); }} className="btn_close">
        <img className="main_logo"
        src="/assets/icon/close.png"
        style={{ width: "24px", height: "24px" }}
        />
        </button>
    </div>
  </div>
  </Styled>
};

export default CopyrightPage;


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
        width: 280px;
        box-sizing: border-box;
    }

    .main_logo {
      display: block;
      margin: 0 auto;
      
    }

    .main_title_box {
        position: relative;
        margin-top: 45px;
        ont-weight: 500;
    }

    .sub_title {
        display: block;
        padding-top: 46px;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        text-align: center;

    } 

    .main_title {
        margin: 5px auto 0;
        font-weight: bold;
        font-size: 34px;
        line-height: 1.4;
        text-align: left;
        color: #fff;
    }
    

    .info_box {
        font-size: 0;
        margin-top: 32px;
        box-sizing: border-box;
        text-align: center;
    }
    .info_box + .info_box {
        margin-top: 16px;
    }
    .info_box .info_title {
        font-weight: 700;
        font-size: 12px;
        line-height: 1.4;
        color: #fff;
    }
    .info_box .info_txt {
        display: block;
        font-weight: nomal;
        font-size: 12px;
        color: #fff;
    }

    .button_box {
        position: absolute; 
        top: 20px;
        right: 23px;
    }

    .btn_close {
        display: block;
        padding 10px;
    }
`