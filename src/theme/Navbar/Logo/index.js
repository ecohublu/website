import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function NavbarLogo() {
  const {navbar = {}, title: siteTitle} = useThemeConfig();
  const logo = navbar.logo ?? {};
  const title = navbar.title ?? siteTitle;
  const logoSrc = logo.src ? useBaseUrl(logo.src) : null;

  return (
    <Link className="navbar__brand navbar-brandmark" to="/">
      {logoSrc ? (
        <img src={logoSrc} alt={logo.alt ?? title} className="navbar__logo" />
      ) : null}
      <span className="navbar__title">{title}</span>
    </Link>
  );
}
