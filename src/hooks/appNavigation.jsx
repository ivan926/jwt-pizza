import { useLocation, useNavigate } from 'react-router-dom';

function useBreadcrumb(sibling) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateByBreadcrumb = () => {
    let newPath = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
    if (sibling) {
      newPath = newPath + '/' + sibling;
    } else if (newPath === '') {
      newPath = '/';
    }
    navigate(newPath, { state: location.state });
  };

  return navigateByBreadcrumb;
}

//adding comment to verify that changes have been made to static page.

export { useBreadcrumb };
