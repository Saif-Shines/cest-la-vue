import { ref } from "vue";

const globalVisitorCount = ref(0);

function incrementGlobalVisitorCount() {
  globalVisitorCount.value++;
}

export function useVisitorCount() {
  const localVisitorCount = ref(0);

  function incrementLocalVisitorCount() {
    localVisitorCount.value++;
  }

  return {
    globalVisitorCount,
    localVisitorCount,
    incrementGlobalVisitorCount,
    incrementLocalVisitorCount,
  };
}
