/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import { Button } from 'antd';

import Logo from './img/Logo.png';
import cardLogo from './img/Logo.svg';
import './normalize.css';
import 'antd/dist/antd.css';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <img className="header-logo" src={Logo} alt="logotip" />
      </header>
      <main className={styles['main-container']}>
        <div className={styles['container-left']}>
          <p> количество пересадок</p>
          <label>
            <input type="checkbox" name="transfers" />
            <span>Все</span>
          </label>
          <label>
            <input type="checkbox" name="transfers" />
            <span>Без пересадок</span>
          </label>
          <label>
            <input type="checkbox" name="transfers" />
            <span>1 пересадка</span>
          </label>
          <label>
            <input type="checkbox" name="transfers" />
            <span>2 пересадки</span>
          </label>
          <label>
            <input type="checkbox" name="transfers" />
            <span>3 пересадки</span>
          </label>
        </div>
        <div className={styles['container-right']}>
          <nav className={styles['filter-buttons']}>
            <Button type="primary" size="large" className="filter-buttons--left">
              Самый дешёвый
            </Button>
            <Button type="primary" size="large" lassName="filter-buttons--center">
              Самый быстрый
            </Button>
            <Button type="primary" size="large" className="filter-buttons--right">
              Оптимальный
            </Button>
          </nav>
          <div className="card">
            <header>
              <p className="card-price">10 000 P</p>
              <img className="card-company" src={cardLogo} alt="card-logo" />
            </header>

            <div className="card-timetable">
              <div className="card-timetable-first">
                <div>
                  <p className="card-timetable-first--days">MOV - HKT</p>
                  <p className="card-timetable-first--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-first--in-way">В пути</p>
                  <p className="card-timetable-first-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-first-mount-change">2 пересадки</p>
                  <p className="card-timetable-first-city">HKG, JNB</p>
                </div>
              </div>
              <div className="card-timetable-second">
                <div>
                  <p className="card-timetable-second--days">MOV - HKT</p>
                  <p className="card-timetable-second--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-second--in-way">В пути</p>
                  <p className="card-timetable-second-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-second-mount-change">2 пересадки</p>
                  <p className="card-timetable-second-city">HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <header>
              <p className="card-price">10 000 P</p>
              <img className="card-company" src={cardLogo} alt="card-logo" />
            </header>

            <div className="card-timetable">
              <div className="card-timetable-first">
                <div>
                  <p className="card-timetable-first--days">MOV - HKT</p>
                  <p className="card-timetable-first--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-first--in-way">В пути</p>
                  <p className="card-timetable-first-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-first-mount-change">2 пересадки</p>
                  <p className="card-timetable-first-city">HKG, JNB</p>
                </div>
              </div>
              <div className="card-timetable-second">
                <div>
                  <p className="card-timetable-second--days">MOV - HKT</p>
                  <p className="card-timetable-second--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-second--in-way">В пути</p>
                  <p className="card-timetable-second-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-second-mount-change">2 пересадки</p>
                  <p className="card-timetable-second-city">HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <header>
              <p className="card-price">10 000 P</p>
              <img className="card-company" src={cardLogo} alt="card-logo" />
            </header>

            <div className="card-timetable">
              <div className="card-timetable-first">
                <div>
                  <p className="card-timetable-first--days">MOV - HKT</p>
                  <p className="card-timetable-first--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-first--in-way">В пути</p>
                  <p className="card-timetable-first-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-first-mount-change">2 пересадки</p>
                  <p className="card-timetable-first-city">HKG, JNB</p>
                </div>
              </div>
              <div className="card-timetable-second">
                <div>
                  <p className="card-timetable-second--days">MOV - HKT</p>
                  <p className="card-timetable-second--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-second--in-way">В пути</p>
                  <p className="card-timetable-second-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-second-mount-change">2 пересадки</p>
                  <p className="card-timetable-second-city">HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <header>
              <p className="card-price">10 000 P</p>
              <img className="card-company" src={cardLogo} alt="card-logo" />
            </header>

            <div className="card-timetable">
              <div className="card-timetable-first">
                <div>
                  <p className="card-timetable-first--days">MOV - HKT</p>
                  <p className="card-timetable-first--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-first--in-way">В пути</p>
                  <p className="card-timetable-first-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-first-mount-change">2 пересадки</p>
                  <p className="card-timetable-first-city">HKG, JNB</p>
                </div>
              </div>
              <div className="card-timetable-second">
                <div>
                  <p className="card-timetable-second--days">MOV - HKT</p>
                  <p className="card-timetable-second--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-second--in-way">В пути</p>
                  <p className="card-timetable-second-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-second-mount-change">2 пересадки</p>
                  <p className="card-timetable-second-city">HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <header>
              <p className="card-price">10 000 P</p>
              <img className="card-company" src={cardLogo} alt="card-logo" />
            </header>

            <div className="card-timetable">
              <div className="card-timetable-first">
                <div>
                  <p className="card-timetable-first--days">MOV - HKT</p>
                  <p className="card-timetable-first--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-first--in-way">В пути</p>
                  <p className="card-timetable-first-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-first-mount-change">2 пересадки</p>
                  <p className="card-timetable-first-city">HKG, JNB</p>
                </div>
              </div>
              <div className="card-timetable-second">
                <div>
                  <p className="card-timetable-second--days">MOV - HKT</p>
                  <p className="card-timetable-second--time">10:45 - 08:00</p>
                </div>
                <div>
                  <p className="card-timetable-second--in-way">В пути</p>
                  <p className="card-timetable-second-time">21ч 15мин</p>
                </div>
                <div>
                  <p className="card-timetable-second-mount-change">2 пересадки</p>
                  <p className="card-timetable-second-city">HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <Button size="large" type="primary">
            Показать ещё 5 билетов
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
