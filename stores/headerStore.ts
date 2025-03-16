import { defineStore } from 'pinia';
import type { AxiosProgressEvent } from 'axios';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    isLogin: false,
    uploadProgress: 0, // 업로드 진행률
    bellBadgeCount: 3,
    bagBadgeCount: 5,
  }),
  actions: {
    setUploadProgress(progress: number) {
      this.uploadProgress = progress;
    },
    onUploadProgress(progressEvent: AxiosProgressEvent) {
      if (progressEvent.total) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        this.uploadProgress = percentCompleted;
      }
    }
  },
});
