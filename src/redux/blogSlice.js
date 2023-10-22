import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { addDoc, arrayUnion, collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const initialState = {
  posts: [],
  userData: {},
  isLogddin:false,
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

// export const fetchUserData = createAsyncThunk('items/userData', async (_, { rejectWithValue }) => {
//   try {
//     const db = getFirestore();
//     const usersCollection = collection(db, 'users');
//     const auth = getAuth();

//     const user = auth.currentUser;
//     // Create a query to find the user by UID
//     const q = query(usersCollection, where('uid', '==', user.uid));
//     const querySnapshot = await getDocs(q);
//     console.log("fsffsfsfsfsf");
//     if (!querySnapshot.empty) {
//       // Assuming there's only one user with the provided UID (unique UID)
//       const userDoc = querySnapshot.docs[0];
//       const userData = { id: userDoc.id, ...userDoc.data() };
//       return userData;
//     } else {
//       return rejectWithValue('User not found');
//     }
//   } catch (error) {
//     return rejectWithValue('Failed to fetch user data');
//   }
// });



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
        // auther:.name,
      });

      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
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
      // .addCase(fetchUserData.fulfilled, (state, action) => {
      //   state.userData = action.payload;
      // })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        console.log(state.posts);
      })

  },
});

export const { } = blogSlice.actions;
export default blogSlice.reducer;
