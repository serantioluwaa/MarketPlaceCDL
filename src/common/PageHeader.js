import {
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./PageHeader.css";

/**
 *
 * @param {PageHeaderProps} props
 */
function PageHeader(props) {
  const {
    title,
    className,
    breadcrumbs,
    children,
    classes,
    beforeTitle,
    ...rest
  } = props;
  return (
    <>
      <Toolbar
        disableGutters
        className={clsx("PageHeader", className, classes?.root)}
        {...rest}
      >
        {beforeTitle}
        <Typography
          variant="h5"
          className={clsx("PageHeader__title", classes?.title)}
        >
          {title}
        </Typography>
        <div className="flex-1" />
        <div className={clsx("PageHeader__content", classes?.rootContent)}>
          {children}
        </div>
        {!!breadcrumbs.length && (
          <Breadcrumbs>
            {breadcrumbs.map((breadcrumb, key) => {
              const isPage = key === breadcrumbs.length - 1;

              if (isPage) {
                return <Typography key={key}>{breadcrumb.name}</Typography>;
              }

              return (
                <MuiLink key={key} component={Link} to={breadcrumb.to}>
                  {breadcrumb.name}
                </MuiLink>
              );
            })}
          </Breadcrumbs>
        )}
      </Toolbar>
      {!!children && (
        <Toolbar
          disableGutters
          className={clsx("PageHeader-content", classes?.content)}
        >
          {children}
        </Toolbar>
      )}
    </>
  );
}

PageHeader.defaultProps = {
  breadcrumbs: [],
  classes: {},
};

export default PageHeader;

/**
 * @typedef {{
 * breadcrumbs: {name: string, to: string}[];
 * classes: {root: string; title: string; content: string; rootContent: string}
 * beforeTitle: import("react").ReactNode
 * } & import("react").ComponentPropsWithoutRef<'div'>} PageHeaderProps
 */
