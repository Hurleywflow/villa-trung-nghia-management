import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('mx-auto max-w-[120rem] m-0 p-0 box-border w-full' , className)}>
      {/* wrap all children passed to Container component in a div with max-width and padding utilities from Tailwind CSS and className prop passed to Container component */}
      {children}
    </div>
  );
};
