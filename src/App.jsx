import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App(){
    return(
        // fragment é usado quando tem mais de um component <> </>
            <RepositoryList />
    );
}