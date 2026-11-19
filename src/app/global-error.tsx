'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { BsExclamationTriangle } from 'react-icons/bs';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='en' data-bs-theme='dark'>
      <body className={'min-vh-100 d-flex align-items-center'}>
        <Container className={'text-center'}>
          <h1 className={'display-1'}>Oops!</h1>
          <BsExclamationTriangle className={'text-danger display-1'} />
          <p className={'lead'}>A critical error occurred.</p>
          {error.digest && (
            <p className={'text-muted'}>Error ID: {error.digest}</p>
          )}
          <Button variant={'primary'} onClick={reset}>
            Try again
          </Button>
        </Container>
      </body>
    </html>
  );
}
