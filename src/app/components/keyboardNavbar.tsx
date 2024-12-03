'use client';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import {
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';
import * as React from 'react';

const navItems = [
  { key: 'h', label: 'Home', icon: HomeIcon, path: '/' },
  { key: 'j', label: 'About', icon: InformationCircleIcon, path: '/about' },
  { key: 'b', label: 'Blog', icon: BookOpenIcon, path: '/blog' },
  { key: 'l', label: 'Get Lost', icon: MapIcon, path: '/getus' },
];

export function KeyboardNavbar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Command palette toggle
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        return;
      }

      // Direct navigation when not typing
      if (document.activeElement === document.body) {
        const navItem = navItems.find(
          (item) => item.key === e.key.toLowerCase(),
        );
        if (navItem) {
          e.preventDefault();
          navigate({ to: navItem.path });
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="max-w-2xl w-full mx-auto p-4">
        <p className="text-2xl  text-center text-muted-foreground mb-8">
          Press{' '}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
            <span className="text-xs">⌘</span>K
          </kbd>{' '}
          for command palette or use{' '}
          <kbd className="px-1.5 border rounded bg-muted font-mono text-[10px]">
            H
          </kbd>{' '}
          <kbd className="px-1.5 border rounded bg-muted font-mono text-[10px]">
            J
          </kbd>{' '}
          <kbd className="px-1.5 border rounded bg-muted font-mono text-[10px]">
            B
          </kbd>{' '}
          <kbd className="px-1.5 border rounded bg-muted font-mono text-[10px]">
            L
          </kbd>{' '}
          for direct navigation
        </p>

        <div className="grid grid-cols-2 gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                onClick={() => navigate({ to: item.path })}
                className="cursor-pointer"
              >
                <div className="bg-gray-900 text-white rounded-2xl p-8 border-2 border-gray-700 relative">
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-mono">
                      {item.key}
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-gray-800 rounded-xl">
                      <Icon className="h-8 w-8 text-indigo-400" />
                    </div>
                    <span className="text-lg font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <CommandItem
                    key={item.key}
                    onSelect={() => {
                      navigate({ to: item.path });
                      setOpen(false);
                    }}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    <span>{item.label}</span>
                    <CommandShortcut>{item.key.toUpperCase()}</CommandShortcut>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  );
}
