import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { addDoc, arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const initialState = {
  posts: [],
}

export const fetchPosts = createAsyncThunk('items/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const db = getFirestore();
    const itemsCollection = collection(db, 'allPosts');
    const snapshot = await getDocs(itemsCollection);
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    return rejectWithValue('Failed to fetch items');
  }
});


export const addPost = createAsyncThunk('blog/addPost', async (postData) => {
  try {
    console.log(postData);
    const db = getFirestore();

    const auth = getAuth();

    const user = auth.currentUser;
    if (user) {
      const docRef = await addDoc(collection(db, 'users', user.uid, 'posts'), {
        title: postData.title,
        text: postData.text,
      });


      const allPostsRef = doc(db, 'allPosts', docRef.id);
      await setDoc(allPostsRef, {
        title: postData.title,
        text: postData.text,
      });

      const res = await updateDoc(docRef, {
        posts: arrayUnion(docRef.id),
      });
      toast.success("Blog Added Succesfully")

    }


    return postData;
  } catch (error) {
    toast.error("Error adding document")
    console.error('Error adding document: ', error);
    throw error;
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
      })
      .addCase(fetchPosts.fulfilled,(state,action)=>{
        state.posts=action.payload;
        console.log(state.posts);
      })
      
  },
});

export const { } = blogSlice.actions;
export default blogSlice.reducer;
