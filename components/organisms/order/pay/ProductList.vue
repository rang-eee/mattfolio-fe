<script setup lang="ts">
const priceItems = [
  { description: '필름 2개', price: '1,000원' },
  { description: '필름 3개', price: '1,500원' },
  { description: '필름 5개', price: '2,500원' },
  { description: '필름 1개', price: '500원' },
  { description: '필름 4개', price: '2,000원' },
  { description: '필름 6개', price: '3,000원' },
]

const paymentMethods = [{ description: '네이버 페이' }, { description: '신용 카드' }]

const activeIndex = ref<number | null>(null)
const paymentActiveIndex = ref<number | null>(null)

const setActive = (index: number) => {
  activeIndex.value = index
}

const setPaymentActive = (index: number) => {
  paymentActiveIndex.value = index
}
</script>

<template>
  <div>
    <AtomsVText variant="H2B">결제금액</AtomsVText>
    <div class="price-card-container">
      <div
        class="price-card"
        v-for="(item, index) in priceItems"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      >
        <div class="icon-film-wrapper">
          <AtomsVIcon icon="film" class="w-20px" />
          <AtomsVText variant="Body3">{{ item.description }}</AtomsVText>
        </div>

        <AtomsVText variant="Body3B">{{ item.price }}</AtomsVText>
      </div>
    </div>

    <AtomsVText class="payment-method-title" variant="H2B">결제방식</AtomsVText>
    <div class="pay-btn">
      <div
        class="price-card pay-btn-item"
        v-for="(method, index) in paymentMethods"
        :key="index"
        :class="{ active: paymentActiveIndex === index }"
        @click="setPaymentActive(index)"
      >
        <AtomsVText variant="Body3">{{ method.description }}</AtomsVText>
      </div>
    </div>

    <div class="check-box-container">
      <div class="check-box-wrapper">
        <MoleculesLabelCheckBox shape="square" />
        <AtomsVText variant="Body4B" colorType="black"
          >상품,가격 및 유효기간을 확인하였으며, 계약 관련 고지 사항과 맽폴리오 가상 재화 정책 및
          결제 진행에 동의합니다.</AtomsVText
        >
      </div>

      <ul class="check-box-list">
        <li>
          <AtomsVText variant="Caption" color-type="gray">
            - 상품 유효 기간 : 구매일로 부터 5년
          </AtomsVText>
        </li>
        <li>
          <AtomsVText variant="Caption" color-type="gray"> - 계약 관련 고지 사항 확인 </AtomsVText>
        </li>
        <li>
          <AtomsVText variant="Caption" color-type="gray"> - 맽폴리오 가상재화 정책 </AtomsVText>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.price-card-container {
  @apply grid grid-cols-1 gap-2 mt-2 md:(grid-cols-2);
}

.price-card {
  @apply flex items-center justify-between flex-wrap p-4 rounded-lg border-solid border-1 border-gray-300 bg-white cursor-pointer transition-all;
}

.price-card.active {
  @apply bg-blue-600 border-blue-600 text-white;
}

.icon-film-wrapper {
  @apply flex items-center flex-wrap gap-1 md:(gap-3);
}

.payment-method-title {
  @apply mt-5;
}

.pay-btn {
  @apply flex items-center gap-2 mt-3;
}

.pay-btn-item {
  @apply flex w-full p-2 justify-center md:(w-190px p-4);
}

.pay-btn-item.active {
  @apply bg-black bg-opacity-80 text-white;
}

.check-box-container {
  @apply mt-5;
}

.check-box-wrapper {
  @apply flex items-center gap-2;
}

.check-box-list {
  @apply mt-2 pl-7.5 text-xs;
}
</style>
