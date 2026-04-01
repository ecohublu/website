import React from 'react';
import ProductDetailPage from '@site/src/components/product-detail-page';
import {productsBySlug} from '@site/src/data/siteContent';

export default function HupaPage() {
  return <ProductDetailPage product={productsBySlug.hupa} />;
}
