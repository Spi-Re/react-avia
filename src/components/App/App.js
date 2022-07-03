/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import { Button, Checkbox } from 'antd';

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
          <p className={styles['container-left--title']}>Количество пересадок</p>
          <Checkbox className={styles.checkbox}>
            <span>Все</span>
          </Checkbox>
          <Checkbox className={styles.checkbox} checked>
            <span>Без пересадок</span>
          </Checkbox>
          <Checkbox className={styles.checkbox} checked>
            <span>1 пересадка</span>
          </Checkbox>
          <Checkbox className={styles.checkbox} checked>
            <span>2 пересадки</span>
          </Checkbox>
          <Checkbox className={styles.checkbox}>
            <span>3 пересадки</span>
          </Checkbox>
        </div>
        <div className={styles['container-right']}>
          <nav className={styles['filter-buttons']}>
            <Button type="primary" size="large" checked className={styles['filter-buttons--left']}>
              Самый дешёвый
            </Button>
            <Button type="primary" size="large" className={styles['filter-buttons--center']}>
              Самый быстрый
            </Button>
            <Button type="primary" size="large" className={styles['filter-buttons--right']}>
              Оптимальный
            </Button>
          </nav>
          <div className={styles.card}>
            <header className={styles['card-header']}>
              <p className={styles['card-header--price']}>10 000 P</p>
              <img className={styles['card-header--company']} src={cardLogo} alt="card-logo" />
            </header>

            <div className={styles['card-timetable']}>
              <div className={styles['card-timetable-first']}>
                <div>
                  <p className={styles['card-timetable-first--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-first--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first--in-way']}>В пути</p>
                  <p className={styles['card-timetable-first-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-first-city']}>HKG, JNB</p>
                </div>
              </div>
              <div className={styles['card-timetable-second']}>
                <div>
                  <p className={styles['card-timetable-second--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-second--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second--in-way']}>В пути</p>
                  <p className={styles['card-timetable-second-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-second-city']}>HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <header className={styles['card-header']}>
              <p className={styles['card-header--price']}>10 000 P</p>
              <img className={styles['card-header--company']} src={cardLogo} alt="card-logo" />
            </header>

            <div className={styles['card-timetable']}>
              <div className={styles['card-timetable-first']}>
                <div>
                  <p className={styles['card-timetable-first--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-first--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first--in-way']}>В пути</p>
                  <p className={styles['card-timetable-first-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-first-city']}>HKG, JNB</p>
                </div>
              </div>
              <div className={styles['card-timetable-second']}>
                <div>
                  <p className={styles['card-timetable-second--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-second--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second--in-way']}>В пути</p>
                  <p className={styles['card-timetable-second-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-second-city']}>HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <header className={styles['card-header']}>
              <p className={styles['card-header--price']}>10 000 P</p>
              <img className={styles['card-header--company']} src={cardLogo} alt="card-logo" />
            </header>

            <div className={styles['card-timetable']}>
              <div className={styles['card-timetable-first']}>
                <div>
                  <p className={styles['card-timetable-first--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-first--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first--in-way']}>В пути</p>
                  <p className={styles['card-timetable-first-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-first-city']}>HKG, JNB</p>
                </div>
              </div>
              <div className={styles['card-timetable-second']}>
                <div>
                  <p className={styles['card-timetable-second--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-second--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second--in-way']}>В пути</p>
                  <p className={styles['card-timetable-second-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-second-city']}>HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <header className={styles['card-header']}>
              <p className={styles['card-header--price']}>10 000 P</p>
              <img className={styles['card-header--company']} src={cardLogo} alt="card-logo" />
            </header>

            <div className={styles['card-timetable']}>
              <div className={styles['card-timetable-first']}>
                <div>
                  <p className={styles['card-timetable-first--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-first--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first--in-way']}>В пути</p>
                  <p className={styles['card-timetable-first-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-first-city']}>HKG, JNB</p>
                </div>
              </div>
              <div className={styles['card-timetable-second']}>
                <div>
                  <p className={styles['card-timetable-second--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-second--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second--in-way']}>В пути</p>
                  <p className={styles['card-timetable-second-time']}>21ч 15м</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-second-city']}>HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <header className={styles['card-header']}>
              <p className={styles['card-header--price']}>10 000 P</p>
              <img className={styles['card-header--company']} src={cardLogo} alt="card-logo" />
            </header>

            <div className={styles['card-timetable']}>
              <div className={styles['card-timetable-first']}>
                <div>
                  <p className={styles['card-timetable-first--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-first--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first--in-way']}>В пути</p>
                  <p className={styles['card-timetable-first-time']}>21ч 15мин</p>
                </div>
                <div>
                  <p className={styles['card-timetable-first-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-first-city']}>HKG, JNB</p>
                </div>
              </div>
              <div className={styles['card-timetable-second']}>
                <div>
                  <p className={styles['card-timetable-second--days']}>MOV - HKT</p>
                  <p className={styles['card-timetable-second--time']}>10:45 - 08:00</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second--in-way']}>В пути</p>
                  <p className={styles['card-timetable-second-time']}>21ч 15мин</p>
                </div>
                <div>
                  <p className={styles['card-timetable-second-mount-change']}>2 пересадки</p>
                  <p className={styles['card-timetable-second-city']}>HKG, JNB</p>
                </div>
              </div>
            </div>
          </div>

          <Button size="large" type="primary" className={styles['button-more']}>
            Показать ещё 5 билетов!
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
