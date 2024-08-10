import React from 'react';
import './grants.css';

const Grants = () => (
  <section id="grants">
    <div className="containers">
      <h1 className="title">
        Koreya Universitetlariga 100% gacha grant yutish imkoniyati
      </h1>
      <div className="content">
        <div className="image-containers">
          <img src="https://topic-academy.vercel.app/assets/scholarship-BdpyUuyd.png" alt="scholarship" />
        </div>
        <div className="info">
          <h2 className="info-title">
            GKS (Global Korean Scholarship) <span className="amount">$70.000</span> lik Grant
          </h2>
          <p className="info-description">
            Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className="highlight">xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className="highlight">100% gacha to’liq grant</span>
            <br />
            va oylik <span className="highlight">stipendiya</span> olish imkoniyatingiz bor
          </p>
          <ul className="benefits">
            <li>Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</li>
            <li>Koreyaga yetib borganda joylashib olish uchun bir martalik to'lov beriladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</li>
            <li>Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className="more">ko’proq</span></li>
          </ul>
        </div>
      </div>
      <h2 className="support-title">
        Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz
      </h2>
      <div className="ctas">
        <div className="cta-text">
          <h3>TOPIK academy consulting jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</h3>
          <p>Ko’proq ma’lumot olish uchun <br /> bepul konsultatsiyaga yoziling!</p>
          <a href="#faq" className="cta-button">Ariza Qoldirish</a>
        </div>
         <div className="gallery">
        {/*<div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 5</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3836-3864-4939-b163-626337636333/-/resize/654x/-/format/webp/asadbek_page-0001.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 5</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3533-3038-4539-a530-646363633437/-/resize/654x/-/format/webp/11111.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 6</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3133-6638-4766-b736-356166643839/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 3</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 4</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/654x/-/format/webp/noname_page-0001_.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 4</h4>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/654x/-/format/webp/noname_12_page-0001.jpg" alt="topic" />
            <div className="overlay">
              <h4>topic 6</h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default Grants;