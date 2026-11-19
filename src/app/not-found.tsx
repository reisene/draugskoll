import { Metadata } from 'next';
import { Button } from 'react-bootstrap';
import { IoWarning } from 'react-icons/io5';

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className={'justify-content-center align-items-center text-center'}>
      <h1>404 - Not Found</h1>
      <IoWarning className={'text-warning display-1'} />
      <p>The page you are looking for does not exist.</p>
      <p className={'text-muted'}>
        Please check the URL or return to the homepage.
      </p>
      <div className={'d-flex justify-content-center gap-2'}>
        <Button variant={'primary'} href={'/'}>
          Go to Homepage
        </Button>
        <Button variant={'secondary'} href={'/contact'}>
          Contact Support
        </Button>
      </div>
    </main>
  );
}
