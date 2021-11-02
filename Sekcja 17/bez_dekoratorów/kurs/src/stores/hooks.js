import { useContext } from 'react';

import { StoreContext } from './StoreProvider';

export function useCommentsStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error(' Nie znaleziono RootStore, sprawdź czy masz Provider który go dostarcza');
  }

  return rootStore.commentsStore;
}