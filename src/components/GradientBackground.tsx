
import React from 'react';

const GradientBackground: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 gradient-bg -z-10" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-visua-accent/20 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-700/20 rounded-full blur-[120px] animate-pulse-subtle animation-delay-600" />
      </div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0xOCAwdjE4SDBWMGgxOHpNMS41IDEuNXYxNWgxNXYtMTVoLTE1eiIvPjwvZz48L2c+PC9zdmc+')] -z-10 opacity-30" />
    </>
  );
};

export default GradientBackground;
