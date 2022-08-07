import { useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get('segunda')}`}
      </h1>
    </div>
  );
};
