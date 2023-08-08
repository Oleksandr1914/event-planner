import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { events } from './utils/events';

const useEventStore = create(
  persist(
    (set, get) => ({
      eventData: [...events],
      addEvent: newEvent => {
        set({
          eventData: [newEvent, ...get().eventData],
        });
      },
      deleteEvent: idEvent => {
        const newArray = get().eventData.filter(el => el.id !== idEvent);
        set({ eventData: newArray });
      },
    }),
    {
      name: 'event-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEventStore;
