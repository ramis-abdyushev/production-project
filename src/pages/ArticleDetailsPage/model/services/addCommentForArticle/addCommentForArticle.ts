import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from 'features/addCommentForm/model/selector/addCommentFormSelectors';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('Ошибка');
    }
  },
);
