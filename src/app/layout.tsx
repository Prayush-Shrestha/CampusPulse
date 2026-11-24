import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
export const metadata:Metadata={title:'CampusPulse | Campus Operations',description:'Campus events and club management dashboard'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="app-shell"><Sidebar/>{children}</div></body></html>}
