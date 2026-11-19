'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { BsCodeSlash, BsEnvelope, BsHouse, BsPerson } from 'react-icons/bs';

const navbarLinks: {
  href: string;
  label: string;
  icon: IconType;
}[] = [
  {
    href: '/',
    label: 'Home',
    icon: BsHouse,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: BsCodeSlash,
  },
  {
    href: '/about',
    label: 'About',
    icon: BsPerson,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: BsEnvelope,
  },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const logo = '/logo.svg';
  return (
    <Navbar
      expand={'lg'}
      aria-label={'Main navigation'}
      expanded={expanded}
      onToggle={setExpanded}
      sticky={'top'}
      bg={'body-tertiary'}
      className={'shadow-sm'}
    >
      <Container>
        <Navbar.Brand
          href={'/'}
          className={'d-flex align-items-center fw-bold g-1'}
        >
          <Image
            src={logo}
            alt={'Logo'}
            width={30}
            height={30}
            className={'me-2'}
          />
          <span className={'d-none d-sm-inline'}>DraugSköll Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle
          label={'Przełącz nawigację'}
          aria-controls={'main-navbar-nav'}
          aria-expanded={expanded}
        />
        <Navbar.Collapse id='main-navbar-nav'>
          <Nav
            variant={'underline'}
            className={'ms-auto align-items-lg-center'}
          >
            {navbarLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              const Icon = link.icon;
              return (
                <Nav.Item key={link.href} className={'mx-1'}>
                  <Nav.Link
                    as={Link}
                    href={link.href}
                    active={isActive}
                    onClick={() => setExpanded(false)}
                    className={'d-flex align-items-center'}
                  >
                    <Icon aria-hidden={true} className={'me-2'} />
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
