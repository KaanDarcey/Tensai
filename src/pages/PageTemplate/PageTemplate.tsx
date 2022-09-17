import * as sc from "./PageTemplate.styles";

export interface PageTemplateProps {
  children?: any;
}

const PageTemplate = ({children, ...moreProps}: PageTemplateProps) => {
  return <sc.PageTemplate {...moreProps}>{children}</sc.PageTemplate>;
};

PageTemplate.displayName = "PageTemplate";

export default PageTemplate;
