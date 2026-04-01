import React from 'react';
import Layout from '@theme/Layout';
import {Mail, Send} from 'lucide-react';
import {Badge} from '@site/src/components/ui/badge';
import {Button} from '@site/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@site/src/components/ui/card';
import {Separator} from '@site/src/components/ui/separator';
import {
  brandName,
  contactChecklist,
  contactEmail,
  contactExpectations,
  siteDescription,
} from '@site/src/data/siteContent';

const contactScenarios = [
  '你們有資料和成果，但對外網站還無法清楚說明團隊在做什麼。',
  '你們需要新的專案官網、成果站或資料入口，而且未來還會繼續更新。',
  '你們想規劃更完整的平台，但需要先有一個可執行的第一階段。',
];

export default function Contact() {
  return (
    <Layout title={`聯絡我們 | ${brandName}`} description={siteDescription}>
      <main className="pb-20">
        <section className="container pt-12 md:pt-16">
          <div className="inner-page-hero px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  聯絡我們
                </Badge>
                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                    帶著你的目標、資料現況與合作情境來談，我們一起定義第一階段。
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    如果你正在規劃官方網站、資料平台、成果站或開放資料入口，可以先把目前狀況整理給我們，我們會先協助判斷最適合的合作起點。
                  </p>
                </div>
                <Button asChild size="lg" className="w-fit gap-2">
                  <a href={`mailto:${contactEmail}`}>
                    <Send className="h-4 w-4" />
                    {contactEmail}
                  </a>
                </Button>
              </div>

              <Card className="page-metric-card rounded-[1.6rem] shadow-none">
                <CardHeader className="p-6 md:p-7">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Mail className="h-4 w-4" />
                    聯繫後的第一步
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-muted-foreground">
                    我們會先判斷範圍、優先順序與最小可行交付，不會直接把專案做大。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6 pt-0 md:p-7 md:pt-0">
                  {contactExpectations.map((item, index) => (
                    <div key={item} className="space-y-4">
                      <div className="text-sm leading-6 text-muted-foreground">{item}</div>
                      {index < contactExpectations.length - 1 ? <Separator /> : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
            <Card className="page-soft-card page-soft-card--tinted">
              <CardHeader className="p-7 md:p-9">
                <Badge variant="outline" className="w-fit rounded-full">
                  第一次聯繫請準備
                </Badge>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  只要提供足夠資訊，我們就能先判斷合作方向。
                </CardTitle>
                <CardDescription className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                  不需要先開很長的會，也不需要一開始就準備完整需求文件。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 p-7 pt-0 md:px-9 md:pb-9">
                {contactChecklist.map((item, index) => (
                  <div key={item} className="page-inset-card px-4 py-3">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {`0${index + 1}`}
                    </div>
                    <div className="text-sm leading-6 text-foreground">{item}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="page-soft-card">
              <CardHeader className="p-7 md:p-9">
                <Badge variant="outline" className="w-fit rounded-full">
                  適合現在來談的情境
                </Badge>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  如果你符合下面其中一種狀況，就值得先聊一次。
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 p-7 pt-0 md:px-9 md:pb-9">
                {contactScenarios.map((item, index) => (
                  <div key={item} className="page-inset-card px-4 py-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {`0${index + 1}`}
                    </div>
                    <div className="text-sm leading-6 text-muted-foreground">{item}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-cta-card">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl space-y-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  直接來信
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  如果你已經有現有網站、資料流程或專案背景，直接寄來就可以開始。
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  我們可以先從可執行的小範圍切入，再逐步擴成完整的產品或專案合作。
                </p>
              </div>
              <Button asChild size="lg" className="w-fit gap-2">
                <a href={`mailto:${contactEmail}`}>
                  <Send className="h-4 w-4" />
                  {contactEmail}
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </Layout>
  );
}
