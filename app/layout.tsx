import './globals.css';

export const metadata = {
  title: 'DriveEase Rentals - Car Rental CRM',
  description: 'Manage your car rental operations with ease and efficiency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}