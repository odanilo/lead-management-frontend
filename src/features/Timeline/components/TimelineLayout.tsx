import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PropsWithChildren } from 'react';

export type Tab = {
  value: string;
  onTabClick: () => void;
  label: string;
};

type TimelineLayoutProps = {
  tabs: Tab[];
};

export function TimelineLayout({
  children,
  tabs,
}: PropsWithChildren<TimelineLayoutProps>) {
  return (
    <Tabs defaultValue="invited">
      <TabsList className="w-full flex">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={tab.onTabClick}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  );
}
