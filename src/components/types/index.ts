export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export interface LayoutProps extends PageProps {
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
