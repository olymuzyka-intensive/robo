import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Coaches from "./Coaches";

function Trainer() {
  const [showModal, setShowModal] = useState("");
  const [showChapter, setShowChapter] = useState("tab1");

  const openSlideDetails = (slideId) => {
    setShowModal(slideId);
  };

  const toggleTab = (event) => {
    setShowChapter(event.target.value);
  };

  const toggleTab1 = () => {
    setShowChapter("tab1");
  };
  const toggleTab2 = () => {
    setShowChapter("tab2");
  };
  const toggleTab3 = () => {
    setShowChapter("tab3");
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    variableWidth: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ul className="coaches__slider">
      <Slider {...settings}>
        {Coaches.map((coache) => (
          <li key={coache.id} className="coaches__item">
            <img src={coache.image} className="coaches__item_img" />
            <div className="coaches__item_name">{coache.name}</div>
            <div className="coaches__item_info">{coache.info}</div>
            <div
              className="coaches__item_more"
              data-info={coache.id}
              onClick={() => openSlideDetails(coache.id)}
            >
              Подробнее
            </div>
            {/* <div className="coaches__info_overlay"> */}
            {/* </div> */}
          </li>
        ))}
      </Slider>

      {Coaches.map((coache) => (
        <div
          key={coache.id}
          className={`${
            showModal === coache.id ? "coaches__info open" : "coaches__info"
          }`}
          data-info={coache.id}
        >
          <div className="coaches__info-content">
            <div className="coaches__info_top">
              <img src={coache.image} className="coaches__item_img" />
              <div className="coaches__item_center">
                <div className="coaches__item_name--popup">{coache.name}</div>
                <div className="coaches__item_info--popup">{coache.info}</div>
                <div className="coaches__item_socials">
                  <a href={coache.facebook} target="blank">
                    <svg
                      className="coaches__item_socials-facebook"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM16.5635 15.6589V23.8197H13.1869V15.6592H11.5V12.8469H13.1869V11.1585C13.1869 8.86425 14.1395 7.5 16.8457 7.5H19.0988V10.3126H17.6905C16.637 10.3126 16.5673 10.7056 16.5673 11.4391L16.5635 12.8466H19.1147L18.8162 15.6589H16.5635Z"
                        fill="#141024"
                      />
                    </svg>
                  </a>
                  <a href={coache.inst} target="blank">
                    <svg
                      className="coaches__item_socials-inst"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM11.702 7.04833C12.5554 7.0095 12.8281 7 15.0007 7H14.9983C17.1716 7 17.4433 7.0095 18.2966 7.04833C19.1483 7.08733 19.73 7.22217 20.24 7.42C20.7666 7.62417 21.2116 7.89751 21.6567 8.34251C22.1017 8.78719 22.375 9.23352 22.58 9.7597C22.7767 10.2684 22.9117 10.8497 22.9517 11.7014C22.99 12.5547 23 12.8274 23 15.0001C23 17.1728 22.99 17.4448 22.9517 18.2981C22.9117 19.1495 22.7767 19.731 22.58 20.2398C22.375 20.7658 22.1017 21.2121 21.6567 21.6568C21.2121 22.1018 20.7665 22.3758 20.2405 22.5802C19.7315 22.778 19.1495 22.9128 18.2978 22.9518C17.4444 22.9907 17.1726 23.0002 14.9998 23.0002C12.8272 23.0002 12.5547 22.9907 11.7014 22.9518C10.8499 22.9128 10.2684 22.778 9.75936 22.5802C9.23352 22.3758 8.78719 22.1018 8.34268 21.6568C7.89784 21.2121 7.62451 20.7658 7.42 20.2396C7.22234 19.731 7.0875 19.1496 7.04833 18.298C7.00967 17.4446 7 17.1728 7 15.0001C7 12.8274 7.01 12.5546 7.04817 11.7012C7.0865 10.8499 7.2215 10.2684 7.41984 9.75953C7.62484 9.23352 7.89818 8.78719 8.34318 8.34251C8.78785 7.89768 9.23419 7.62434 9.76036 7.42C10.269 7.22217 10.8504 7.08733 11.702 7.04833Z"
                        fill="#141024"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2831 8.4417C14.4225 8.44148 14.5724 8.44155 14.7341 8.44162L15.0008 8.4417C17.1368 8.4417 17.39 8.44936 18.2335 8.4877C19.0135 8.52336 19.4368 8.6537 19.7188 8.7632C20.0922 8.9082 20.3583 9.08154 20.6382 9.36154C20.9182 9.64154 21.0915 9.90821 21.2368 10.2815C21.3464 10.5632 21.4769 10.9866 21.5124 11.7666C21.5507 12.6099 21.559 12.8632 21.559 14.9983C21.559 17.1333 21.5507 17.3866 21.5124 18.23C21.4767 19.01 21.3464 19.4333 21.2368 19.715C21.0918 20.0883 20.9182 20.3542 20.6382 20.634C20.3582 20.914 20.0923 21.0873 19.7188 21.2323C19.4372 21.3423 19.0135 21.4723 18.2335 21.508C17.3901 21.5463 17.1368 21.5547 15.0008 21.5547C12.8646 21.5547 12.6114 21.5463 11.7681 21.508C10.9881 21.472 10.5647 21.3417 10.2826 21.2322C9.90923 21.0872 9.64256 20.9138 9.36256 20.6338C9.08256 20.3538 8.90922 20.0878 8.76389 19.7143C8.65439 19.4326 8.52388 19.0093 8.48838 18.2293C8.45005 17.386 8.44238 17.1326 8.44238 14.9963C8.44238 12.8599 8.45005 12.6079 8.48838 11.7646C8.52405 10.9846 8.65439 10.5612 8.76389 10.2792C8.90889 9.90588 9.08256 9.63921 9.36256 9.35921C9.64256 9.0792 9.90923 8.90587 10.2826 8.76053C10.5646 8.65053 10.9881 8.52053 11.7681 8.4847C12.5061 8.45136 12.7921 8.44136 14.2831 8.4397V8.4417ZM19.271 9.77005C18.741 9.77005 18.311 10.1996 18.311 10.7297C18.311 11.2597 18.741 11.6897 19.271 11.6897C19.8011 11.6897 20.2311 11.2597 20.2311 10.7297C20.2311 10.1997 19.8011 9.76971 19.271 9.76971V9.77005ZM10.8926 15.0001C10.8926 12.7313 12.732 10.8918 15.0008 10.8917C17.2696 10.8917 19.1087 12.7312 19.1087 15.0001C19.1087 17.269 17.2698 19.1076 15.001 19.1076C12.7321 19.1076 10.8926 17.269 10.8926 15.0001Z"
                        fill="#141024"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.0007 12.3335C16.4734 12.3335 17.6674 13.5273 17.6674 15.0002C17.6674 16.4729 16.4734 17.6669 15.0007 17.6669C13.5278 17.6669 12.334 16.4729 12.334 15.0002C12.334 13.5273 13.5278 12.3335 15.0007 12.3335V12.3335Z"
                        fill="#141024"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="coaches__info_close"
                onClick={() => setShowModal(null)}
              >
                Закрыть
              </div>
              <div
                className="coaches__info_close--mobile"
                onClick={() => setShowModal(null)}
              >
                x
              </div>
            </div>
            <div className="coaches__info_bottom">
              <select className="coaches__info_chapter--mobile" onChange={toggleTab} value={showChapter}>
                <option value="tab1"
                  className={
                    showChapter === "tab1"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                >
                  Образование
                </option>
                <option value="tab2"
                  className={
                    showChapter === "tab2"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                >
                  Опыт работы
                </option>
                <option value="tab3"
                  className={
                    showChapter === "tab3"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                >
                  Награды
                </option>
              </select>

              <div className="coaches__info_chapter">
                <div
                  className={
                    showChapter === "tab1"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                  onClick={toggleTab1}
                >
                  Образование
                </div>
                <div
                  className={
                    showChapter === "tab2"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                  onClick={toggleTab2}
                >
                  Опыт работы
                </div>
                <div
                  className={
                    showChapter === "tab3"
                      ? "coaches__info_chapter-nav active"
                      : "coaches__info_chapter-nav"
                  }
                  onClick={toggleTab3}
                >
                  Награды
                </div>
              </div>
              <div className="coaches__info_chapter-content">
                { showChapter === 'tab1' && <div
                  className={
                    showChapter === "tab1"
                      ? "coaches__info_chapter-item active"
                      : "coaches__info_chapter-item"
                  }
                >
                  {coache.timeEdu} <br />
                  {coache.placeEdu} <br />
                  Факультет: {coache.facultyEdu} <br />
                  Специальность: {coache.specEdu} <br />
                  Форма обучения: {coache.formEdu} <br />
                  <h3 className="coaches__info_course-title">
                    Курсы и тренинги
                  </h3>
                  {coache.timeCourse} <br />
                  Программа дополнительного образования
                  {coache.programCourse} <br />
                  Место проведения: {coache.placeCourse} <br />
                </div>}
                { showChapter === 'tab2' && <div
                  className={
                    showChapter === "tab2"
                      ? "coaches__info_chapter-item active"
                      : "coaches__info_chapter-item"
                  }
                >
                  {coache.experiencePeriod} <br />
                  {coache.experiencePost} <br />
                  Обязанности: {coache.experienceCharge} <br />
                </div>}
                { showChapter === 'tab3' && <div
                  className={
                    showChapter === "tab3"
                      ? "coaches__info_chapter-item active"
                      : "coaches__info_chapter-item"
                  }
                >
                  {coache.awardsTitle} <br />
                  {coache.awards}
                </div>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Trainer;