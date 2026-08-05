export const backgroundBuildEnabled = false;

export const smoothOperatorAssetStoreUrl =
  'https://assetstore.unity.com/packages/tools/utilities/smooth-operator-271378';

export const smoothOperatorVideoUrl = 'https://www.youtube.com/embed/cIYW7QI1iFk';

export const navLinks = [
  ...(backgroundBuildEnabled ? [{ label: 'Background Build', href: '/products/background-build' }] : []),
  { label: 'Smooth Operator', href: '/products/smoothoperator' },
  { label: 'Support', href: '/support' },
];

export const footerLinks = [
  ...(backgroundBuildEnabled ? [{ label: 'Background Build', href: '/products/background-build' }] : []),
  { label: 'Smooth Operator', href: '/products/smoothoperator' },
  { label: 'Support', href: '/support' },
];
