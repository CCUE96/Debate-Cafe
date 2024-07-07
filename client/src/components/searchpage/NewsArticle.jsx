import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

function NewsArticle({ article }) {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5">{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">{article.description}</Typography>
                <Link href={article.url} target="_blank" rel="noopener">
                    Read more
                </Link>
            </CardContent>
        </Card>
    );
}

export default NewsArticle;