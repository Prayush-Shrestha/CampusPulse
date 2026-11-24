'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, ChevronDown, CircleHelp, LogOut } from 'lucide-react';
import { navItems } from '@/lib/nav';
export default function Sidebar(){
 const path=usePathname();
 return <aside className="sidebar"><div className="brand"><div className="brand-mark"><GraduationCap size={21}/></div><div><b>CampusPulse</b><small>Campus operations</small></div></div>
 <div className="workspace"><div className="workspace-icon">NU</div><div><b>Northfield University</b><small>Admin workspace</small></div><ChevronDown size={15}/></div>
 <p className="nav-caption">WORKSPACE</p><nav>{navItems.map(item=>{const Icon=item.icon;const active=path===item.href||(item.href!=='/'&&path.startsWith(item.href));return <Link key={item.href} href={item.href} className={`nav-link ${active?'active':''}`}><Icon size={18}/><span>{item.label}</span>{item.label==='Events'&&<span className="nav-badge">8</span>}</Link>})}</nav>
 <div className="sidebar-bottom"><div className="help-card"><CircleHelp size={18}/><div><b>Need some help?</b><small>Visit our help center</small></div></div><div className="profile"><div className="avatar">PS</div><div className="profile-name"><b>Prayush Shrestha</b><small>Administrator</small></div><button aria-label="Log out"><LogOut size={16}/></button></div></div></aside>
}
