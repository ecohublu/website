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
  audiences,
  brandName,
  overview,
  principles,
  siteDescription,
  stats,
  vision,
} from '@site/src/data/siteContent';

export default function About() {
  return (
    <Layout title={`公司介紹 | ${brandName}`} description={siteDescription}>
      <main className="pb-20">
        <section className="container pt-12 md:pt-16">
          <div className="inner-page-hero px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  公司介紹
                </Badge>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                    我們不是一般網站設計公司，而是以生態資料與研究專案為核心的數位產品團隊。
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    Data Island 希望協助研究單位、保育組織與政府計畫，把零散的資料、成果與流程，整理成可以長期運作的網站與平台。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      聯絡我們
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/work">查看產品與服務</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {stats.map((item, index) => (
                  <div key={item.label} className="page-metric-card p-5 md:p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                      <span className="page-number">{`0${index + 1}`}</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-8 md:pt-10">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="page-soft-card page-soft-card--tinted">
              <CardHeader className="space-y-4 p-7 md:p-9">
                <Badge variant="outline" className="w-fit rounded-full">
                  我們在做什麼
                </Badge>
                <CardTitle className="max-w-xl text-3xl md:text-4xl">{overview.title}</CardTitle>
                <CardDescription className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                  {overview.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="page-soft-card">
              <CardHeader className="space-y-4 p-7 md:p-9">
                <Badge variant="outline" className="w-fit rounded-full">
                  我們的願景
                </Badge>
                <CardTitle className="max-w-xl text-3xl md:text-4xl">{vision.title}</CardTitle>
                <CardDescription className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                  {vision.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              我們的工作原則
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              讓資料被看見，讓流程能延續，讓合作可以擴大。
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <Card key={item.title} className="page-soft-card h-full">
                <CardHeader className="p-7 md:p-8">
                  <span className="page-number">{`0${index + 1}`}</span>
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="page-soft-card page-soft-card--tinted p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit rounded-full">
                  適合的合作對象
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  已經有資料與成果，但還缺少清楚數位架構的團隊。
                </h2>
                <p className="text-sm leading-7 text-muted-foreground md:text-base">
                  我們特別適合需要整合網站、資料流程、合作單位與公開溝通需求的研究與保育團隊。
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {audiences.map((item) => (
                  <Card key={item.title} className="page-inset-card h-full shadow-none">
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-cta-card">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="max-w-2xl space-y-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  開始合作
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  如果你需要的不是單一頁面，而是一套能長期運作的數位架構，我們可以先從第一階段開始。
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  先定義資料、內容、頁面與合作情境，再決定最合適的網站或平台交付範圍。
                </p>
              </div>
              <Button asChild size="lg" className="w-fit">
                <Link to="/contact">
                  聯絡我們
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
