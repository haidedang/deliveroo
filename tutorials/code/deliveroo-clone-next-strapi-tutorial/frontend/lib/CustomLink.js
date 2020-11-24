import Link from "next/link";
import Router from "next/router";

const CustomLink = ({ children, ...otherProps }) => {
  const isPage = () => {
    // if we're in a next.js route, then Router.router will be set
    return Boolean(Router.router);
  };

  return isPage() ? <Link {...otherProps}>{children}</Link> : children;
};

export default CustomLink;
