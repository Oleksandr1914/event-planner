import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { events } from './utils/events';

export const useEventStore = create(
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
      editEvent: newEvent => {
        const array = get().eventData.map(el =>
          el.id === newEvent.id ? newEvent : el
        );

        set({
          eventData: array,
        });
      },
    }),
    {
      name: 'event-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useSearch = create(set => ({
  search: '',
  editSearch: data => set({ search: data }),
}));
