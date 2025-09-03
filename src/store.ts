import { create } from 'zustand';

const useLikeStore = create((set) => ({
  likedItems: {}, 

  toggleLike: (id) => set((state) => {
    const currentLiked = state.likedItems[id];
    return {
      likedItems: {
        ...state.likedItems,
        [id]: !currentLiked,
      }
    }
  }),

  isLiked: (id) => !!useLikeStore.getState().likedItems[id], 
}));

export default useLikeStore;
