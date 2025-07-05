import React from 'react';
import Hero from '../components/fhn-revital/Hero';
import ProjectOverview from '../components/fhn-revital/ProjectOverview';
import InteractiveCards from '../components/fhn-revital/InteractiveCards';
import OperationsResearch from '../components/fhn-revital/OperationsResearch';
import TimelineTracker from '../components/fhn-revital/TimelineTracker';
import FutureVision from '../components/fhn-revital/FutureVision';
import ImpactValues from '../components/fhn-revital/ImpactValues';
import MeetDesigner from '../components/fhn-revital/MeetDesigner';
import Navigation from '../components/fhn-revital/Navigation';

const FHNRevitalization = () => {
  return (
    <div 
      className="min-h-screen bg-[#F8F8F8]"
      style={{
        // Override CSS variables for light theme
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '222.2 47.4% 11.2%',
        '--primary-foreground': '210 40% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '222.2 84% 4.9%',
        '--radius': '0.5rem',
        '--sidebar-background': '0 0% 98%',
        '--sidebar-foreground': '240 5.3% 26.1%',
        '--sidebar-primary': '240 5.9% 10%',
        '--sidebar-primary-foreground': '0 0% 98%',
        '--sidebar-accent': '240 4.8% 95.9%',
        '--sidebar-accent-foreground': '240 5.9% 10%',
        '--sidebar-border': '220 13% 91%',
        '--sidebar-ring': '217.2 91.2% 59.8%',
        // Override font family to use system fonts instead of Courier
        'font-family': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      } as React.CSSProperties}
    >
      <Navigation />
      <Hero />
      <ProjectOverview />
      <InteractiveCards />
      <OperationsResearch />
      <TimelineTracker />
      <FutureVision />
      <ImpactValues />
      <MeetDesigner />
    </div>
  );
};

export default FHNRevitalization; 