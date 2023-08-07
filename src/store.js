import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { events } from './utils/events';

const useEventStore = create(
  persist(
    (set, get) => ({
      eventData: [...events],
      addEvent: newEvent => {
        console.log(newEvent);
        set({ eventData: [newEvent, ...get().eventData] });
      },
    }),
    {
      name: 'event-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEventStore;
