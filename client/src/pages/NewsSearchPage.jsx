import NewsSearchBar from "../components/searchpage/newssearchbar";
import { Container } from '@mui/material'
import Auth from '../utils/auth'

function NewsSearchPage() {
   Auth.ensureAuthenticatedAccess();

    return (
      <Container>
      <NewsSearchBar/>
      </Container>
    );
}

export default NewsSearchPage;