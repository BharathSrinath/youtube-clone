export const handleResize = (isSideBarOpen, dispatch, openSidebar, closeSidebar) => {
  const isSmallScreen = window.matchMedia('(min-width: 640px)').matches;

  if (isSmallScreen && !isSideBarOpen) {
    dispatch(openSidebar(true));
  } else if (!isSmallScreen && isSideBarOpen) {
    dispatch(closeSidebar(false));
  }
};