import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const pages = [
  { path: '/', label: 'ГЛАВНАЯ' },
  { path: '/about', label: 'О ПРОИЗВОДСТВЕ' },
  { path: '/process', label: 'ПРОЦЕСС' },
  { path: '/materials', label: 'МАТЕРИАЛЫ' },
  { path: '/equipment', label: 'ОБОРУДОВАНИЕ' },
  { path: '/technology', label: 'ТЕХНОЛОГИИ' },
  { path: '/contacts', label: 'КОНТАКТЫ' },
];

const Navigation = () => {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-primary/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          {prevPage ? (
            <Link
              to={prevPage.path}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
              <span className="text-sm font-unbounded">{prevPage.label}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextPage ? (
            <Link
              to={nextPage.path}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-unbounded">{nextPage.label}</span>
              <Icon name="ChevronRight" size={20} />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={`text-xs font-unbounded transition-colors ${
                location.pathname === page.path
                  ? 'text-gradient-gold'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
