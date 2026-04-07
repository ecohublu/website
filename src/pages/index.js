import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import {ArrowRight} from 'lucide-react';
import {Button} from '@site/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@site/src/components/ui/card';
import {
  capabilitySummary,
  contactEmail,
  contactSection,
  hero,
  partners,
  partnerSection,
  products,
  productsIntro,
  siteDescription,
} from '@site/src/data/siteContent';

function SectionIntro({
  eyebrow,
  title,
  titleLines,
  description,
  headClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <div className={`brand-section-head ${headClassName}`.trim()}>
      <span className="brand-eyebrow">{eyebrow}</span>
      <h2 className={`brand-title ${titleClassName}`.trim()}>
        {(titleLines || [title]).map((line) => (
          <span key={line} className="section-title-line">
            {line}
          </span>
        ))}
      </h2>
      {description ? <p className={`brand-copy ${descriptionClassName}`.trim()}>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const mobileHeroTitleLines = hero.titleLines || [hero.title];
  const desktopHeroTitleLines = hero.titleLines || [hero.title];
  const heroPhotoSrc = useBaseUrl('/img/camera/leopard-cat-hero.png');
  const fieldPhotos = [
    {
      name: '黑冠麻鷺',
      description: '白天活動紀錄',
      src: useBaseUrl('/img/camera/malayan-night-heron.jpg'),
      alt: '自動相機拍攝到的黑冠麻鷺在林下活動',
    },
    {
      name: '小彎嘴',
      description: '林下環境片段',
      src: useBaseUrl('/img/camera/small-babbler.jpg'),
      alt: '自動相機拍攝到的小彎嘴出現在林下環境中',
    },
    {
      name: '竹雞',
      description: '地面活動紀錄',
      src: useBaseUrl('/img/camera/bamboo-partridge.jpg'),
      alt: '自動相機拍攝到的竹雞在地面活動',
    },
    {
      name: '白鼻心',
      description: '夜間活動紀錄',
      src: useBaseUrl('/img/camera/masked-palm-civet.jpg'),
      alt: '自動相機拍攝到的白鼻心在夜間穿越鏡頭',
    },
  ];

  return (
    <Layout title="數嶼科技 | 生態監測資料工作流程" description={siteDescription}>
      <main className="bg-background">
        <section className="hero-section">
          <div className="w-full">
            <div className="hero-surface px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div className="hero-photo-underlay" aria-hidden="true">
                <img src={heroPhotoSrc} alt="" className="hero-photo-underlay__image" />
              </div>
              <span className="hero-polygon hero-polygon--one" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--two" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--three" aria-hidden="true" />
              <span className="hero-polygon hero-polygon--four" aria-hidden="true" />
              <span className="hero-scroll-note" aria-hidden="true">
                Scroll
              </span>

              <div className="hero-layout relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
                <div className="hero-copy-stack max-w-5xl space-y-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="hero-pill">{hero.badge}</span>
                  </div>

                  <div className="space-y-5">
                    <h1 className="max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.05em] text-black sm:text-6xl md:hidden">
                      {mobileHeroTitleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h1>
                    <h1 className="hidden max-w-6xl font-black leading-[0.9] tracking-[-0.05em] text-black md:block md:text-7xl lg:whitespace-nowrap xl:text-[5.1rem]">
                      {desktopHeroTitleLines.map((line) => (
                        <span key={line} className="hero-title-line">
                          {line}
                        </span>
                      ))}
                    </h1>
                    <p className="hero-description max-w-5xl text-sm leading-8 md:text-base md:leading-7 lg:whitespace-nowrap lg:text-[1.05rem]">
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

        <section className="brand-section brand-section--partners">
          <div className="container">
            <div className="partner-strip">
              <div className="partner-strip__header">
                <span className="brand-eyebrow">Partners</span>
                <h2 className="partner-strip__title">{partnerSection.title}</h2>
                {partnerSection.description ? (
                  <p className="partner-strip__copy">{partnerSection.description}</p>
                ) : null}
              </div>

              <div className="partner-logo-grid">
                {partners.map((partner) => (
                  <div key={partner.name} className="partner-logo-card">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="partner-logo-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="field-record-strip">
                <div className="field-record-strip__header">
                  <span className="brand-eyebrow">Camera Records</span>
                  <h3 className="field-record-strip__title">來自監測現場的影像紀錄</h3>
                </div>

                <div className="field-record-grid">
                  {fieldPhotos.map((photo) => (
                    <figure key={photo.name} className="field-record-card">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="field-record-card__image"
                        loading="lazy"
                      />
                      <figcaption className="field-record-card__caption">
                        <strong>{photo.name}</strong>
                        <span>{photo.description}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company-intro" className="brand-section brand-section--muted">
          <div className="container">
            <div className="capability-showcase">
              <div className="capability-showcase__hero">
                <div className="capability-summary-block">
                  <span className="brand-eyebrow">About</span>
                  <h2 className="capability-summary-title">
                    {(capabilitySummary.titleLines || [capabilitySummary.title]).map((line) => (
                      <span key={line} className="capability-summary-title__line">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <p className="capability-summary-intro">{capabilitySummary.intro}</p>
                  <p className="capability-summary-copy">{capabilitySummary.description}</p>
                </div>
              </div>

              <div className="capability-feature-grid">
                {capabilitySummary.features.map((feature, index) => (
                  <Card key={feature.title} className="capability-feature-card">
                    <CardContent className="p-6 md:p-7">
                      <div className="capability-feature-card__index">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="capability-feature-card__title">{feature.title}</h3>
                      <p className="capability-feature-card__copy">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="products-services" className="brand-section brand-section--intro">
          <div className="container">
            <SectionIntro
              eyebrow="Products Intro"
              title={productsIntro.title}
              headClassName="lg:max-w-none"
              titleClassName="lg:max-w-none lg:whitespace-nowrap"
              descriptionClassName="lg:max-w-none lg:whitespace-nowrap"
              description={productsIntro.description}
            />
          </div>
        </section>

        <section className="brand-section brand-section--products">
          <div className="container">
            <div className="product-card-grid">
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={`/products/${product.slug}`}
                  className="product-card-link"
                  aria-label={`查看 ${product.name} 產品說明`}>
                  <Card className="product-card">
                    <CardHeader className="space-y-4 p-7 md:p-8">
                      <div className="space-y-2">
                        <span className="product-card__kicker">{product.kicker}</span>
                        <CardTitle className="product-card__name">{product.name}</CardTitle>
                        <CardDescription className="product-card__type">
                          {product.title}
                        </CardDescription>
                        {product.cardMeta ? (
                          <div className="product-card__meta">
                            {product.cardMeta.map((meta) => (
                              <p key={meta}>{meta}</p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <p className="product-card__summary">{product.summary}</p>
                    </CardHeader>
                    <CardContent className="p-7 pt-0 md:px-8 md:pb-8">
                      <div className="product-card__footer">
                        <div className="product-card__cta-panel">
                          <div className="product-card__cta">
                            {product.ctaLabel || '查看產品說明'}
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-us" className="brand-section">
          <div className="container">
            <div className="page-cta-card">
              <div className="contact-cta-layout">
                <div className="space-y-6">
                  <SectionIntro
                    eyebrow="Contact"
                    title={contactSection.title}
                    titleLines={contactSection.titleLines}
                    description={contactSection.description}
                  />
                  <Button asChild size="lg" className="hero-entry-button w-fit gap-2">
                    <a href={`mailto:${contactEmail}`}>
                      預約需求討論
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="contact-checklist">
                  {contactSection.checklist.map((item, index) => (
                    <div key={item} className="contact-checklist__item">
                      <div className="onepage-feature-index">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="contact-checklist__copy">
                        {item.split('\n').map((line, lineIndex) =>
                          lineIndex === 0 ? (
                            <h3 key={line} className="contact-checklist__title">
                              {line}
                            </h3>
                          ) : (
                            <p key={line}>{line}</p>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

