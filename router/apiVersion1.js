import { Router } from 'express';
import addUser from '../Controllers/addUser';
import Auth from '../Middleware/Auth';
import signIn from '../Controllers/signIn';
import createGif from '../Controllers/createGif';
import shareGif from '../Controllers/shareGif';
import createArticle from '../Controllers/createArticle';
import shareArticle from '../Controllers/shareArticle';
import editArticle from '../Controllers/editArticle';
import deleteArticle from '../Controllers/deleteArticle';
import deleteGif from '../Controllers/deleteGif';
import createArticleComment from '../Controllers/createArticleComment';
import createGifComment from '../Controllers/createGifComment';
import getAllPosts from '../Controllers/getAllPosts';
import getOneArticle from '../Controllers/getOneArticle';
import getOneGif from '../Controllers/getOneGif';
import getAllEmployees from '../Controllers/getAllEmployees';

const api = Router();

api.post('/auth/create-user', Auth, addUser);
api.post('/signin', signIn);
api.post('/auth/gifs', Auth, createGif);
api.post('/auth/gifs/:gifId/share/:recipientId', Auth, shareGif);
api.post('/auth/articles', Auth, createArticle);
api.post('/auth/articles/:articleId/share/:recipientId', Auth, shareArticle);

api.put('/auth/articles/:articleId', Auth, editArticle);

api.delete('/auth/articles/:articleId', Auth, deleteArticle);
api.delete('/auth/gifs/:gifId', Auth, deleteGif);

api.post('/auth/articles/:articleId/comments', Auth, createArticleComment);
api.post('/auth/gifs/:gifId/comments', Auth, createGifComment);

api.get('/auth/feed', Auth, getAllPosts);
api.get('/auth/articles/:articleId', Auth, getOneArticle);
api.get('/auth/gifs/:gifId', Auth, getOneGif);

api.get('/auth/employees', Auth, getAllEmployees);

export default api;
