import React from 'react';
import ProductDetailPage from '@site/src/components/product-detail-page';
import {productsBySlug} from '@site/src/data/siteContent';

export default function PamPage() {
  return <ProductDetailPage product={productsBySlug.pam} />;
}
