const mediaQueriesSizes = {
  sm: 568,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1480,
};

export default {
  mediaQueries: {
    sm: `@media (min-width : ${mediaQueriesSizes.sm}px)`,
    md: `@media (min-width : ${mediaQueriesSizes.md}px)`,
    lg: `@media (min-width : ${mediaQueriesSizes.lg}px)`,
    xl: `@media (min-width : ${mediaQueriesSizes.xl}px)`,
    xxl: `@media (min-width : ${mediaQueriesSizes.xxl}px)`,
  },
};
