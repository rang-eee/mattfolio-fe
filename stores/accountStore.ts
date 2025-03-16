import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    uploadProgress: 10, // 업로드 진행률
  }),
  actions: {
    setUploadProgress(progress: number) {
      this.uploadProgress = progress;
    },
  },
});
