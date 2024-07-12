type IFooterCopyrightProps = {
  title: string;
};
const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="">
    © Copyright {new Date().getFullYear()} {props.title}. <br />
  </div>
);

export { FooterCopyright };
