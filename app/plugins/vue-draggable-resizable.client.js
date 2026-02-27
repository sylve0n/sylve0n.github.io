import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/style.css'; // Import the CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueDraggableResizable', VueDraggableResizable);
});
