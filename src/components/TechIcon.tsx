export const Techicon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)] text-black" />
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stop-color="black" />
            <stop offset="100%" stop-color="text-gray-300" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
