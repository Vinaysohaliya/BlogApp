import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const initialState = {
    posts: [],
}

export const addPost = createAsyncThunk('blog/addPost', async (postData) => {
  try {
    console.log(postData);
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'posts'), {
      title: postData.title,
      text: postData.text,
    });
    console.log(docRef);
    console.log('Document written with ID: ', docRef.id);
    
    return postData;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error; // Propagate the error
  }
});

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
            });
    },
});

export const { } = blogSlice.actions;
export default blogSlice.reducer;
