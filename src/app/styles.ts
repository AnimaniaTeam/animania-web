import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(239, 108, 0, 0.8) 100%
  );
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  max-width: 24rem;
  padding: 3rem 1.5rem;

  gap: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  height: auto;

  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
