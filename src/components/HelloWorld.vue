<script setup>
import MinusIcon from "@/assets/images/MinusIcon.vue";
import PlusIcon from "@/assets/images/PlusIcon.vue";
import StarIcon from "@/assets/images/StarIcon.vue";
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";

const counterStore = useCounterStore();

counterStore.setCounterBoolean()
</script>

<template>
  <section class="faq">
    <div class="container">
      <div class="faq__box">
        <div class="faq__box-intro">
          <StarIcon class="faq__box-star" />

          <h1 class="faq__box-title">FAQs</h1>

        </div>
        <div class="faq__box-faqs">
          <div
            class="faq__box-faqs-questions"
            v-for="(questions, index) in counterStore?.questions"
            :key="index"
          >
            <h3 class="faq__box-faqs-question" @click="counterStore.setCounterBoolean(index)">
              {{ questions?.question }} <span><PlusIcon v-show="!questions?.showHide" />
              <MinusIcon v-show="questions?.showHide" /></span>
            </h3>
            <p class="faq__box-faqs-answer" :class="{ 'active': questions?.showHide }">
              {{ questions?.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 16px;

  &__box {
    margin: 0 auto;
    padding: 30px;
    max-width: 600px;
    width: 100%;
    background: var(--white);
    border-radius: 13px;

    &-intro {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      cursor: default;
    }

    &-title {
      font-size: 46px;
      
    }

    &-faqs {
      display: flex;
      flex-direction: column;
      gap: 20px;

      &-questions {
        padding: 15px 0;
        display: flex;
        gap: 15px;
        flex-direction: column;
        border-bottom: 1px solid #bdbdbd70;

        &:nth-last-of-type(1) {
          border: none;
        }
      }

      &-question {
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        color: var(--darkPurple);
        transition: 300ms;
        max-width: 520px;
        width: 100%;

        &:hover {
          color: var(--purple);
        }
      }

      &-answer {
        display: none;
        padding: 15px 0;

        &.active {
          display: flex;
        }
      }
    }
  }
}
</style>