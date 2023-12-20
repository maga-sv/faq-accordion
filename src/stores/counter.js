import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    questions: ref([
      {
        id: 1,
        question: "What is Frontend Mentor, and how will it help me?",
        answer:
          "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        showHide: ref(false),
      },
      {
        id: 2,
        question: "Is Frontend Mentor free?",
        answer:
          "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
          showHide: ref(false),
      },
      {
        id: 3,
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer:
          "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
          showHide: ref(false),
      },
      {
        id: 4,
        question:
          "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer:
          "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
          showHide: ref(false),
      },
    ])
  }),
  getters: {},
  actions: {
    setCounterBoolean(boolean) {
      if (this.questions[boolean]) {
        this.questions[boolean].showHide = !this.questions[boolean]?.showHide;
      }
    }
  },
});