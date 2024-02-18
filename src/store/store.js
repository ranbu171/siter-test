import { create } from 'zustand'

const initialParameters = {
  position_x: 0,
  position_y: 0,
  opacity: 100,
  scale: 1,
  blur: 0,
  speed: 0.1,
  delay: 0,
  easing: {
    label: 'Ease-in',
    value: 'ease-in'
  },
  replay: false
}
export const useElementStore = create((set) => ({
  currentElementId: null,
  parameters: { ...initialParameters },

  setCurrentElement: (element_id) =>
    set(() => {
      const local_store = JSON.parse(localStorage.getItem('element_animations')) || []
      const current_element = local_store.find(
        (element) => Number(element.id) === Number(element_id)
      )
      if (!current_element && element_id) {
        local_store.push({
          id: element_id,
          parameters: { ...initialParameters }
        })
        localStorage.setItem('element_animations', JSON.stringify(local_store))
      }
      const element_parameters = current_element?.parameters || { ...initialParameters }
      return {
        currentElementId: element_id,
        parameters: element_parameters
      }
    }),

  setParameter: (key, value) =>
    set((state) => {
      const new_parameters = { ...state.parameters, [key]: value }
      const local_store = JSON.parse(localStorage.getItem('element_animations')) || []
      const current_index = local_store?.findIndex(
        (element) => Number(element.id) === Number(state.currentElementId)
      )
      if (current_index !== -1) {
        local_store[current_index].parameters = new_parameters
        localStorage.setItem('element_animations', JSON.stringify(local_store))
      }
      return {
        parameters: new_parameters
      }
    })
}))
