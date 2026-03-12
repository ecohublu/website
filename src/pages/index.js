import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="首頁" description="Docusaurus 靜態首頁">
      <main>
        {/* 第一個 section：大橫幅＋主題標語＋圖示 */}
        <section style={{
          padding: '6rem 0 4rem 0',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #2e7d32 0%, #1976d2 100%)',
          color: '#fff',
        }}>
         <img src="/img/docusaurus.png" alt="Logo" style={{width: '120px', marginBottom: '2rem'}} />
          <h1 style={{fontSize: '3.2rem', fontWeight: 700, marginBottom: '1.5rem'}}>探索自然聲音與環境資料</h1>
          <p style={{fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto'}}>
            以科技串連生態、環境與社群，協助資料收集與分析
          </p>
        </section>

        {/* 第二個 section：左右分欄（左圖右文） */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 0',
          background: '#f5f7fa',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <div style={{flex: '0 0 320px', textAlign: 'center'}}>
              <img src="/img/undraw_docusaurus_tree.svg" alt="自然環境" style={{width: '220px'}} />
            </div>
            <div style={{flex: '1', paddingLeft: '3rem'}}>
              <h2 style={{color: '#2e7d32', fontWeight: 700}}>關於我們</h2>
              <p style={{fontSize: '1.2rem', color: '#333', lineHeight: 1.7}}>
                我們致力於推動環境資料的收集與分析，讓每個人都能參與生態保育與科學研究。
                <br />
                透過開放平台，分享聲音、影像與環境數據，促進社群交流與知識傳遞。
              </p>
            </div>
          </div>
        </section>

        {/* 第三個 section：四個自然主題卡片 */}
        <section style={{padding: '4rem 0', background: '#e8f5e9'}}>
          <h2 style={{textAlign: 'center', color: '#1976d2', fontWeight: 700}}>我們的服務</h2>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap'}}>
            {[
              {
                icon: '/img/undraw_docusaurus_mountain.svg',
                title: '聲音資料收集',
                desc: '自動化收集環境聲音，支援多種感測器與格式。',
              },
              {
                icon: '/img/undraw_docusaurus_tree.svg',
                title: '生態影像分析',
                desc: '結合 AI 進行影像辨識，協助物種監測與研究。',
              },
              {
                icon: '/img/undraw_docusaurus_react.svg',
                title: '資料視覺化',
                desc: '互動式圖表與地圖，讓資料一目了然。',
              },
              {
                icon: '/img/logo.svg',
                title: '社群協作',
                desc: '開放平台，促進社群交流與知識分享。',
              },
            ].map((card, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #c8e6c9',
                borderRadius: '12px',
                padding: '2rem',
                width: '240px',
                boxShadow: ' 0 2px 12px rgba(44, 62, 80, 0.08)',
                textAlign: 'center',
              }}>
                <img src={card.icon} alt={card.title} style={{width: '64px', marginBottom: '1rem'}} />
                <h4 style={{color: '#2e7d32', fontWeight: 700}}>{card.title}</h4>
                <p style={{color: '#333', fontSize: '1rem'}}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

          {/* 合作夥伴區塊 */}
        <section style={{padding: '4rem 0', background: '#fff'}}>
          <h2 style={{textAlign: 'center', color: '#1976d2', fontWeight: 700, marginBottom: '2rem'}}>合作夥伴</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
              {[
                {src: '/img/pust.jpg', alt: 'Pingtung University of Science and Technology', name: 'Pingtung University of Science and Technology'},
                {src: '/img/endemic.gif', alt: 'Endemic Species Research Center', name: 'Endemic Species Research Center'},
                {src: '/img/nsysu.jpg', alt: 'National Sun Yat-sen University', name: 'NSYSU'},
              ].map((partner, i) => (
                <div
                  key={i}
                  style={{
                    background: '#f7f7f7',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(44,62,80,0.08)',
                    padding: '2rem',
                    width: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  className="partner-card"
                >
                  <div style={{position: 'relative', width: '120px', height: '120px', marginBottom: '1rem'}}>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      style={{width: '120px', height: '120px', objectFit: 'contain', filter: 'grayscale(1)', transition: 'filter 0.3s'}}
                      className="partner-img"
                    />
                    <style>{`
                      .partner-card:hover .partner-img {
                        filter: none !important;
                      }
                    `}</style>
                  </div>
                  <div style={{fontWeight: 600, color: '#333'}}>{partner.name}</div>
                </div>
              ))}
          </div>
        </section>

        {/* 第四個 section：總結/行動呼籲 */}
        <section style={{padding: '3rem 0', textAlign: 'center', background: '#263238', color: '#fff'}}>
          <h2 style={{fontWeight: 700, fontSize: '2rem', marginBottom: '1rem'}}>加入我們，一起守護環境！</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>立即註冊帳號，或聯絡我們了解更多合作方案。</p>
          <a href="mailto:info@example.com" style={{
            display: 'inline-block',
            background: '#1976d2',
            color: '#fff',
            padding: '0.8rem 2rem',
            borderRadius: '6px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}>聯絡我們</a>
        </section>

      </main>
    </Layout>
  );
}
