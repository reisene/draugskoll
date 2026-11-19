'use client';

import { Button, Container } from 'react-bootstrap';
import { BsExclamationTriangle } from 'react-icons/bs';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Container className={'text-center'}>
      <h1 className={'display-1'}>Oops!</h1>
      <BsExclamationTriangle className={'text-danger display-1'} />
      <p className={'lead'}>Something went wrong.</p>
      <p className={'text-muted'}>{error.message}</p>
      <Button variant={'primary'} onClick={reset}>
        Retry
      </Button>
    </Container>
  );
}
