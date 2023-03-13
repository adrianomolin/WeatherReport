import { RiseLoader } from 'react-spinners';
import { LoaderContainer } from './styles';

export function Loader() {
  return (
    <LoaderContainer>
      <RiseLoader color="#fff" size={25} />
    </LoaderContainer>
  );
}
