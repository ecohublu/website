import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight} from 'lucide-react';
import {Badge} from '@site/src/components/ui/badge';
import {Button} from '@site/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@site/src/components/ui/card';
import {
  brandName,
  clientBenefits,
  engagementModels,
  siteDescription,
  work,
} from '@site/src/data/siteContent';

export default function Work() {
  return (
    <Layout title={`產品與服務 | ${brandName}`} description={siteDescription}>
      <main className="pb-20">
        <section className="container pt-12 md:pt-16">
          <div className="inner-page-hero px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  產品與服務
                </Badge>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                    我們提供的不只是網站，而是能支撐資料管理、研究協作與成果發布的產品與專案。
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    下面這三個方向，是目前最接近公司定位的服務組合，也是未來最容易持續發展的產品與專案路徑。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      洽談合作
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/about">了解公司定位</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                <div className="page-metric-card p-5 md:p-6">
                  <span className="page-number">03</span>
                  <p className="mt-3 text-sm text-muted-foreground">核心交付方向</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    平台、專案官網、資料探索入口
                  </p>
                </div>
                <div className="page-metric-card p-5 md:p-6">
                  <span className="page-number">02</span>
                  <p className="mt-3 text-sm text-muted-foreground">合作模式</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    產品型合作與專案型合作並行
                  </p>
                </div>
                <div className="page-metric-card p-5 md:p-6">
                  <span className="page-number">01</span>
                  <p className="mt-3 text-sm text-muted-foreground">共同目標</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    讓資料與網站都具備可持續運作的基礎
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline" className="rounded-full">
              核心方案
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              三個最接近你未來業務方向的產品與專案模組。
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {work.map((item, index) => (
              <Card
                key={item.title}
                className={`page-soft-card overflow-hidden ${index === 1 ? 'page-soft-card--tinted' : ''}`}>
                <CardContent className="grid gap-4 p-0 lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="p-7 md:p-9">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="page-number">{`0${index + 1}`}</span>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                      {item.summary}
                    </p>
                  </div>

                  <div className="p-4 md:p-5">
                    <div className="page-inset-card h-full p-6 md:p-7">
                      <p className="text-sm font-medium text-foreground">常見交付內容</p>
                      <div className="mt-4 space-y-3">
                        {item.deliverables.map((deliverable) => (
                          <div
                            key={deliverable}
                            className="rounded-2xl border border-border/70 bg-muted/40 px-4 py-3 text-sm leading-6 text-muted-foreground">
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="grid gap-4 lg:grid-cols-2">
            {engagementModels.map((model, index) => (
              <Card
                key={model.title}
                className={`page-soft-card h-full ${index === 0 ? 'page-soft-card--tinted' : ''}`}>
                <CardHeader className="p-7 md:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="outline" className="rounded-full">
                      合作模式
                    </Badge>
                    <span className="page-number">{`0${index + 1}`}</span>
                  </div>
                  <CardTitle className="mt-4 text-3xl">{model.title}</CardTitle>
                  <CardDescription className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-7 pt-0 md:px-9 md:pb-9">
                  <div className="grid gap-3">
                    {model.points.map((point) => (
                      <div
                        key={point}
                        className="page-inset-card px-4 py-3 text-sm leading-6 text-muted-foreground">
                        {point}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              客戶可以獲得什麼
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              不只是把網站做出來，而是讓後續合作與決策更有效率。
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {clientBenefits.map((item, index) => (
              <Card key={item} className="page-soft-card h-full">
                <CardContent className="p-7 md:p-8">
                  <span className="page-number">{`0${index + 1}`}</span>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-cta-card">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="max-w-2xl space-y-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  下一步
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  可以先從官網、成果站或資料入口開始，再視需求擴充成更完整的平台產品。
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  如果你已經知道想先做哪一塊，我們可以直接從那個模組開始拆解範圍。
                </p>
              </div>
              <Button asChild size="lg" className="w-fit">
                <Link to="/contact">
                  洽談合作
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </Layout>
  );
}
