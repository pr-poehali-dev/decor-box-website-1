import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const pages = [
  { path: '/', label: 'ГЛАВНАЯ' },
  { path: '/about', label: 'О ПРОИЗВОДСТВЕ' },
  { path: '/process', label: 'ПРОЦЕСС ПРОИЗВОДСТВА' },
  { path: '/materials', label: 'МАТЕРИАЛЫ' },
  { path: '/equipment', label: 'ОБОРУДОВАНИЕ' },
  { path: '/technology', label: 'ТЕХНОЛОГИИ' },
  { path: '/contacts', label: 'КОНТАКТЫ' },
];

const MenuButton = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#FDB931] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Icon name="Menu" size={24} className="text-black" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-black/95 backdrop-blur-md border-primary/20">
        <div className="mt-8 space-y-2">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 rounded-lg font-unbounded text-sm transition-all ${
                location.pathname === page.path
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FDB931] text-black font-bold'
                  : 'text-muted-foreground hover:text-primary hover:bg-card/50'
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
