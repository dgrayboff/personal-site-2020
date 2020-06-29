import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            about1,
            about2,
            about3
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
