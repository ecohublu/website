import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight} from 'lucide-react';
import {Badge} from '@site/src/components/ui/badge';
import {Button} from '@site/src/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@site/src/components/ui/card';
import {brandName, contactEmail, siteDescription} from '@site/src/data/siteContent';

export default function ProductDetailPage({product}) {
  const page = product.page || {};
  const heroHeadline = page.headline || product.summary;
  const heroDescription = page.description || product.summary;
  const scenariosIntro =
    page.scenariosIntro || '適合需要建立穩定資料整理與管理流程的監測團隊。';
  const capabilitiesIntro =
    page.capabilitiesIntro || '這個產品會如何支援你的監測工作。';
  const outcomesIntro =
    page.outcomesIntro || '從資料整理效率到後續應用，成果會回到實際工作流程。';
  const scenarios = page.scenarios || [];
  const capabilities = page.capabilities || [];
  const outcomes = page.outcomes || [];
  const contactHeadline =
    page.contactHeadline ||
    `如果你想評估 ${product.name} 是否適合目前的資料流程，可以直接把背景與需求寄給我們。`;
  const contactDescription =
    page.contactDescription ||
    '你可以提供專案背景、資料規模與預計時程，我們會先協助判斷適合的切入方式與合作方向。';
  const primaryCtaLabel = '預約需求討論';
  const secondaryCtaLabel = page.secondaryCtaLabel || '查看其他產品';
  const contactCtaLabel = '預約需求討論';

  return (
    <Layout title={`${product.name} | ${brandName}`} description={product.summary || siteDescription}>
      <main className="pb-20">
        <section className="container pt-12 md:pt-16">
          <div className="inner-page-hero px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="relative z-10 max-w-5xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  {product.kicker}
                </Badge>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
                  {product.category}
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-4xl font-black tracking-[-0.06em] text-foreground md:text-5xl">
                    {product.name}
                  </p>
                  <p className="text-lg font-semibold text-muted-foreground md:text-xl">
                    {product.title}
                  </p>
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {heroHeadline}
                </h1>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                  {heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="w-fit gap-2 whitespace-nowrap">
                  <a href={`mailto:${contactEmail}`}>
                    {primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-fit whitespace-nowrap">
                  <Link to="/#products-services">{secondaryCtaLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {capabilitiesIntro}
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Card key={capability.title} className="page-soft-card h-full">
                <CardHeader className="p-7 md:p-8">
                  <span className="page-number">{`0${index + 1}`}</span>
                  <CardTitle className="mt-4 text-xl leading-snug">{capability.title}</CardTitle>
                  <CardDescription className="text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-soft-card">
            <CardHeader className="space-y-4 p-7 md:p-9">
              <Badge variant="outline" className="w-fit rounded-full">
                Suitable Scenarios
              </Badge>
              <CardTitle className="max-w-3xl text-3xl md:text-4xl">
                {scenariosIntro}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 p-7 pt-0 md:grid-cols-3 md:px-9 md:pb-9">
              {scenarios.map((scenario, index) => (
                <div key={scenario} className="page-inset-card px-4 py-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {`0${index + 1}`}
                  </div>
                  <div className="text-sm leading-6 text-muted-foreground">{scenario}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-soft-card">
            <CardHeader className="p-7 md:p-9">
              <Badge variant="outline" className="w-fit rounded-full">
                What You Get
              </Badge>
              <CardTitle className="mt-4 max-w-xl text-3xl md:text-4xl">
                {outcomesIntro}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 p-7 pt-0 md:px-9 md:pb-9">
              {outcomes.map((outcome, index) => (
                <div key={outcome} className="page-inset-card px-4 py-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {`0${index + 1}`}
                  </div>
                  <div className="text-sm leading-6 text-muted-foreground">{outcome}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="container pt-10 md:pt-14">
          <Card className="page-cta-card">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="max-w-2xl space-y-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                  Contact
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {contactHeadline}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {contactDescription}
                </p>
              </div>
              <Button asChild size="lg" className="w-fit gap-2 whitespace-nowrap">
                <a href={`mailto:${contactEmail}`}>
                  {contactCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </Layout>
  );
}
