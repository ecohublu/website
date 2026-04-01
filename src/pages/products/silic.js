import React from 'react';
import ProductDetailPage from '@site/src/components/product-detail-page';
import {productsBySlug} from '@site/src/data/siteContent';

export default function SilicPage() {
  return <ProductDetailPage product={productsBySlug.silic} />;
}
