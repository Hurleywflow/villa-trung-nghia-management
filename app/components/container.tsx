import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'm-0 mx-auto box-border w-full max-w-[120rem] p-0',
        className,
      )}
    >
      {/* wrap all children passed to Container component in a div with max-width and padding utilities from Tailwind CSS and className prop passed to Container component */}
      {children}
    </div>
  );
};
