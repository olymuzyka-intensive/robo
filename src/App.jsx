import React from 'react';
import Trainer from './layouts/Trainer';

const App = () => {
  return (
    <div className='app-container'>
        <header className="header" id='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo"> <a href="/"> ROBO.SCHOOL</a></div>
                    <nav>
                        <ul className="header__nav">
                            <li className="header__nav_item"> <a href="#about">О школе</a></li>
                            <li className="header__nav_item"><a href="#coaches">Тренеры</a></li>
                            <li className="header__nav_item"><a href="#rate">Стоимость</a></li>
                        </ul>
                    </nav>
                    <div className="header__phone"><a href="tel:+7 800 000 11 22">+7 800 000 11 22</a></div>
                </div>
            </div>
        </header>

        <main>
            <section className="promo">
                <div className="container">
                    <div className="promo__row">
                        <div className="promo__row_left">
                            <h1 className="promo__title">ROBO SCHOOL</h1>
                            <div className="promo__text">Курсы повышения квалификации по робототехнике для педагогов начальной школы</div>
                            <a href="#rate">
                                <button className="btn btn--sign">Записаться на курс</button>
                            </a>
                        </div>
                        <div className="promo__row_right">
                            <svg className="promo__row_right promo__row_right-1" width="783" height="784" viewBox="0 0 783 784" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="391.5" cy="392.132" r="351.5" stroke="white" strokeWidth="80"/>
                                </svg>
                                
                            <img className="promo__row_right promo__row_right-2" src="/src/img/promo-img.png" alt="promo-img"/>
                        </div>
                    </div>
                </div>
            </section>
    
            <section id="about" className="about">
                <div className="container">
                    <div className="about__row">
                        <div className="about__description">
                            <span>Robo School – </span>учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
                        </div>
                        <div className="about__why">
                            <div className="about__why_col">
                                <div className="about__why_title">10</div>
                                <div className="about__why_text">УМК по различным направлениям по робототехнике</div>
                            </div>
                            <div className="about__why_col">
                                <div className="about__why_title">20</div>
                                <div className="about__why_text">Школ, в которых запущена робототехника</div>
                            </div>
                            <div className="about__why_col">
                                <div className="about__why_title">100</div>
                                <div className="about__why_text">Педагогов прошедших курсы повышения квалификации</div>
                            </div>
                            <div className="about__why_col">
                                <div className="about__why_title">10&nbsp;000</div>
                                <div className="about__why_text">Обученных детей на базе собственных центров</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className='up'>
                <a href="#header">
                    <img src="/src/img/arrow-up.svg" alt="up" />
                </a>
            </section>
            
            <section className="course">
                <div className="container">
                    <div className="course__row">
                        <h2 id='course'>Что вы получите после курса</h2>
                        <div className="course__what">
                            <div className="course__what_col">
                                <div className="course__what_title">Удостоверение</div>
                                <div className="course__what_text">Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях </div>
                            </div>
                            <div className="course__what_col">
                                <div className="course__what_title">Знания</div>
                                <div className="course__what_text">По основам разработки учебно-методических комплексов
                                    по робототехнике и программированию </div>
                            </div>
                            <div className="course__what_col">
                                <div className="course__what_title">Практику<span><button className="tip"></button><span className="tip-hover">При наличии свободных мест</span></span></div>
                                <div className="course__what_text">Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате) </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    
            <section className="coaches">
                <div className="container">
                    <div className="coaches__row">
                        <h2 id='coaches'>Профессиональные тренеры</h2>
                        <Trainer />
                    </div>
                </div>
            </section>
    
            <section className="rate">
                <div className="container">
                    <div className="rate__row">
                        <h2 id="rate">Выберите нужный пакет</h2>
                        <ul className="rate__fee">
                            <li className="rate__fee_col">                            
                                <div className="rate__fee_col-name">– PRO –</div>
                                <div className="rate__fee_col-sale">20.000 ₽</div>
                                <div className="rate__fee_col-description">УМК по робототехнике и программированию</div>
                                <button className="btn btn--submit" type="submit">Оставить заявку</button>
                            </li>
                            
                            <li className="rate__fee_col">
                                <div className="rate__fee_col-name">– ROBO –</div>
                                <div className="rate__fee_col-sale">15.000 ₽</div>
                                <div className="rate__fee_col-description">УМК по робототехнике </div>
                                <button className="btn btn--submit" type="submit">Оставить заявку</button>
                            </li>
                            <li className="rate__fee_col">
                                <div className="rate__fee_col-name">– PROG –</div>
                                <div className="rate__fee_col-sale">10.000 ₽</div>
                                <div className="rate__fee_col-description">УМК по  программированию</div>
                                <button className="btn btn--submit" type="submit">Оставить заявку</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    
            <section className="make">
                <div className="container">
                    <div className="make__row">
                        <div className="make__row_left">
                            <div className="make__row_title">Запишитесь на курс со скидкой 10%</div>
                            <div className="make__row_text">Акция действительна до 10 марта 2025 года</div>
                        </div>
                        <form method="post" className="make__row_left">
                            <input type="text" placeholder="Имя" required/>
                            <input type="tel" placeholder="Телефон" required/>
                            <input type="email" placeholder="E-mail" required/>
                            <button type="submit" className="btn btn--post">Оформить заявку</button>
                        </form>
                    </div>
                </div>
            </section>          
        </main>

        <footer className="footer">
            <div className="container">
                <div className="footer__row"> 
                    <div className="footer__logo"> <a href="/"> ROBO.SCHOOL</a></div>
                    <div className="footer__phone"><a href="tel:+7 800 000 11 22">+7 800 000 11 22</a></div>                   
                </div>
                <div className="footer__row_footer">
                    &copy; ROBO.SCHOOL 
                </div>
            </div>
        </footer>
    </div>
  );
};

export default App