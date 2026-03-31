import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight} from 'lucide-react';
import {Button} from '@site/src/components/ui/button';
import {
  audiences,
  clientBenefits,
  contactChecklist,
  contactEmail,
  contactExpectations,
  engagementModels,
  hero,
  overview,
  partners,
  principles,
  services,
  siteDescription,
  siteTitle,
  stats,
  vision,
  work,
} from '@site/src/data/siteContent';

const contactScenarios = [
  '想先討論目前的網站、資料流程或研究專案，確認適合從哪一段開始整理。',
  '需要建立正式對外網站、成果站或資料入口，但還不確定資訊架構與頁面範圍。',
  '已經有資料與內容基礎，想規劃後續的平台功能、維運方式與移交流程。',
];

function SectionLabel({children}) {
  return (
    <div className="onepage-marker">
      <span>{children}</span>
    </div>
  );
}

function NumberedRows({items, renderTitle, renderBody}) {
  return (
    <div className="onepage-feature-list">
      {items.map((item, index) => (
        <div key={renderTitle(item)} className="onepage-feature-row">
          <div className="onepage-feature-index">{String(index + 1).padStart(2, '0')}</div>
          <div className="space-y-3">
            <h3 className="onepage-feature-title">{renderTitle(item)}</h3>
            <div className="onepage-feature-copy">{renderBody(item)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <Layout title={siteTitle} description={siteDescription}>
      <main className="bg-background">
        <section className="hero-section">
          <div className="w-full">
            <div className="hero-surface px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <span className="hero-polygon hero-polygon--one" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--two" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--three" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--four" aria-hidden="true" />
              <span className="hero-scroll-note" aria-hidden="true">
                Scroll
              </span>

              <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
                <div className="max-w-5xl space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="hero-pill">{hero.badge}</span>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black/60">
                      Data platforms, project websites, open access
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h1 className="max-w-5xl whitespace-pre-line text-balance text-5xl font-black leading-[0.9] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl xl:text-[5.35rem]">
                      {hero.title}
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-black/70 md:text-base">
                      {hero.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="hero-entry-button gap-2">
                      <Link to="/#contact-us">
                        {hero.primaryCta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="hero-secondary-button">
                      <Link to="/#products-services">{hero.secondaryCta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company-intro" className="onepage-section onepage-section--muted">
          <div className="container">
            <div className="onepage-shell">
              <SectionLabel>公司介紹</SectionLabel>

              <div className="onepage-content">
                <div className="space-y-6">
                  <span className="onepage-eyebrow">About Data Island</span>
                  <h2 className="onepage-title">{overview.title}</h2>
                  <p className="onepage-lead">{siteDescription}</p>
                  <p className="onepage-body">{vision.description}</p>
                </div>

                <div className="onepage-stat-list">
                  {stats.map((item) => (
                    <div key={item.label} className="onepage-stat">
                      <p className="onepage-stat-label">{item.label}</p>
                      <p className="onepage-stat-value">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="onepage-note-grid">
                  <div className="onepage-note-block">
                    <p className="onepage-subhead">我們在做什麼</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {vision.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
                      <p>{overview.description}</p>
                      {overview.highlights.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>

                  <div className="onepage-note-block">
                    <p className="onepage-subhead">合作對象</p>
                    <div className="space-y-4">
                      {audiences.map((audience) => (
                        <div key={audience.title} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                          <h3 className="text-xl font-semibold text-foreground">{audience.title}</h3>
                          <p className="mt-2 text-base leading-8 text-muted-foreground">
                            {audience.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="onepage-subhead">我們重視的原則</p>
                  <NumberedRows
                    items={principles}
                    renderTitle={(item) => item.title}
                    renderBody={(item) => item.description}
                  />
                </div>

                <div className="onepage-partner-strip">
                  <p className="onepage-subhead">合作單位</p>
                  <div className="onepage-logo-strip">
                    {partners.map((partner) => (
                      <div key={partner.name} className="onepage-logo-item">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="h-14 w-auto object-contain grayscale"
                        />
                        <span>{partner.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products-services" className="onepage-section">
          <div className="container">
            <div className="onepage-shell">
              <SectionLabel>產品與服務</SectionLabel>

              <div className="onepage-content">
                <div className="space-y-6">
                  <span className="onepage-eyebrow">Products & Services</span>
                  <h2 className="onepage-title">
                    從資料平台、成果網站到開放資料入口，內容按照需求一段一段往下展開。
                  </h2>
                  <p className="onepage-lead">
                    我們不是把服務切成很多張卡片，而是依照實際工作流程去規劃資料、內容、角色權限與對外溝通方式。
                  </p>
                </div>

                <div>
                  <p className="onepage-subhead">核心服務</p>
                  <NumberedRows
                    items={services}
                    renderTitle={(item) => item.title}
                    renderBody={(item) => item.description}
                  />
                </div>

                <div>
                  <p className="onepage-subhead">可交付的產品類型</p>
                  <NumberedRows
                    items={work}
                    renderTitle={(item) => item.title}
                    renderBody={(item) => (
                      <div className="space-y-4">
                        <p>{item.summary}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="onepage-chip">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-2 border-t border-border/70 pt-4">
                          {item.deliverables.map((deliverable) => (
                            <p key={deliverable} className="text-sm leading-7 text-muted-foreground">
                              {deliverable}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  />
                </div>

                <div className="onepage-note-grid">
                  {engagementModels.map((model) => (
                    <div key={model.title} className="onepage-note-block">
                      <p className="onepage-subhead">合作方式</p>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                        {model.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-muted-foreground">
                        {model.description}
                      </p>
                      <div className="mt-5 space-y-3 border-t border-border/70 pt-5">
                        {model.points.map((point) => (
                          <p key={point} className="text-sm leading-7 text-muted-foreground">
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="onepage-subhead">合作後你會得到什麼</p>
                  <div className="onepage-feature-list">
                    {clientBenefits.map((item, index) => (
                      <div key={item} className="onepage-feature-row">
                        <div className="onepage-feature-index">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="onepage-feature-copy">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" className="onepage-section onepage-section--accent">
          <div className="container">
            <div className="onepage-shell">
              <SectionLabel>聯絡我們</SectionLabel>

              <div className="onepage-content">
                <div className="space-y-6">
                  <span className="onepage-eyebrow">Contact</span>
                  <h2 className="onepage-title">
                    如果你已經有資料、研究成果或專案需求，現在就可以開始第一輪整理。
                  </h2>
                  <p className="onepage-lead">
                    先把你們目前的資料狀態、網站現況與合作目標說清楚，我們就能一起判斷適合從官網、資料入口，或平台規劃開始。
                  </p>
                </div>

                <div className="onepage-contact-grid">
                  <div className="onepage-note-block">
                    <p className="onepage-subhead">聯絡方式</p>
                    <a className="onepage-email-link" href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      你可以直接來信描述背景、目標、預計時程與既有資產，我們會先協助收斂出可以開始執行的範圍。
                    </p>
                    <div className="mt-6">
                      <Button asChild size="lg" className="hero-entry-button gap-2">
                        <a href={`mailto:${contactEmail}`}>
                          立即來信
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="onepage-note-block">
                    <p className="onepage-subhead">來信時可以先提供</p>
                    <div className="space-y-4">
                      {contactChecklist.map((item, index) => (
                        <div key={item} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                          <div className="onepage-feature-index">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <p className="mt-2 text-base leading-8 text-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="onepage-note-grid">
                  <div className="onepage-note-block">
                    <p className="onepage-subhead">合作預期</p>
                    <div className="space-y-4">
                      {contactExpectations.map((item, index) => (
                        <div key={item} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                          <div className="onepage-feature-index">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <p className="mt-2 text-base leading-8 text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="onepage-note-block">
                    <p className="onepage-subhead">適合先聊聊的情況</p>
                    <div className="space-y-4">
                      {contactScenarios.map((item, index) => (
                        <div key={item} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                          <div className="onepage-feature-index">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <p className="mt-2 text-base leading-8 text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
