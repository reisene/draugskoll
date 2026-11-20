import pkg from '@/package.json';
import { Container, Image } from 'react-bootstrap';

function yearCheck() {
  const name: string = pkg.author.name || 'DraugSköll';
  const icon: string = '/logo.png' || '👻';
  const year: number = 2026;
  const currentYear: number = new Date().getFullYear();
  const isValidYear: boolean = currentYear >= year;
  if (!isValidYear) {
    throw new Error(
      `The current year is ${currentYear}. Please update the footer component to reflect the correct year.`,
    );
  } else if (currentYear > year) {
    return (
      <span className={'text-muted'}>
        {year}-{currentYear}{' '}
        <Image
          src={icon}
          alt='icon'
          style={{ width: '16px', height: '16px', marginRight: '4px' }}
        />{' '}
        {name}
      </span>
    );
  } else {
    return (
      <span className={'text-muted'}>
        {currentYear}{' '}
        <Image
          src={icon}
          alt='icon'
          style={{ width: '16px', height: '16px', marginRight: '4px' }}
        />{' '}
        {name}
      </span>
    );
  }
}

export default function Footer() {
  return (
    <footer className={'bg-body-tertiary py-3 mt-auto'}>
      <Container
        className={
          'd-flex flex-column flex-md-row justify-content-between align-items-center'
        }
      >
        <span className={'text-muted'}>
          &copy; {yearCheck()}. All rights reserved.
        </span>
        <iframe
          src='https://status.draugskoll.dev/badge?theme=dark'
          title={'Status badge'}
          loading='lazy'
          width='250'
          height='30'
          scrolling={'no'}
          style={{ border: 'none', colorScheme: 'normal' }}
        />
        <span className={'text-muted'}>
          Built with Next.js and React-Bootstrap.
        </span>
      </Container>
    </footer>
  );
}
