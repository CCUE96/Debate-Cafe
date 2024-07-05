import { fetchNews } from "../services/newsService";
import NewsArticle from "./NewsArticle";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

function NewsSearchBar() {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = async () => {
        if (query) {
            const fetchedArticles = await fetchNews(query);
            setArticles(fetchedArticles);
        }
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h3" className="pacifico">Search News</Typography>
            <Box sx={{ mt: 3 }}>
                <TextField 
                    label="Search for news topics"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSearch}
                    sx={{ mt: 2 }}
                >
                    Search
                </Button>
            </Box>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {articles.map(article => (
                    <Grid item xs={12} key={article.url}>
                        <NewsArticle article={article} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default NewsSearchBar;