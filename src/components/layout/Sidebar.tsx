import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, BuildingIcon, CheckSquareIcon, FileTextIcon, MailIcon, ScrollIcon, ShieldIcon, BarChart3Icon, LayoutDashboardIcon, PackageIcon, GlobeIcon, BookOpenIcon, BrainCircuitIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed: boolean;
  onNavigate: () => void;
}
const SidebarLink = ({
  to,
  icon,
  label,
  active,
  collapsed,
  onNavigate
}: SidebarLinkProps) => {
  const handleClick = () => {
    onNavigate();
  };
  return <Link to={to} className={`flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#1E1B3F]/50'} ${collapsed ? 'justify-center' : ''}`} onClick={handleClick}>
      <div className={collapsed ? '' : 'mr-3'}>{icon}</div>
      {!collapsed && <span>{label}</span>}
    </Link>;
};
export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  // Get the saved state from localStorage or default to false
  const savedCollapsedState = localStorage.getItem('sidebarCollapsed');
  const defaultCollapsed = savedCollapsedState ? JSON.parse(savedCollapsedState) : false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isHovered, setIsHovered] = useState(false);
  // Save collapsed state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);
  // Check if the device is mobile
  const isMobile = window.innerWidth < 768;
  // Set default collapsed state for mobile
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, []);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Function to handle navigation - auto collapse on mobile or when configured
  const handleNavigate = () => {
    if (isMobile || isCollapsed === false) {
      setIsCollapsed(true);
    }
  };
  const sidebarWidth = isCollapsed && !isHovered ? '70px' : '240px';
  return <div className="relative bg-[#0A0826] border-r border-[#1E1B3F] transition-all duration-300 ease-in-out" style={{
    width: sidebarWidth
  }} onMouseEnter={() => isCollapsed && setIsHovered(true)} onMouseLeave={() => isCollapsed && setIsHovered(false)}>
      <div className="h-screen overflow-y-auto py-4 px-3 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          {(!isCollapsed || isHovered) && <div className="text-xl font-bold text-white">Holistik</div>}
          <button onClick={toggleSidebar} className="p-2 rounded-full bg-[#1E1B3F] text-white hover:bg-[#EA3A70]/20 transition-colors" aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
            {isCollapsed ? <ChevronRightIcon size={16} /> : <ChevronLeftIcon size={16} />}
          </button>
        </div>
        <nav className="space-y-6">
          <div className="space-y-1">
            <SidebarLink to="/" icon={<HomeIcon className="h-5 w-5" />} label="Dashboard" active={currentPath === '/'} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
          </div>
          <div className="space-y-1">
            <div className="px-3 mb-2">
              <h3 className={`text-xs font-semibold text-indigo-400 uppercase tracking-wider ${isCollapsed && !isHovered ? 'sr-only' : ''}`}>
                My Company
              </h3>
            </div>
            <SidebarLink to="/corporate" icon={<BuildingIcon className="h-5 w-5" />} label="Profile" active={currentPath === '/corporate'} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/tasks" icon={<CheckSquareIcon className="h-5 w-5" />} label="Tasks" active={currentPath.startsWith('/tasks')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/corporate/documents" icon={<FileTextIcon className="h-5 w-5" />} label="Documents" active={currentPath === '/corporate/documents'} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/mailbox" icon={<MailIcon className="h-5 w-5" />} label="Mailbox" active={currentPath.startsWith('/mailbox')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/legal-drafts" icon={<ScrollIcon className="h-5 w-5" />} label="Legal Drafts" active={currentPath.startsWith('/legal-drafts')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/kyc" icon={<ShieldIcon className="h-5 w-5" />} label="KYC" active={currentPath.startsWith('/kyc')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
          </div>
          <div className="space-y-1">
            <div className="px-3 mb-2">
              <h3 className={`text-xs font-semibold text-indigo-400 uppercase tracking-wider ${isCollapsed && !isHovered ? 'sr-only' : ''}`}>
                Core Business
              </h3>
            </div>
            <SidebarLink to="/taxes" icon={<FileTextIcon className="h-5 w-5" />} label="Taxes" active={currentPath.startsWith('/taxes')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/financial" icon={<BarChart3Icon className="h-5 w-5" />} label="Financial" active={currentPath.startsWith('/financial')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/marketing" icon={<LayoutDashboardIcon className="h-5 w-5" />} label="Marketing" active={currentPath.startsWith('/marketing')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
          </div>
          <div className="space-y-1">
            <div className="px-3 mb-2">
              <h3 className={`text-xs font-semibold text-indigo-400 uppercase tracking-wider ${isCollapsed && !isHovered ? 'sr-only' : ''}`}>
                Services
              </h3>
            </div>
            <SidebarLink to="/plans" icon={<PackageIcon className="h-5 w-5" />} label="Plans & Services" active={currentPath.startsWith('/plans')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/discover" icon={<GlobeIcon className="h-5 w-5" />} label="Discover" active={currentPath.startsWith('/discover')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/registration/branch" icon={<BuildingIcon className="h-5 w-5" />} label="Branch Registration" active={currentPath.startsWith('/registration')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
          </div>
          <div className="space-y-1">
            <div className="px-3 mb-2">
              <h3 className={`text-xs font-semibold text-indigo-400 uppercase tracking-wider ${isCollapsed && !isHovered ? 'sr-only' : ''}`}>
                Knowledge Center
              </h3>
            </div>
            <SidebarLink to="/library" icon={<BookOpenIcon className="h-5 w-5" />} label="Library" active={currentPath.startsWith('/library')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
            <SidebarLink to="/ai-agent" icon={<BrainCircuitIcon className="h-5 w-5" />} label="AI Support" active={currentPath.startsWith('/ai-agent')} collapsed={isCollapsed && !isHovered} onNavigate={handleNavigate} />
          </div>
        </nav>
      </div>
    </div>;
}